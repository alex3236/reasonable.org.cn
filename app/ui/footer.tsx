import ReasonableLogo from "@/app/ui/logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 md:p-8 lg:p-10 bg-light dark:bg-dark">
            <div className="mx-auto max-w-screen-xl text-center">
                <div className="my-6 flex justify-center items-center">
                    <ReasonableLogo className="inline w-12 h-12 dark:fill-white"/>
                </div>
                <span
                    className="text-sm sm:text-center text-content dark:text-content-dark">© 2021-{currentYear} Reasonable. 保留所有权利.</span>
            </div>
        </footer>
    )
}