export default function Container({className = "", children}: { className?: string, children: React.ReactNode }) {
    return (
        <section className={`bg-white dark:bg-gray-900 ${className}`}>
            <div className={`py-8 px-4 mx-auto max-w-screen-lg ${className}`}>
                {children}
            </div>
        </section>
    )
}