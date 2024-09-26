import React from 'react';
import {Box, useToken} from '@chakra-ui/react';

export type StatusType = 'none' | 'positive' | 'intermediary' | 'negative' | 'inactive';

interface StatusIndicatorProps {
    status: StatusType;
    pulse?: boolean;
}

const colorMap: Record<StatusType, string> = {
    none: 'blue.500',
    positive: 'green.500',
    intermediary: 'yellow.500',
    negative: 'red.500',
    inactive: 'gray.300',
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({status, pulse = false}) => {
    const color = colorMap[status];
    const [colorValue] = useToken('colors', [color]);

    return (
        <Box
            w="12px"
            h="12px"
            borderRadius="full"
            bg={color}
            position="relative"
            _before={pulse ? {
                content: '""',
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                borderRadius: 'full',
                bg: colorValue,
                opacity: 0.3,
                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            } : undefined}
            sx={pulse ? {
                '@keyframes pulse': {
                    '0%, 100%': {
                        opacity: 0.3,
                        transform: 'scale(1)',
                    },
                    '50%': {
                        opacity: 0.5,
                        transform: 'scale(1.1)',
                    },
                },
            } : undefined}
        />
    );
};

export default StatusIndicator;