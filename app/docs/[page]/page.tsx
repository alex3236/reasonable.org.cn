import dynamic from "next/dynamic";
import {promises as fs} from 'fs';
import {notFound} from "next/navigation";
import Section, {Container} from "@/app/ui/container";


const Editor = dynamic(() => import("../../ui/blocknote/editor"), {ssr: false});


export default async function App({params}: { params: { page: string } }) {
    const file = await fs.readFile(process.cwd() + `/app/docs/${params.page}.json`, 'utf8').catch(err => {
        console.log(err);
        notFound();
    });
    return (
        <Section className="px-0">
            <Container>
                <Editor initialContent={JSON.parse(file)}/>
            </Container>
        </Section>
    )
}