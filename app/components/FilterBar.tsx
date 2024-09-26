import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Flex, FormControl, FormLabel, Icon, VStack} from '@chakra-ui/react';
import {Session} from "@/app/types/session";
import {IoFilter} from "react-icons/io5";
import {Select} from "chakra-react-select";
import {Collapse} from "@/app/components/Collapse"

interface FilterOption {
    key: string;
    label: string;
    plural: string;
    options: string[];
}

interface FilterBarProps {
    sessions: Session[];
    onFilterChange: (filters: Record<string, string[]>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({sessions, onFilterChange}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [filters, setFilters] = useState<Record<string, string[]>>({});

    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    const filterOptions: FilterOption[] = [
        {
            key: 'category',
            label: 'Categoría',
            plural: "Todas las categorías",
            options: Array.from(new Set(sessions.map(session => session.category)))
        },
        {
            key: 'room',
            label: 'Sala',
            plural: "Todas las salas",
            options: Array.from(new Set(sessions.map(session => session.room)))
        },
        {
            key: 'level',
            label: 'Nivel',
            plural: "Todos los niveles",
            options: Array.from(new Set(sessions.map(session => session.level)))
        },
    ];

    return (
        <VStack mb={2}>
            <Flex justifyItems={"flex-end"}>

                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    variant="ghost"
                    px={0}
                    alignContent={"start"}
                    rightIcon={<Icon as={IoFilter}/>}
                >
                    Filtrar
                </Button>

            </Flex>
            <Container overflowY="visible">

                <Collapse in={isExpanded} animateOpacity>
                    <Box overflow={"visible"} py={4}>
                        <VStack align="stretch" spacing={4}>
                            {filterOptions.map(({key, label, plural, options}) => (
                                <FormControl key={key}>
                                    <FormLabel>{label}</FormLabel>
                                    <Select
                                        isMulti={true}
                                        placeholder={plural}
                                        closeMenuOnSelect={false}
                                        options={options.map(option => ({label: option, value: option}))}
                                        onChange={(selected) => {
                                            setFilters({
                                                ...filters,
                                                [key]: selected.map(({value}) => value)
                                            });
                                        }}
                                    />
                                </FormControl>
                            ))}
                        </VStack>
                    </Box>
                </Collapse>
            </Container>
        </VStack>
    );
};

export default FilterBar;