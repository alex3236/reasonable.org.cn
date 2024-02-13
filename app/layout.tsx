import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/ui/footer";
import Hero from "@/app/ui/home/hero";
import NavLink from "@/app/ui/navlink";
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s | Reasonable',
        default: 'Reasonable · 禾李团队',
    },
    description: "禾李，一群 Minecraft 玩家组成的团队",
    keywords: ["禾李", "Minecraft", "Reasonable"],
    authors: [{
        name: 'Alex3236',
        url: 'https://alex3236.top'
    }],
    generator: 'Next.js'
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
