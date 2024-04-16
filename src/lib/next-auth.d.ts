import NextAuth from "next-auth/next";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

type BackendTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

declare module "next-auth" {
  interface Session {
    user: User;
    backendTokens: BackendTokens;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    backendTokens: BackendTokens;
  }
}
