import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Link,
    Spacer,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box>
            <Box bg="gray.100" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box fontWeight="bold">Congress Agenda</Box>

                    <Flex alignItems={'center'} display={{base: 'none', md: 'flex'}}>
                        <Link mr={4} href="#">Schedule</Link>
                        <Link mr={4} href="#">Speakers</Link>
                        <Link mr={4} href="#">Venues</Link>

                        <Spacer/>

                        <Button colorScheme="teal" size="sm">
                            Register
                        </Button>
                    </Flex>

                    <IconButton
                        size={'md'}
                        icon={<HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={onOpen}
                    />
                </Flex>
            </Box>

            <Breadcrumb mt={4} ml={4}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Agenda</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch">
                            <Link href="#">Schedule</Link>
                            <Link href="#">Speakers</Link>
                            <Link href="#">Venues</Link>
                            <Button colorScheme="teal" size="sm">
                                Register
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;