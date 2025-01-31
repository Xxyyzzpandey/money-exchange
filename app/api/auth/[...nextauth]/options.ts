import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { prisma } from "../../../database/db"; 
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"text",
                    placeholder:"email"
                },
                password:{label:"Password",type:"password",placeholder:"password"}
            },
            async authorize(credentials:any):Promise<any>{
              console.log(credentials)
                 if (!credentials.email || !credentials.password) {
                           throw new Error("Email/Phone number and password are required");
                         }
                 
                         try {
                           const user = await prisma.user.findFirst({
                             where: {
                               email: credentials.email 
                             },
                           });
                 
                           // If no user is found, throw an error
                           if (!user) {
                             throw new Error("No user found with the provided credentials");
                           }
                 
                           // Verify the password
                           const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                           if (!isPasswordValid) {
                             throw new Error("Invalid password");
                           }
                 
                           // Return the user object (for the session)
                           return {
                             id: user.id,
                             name: user.name,
                             email: user.email,
                             number: user.number,
                           };
                         } catch (error) {
                           console.error("Error during sign-in:", error);
                           throw new Error("Unable to sign in");
                         }
                       },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.email = user.email;
            token.name = user.name;
            token.number=user.number;
          }
          return token;
        },
        async session({ session, token }:any) {
          if (session.user) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.number=token.number;
          }
          return session;
        },
      },
      session:{
        strategy:"jwt"
      },
      adapter: PrismaAdapter(prisma),
      pages:{
        signIn:'/signinpage'
      },
      secret: process.env.NEXTAUTH_SECRET,
}