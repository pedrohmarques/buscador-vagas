"use client"

import { HomeIcon, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import MyButton from "../ui/MyButton";
import { redirect } from "next/navigation";

interface StoredUser {
    name: string;
    email: string;
}
export default function Header() {
    const [user, setUser] = useState<StoredUser | null>(null);

    useEffect(() => {
        const raw = sessionStorage.getItem("user");
        if (raw) {
            setUser(JSON.parse(raw));
        }
    }, []);

    function logout() {
        sessionStorage.clear()
        document.cookie = "token=; path=/; max-age=0";
        redirect("/")
    }

    return (
        <div className="border-b border-border bg-card/70 backdrop-blur">
            <main className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <div className="flex gap-2 items-center justify-center">
                    <div className="border-2 border-primary rounded-[50%] w-10 h-10 flex items-center justify-center">
                        <HomeIcon size={16} />
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