import dynamic from "next/dynamic";
import Section, {Container} from "@/app/ui/container";
import {promises as fs} from 'fs';


const Editor = dynamic(() => import("../ui/blocknote/editor"), {ssr: false});


export default async function App() {
    const file = await fs.readFile(process.cwd() + '/app/editor/policy.json', 'utf8');
    // console.log(JSON.parse(file));
    return (
        <Section className="px-0">
            <Container>
                <Editor initialContent={JSON.parse(file)}/>
            </Container>
        </Section>
    );
}