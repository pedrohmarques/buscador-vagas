"use client"


import { HomeIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MyButton from "../ui/MyButton";

export default function Auth() {
    async function OAuthLinkedin() {  
        await signIn("linkedin", {redirectTo: "/dashboard"})
    }

    return (
        <div className="flex flex-col gap-2 items-center self-center">
          <h1 className="font-sans font-bold md:text-2xl">Buscador de Vagas</h1>
          <p className="font-sans text-sm hidden sm:block">Vagas do LinkedIn e da Gupy reunidas em uma única busca.</p>
          <MyButton theme="primary" className="mt-4 text-base font-semibold rounded-full" onClick={OAuthLinkedin}><HomeIcon size={16}/> Entrar com LinkedIn</MyButton>
        </div>
    );
}