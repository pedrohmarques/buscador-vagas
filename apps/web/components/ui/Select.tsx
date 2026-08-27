"use client"
import {Select as RadixSelect } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    name: string;
    value: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    error?: string;
    options: Option[];
    placeholder?: string;
}

export default function Select({ label, name, value, onChange, onBlur, error, options, placeholder = "Selecione..."}: SelectProps) {
    return (
        <Flex direction="column" gap="2" flexGrow="1">
            <p className="font-sans text-md font-semibold flex gap-2 items-center">
                {label}
            </p>
            <RadixSelect.Root value={value} onValueChange={onChange} name={name}>
                <RadixSelect.Trigger placeholder={placeholder} />
                <RadixSelect.Content>
                    <RadixSelect.Group>
                        {options.map((opt) => (
                            <RadixSelect.Item key={opt.value} value={opt.value}>{opt.label}</RadixSelect.Item>
                        ))}
                    </RadixSelect.Group>
                </RadixSelect.Content>
            </RadixSelect.Root>
            {error && (
                <span className="font-mono font-bold text-destructive text-xs flex shrink self-end">{error}</span>
            )}
        </Flex>
    );
}