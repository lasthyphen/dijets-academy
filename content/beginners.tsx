
import { ArrowLeftRight, Coins, MailIcon, SquareCode, SquareIcon, SquareStackIcon, TerminalIcon, Triangle } from 'lucide-react';
import {CubeIcon, CommandLineIcon } from '@heroicons/react/24/outline'

export type Course = {
    name: string;
    description: string;
    slug: string;
    icon: any;
    status: "featured" | "normal" | "hidden";
    duration?: string;
    languages: string[];
    tools: string[];
    instructors: string[];
};

const basicsCourses: Course[] = [
   {
        name:"Game Theory",
        description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
        slug:"game-theory",
        icon: <CommandLineIcon />,
        duration: "4 hours",
        status: "featured",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
   },
   {
    name:"Byzantine Generals’ Problem",
    description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
    slug:"byzantine",
    icon: <CommandLineIcon />,
    duration: "4 hours",
    status: "featured",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
{
    name:"Crypto Mining",
    description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
    slug:"mining",
    icon: <CommandLineIcon />,
    duration: "4 hours",
    status: "featured",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
{
    name:"Block & Block Time",
    description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
    slug:"block-time",
    icon: <CommandLineIcon />,
    duration: "4 hours",
    status: "featured",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
];

const officialCourses: Course[] = [
    {
        name:"What is Cryptocurrency",
        description:"Digital asset secured by cryptographic technology.",
        slug:"crypto",
        icon: <CommandLineIcon />,
        duration: "Dijets: Cyrpto101",
        status: "featured",
        tools: ["info-module"],
        languages: ["Typescript"],
        instructors: ["Owen Wahlgren"]
    },
   {
        name:"Crypto Myths",
        description:"Debunking 10 of the most common Cryptocurrency Myths",
        slug:"crypto-myths",
        icon: <CommandLineIcon />,
        duration: "Dijets: Cyrpto101",
        status: "featured",
        tools: ["info-module"],
        languages: ["Typescript"],
        instructors: ["Owen Wahlgren"]
    },
    {
        name:"Crypto vs. Traditional Money",
        description:"Key differences between Cryptocurreny and Traditional money.",
        slug:"crypto-vs-fiat",
        icon: <CommandLineIcon />,
        duration: "1 hour",
        status: "featured",
        tools: ["info-module"],
        languages: ["Go", "Typescript"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
    },
    {
        name:"Coins vs Tokens",
        description:"Key Differences between Cryptocurrency Coins and Tokens",
        slug:"coins-vs-tokens",
        icon: <CommandLineIcon />,
        duration: "1 hour",
        tools: ["info-module"],
        status: "featured",
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Crypto Transactions",
        description:"Uses ifferent infrastructure from traditional payment systems.",
        slug:"crypto-txs",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Crypto Portfolio",
        description:"Managing digital asset investments and portfolio",
        slug:"crypto-portfolio",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Privacy & Anonymity",
        description:"Privacy coins made with transaction anonymity",
        slug:"privacy",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Blockchain Usecases",
        description:"Real-world applications of blockchain in many sectors",
        slug:"usecases",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Impact on Payment Systems",
        description:"Legal Framework of Cryptocurrencies & Regulations",
        slug:"impact-payment-systems",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Cryptocurrency Regulations",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"regulations",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Central Bank Digital Currencies",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"cbdcs",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Crypto-Backed Mortgage Loans",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"cbml",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
     {
        name:"Real World Assets (RWAs)",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"rwas",
        icon: <CommandLineIcon />,
        status: "featured",
        duration: "4 hours",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
     },
];

const ecosystemCourses: Course[] = [
    {
        name:"Smart Contracts",
        description:"A Minipool represents a validator that is jointly funded equally by DJT borrowed from liquid stakers and DJT contribution from the minipool operator. Thanks to Minipool design architecture, users can become validators on the Dijets network with nearly half the usual DJT requirement.",
        slug:"smart-contracts",
        icon: <CommandLineIcon />,
        duration: "2 hours",
        status: "featured",
        tools: ["info-module"],
        languages: ["Go"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
   },
   {
    name:"Stablecoins",
    description:"Learn to build customized Virtual Machines using our SDK",
    slug:"stablecoins",
    icon: <CommandLineIcon />,
    status: "featured",
    duration: "4 hours",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
 },
 {
    name:"ERC-20",
    description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
    slug:"erc20",
    icon: <CommandLineIcon />,
    duration: "4 hours",
    status: "featured",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
{
    name:"Decentralised Applications",
    description:"Learn to build customized Virtual Machines using our SDK",
    slug:"decentralised-applications",
    icon: <CommandLineIcon />,
    status: "featured",
    duration: "4 hours",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
 },
 {
    name:"Initial Coin Offering",
    description:"A Minipool represents a validator that is jointly funded equally by DJT borrowed from liquid stakers and DJT contribution from the minipool operator. Thanks to Minipool design architecture, users can become validators on the Dijets network with nearly half the usual DJT requirement.",
    slug:"ico",
    icon: <CommandLineIcon />,
    duration: "2 hours",
    status: "featured",
    tools: ["info-module"],
    languages: ["Go"],
    instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
{
name:"Tokenomics",
description:"Learn to build customized Virtual Machines using our SDK",
slug:"tokenomics",
icon: <CommandLineIcon />,
status: "featured",
duration: "4 hours",
tools: ["info-module"],
languages: ["Go"],
instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
},
];

export default {
    official: officialCourses.filter((course) =>  ["normal", "featured"].includes(course.status)),
    official_featured: officialCourses.filter((course) => course.status === "featured"),
    ecosystem: ecosystemCourses,
    basics: basicsCourses,
};


