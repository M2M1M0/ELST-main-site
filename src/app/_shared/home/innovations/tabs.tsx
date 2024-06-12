import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from 'rizzui'
import React from 'react'
import cn from '@/utils/class-names'
import WhatWeDo from './what-we-do'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

type Props = {}

const tabs = [
    {
        title: "WHAT WE DO",
        component: <WhatWeDo />
    },
    {
        title: "Our Purpose",
        component: <WhatWeDo />
    },
    {
        title: "OUR Vision",
        component: <WhatWeDo />
    },
    {
        title: "Values",
        component: <WhatWeDo />
    },

]

function InnovationTabs({ }: Props) {
    return (
        <section className='px-5 overflow-hidden'>
            <Tabs className={"mt-6 flex flex-col mx-auto"} defaultIndex={0}>
                <SimpleBar>
                    <TabList className={cn("flex gap-6 justify-between md:px-2 mt-3 w-full bg-primary-lighter/20 rounded-full",
                        "transition-all ease-in-out duration-600")
                    }>
                        {tabs.map((tab, index) => (
                            <Tab key={index}
                                className={({ selected }: { selected: boolean }) =>
                                    cn(
                                        "font-bold text-base p-3 px-8 whitespace-nowrap md:px-20 my-1 uppercase",
                                        selected ? "rounded-full bg-primary/70 outline-none text-white transition ease-in-out duration-300" : "text-primary"
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
                        <TabPanel key={index} className={"h-max"}>
                            {component}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default InnovationTabs