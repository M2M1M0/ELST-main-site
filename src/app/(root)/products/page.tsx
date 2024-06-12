import React from 'react'
import Container from '@/components/container'
import Hero from '@/app/_shared/products'
import ScrollToUp from '@/app/_shared/scroll-to-up'
import FeaturedProducts from '@/app/_shared/products/featured-products'

type Props = {}

const Products = (props: Props) => {
  return (
    <Container className='relative'>

      <Hero />

      <FeaturedProducts />

      <ScrollToUp className={"fixed h-screen z-20 bottom-4 right-4 "} />

    </Container>
  )
}

export default Products