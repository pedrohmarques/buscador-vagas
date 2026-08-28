"use client"

import { LogOut } from "lucide-react";
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
        <div className="border-b border-border bg-card/70 backdrop-blur">
            <main className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <div className="flex gap-2 items-center justify-center">
                    <div className="border-2 border-primary rounded-[50%] w-10 h-10 flex items-center justify-center">
                        <Image src={user.img} alt="User Image" width={100} height={100} className="rounded-[50%]"/>
                    </div>
                    <p className="font-sans text-sm hidden sm:block">{ user?.name }</p>
                </div>
                <MyButton theme="secondary" onClick={logout}>
                    <LogOut size={16}/> Sair
                </MyButton>
            </main>
        </div>
    );
}