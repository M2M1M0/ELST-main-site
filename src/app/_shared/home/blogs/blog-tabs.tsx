import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from 'rizzui'
import React from 'react'
import cn from '@/utils/class-names'
import News from './news'
import Podcasts from './podcasts'
import Articles from './articles'
import Insights from './insights'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

type Props = {}

const tabs = [
    {
        title: "News",
        component: <News />
    },
    {
        title: "Podcasts",
        component: <Podcasts />
    },
    {
        title: "Articles and Blogs",
        component: <Articles />
    },
    {
        title: "Insights",
        component: <Insights />
    },
]

function BlogTabs({ }: Props) {

    return (
        <section className='w-full h-full'>
            <Tabs className={"mt-6 flex flex-col gap-8"} defaultIndex={0}>
                <SimpleBar>
                    <TabList className={"max-w-fit flex gap-8 justify-between md:px-6 mt-3 w-full"}>
                        {tabs.map((tab, index) => (
                            <Tab key={index}
                                className={({ selected }: { selected: boolean }) =>
                                    cn(
                                        "text-black pb-2 whitespace-nowrap font-light text-lg border-b-4",
                                        selected ? " border-primary outline-none font-bold text-primary" : "border-transparent"
                                    )
                                }
                            >
                                <Text>{tab.title}</Text>

                            </Tab>
                        ))}
                    </TabList>
                </SimpleBar>
                <TabPanels>
                    {tabs.map(({ component }, index) => (
                        <TabPanel key={index} className={"md:px-16"}>
                            {component}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default BlogTabs