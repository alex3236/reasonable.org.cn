import {QuestionMarkCircleIcon} from "@heroicons/react/24/solid";
import Section from "@/app/ui/container";

function FAQItem({title, content}: { title: string, content: string }) {
    return (
        <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-title dark:text-title-dark">
                <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-6 h-6 text-content dark:text-content-dark/80">
                </QuestionMarkCircleIcon>
                {title}
            </h3>
            <p className="text-content dark:text-content-dark">{content}</p>
        </div>
    )
}

export default function FAQ() {
    const faqs = [
        {
            title: "啥玩意？",
            content: "Reasonable，中文名称禾李团队，日文名称葉李，成立于 2021 年 8 月 14 日，现以 Minecraft 编程与周边资源制作为核心工作，预备转型的综合性团队。致力于打造 Minecraft 优质资源，并努力建设成为一个绿色、开放、共享、平等的团队。"
        },
        {
            title: "为什么叫禾李？",
            content: "因为我们是 Reasonable。很合理吧？"
        },
        {
            title: "目前在做什么？",
            content: "目前在 Minecraft 和其他领域开发项目。"
        },
        {
            title: "什么叫预备转型？",
            content: "我们注定要走向更远的地方。Minecraft 领域很快不再适合团队发展。我们从 2024 年开始转型。"
        },
        {
            title: "如何盈利？",
            content: "我们希望通过自主创作与定制服务进行盈利。嗯...这很困难。"
        },
        {
            title: "团队氛围？",
            content: "所有成员都是禾李大家庭的一份子，你甚至可以在团队里认干侄子。当然，你还得接受我们的企业文化：摸鱼。"
        },
        {
            title: "可以加入吗？",
            content: "看到顶上十分晃眼的“加入我们”了吗？点一下试试。"
        },
    ]
    const middle = Math.floor(faqs.length / 2);
    const first = faqs.slice(0, middle);
    const second = faqs.slice(middle, faqs.length);
    return (
        <Section>
            <div className="relative py-8 mx-auto max-w-screen-xl sm:py-16 px-16">
                <div className="grid pt-8 text-left md:gap-16 md:grid-cols-2">
                    <div>
                        {first.map((faq) => <FAQItem key={faq.title} title={faq.title} content={faq.content}/>)}
                    </div>
                    <div>
                        {second.map((faq) => <FAQItem key={faq.title} title={faq.title} content={faq.content}/>)}
                    </div>
                </div>
            </div>
        </Section>
    )
}