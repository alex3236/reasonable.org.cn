import Disclosures from "@/app/ui/join/disclosure";
import Section from "@/app/ui/container";

export const metadata = {
    title: "加入我们"
}

export default function Join() {
    return (
        <Section>
            <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-12">
                <Disclosures/>
            </div>
        </Section>
    )
}