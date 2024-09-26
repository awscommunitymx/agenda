import React from 'react';
import {Box, Button, Flex} from '@chakra-ui/react';
import Image from 'next/image'
import logo from '@/app/img.png'
import {Icon} from "@chakra-ui/icons";
import Link from "next/link";
import {MdOutlineViewAgenda} from "react-icons/md";

const Navbar = () => {
    return (
        <Box>
            <Box bg="gray.700" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link href={'/'}>
                        <Image src={logo} alt={"logo"} width={200}/>
                    </Link>
                    <Link href={'/session/favorites'} scroll={false}>
                        <Button size={"sm"} colorScheme={'blackAlpha'} rightIcon={
                            <Icon as={MdOutlineViewAgenda} color={'white.500'}/>
                        }>
                            Mi agenda
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default Navbar;