import { useState } from "react";

/**
 * Controlled form values + per-field errors.
 * Editing a field clears that field's error.
 */
function useFormFields(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  return { values, errors, setErrors, handleChange };
}

export default useFormFields;
