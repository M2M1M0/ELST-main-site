"use client";
import { useMutation } from "@tanstack/react-query";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosProgressEvent,
} from "axios";
import { signOut } from "next-auth/react";

type MutationOptions = {
  url: string;
  method: AxiosRequestConfig["method"];
  body?: any;
  headers?: AxiosRequestConfig["headers"];
  onSuccess?: (data: AxiosResponse["data"]) => void;
  onError?: (error: any) => void;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 403) {
//       signOut();
//       // window.location.href = routes.signIn;
//     }

//     // reject with error if response status is not 403
//     return Promise.reject(error);
//   }
// );
const useDynamicMutation = () => {
  const dynamicMutation = useMutation({
    mutationFn: async (options: MutationOptions) => {
      const {
        url,
        method,
        body,
        headers,
        onUploadProgress,
        onDownloadProgress,
      } = options;
      try {
        const response = await axios.request({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,
          method,
          headers,
          data: body,
          onUploadProgress,
          onDownloadProgress,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data, variables) => {
      if (variables.onSuccess) {
        variables.onSuccess(data);
      }
    },
    onError: (error, variables) => {
      if (variables.onError) {
        variables.onError(error);
      }
    },
    retry: false,
  });

  return dynamicMutation;
};

export default useDynamicMutation;
