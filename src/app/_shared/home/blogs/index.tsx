import React from 'react'
import Container from '@/components/container'
import { Title, Text } from "@/components/ui/text"
import BlogTabs from './blog-tabs'

type Props = {}

function Blogs({ }: Props) {
    return (
        <Container className='mt-24 flex flex-col gap-5 h-full'>
            <Title className="text-2xl font-bold">
                Browse our latest blog articles
            </Title>

            <BlogTabs />
        </Container>
    )
}

export default Blogs