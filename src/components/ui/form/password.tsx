"use client";
import { Password } from "@/components/ui/input";
import cn from "@/utils/class-names";
import { useField, ErrorMessage } from "formik";
interface FormikPasswordInputProps {
  label: string;
  name: string;
  disabled?: boolean;
  type?:
    | "number"
    | "text"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "search"
    | "tel"
    | "time"
    | "url"
    | "week"
    | undefined;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  color?:
    | "DEFAULT"
    | "primary"
    | "secondary"
    | "danger"
    | "info"
    | "success"
    | "warning"
    | undefined;
  size: "DEFAULT" | "sm" | "lg" | "xl" | undefined
}

const FormikPasswordInput: React.FC<FormikPasswordInputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  prefix,
  suffix,
  className,
  inputClassName,
  color,
  disabled = false,
  size,
}) => {
  const [field] = useField(name);
  return (
    <div className={cn("w-full", className)}>
      <div className="mt-1">
        <Password
          autoFocus={false}
          autoComplete="off"
          {...field}
          label={label}
          name={name}
          prefix={prefix}
          placeholder={placeholder}
          className={cn("[&>label>span]:font-medium ", className)}
          inputClassName={cn(
            "text-sm     [&>label>span]:font-medium ",
            inputClassName
          )}
          color={color}
          disabled={disabled}
          size={size}
        />
        <ErrorMessage
          name={name}
          component="div"
          className={"text-xs capitalize text-red-500 pt-1 font-medium"}
        />
      </div>
    </div>
  );
};

export default FormikPasswordInput;
