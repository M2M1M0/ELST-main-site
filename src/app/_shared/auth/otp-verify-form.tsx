"use client";

import { PinCode } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import { OtpCodeType, SignUpType, otpSchema } from "@/validation/auth.schema";
import { signIn } from "next-auth/react";
import { useGetHeaders } from "@/hooks/use-get-headers";
import useDynamicMutation from "@/hooks/usePostData";

interface Props {
  userData: SignUpType;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OtpVerifyForm({ userData, setIsLoading }: Props) {
  const postMutation = useDynamicMutation();
  const headers = useGetHeaders({ type: "Json" });
  const initialValues: OtpCodeType = {
    code: "",
  };

  const initialLoginMutationSubmitHandler = async (values: OtpCodeType) => {
    try {
      await postMutation.mutateAsync({
        url: `auth/memberregister`,
        method: "post",
        headers,
        body: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: "251".concat(userData.phone!),
          password: userData.password,
          gender: userData.gender.toLowerCase(),
          email: userData.email,
          verificationCode: values.code,
        },
        onSuccess: (responseData) => {
          console.log(responseData);
          setIsLoading(true);
          signIn("credentials", {
            data: JSON.stringify(responseData),
            redirect: true,
            callbackUrl: "/auth/signin",
          });
          toast.success("Login Successful, Redirecting...");
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={otpSchema}
          onSubmit={initialLoginMutationSubmitHandler}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-5 flex flex-col items-center justify-center">
              <div className="space-y-2">
                <PinCode
                  variant="outline"
                  setValue={(value) => setFieldValue("code", Number(value))}
                  size="lg"
                  name="code"
                  length={6}
                  type="number"
                  color="primary"
                  placeholder="-"
                />
                <ErrorMessage
                  name="code"
                  component={"div"}
                  className={"text-xs capitalize text-red-500 pt-1 font-medium"}
                />
              </div>
              <Button
                className="w-full text-base font-medium"
                type="submit"
                size="lg"
                color="primary"
                isLoading={postMutation.isPending}
              >
                Verify OTP
              </Button>
              <div className="">
                <Button
                  className=" w-full p-0 text-base font-medium text-black underline lg:inline-flex lg:w-auto"
                  type="submit"
                  variant="text"
                >
                  Resend OTP
                </Button>
              </div>
              {/* </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
