import * as React from "react";

export default function Section({className = "", children}: { className?: string, children: React.ReactNode }) {
    return (
        <section className={`bg-light dark:bg-dark ${className}`}>
            {children}
        </section>
    )
}

export function Container({className = "", children}: { className?: string, children: React.ReactNode }) {
    return (
        <div className={`relative py-8 px-4 mx-auto max-w-screen-lg ${className}`}>
            {children}
        </div>
    );
}