import {WrenchScrewdriverIcon} from "@heroicons/react/24/solid";
import Section from "@/app/ui/container";

export default function NotFound() {
    return (
        <Section>
            <div className="relative py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-12 content-center text-center">
                <WrenchScrewdriverIcon className="mx-auto mb-4 w-10 h-10 text-content dark:text-content-dark"/>
                <div className="font-light md:text-lg xl:text-xl text-content dark:text-content-dark">
                    <p>页面暂不可用，敬请期待</p>
                </div>

            </div>
        </Section>
    )
}