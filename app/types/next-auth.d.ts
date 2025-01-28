
import NextAuth, { DefaultSession } from "next-auth";
import { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    number: string; // Add your custom field here
  }

  interface JWT {
    id: string;
    email: string;
    name: string;
    number: string; // Add your custom field here
  }

  interface Session  {
    user: {
      id: string;
      email: string;
      name: string;
      number: string; // Add your custom field here
    } 
  }
}
