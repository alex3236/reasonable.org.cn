import Section, {Container} from "@/app/ui/container";
import Image from "next/image";

export const metadata = {
    title: "团队成员"
}

function Member({nick, qq}: { nick: string, qq: number }) {
    return (
        <div className="items-center space-x-1 text-left rounded-full bg-secondary dark:bg-secondary-dark">
            <div className="flex items-center">
                <Image
                    className="rounded-full dark:brightness-90"
                    src={`https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`}
                    width={50}
                    height={50}
                    alt=""
                />
                <div className="mx-auto">
                    <p className="text-lg text-title dark:text-content-dark font-bold">{nick}</p>
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    const members = [
        {nick: 'AlabTNT', qq: 1765035944},
        {nick: 'MoonCake__MC', qq: 3416099122},
        {nick: '红红冬冬', qq: 3467798349},
        {nick: '知猫', qq: 1367808860},
        {nick: 'Essien', qq: 541721498},
        {nick: 'Alex3236', qq: 2706992599},
        {nick: 'CuH棕土', qq: 1543169063},
        {nick: '熊鲜森', qq: 1539788060},
        {nick: '弄臣', qq: 33161276},
        {nick: 'Royal 坂', qq: 3382086138},
        {nick: 'Phska', qq: 3242148095},
        {nick: '雨落无痕', qq: 1295561029},
        {nick: '1270', qq: 3552698466},
        {nick: 'AftRaining', qq: 3450274815},
        {nick: 'Maker', qq: 3568584766},
        {nick: 'Nirotire', qq: 2870471753},
        {nick: '沙雕于小黑', qq: 3460332146},
        {nick: '鸭鸭生的小澄', qq: 443401353},
        {nick: '松易涅', qq: 2564241732},
        {nick: 'DustyCanyon', qq: 1226134493},
    ]
    return (
        <Section className="text-center">
            <Container>
                <p>按加入时间排序。</p>
                <div className="mt-4 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {members.map((member, index) => <Member key={index} nick={member.nick} qq={member.qq}/>)}
                </div>
            </Container>
        </Section>
    )
}