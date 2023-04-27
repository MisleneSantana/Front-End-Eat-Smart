import { FieldError } from "react-hook-form";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}
export const Input = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <div>
          <input ref={ref} id={id} {...rest} />
          {label ? <label htmlFor={id}>{label}</label> : null}
        </div>
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);