import ReasonableLogo from "@/app/ui/logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <div className="my-6 flex justify-center items-center">
                    <ReasonableLogo className="inline w-14 h-14 dark:fill-white"/>
                </div>
                <span
                    className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-{currentYear} Reasonable. 保留所有权利.</span>
            </div>
        </footer>
    )
}