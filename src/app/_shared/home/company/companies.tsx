import Container from '@/components/container'
import React from 'react'
import { Title } from 'rizzui'
import CompanyLogo from './company-logo'

import boaColor from "@public/companies/boa-color.svg";
import boaBlack from "@public/companies/boa-black.svg";
import coopColor from "@public/companies/coop-color.svg";
import coopBlack from "@public/companies/coop-black.svg";
import hibretColor from "@public/companies/hibret-color.svg";
import hibretBlack from "@public/companies/hibret-black.svg";
import teleColor from "@public/companies/tele-color.svg";
import teleBlack from "@public/companies/tele-black.svg";
import telebirrColor from "@public/companies/telebirr-color.svg";
import telebirrBlack from "@public/companies/telebirr-black.svg";
import awashColor from "@public/companies/awash-color.svg";
import awashBlack from "@public/companies/awash-black.svg";
import zemenColor from "@public/companies/zemen-color.svg";
import zemenBlack from "@public/companies/zemen-black.svg";
import dashenColor from "@public/companies/dashen-color.svg";
import dashenBlack from "@public/companies/dashen-black.svg";
import transportColor from "@public/companies/transport-color.svg";
import transportBlack from "@public/companies/transport-black.svg";
import mastercardColor from "@public/companies/mastercard-color.svg";
import mastercardBlack from "@public/companies/mastercard-black.svg";
import cbeColor from "@public/companies/cbe-color.svg";
import cbeBlack from "@public/companies/cbe-black.svg";
import enatColor from "@public/companies/enat-color.svg";
import enatBlack from "@public/companies/enat-black.svg";

type Props = {}

const companiesLogo = [
    {
        name: "BOA",
        image1: boaBlack,
        image2: boaColor
    },
    {
        name: "COOP",
        image1: coopBlack,
        image2: coopColor
    },
    {
        name: "Hibret",
        image1: hibretBlack,
        image2: hibretColor
    },
    {
        name: "Telecome",
        image1: teleBlack,
        image2: teleColor
    },
    {
        name: "Telebirr",
        image1: telebirrBlack,
        image2: telebirrColor
    },
    {
        name: "Awash",
        image1: awashBlack,
        image2: awashColor
    },
    {
        name: "Zemen",
        image1: zemenBlack,
        image2: zemenColor
    },
    {
        name: "Dashen",
        image1: dashenBlack,
        image2: dashenColor
    },
    {
        name: "Transport",
        image1: transportBlack,
        image2: transportColor
    },
    {
        name: "Mastercard",
        image1: mastercardBlack,
        image2: mastercardColor
    },
    {
        name: "CBE",
        image1: cbeBlack,
        image2: cbeColor
    },
    {
        name: "Enat",
        image1: enatBlack,
        image2: enatColor
    },
]

const Companies = (props: Props) => {
    return (
        <Container className='mt-2 flex flex-col gap-8 mx-auto'>
            <div className='max-w-5xl xl:max-w-[66rem] 2xl:max-w-7xl 3xl:max-w-8xl w-full mx-auto'>
                <Title as='h4' className='font-light text-center w-full'>
                    We are trusted by&nbsp;
                    <span className='font-bold text-2xl leading-6 capitalize'>
                        big companies&nbsp;
                    </span>
                    and&nbsp;
                    <span className='font-bold text-xl leading-6 capitalize'>
                        multinational corporations
                    </span>
                </Title>

                {/* Company Logo */}
                <div className='grid grid-cols-3 md:grid-cols-6 gap-12 mt-12'>
                    {companiesLogo.map((logo) => (
                        <CompanyLogo key={logo.name} logo={logo} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Companies