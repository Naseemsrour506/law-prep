import "./Button.css";

/**
 * Shared button.
 * variant: "primary" | "secondary"
 */
function Button({
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
  className = "",
  ...rest
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
