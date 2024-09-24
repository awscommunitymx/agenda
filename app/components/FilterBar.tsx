import React, {useState} from 'react';
import {Box, Button, Collapse, Container, Flex, HStack, Icon, Select, Text, VStack} from '@chakra-ui/react';
import {Session} from "@/app/types/session";
import {IoFilter} from "react-icons/io5";

interface FilterOption {
    key: string;
    label: string;
    options: string[];
}

interface FilterBarProps {
    sessions: Session[];
    onFilterChange: (filters: Record<string, string>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({sessions, onFilterChange}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [filters, setFilters] = useState<Record<string, string>>({});

    const filterOptions: FilterOption[] = [
        {key: 'category', label: 'Category', options: Array.from(new Set(sessions.map(session => session.category)))},
        {key: 'room', label: 'Room', options: Array.from(new Set(sessions.map(session => session.room)))},
        {key: 'level', label: 'Level', options: Array.from(new Set(sessions.map(session => session.level)))},
    ];

    const handleFilterChange = (key: string, value: string) => {
        const newFilters = {...filters, [key]: value};
        if (value === '') {
            delete newFilters[key];
        }
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

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
            <Container>

                <Collapse in={isExpanded} animateOpacity>
                    <VStack align="stretch" spacing={4}>
                        {filterOptions.map(({key, label, options}) => (
                            <Box key={key}>
                                <Text fontSize="sm" fontWeight="medium" mb={1}>{label}</Text>
                                <Select
                                    placeholder={`All ${label}s`}
                                    value={filters[key] || ''}
                                    onChange={(e) => handleFilterChange(key, e.target.value)}
                                >
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </Select>
                            </Box>
                        ))}
                    </VStack>
                </Collapse>

                <Container my={2} px={0} alignContent={"start"}>
                    {Object.keys(filters).length > 0 && (
                        <HStack wrap="wrap" spacing={2}>
                            {Object.entries(filters).map(([key, value]) => (
                                <Button
                                    key={key}
                                    size="sm"
                                    variant="solid"
                                    colorScheme="blue"
                                    onClick={() => handleFilterChange(key, '')}
                                >
                                    {filterOptions.find(opt => opt.key === key)?.label}: {value} ×
                                </Button>
                            ))}
                        </HStack>
                    )}
                </Container>
            </Container>
        </VStack>
    );
};

export default FilterBar;