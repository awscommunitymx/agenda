'use client'
import Link from "next/link";
import {Button, Container, VStack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import React from "react";

export default function SessionLayout({
                                          children,
                                      }: {
    children: React.ReactNode,
}) {
    return (

        <Container maxW="container.md" py={8}>
            <VStack spacing={6} align="stretch">
                <Link href="/" passHref>
                    <Button leftIcon={<ArrowBackIcon/>} variant="ghost">
                        Todas las sesiones
                    </Button>
                </Link>
                {children}
            </VStack>
        </Container>
    )
}