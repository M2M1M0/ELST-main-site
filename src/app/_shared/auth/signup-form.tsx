"use client";

import Link from "next/link";
import { useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import FormikInput from "@/components/ui/form/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { toast } from "sonner";
import useDynamicMutation from "@/hooks/usePostData";
import { useGetHeaders } from "@/hooks/use-get-headers";
import { Formik, Form, ErrorMessage } from "formik";
import { SignUpType, signUpSchema } from "@/validation/auth.schema";
import OtpVerifyForm from "./otp-verify-form";
import FormikPasswordInput from "@/components/ui/form/password";
interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SignUpForm({ setIsLoading }: Props) {
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);

  const postMutation = useDynamicMutation();
  const headers = useGetHeaders({ type: "Json" });

  const initialValues: SignUpType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    isAgreed: false,
  };
  const [userData, setUserData] = useState<SignUpType>(initialValues);
  const signUpMutationHandler = async (values: SignUpType) => {
    try {
      await postMutation.mutateAsync({
        url: `auth/presignupmember`,
        method: "POST",
        headers,
        body: {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: "251".concat(values.phone!),
          password: values.password,
          gender: values.gender.toLowerCase(),
          email: values.email,
        },
        onSuccess: () => {
          setUserData(values);
          setIsOtpSent(true);
          toast.success("OTP Sent Successfully");
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const options = [
    { label: "Male ", value: "Male" },
    { label: "Female ", value: "Female" },
  ];
  return (
    <>
      {!isOtpSent ? (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={signUpMutationHandler}
          >
            {({ errors, setFieldValue, values }) => {
              //   console.log(errors);
              return (
                <Form className="flex flex-col items-start space-y-3 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                    <FormikInput
                      name="firstName"
                      size="lg"
                      label="First Name"
                      placeholder="Enter your FirstName"
                      color="primary"
                    />
                    <FormikInput
                      name="lastName"
                      size="lg"
                      label="Last Name"
                      placeholder="Enter your LastName"
                      color="primary"
                    />
                  </div>
                  <div className="w-full">
                    
                  </div>
                  <FormikInput
                    name="email"
                    label="Email"
                    size="lg"
                    placeholder="Enter Your Email"
                    color="primary"
                  />
                  <FormikInput
                    type="number"
                    name="phone"
                    label="Phone Number"
                    prefix={"+251"}
                    size="lg"
                    placeholder="9********"
                    color="primary"
                  />
                  <FormikPasswordInput
                    name="password"
                    label="Password"
                    size="lg"
                    placeholder="********"
                    color="primary"
                  />
                  <FormikPasswordInput
                    name="confirmPassword"
                    label="ConfirmPassword"
                    size="lg"
                    placeholder="********"
                    color="primary"
                  />
                  <p className={"text-xs capitalize text-red-500 font-medium"}>
                    {(errors as any)?.phoneOrEmail}
                  </p>
                  <div>
                    <Checkbox
                      name="isAgreed"
                      className="[&>label>span]:font-medium [&>label]:items-start pt-1"
                      label={
                        <>
                          By signing up you have agreed to our{" "}
                          <Link
                            href="/"
                            className="font-medium text-primary transition-colors hover:underline"
                          >
                            Terms
                          </Link>{" "}
                          &{" "}
                          <Link
                            href="/"
                            className="font-medium text-primary transition-colors hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </>
                      }
                      size="sm"
                      color="success"
                      onChange={(e) =>
                        setFieldValue("isAgreed", e.target.checked)
                      }
                    />
                    <ErrorMessage
                      name="isAgreed"
                      component={"div"}
                      className={
                        "text-xs capitalize text-red-500 pt-1 font-medium"
                      }
                    />
                  </div>

                  <Button
                    isLoading={postMutation.isPending}
                    size="lg"
                    type="submit"
                    color="primary"
                    className="w-full"
                  >
                    <span>Sign Up</span>{" "}
                  </Button>
                </Form>
                // </div>
              );
            }}
          </Formik>
        </>
      ) : (
        <OtpVerifyForm userData={userData} setIsLoading={setIsLoading} />
      )}
    </>
  );
}
