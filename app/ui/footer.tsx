import ReasonableLogo from "@/app/ui/logo";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 md:p-8 lg:p-10 bg-light dark:bg-dark text-sm text-content dark:text-content-dark">
            <div className="mx-auto max-w-screen-xl text-center">
                <div className="mt-6 mb-3 flex justify-center items-center">
                    <ReasonableLogo className="inline w-12 h-12 dark:fill-title-dark"/>
                </div>
                <div className="my-2">
                    <Link href="/tos">服务协议</Link> · <Link href="/privacy">隐私政策</Link>
                </div>
                <span>© 2021-{currentYear} Reasonable. 保留所有权利.</span>
            </div>
        </footer>
    )
}