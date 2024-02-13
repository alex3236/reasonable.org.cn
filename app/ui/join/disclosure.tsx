'use client';
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'
import {CheckCircleIcon, HomeIcon, MinusCircleIcon} from "@heroicons/react/24/solid";

function DisclosureItem({title, opened = false, children}: {
    title: string,
    opened?: boolean,
    children: React.ReactNode
}) {
    return (
        <Disclosure as="div" className="my-4" defaultOpen={opened}>
            {({open}) => (
                <>
                    <Disclosure.Button
                        className="flex w-full justify-between rounded-lg bg-blue-900/10 px-4 py-2 text-left font-medium text-gray-900 hover:bg-blue-900/20 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-gray-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-500">
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default function Disclosures() {
    return (
        <div className="w-full px-4 relative">
            <div className="mx-auto w-full max-w-xl rounded-2xl p-2">
                <DisclosureItem title="通过入组审核加入我们…" opened={true}>
                    <MinusCircleIcon className="mb-2 w-6 h-6 text-gray-400"/>
                    <p className="text-black font-bold pb-2">行不通…</p>
                    <p>很抱歉——因为各种原因，我们从 2023/07/21 起暂停申请通道</p>
                    <p>不出意外的话，将在 2024/06/10 恢复</p>
                    <p className="text-gray-900 pt-1">除此之外的加入流程仍然可用。</p>
                    <div
                        className="w-full space-x-1 text-left rounded-xl bg-blue-800/10 p-4 my-5">
                        <p className="text-black font-bold">也有例外：如果你满足如下条件之一，请联系我们。</p>
                        <ul className="list-disc list-inside">
                            <li>年赞助达 720 CNY 及以上</li>
                            <li>哔哩哔哩粉丝数量不小于 50,000</li>
                            <li>拥有丰富 Java 实战经验</li>
                        </ul>
                    </div>
                </DisclosureItem>
                <DisclosureItem title="若您曾是 Reasonable 成员…">
                    <HomeIcon className="mb-2 w-6 h-6 text-gray-400"/>
                    <p className="text-black font-bold pb-2">我们很想您！欢迎回家！</p>
                    <p>若您因为自身原因或不可抗力退出团队，通常不需要额外审核。</p>
                    <p>若您因其他原因退出，或被移出团队，请以新成员身份加入，您曾经在团队的行为将在审核时影响评分。</p>
                </DisclosureItem>
                <DisclosureItem title="若您受邀加入…">
                    <CheckCircleIcon className="mb-2 w-6 h-6 text-gray-400"/>
                    <p className="text-black font-bold pb-2">欢迎您加入 Reasonable.</p>
                    <p>团队人员会安排您入组，并通知您相关事宜。</p>
                </DisclosureItem>
            </div>
        </div>
    )
}
