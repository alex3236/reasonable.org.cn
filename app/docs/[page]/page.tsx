import dynamic from "next/dynamic";
import {promises as fs} from 'fs';
import {notFound} from "next/navigation";
import Section, {Container} from "@/app/ui/container";
import {ArrowLeftCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";


const Editor = dynamic(() => import("../../ui/blocknote/editor"), {ssr: false});

export async function generateStaticParams() {
    return [
        {
            page: 'privacy-policy'
        },
        {
            page: 'term-of-service'
        }
    ]
}

export default async function App({params}: { params: { page: string } }) {
    const file = await fs.readFile(process.cwd() + `/app/docs/${params.page}.json`, 'utf8').catch(err => {
        console.log(err);
        notFound();
    });
    return (
        <Section className="px-0">
            <Container>
                <div
                    className="rounded-lg w-fit p-2 ml-10 text-primary/70 dark:text-primary-dark/70 hover:bg-primary/5 dark:hover:bg-primary-dark/10">
                    <Link className="flex items-center" href="/">
                        <ArrowLeftCircleIcon className="w-5 h-5 mr-1"/>返回主页
                    </Link>
                </div>
                <Editor initialContent={JSON.parse(file)}/>
            </Container>
        </Section>
    )
}