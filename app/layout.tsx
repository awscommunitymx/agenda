'use client'
import {Providers} from './providers'
import React from "react";
import Nav from "@/app/components/Nav";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode,
}) {
    return (
        <html lang='en'>
        <body>
        <Providers>
            <Nav/>
            {children}
        </Providers>
        </body>
        </html>
    )
}