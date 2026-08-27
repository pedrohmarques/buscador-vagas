import Auth from "@/components/auth/Auth";


export default function Home() {
  return (
    <div className="h-screen flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-background">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-background sm:items-start">
        <Auth />
      </main>
    </div>
  );
}
