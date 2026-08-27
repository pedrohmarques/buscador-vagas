import Header from "@/components/dashboard/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <Header />
            {children}
        </section>
    );
}