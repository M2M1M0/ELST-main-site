"use client";
import { Input } from "@/components/ui/input";
import cn from "@/utils/class-names";
import { useField, ErrorMessage } from "formik";
interface FormikInputProps {
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
  size?: "DEFAULT" | "lg" | "sm" | "xl" | undefined;
  required?: boolean;
  maxLength?: number;
}

const FormikInput: React.FC<FormikInputProps> = ({
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
  required = false,
  size,
  maxLength = 100,
}) => {
  const [field] = useField(name);
  return (
    <div className={cn("w-full", className)}>
      <div className="mt-1">
        <Input
          autoComplete="off"
          maxLength={maxLength}
          onInput={(e) => {
            if (e.currentTarget.value.length > e.currentTarget.maxLength) {
              e.currentTarget.value = e.currentTarget.value.slice(
                0,
                e.currentTarget.maxLength
              );
            }
          }}
          {...field}
          type={type}
          label={
            <label className="text-sm font-medium capitalize">
              {label}
              {required && <sup className="text-red-500">*</sup>}
            </label>
          }
          name={name}
          prefix={prefix}
          suffix={suffix}
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

export default FormikInput;
