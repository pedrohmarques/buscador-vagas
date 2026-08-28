import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import LinkedInProvider  from "next-auth/providers/linkedin";

const config = {
    providers: [LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        authorization: { params: {scope: "openid profile email"}}
    })]
} satisfies NextAuthConfig

export const {handlers, auth, signIn, signOut} = NextAuth(config)