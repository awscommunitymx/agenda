'use client'
import {Providers} from './providers'
import React from "react";
import Nav from "@/app/components/Nav";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode,
}) {
    return (
        <html lang='en'>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Agenda AWS Community Day México 2024</title>
            <meta name="description"
                  content="Agenda oficial del AWS Community Day México 2024. Descubre las charlas, talleres y networking opportunities del evento más importante de la comunidad AWS en México."/>
            <meta name="keywords"
                  content="AWS, Amazon Web Services, Community Day, México, 2024, Agenda, Cloud Computing"/>
        </head>
        <body>
        <Providers>
            <Nav/>
            {children}
            <GoogleAnalytics gaId="G-50PRCD1G61"/>
            <GoogleTagManager gtmId="G-50PRCD1G61"/>
        </Providers>
        </body>
        </html>
    )
}