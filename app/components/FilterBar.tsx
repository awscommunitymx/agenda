import React, {useEffect} from 'react';
import {Box, HStack, Select} from '@chakra-ui/react';
import {Session} from "@/app/types/session";


interface FilterBarProps {
    sessions: Session[];
    onFilterChange: (track: string, room: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({sessions, onFilterChange}) => {
    const tracks = Array.from(new Set(sessions.map(session => session.category)));
    const rooms = Array.from(new Set(sessions.map(session => session.room)));

    const [selectedTrack, setSelectedTrack] = React.useState('');
    const [selectedRoom, setSelectedRoom] = React.useState('');


    useEffect(() => {
            onFilterChange(selectedTrack, selectedRoom);
        }
        , [selectedTrack, selectedRoom, onFilterChange]);

    return (
        <Box mb={4}>
            <HStack spacing={4}>
                <Select placeholder="All Tracks" onChange={(e) => setSelectedTrack(e.target.value)}>
                    {tracks.map(track => (
                        <option key={track} value={track}>{track}</option>
                    ))}
                </Select>
                <Select placeholder="All Rooms" onChange={(e) => setSelectedRoom(e.target.value)}>
                    {rooms.map(room => (
                        <option key={room} value={room}>{room}</option>
                    ))}
                </Select>
            </HStack>
        </Box>
    );
};

export default FilterBar;