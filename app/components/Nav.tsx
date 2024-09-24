import React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Image from 'next/image'
import logo from '@/app/img.png'

const Navbar = () => {
    return (
        <Box>
            <Box bg="gray.700" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'center'}>
                    <Image src={logo} alt={"logo"} width={200}/>
                </Flex>
            </Box>
        </Box>
    );
};

export default Navbar;