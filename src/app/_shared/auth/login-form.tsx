"use client";
import React from "react";
import { LoginType, loginSchema } from "@/validation/auth.schema";
import { useSession } from "next-auth/react";
import { useGetHeaders } from "@/hooks/use-get-headers";
import useDynamicMutation from "@/hooks/usePostData";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form, Formik } from "formik";
import FormikInput from "@/components/ui/form/input";
import { Text, Title } from "@/components/ui/text";
import Logo from "@/components/logo";
import SignUpForm from "./signup-form";
import { useModal } from "../modal-views/use-modal";
import { FaTimes } from "react-icons/fa";
import FormikPasswordInput from "@/components/ui/form/password";
const Login = ({ login = false }: { login?: boolean }) => {
  const { closeModal } = useModal();
  const [isLogin, setIsLogin] = React.useState<boolean>(login);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { status } = useSession();
  const postMutation = useDynamicMutation();
  const headers = useGetHeaders({ type: "Json" });
  const initialValues: LoginType = {
    isPhoneLogin: true,
    phone: "",
    email: "",
    password: "",
  };
  const loginMutationSubmitHandler = async (values: LoginType) => {
    try {
      await postMutation.mutateAsync({
        url: `auth/memberlogin`,
        method: "POST",
        headers,
        body: values.isPhoneLogin
          ? {
              username: values.phone!,
              password: values.password,
            }
          : {
              username: values.email,
              password: values.password,
            },
        onSuccess: (responseData) => {
          console.log(responseData);
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (status === "authenticated") closeModal();
  if (status === "unauthenticated")
    return (
      <div className="w-full flex flex-col items-start  p-3 md:p-5">
        <div className="w-full flex items-end justify-end">
          <button
            className="hover:bg-gray-100 p-1.5 rounded-md"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-start space-y-6 w-full">
          <div className="space-y-4">
            <Logo className="w-fit" />
            <Title as="h4">Welcome Back</Title>
          </div>
          {isLogin ? (
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={loginMutationSubmitHandler}
            >
              {({ values, setFieldValue }) => (
                <Form className="flex flex-col items-start space-y-5 w-full">
                  {values.isPhoneLogin ? (
                    <FormikInput
                      name="phone"
                      label="Phone Number"
                      prefix={"+251"}
                      size="lg"
                      placeholder="9********"
                      color="primary"
                    />
                  ) : (
                    <FormikInput
                      name="email"
                      label="Email"
                      size="lg"
                      placeholder="Enter Your Email"
                      color="primary"
                    />
                  )}
                  <FormikPasswordInput
                    name="password"
                    label="Password"
                    size="lg"
                    placeholder="********"
                    color="primary"
                  />
                  <Button
                    isLoading={postMutation.isPending}
                    type="submit"
                    size="lg"
                    color="primary"
                    className="w-full"
                  >
                    <span>Sign in</span>{" "}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="secondary"
                    className="w-full"
                    onClick={() =>
                      setFieldValue(
                        "isPhoneLogin",
                        values.isPhoneLogin ? false : true
                      )
                    }
                  >
                    {!values.isPhoneLogin
                      ? "Continue with Phone"
                      : "Continue with Email"}
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <SignUpForm setIsLoading={setIsLoading} />
          )}
        </div>
        <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start text-sm ">
          {"Don't"} have an account?{" "}
          <span
            onClick={() => setIsLogin((p) => !p)}
            className="font-semibold text-gray-700 transition-colors hover:text-primary-lighter text-sm cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </Text>
      </div>
    );
};

export default Login;
