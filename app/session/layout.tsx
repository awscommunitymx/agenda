'use client'
import {Button, Container, VStack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import React from "react";
import {useRouter} from "next/navigation";

export default function SessionLayout({
                                          children,
                                      }: {
    children: React.ReactNode,
}) {
    const router = useRouter();
    return (
        <Container maxW="container.md" py={8}>
            <VStack spacing={6} align="stretch">
                <Button leftIcon={<ArrowBackIcon/>} variant="ghost" onClick={() => router.back()}>
                    Regresar
                </Button>
                {children}
            </VStack>
        </Container>
    )
}