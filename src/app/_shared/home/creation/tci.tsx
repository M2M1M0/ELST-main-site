import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from 'rizzui'
import React from 'react'
import cn from '@/utils/class-names'
import Creativity from './creativity'
import Teamwork from './teamwork'
import Impact from './impact'

type Props = {}

const tabs = [
    {
        title: "Teamwork",
        component: <Creativity />
    },
    {
        title: "Creativity",
        component: <Creativity />
    },
    {
        title: "Impact",
        component: <Creativity />
    },
]
function TCI({ }: Props) {

    return (
        <section className='bg-[#F2F2F2] rounded-lg w-full h-full pb-12 px-6'>
            <Tabs className={"mt-6"} defaultIndex={1}>
                <TabList className={"max-w-fit flex gap-3 justify-between md:px-6 mt-3 w-full"}>
                    {tabs.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }: { selected: boolean }) =>
                                cn(
                                    "text-black font-bold",
                                    selected ? "text-primary outline-none text-[27px]" : "text-[24px]"
                                )
                            }
                        >
                            <Text>{tab.title}</Text>

                        </Tab>
                    ))}
                </TabList>

                <Creativity />

                {/* <TabPanels>
                    {tabs.map(({ component }, index) => (
                        <TabPanel key={index} className={"min-h-64"}>
                            {component}
                        </TabPanel>
                    ))}
                </TabPanels> */}

            </Tabs>
        </section>
    )
}

export default TCI