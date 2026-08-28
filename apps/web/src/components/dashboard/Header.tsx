"use client"

import { LogOut, Search } from "lucide-react";
import { useEffect } from "react";
import MyButton from "../ui/MyButton";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface StoredUser {
    name: string;
    email: string;
    img: string;
}
export default function Header({user}: {user: StoredUser}) {

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user));
    }, []);

    async function logout() {
        await signOut({redirectTo: "/"})
        sessionStorage.clear()
        document.cookie = "token=; path=/; max-age=0";
    }

    return (
        <div className="sticky top-0 z-20 border-b border-border bg-card">
            <main className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <span className="flex items-center gap-2 text-primary ">
                    <Search size={20}></Search> 
                    <p className="text-lg font-bold tracking-tight">Buscador de Vagas</p>
                </span>
                <div className="flex gap-2 items-center justify-center">
                    <div className="rounded-[50%] w-10 h-10 flex items-center justify-center">
                        <Image src={user.img} alt="User Image" width={50} height={50} className="rounded-[50%]"/>
                    </div>
                    <div className="flex flex-col hidden sm:block">
                        <p className="font-sans text-sm font-semibold">{ user?.name }</p>
                    </div>        

                    <MyButton theme="secondary" className="rounded-full" onClick={logout}>
                        <LogOut size={16}/> Sair
                    </MyButton>
                </div>                
            </main>
        </div>
    );
}