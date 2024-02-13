import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/ui/footer";
import Hero from "@/app/ui/home/hero";
import NavLink from "@/app/ui/navlink";
import React from "react";

export const metadata: Metadata = {
    title: { //! fixme: not a production title
        template: '%s | Rxxxxxxxxx',
        default: 'XXXX | Rxxxxxxxxx',
    },
    description: "A website.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
            <body>
                <Hero/>
                <NavLink/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
