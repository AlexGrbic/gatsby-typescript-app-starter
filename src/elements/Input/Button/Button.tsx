import React, { FunctionComponent } from "react"
export interface ButtonProps {
  /**
   * What kind of button is it
   */
  type?: "primary" | "secondary" | "cta"
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Optional click handler
   */
  onClick?: () => void
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({
  type = "primary",
  size = "medium",
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button--${size}`}
    >
      {children}
    </button>
  )
}
