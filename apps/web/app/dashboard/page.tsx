import SearchForm from "@/components/dashboard/search/SearchForm";
import { Box, Tabs, Text } from "@radix-ui/themes";

export default function Dashboard() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-[15%_1fr] gap-2 md:flex-1">
            <div className="shadow-sm flex flex-col" >
                <h1 className="mt-6 font-mono font-semibold text-xl tracking-widest self-center hidden sm:block">BUSCAR VAGAS</h1>
                <SearchForm></SearchForm>
            </div>         
            <div className="">
            <Tabs.Root defaultValue="jobs">
                <Tabs.List>
                    <Tabs.Trigger value="jobs">Vagas</Tabs.Trigger>
                    <Tabs.Trigger value="appliedJobs">Aplicadas</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="jobs">
                        <Text size="2">Make changes to your account.</Text>
                    </Tabs.Content>

                    <Tabs.Content value="appliedJobs">
                        <Text size="2">Access and update your documents.</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
            </div> 
        </main>
    );
}