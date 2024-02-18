import dynamic from "next/dynamic";
import Container from "@/app/ui/container";
import {promises as fs} from 'fs';


const Editor = dynamic(() => import("../ui/blocknote/editor"), {ssr: false});


export default async function App() {
    const file = await fs.readFile(process.cwd() + '/app/editor/privacy.json', 'utf8');
    // console.log(JSON.parse(file));
    return (
        <Container className="px-0">
            <Editor initialContent={JSON.parse(file)}/>
        </Container>
    );
}