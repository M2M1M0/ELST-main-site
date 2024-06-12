import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
        realm: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        userName: string;
        gender: string;
        idToken: string;
  
      token: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: {
      realm: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      userName: string;
      gender: string;
      idToken: string;
    } & DefaultSession["user"];
  }
}
