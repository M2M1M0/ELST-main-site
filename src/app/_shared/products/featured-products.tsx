"use client"
import Container from '@/components/container'
import React from 'react'
import { Title, Text } from "@/components/ui/text"
import ProductListTabs from './product-tabs/productList-tabs'

type Props = {}

function FeaturedProducts({ }: Props) {
    return (
        <Container className='mt-24'>
            <Title className='font-bold text-2xl'>
                Our Featured Products
            </Title>
            <Text className='font-light'>
                Explore our curated selection of top-notch featured products.
            </Text>

            <ProductListTabs />
        </Container>
    )
}

export default FeaturedProducts