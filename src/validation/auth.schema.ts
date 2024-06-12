import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  isPhoneLogin: Yup.boolean(),
  phone: Yup.string().when("isPhoneLogin", {
    is: true,
    then: (schema) =>
      schema
        .min(1)
        .required("Phone number is required")
        .matches(/^\d{9}$/, "Phone number must be 9 digits long"),
    otherwise: (schema) => schema.optional(),
  }),
  password: Yup.string().required("Password is required"),
  email: Yup.string().when("isPhoneLogin", {
    is: false,
    then: (schema) => schema.email().required("email is required"),
    otherwise: (schema) => schema.optional(),
  }),
});

export const signUpSchema = Yup.object().shape({
  isPhoneLogin: Yup.boolean(),
  phone: Yup.string().when("isPhoneLogin", {
    is: true,
    then: (schema) =>
      schema
        .min(1)
        .required("Phone number is required")
        .matches(/^\d{9}$/, "Phone number must be 9 digits long"),
    otherwise: (schema) => schema.optional(),
  }),
  email: Yup.string().when("isPhoneLogin", {
    is: false,
    then: (schema) => schema.email().required("email is required"),
    otherwise: (schema) => schema.optional(),
  }),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  gender: Yup.string().required("Gender is required"),
  isAgreed: Yup.boolean().oneOf(
    [true],
    "You must agree to terms and conditions"
  ),
});

export const otpSchema = Yup.object().shape({
  code: Yup.string()
    .min(6, "OTP must be 6 digits long")
    .required("Otp is required"),
});

type OtpCodeType = Yup.InferType<typeof otpSchema>;
type LoginType = Yup.InferType<typeof loginSchema>;
type SignUpType = Yup.InferType<typeof signUpSchema>;
export type { OtpCodeType, LoginType, SignUpType };
