"use client"
import MyButton from "@/components/ui/MyButton";
import Select from "@/components/ui/Select";
import { JOBTYPE, PERIOD } from "@/constants/filter";
import { parseJobs } from "@/src/lib/format";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, TextField, Tooltip } from "@radix-ui/themes";
import { Info, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

export default function SearchForm() {
    const jobSchema = z.object({
        jobs: z.string().nonempty("Campo obrigatório.").transform(parseJobs),
        periodPublication: z.string(),
        includeTypeJobs: z.string(),
        excludeTypeJobs: z.string()
    })
    
    type JobFormInput  = z.input<typeof jobSchema>;
    type JobFormOutput = z.output<typeof jobSchema>;

    const { register, control, handleSubmit, watch, formState: { errors } } = useForm<JobFormInput, unknown, JobFormOutput>({
        resolver: zodResolver(jobSchema),
        defaultValues: { periodPublication: "lastWeek", includeTypeJobs: "remote", excludeTypeJobs: "on-site" }
    })   
    const router = useRouter();
    const onSubmit = (data: JobFormOutput) => {
        const params = new URLSearchParams();
        data.jobs.forEach((j) => params.append("jobs", j));
        params.set("period", data.periodPublication);
        router.push(`/dashboard?${params}`);
    };

    return (
        <form className="px-6 py-6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <main className="flex flex-wrap items-center gap-3 w-full">
                <Flex direction="column" gap="2" flexGrow="1">
                    <p className="font-sans text-md font-semibold flex gap-2 items-center">
                        Vagas
                        <Tooltip content="Digite os valores separados por espaço.">
                            <Info size={16}></Info>
                        </Tooltip>
                    </p>
                    <TextField.Root color={errors.jobs ? 'red' : undefined} placeholder="Angular React Desenvolvedor-Senior" {...register("jobs", {required: true})}>
                        <TextField.Slot >
                            <Search size={16} />
                        </TextField.Slot>
                    </TextField.Root>
                    {errors.jobs && (
                        <span className="font-mono font-bold text-destructive text-xs flex shrink self-end">{errors.jobs.message}</span>
                    )}
                </Flex>

                <Controller 
                    name="periodPublication"
                    control={control}
                    render={({field, fieldState}) => (
                        <Select label="Período" name={field.name} onBlur={field.onBlur} value={field.value ?? ""} error={fieldState.error?.message} options={[...PERIOD]}></Select>
                    )}
                />

                <Controller 
                    name="includeTypeJobs"
                    control={control}
                    render={({field, fieldState}) => (
                        <Select label="Incluir tipos" name={field.name} onBlur={field.onBlur} value={field.value ?? ""} error={fieldState.error?.message} options={[...JOBTYPE]}></Select>
                    )}
                />

                <Controller 
                    name="excludeTypeJobs"
                    control={control}
                    render={({field, fieldState}) => (
                        <Select label="Excluir tipos" name={field.name} onBlur={field.onBlur} value={field.value ?? ""} error={fieldState.error?.message} options={[...JOBTYPE]}></Select>
                    )}
                />
            </main>
            
            <MyButton theme="primary" className="mt-6 self-end">Buscar vagas</MyButton>
        </form>
        
    );
}