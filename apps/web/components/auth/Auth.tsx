"use client"

import MyButton from "@/components/ui/MyButton";
import { HomeIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default function Auth() {

    async function OAuthLinkedin() {
        sessionStorage.setItem('user', JSON.stringify({ name: 'Pedro Almeida', email: 'pedroalmeida@gmail.com'}))
        redirect('/dashboard')
    }

    return (
        <div className="flex flex-col gap-4 items-center border rounded-2xl border-secondary self-center py-20 px-20 shadow-md">
          <h1 className="font-sans text-2xl">Entrar com Linkedin</h1>
          <p className="font-sans text-sm">Entre com sua conta do Linkedin para pode buscar por vagas.</p>
          <MyButton theme="primary" className="mt-6 font-mono tracking-widest text-xl" onClick={OAuthLinkedin}><HomeIcon size={16}/> LINKEDIN</MyButton>
        </div>
    );
}