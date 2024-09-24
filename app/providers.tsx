'use client'

import {ChakraProvider} from '@chakra-ui/react'
import React from "react";

export function Providers({children}: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}