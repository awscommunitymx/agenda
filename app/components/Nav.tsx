import React from 'react';
import {Box, Button, Flex} from '@chakra-ui/react';
import Image from 'next/image'
import logo from '@/app/img.png'
import {Icon} from "@chakra-ui/icons";
import {FaHeart} from "react-icons/fa";
import Link from "next/link";

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
                            <Icon as={FaHeart} color={'white.500'}/>
                        }>
                            Favoritos
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default Navbar;