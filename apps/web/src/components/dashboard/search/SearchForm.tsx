"use client"

import { parseJobs } from "@/src/lib/format";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckboxGroup, Flex, TextField, Tooltip } from "@radix-ui/themes";
import { Info, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import Select from "../../ui/Select";
import MyButton from "../../ui/MyButton";
import { JOBTYPE, PERIOD } from "@/src/constants/filter";

export default function SearchForm() {
    const jobSchema = z.object({
        jobs: z.string().nonempty("Campo obrigatório.").transform(parseJobs),
        periodPublication: z.string(),
        jobType: z.string().array()
    })
    const router = useRouter();
    
    type JobFormInput  = z.input<typeof jobSchema>;
    type JobFormOutput = z.output<typeof jobSchema>;

    const { register, control, handleSubmit, watch, formState: { errors } } = useForm<JobFormInput, unknown, JobFormOutput>({
        resolver: zodResolver(jobSchema),
        defaultValues: { periodPublication: "lastWeek" }
    })     

    const onSubmit = (data: JobFormOutput) => {
        const params = new URLSearchParams();
        data.jobs.forEach((j) => params.append("jobs", j));
        params.set("period", data.periodPublication);
        data.jobType.forEach((type) => params.append("jobType", type))
        router.push(`/dashboard?${params}`);
    };

    return (
        <form className="mt-6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <main className="flex flex-wrap items-center gap-3 w-full">
                <Flex direction="column" gap="2" flexGrow="1">
                    <p className="font-sans text-sm font-semibold flex gap-2 items-center">
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

                <Flex direction="column" gap="2" width="100%">
                    <p className="font-sans text-sm font-semibold flex gap-2 items-center">
                        Modalidade
                    </p>
                    <Controller 
                        name="jobType"
                        control={control}
                        render={({field, fieldState}) => (
                            <CheckboxGroup.Root name={field.name} value={field.value} onValueChange={field.onChange}>
                                {JOBTYPE.map(({label, value}) => (
                                    <CheckboxGroup.Item key={value} value={value}>{label}</CheckboxGroup.Item>
                                ))}
                            </CheckboxGroup.Root>
                        )}
                    />
                    
                </Flex>
            </main>
            
            <MyButton theme="primary" className="mt-6 w-full">Buscar vagas</MyButton>
        </form>
        
    );
}