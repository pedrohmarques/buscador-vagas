import Header from "@/components/dashboard/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="flex flex-col h-screen">
            <Header />
            {children}
        </section>
    );
}