'use client'
import {Providers} from './providers'
import React from "react";
import Nav from "@/app/components/Nav";
import {AwsRum, AwsRumConfig} from 'aws-rum-web';


try {
    const config: AwsRumConfig = {
        sessionSampleRate: 1,
        identityPoolId: "us-east-1:5f6ec45b-7055-4a9e-a04d-b4a15577e551",
        endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
        telemetries: ["performance", "errors", "http"],
        allowCookies: true,
        enableXRay: true
    };

    const APPLICATION_ID: string = 'de222605-a510-4919-90af-e12a84f71a39';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'us-east-1';

    new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config
    );
} catch (e) {
    console.error(e);
}

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
        </Providers>
        </body>
        </html>
    )
}