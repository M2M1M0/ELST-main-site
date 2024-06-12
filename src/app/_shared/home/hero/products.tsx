import React from 'react'
import { motion } from "framer-motion"
import Product from './product';

import anyCard from "@public/products/anycard.svg"
import cashgo from "@public/products/cashgo.svg"
import cfs from "@public/products/cfs.svg"
import chatBirr from "@public/products/chatbirr.svg"
import chinet from "@public/products/chinet.svg"
import dam from "@public/products/dam.svg"
import dhs from "@public/products/dhs.svg"
import dubeAle from "@public/products/dube.svg"
import eagleView from "@public/products/eagleview.svg"
import ethiodirect from "@public/products/ethiodirect.svg"
import getcare from "@public/products/getcare.svg"
import getfee from "@public/products/getfee.svg"
import getrooms from "@public/products/getrooms.svg"
import minerals from "@public/products/minerals.svg"
import mms from "@public/products/mms.svg"
import nedaj from "@public/products/nedaj.svg"
import smartschool from "@public/products/smartschool.svg"
import teletv from "@public/products/teletv.svg"



const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const productLists1 = [
    {
        label: "AnyCard",
        icon: anyCard,
    },
    {
        label: "CashGO",
        icon: cashgo,
    },
    {
        label: "CFS",
        icon: cfs
    },
    {
        label: "ChatBirr",
        icon: chatBirr
    },
    {
        label: "Chinet",
        icon: chinet
    },
    {
        label: "itsmydam",
        icon: dam
    },
    {
        label: "dhs",
        icon: dhs
    },
    {
        label: "dubeAle",
        icon: dubeAle
    },
    {
        label: "EagleView",
        icon: eagleView
    },
]
const productLists2 = [
    {
        label: "Ethidirect",
        icon: ethiodirect,
    },
    {
        label: "GetCare",
        icon: getcare,
    },
    {
        label: "GetFee",
        icon: getfee
    },
    {
        label: "GetRooms",
        icon: getrooms
    },
    {
        label: "Minerals",
        icon: minerals
    },
    {
        label: "MMS",
        icon: mms
    },
    {
        label: "Nedaj",
        icon: nedaj
    },
    {
        label: "SmartSchool",
        icon: smartschool
    },
    {
        label: "Teletv",
        icon: teletv
    },
]

type Props = {}

function Products({ }: Props) {

    const angleIncrement = 360 / productLists1.length;

    return (
        <div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full -z-20 flex items-end justify-center relative animate-spin-slow-reverse group"

            >
                {productLists1.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = 1024
                        ? "calc(42vw - 1rem)"
                        : 720
                            ? "calc(30vw - 1rem)"
                            : "calc(40vw - 1rem)";
                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    const y = `calc(${radius}*${Math.sin(angleRad)})`;

                    return (
                        <Product key={btn.label} x={x} y={y} {...btn} reverse={true} />
                    )
                })}
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full -z-20 flex items-start justify-center relative animate-spin-slow group"
            >
                {productLists2.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = 1024
                        ? "calc(33vw - 1rem)"
                        : 720
                            ? "calc(30vw - 1rem)"
                            : "calc(40vw - 1rem)";
                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    const y = `calc(${radius}*${Math.sin(angleRad)})`;

                    return <Product key={btn.label} x={x} y={y} {...btn} />
                })}
            </motion.div>
        </div>
    )
}

export default Products