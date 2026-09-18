from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.db.database import get_db
from app.models import User
from app.schemas import UserCreate, UserResponse


router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)

EMAIL_TAKEN_DETAIL = "A user with this email already exists"


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.scalar(select(User).where(User.email == user_in.email))

    if existing_user is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=EMAIL_TAKEN_DETAIL,
        )

    user = User(
        name=user_in.name,
        email=user_in.email,
        password_hash=hash_password(user_in.password),
    )

    db.add(user)

    try:
        db.commit()
    except IntegrityError:
        # Another request registered the same email between the check and the commit.
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=EMAIL_TAKEN_DETAIL,
        )

    db.refresh(user)

    return user
