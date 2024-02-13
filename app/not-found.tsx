import {WrenchScrewdriverIcon} from "@heroicons/react/24/solid";

export default function NotFound() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-12 content-center text-center">
                <WrenchScrewdriverIcon className="mx-auto mb-4 w-10 h-10 text-gray-400"/>
                <div className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
                    <p>页面暂不可用，敬请期待</p>
                </div>

            </div>
        </section>
    )
}