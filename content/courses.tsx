
import { ArrowLeftRight, Coins, MailIcon, SquareCode, SquareIcon, SquareStackIcon, TerminalIcon, Triangle } from 'lucide-react';
import { CommandLineIcon, CubeIcon, CodeBracketSquareIcon, CubeTransparentIcon, RectangleStackIcon, ChatBubbleLeftEllipsisIcon, ArrowsRightLeftIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

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

const officialCourses: Course[] = [
    {
        name: "Blockchain Fundamentals",
        description: "Gain a comprehensive understanding of fundamental blockchain concepts, including how they work, and key components",
        slug: "blockchain-fundamentals",
        icon: <CubeIcon className="size-5" />,
        status: "featured",
        duration: "Course Duration: 30 mins",
        languages: [],
        tools: [],
        instructors: ["Andreea", "Mimi"]
    },
    {
        name: "Dijets Fundamentals",
        description: "Get a high level overview of Dijets Consensus, L1s and VMs",
        slug: "dijets-fundamentals",
        icon: <CodeBracketSquareIcon className="size-5" />,
        status: "featured",
        duration: "Course Duration: 1 hour",
        languages: [],
        tools: [],
        instructors: ["Andreea", "Mimi"]
    },
    {
        name: "Multi-Chain Architecture",
        description: "Dive deeper into the Multi-Chain Architecture and deploy your own Blockchain",
        slug: "multi-chain-architecture",
        icon: <RectangleStackIcon className="size-5" />,
        status: "featured",
        duration: "Course Duration: 1.5 hours",
        languages: [],
        tools: [],
        instructors: ["Andreea", "Mimi"] // + Usman
    },
    {
        name:"Interchain Token Transfer",
        description:"Deploy Dijets Interchain Token Transfer to transfer assets between Dijets blockchains",
        slug:"interchain-token-transfer",
        icon: <ArrowsRightLeftIcon className="size-5" />,
        status: "featured",
        duration: "Course Duration: 2.5 hours",
        tools: [],
        languages: ["Solidity"],
        instructors: ["Saleem Fareed", "Andreea"]
    },
   /*{
        name:"AvaCloud APIs",
        description:"Learn how to leverage AvaCloud APIs to build web apps on Dijets",
        slug:"avacloudapis",
        icon: <SquareCode />,
        duration: "1 hour",
        status: "featured",
        tools: ["AvaCloudSDK", "AvaCloud API"],
        languages: ["Typescript"],
        instructors: ["Owen Wahlgren"]
    },
    {
        name:"HyperSDK",
        description:"Learn how to build a high-performance blockchain using HyperSDK",
        slug:"hypersdk",
        icon: <TerminalIcon />,
        duration: "1 hour",
        status: "hidden",
        tools: ["HyperSDK"],
        languages: ["Go", "Typescript"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Saleem Fareed", "Owen Wahlgren"]
    }
    /*{
        name:"Chainlink VRF with InterECC Messaging ",
        description:"Utilize InterECC Messaging to make Chainlink VRF available on any blockchain in the Dijets Network",
        slug:"teleporter-chainlink-vrf",
        icon: Dice3Icon,
        status: "featured",
        duration: "2.5 hours",
        tools: ["Teleporter", "Chainlink VRF"],
        languages: ["Solidity"]
     },
     {
        name:"HyperSDK",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"hypersdk",
        icon: Blocks,
        duration: "4 hours",
        tools: ["Dijets-CLI"],
        languages: ["Go"]
     },*/
];

const ecosystemCourses: Course[] = [
    /*{
        name:"Run a Gogopool Minipool",
        description:"A Minipool represents a validator that is jointly funded equally by DJT borrowed from liquid stakers and DJT contribution from the minipool operator. Thanks to Minipool design architecture, users can become validators on the Dijets network with nearly half the usual DJT requirement.",
        slug:"gogopool-minipool",
        icon: Blocks,
        duration: "2 hours",
        tools: ["Dijets-CLI"],
        languages: ["Go"]
   },
   {
        name:"Use Safe on an Dijets Chain",
        description:"Secure your multi-sig wallet with Safe on a Dijets ECC.",
        slug:"safe-on-an-avalanche-chain",
        icon: Blocks,
        duration: "4 hours",
        tools: ["Dijets-CLI"],
        languages: ["Go"]
   }*/
];

export default {
    official: officialCourses.filter((course) =>  ["normal", "featured"].includes(course.status)),
    official_featured: officialCourses.filter((course) => course.status === "featured"),
    ecosystem: ecosystemCourses,
};


