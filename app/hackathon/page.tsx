"use client"
import React, { useState, ReactNode } from "react";
import Link from 'next/link';
import { ArrowUpRight, Code, Link as Zap, Link2, Lightbulb, X, Book, Users, SquareTerminal, Box } from 'lucide-react';
import PartnerTracks from './partners';
import { buttonVariants } from '@/components/ui/button';

const Card = ({ children, className = "", onClick = () => {} }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`} onClick={onClick}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${className}`}>
    {children}
  </span>
);

interface Resource {
  name: string;
  url: string;
}

interface Track {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Open';
  color: string;
  icon: React.ReactNode;
  challengeDetails?: string[];
  technologies?: { [key: string]: string | { description: string; skills?: string } };
  examples?: string[];
  resources?: Resource[];
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; track: Track }> = ({ isOpen, onClose, track }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center p-6 border-b dark:border-gray-700">
          <div className="flex items-center">
            {track.icon}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 ml-3">{track.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{track.description}</p>
          
          {track.challengeDetails && track.challengeDetails.length > 0 && (
            <Section title="Challenge Details">
              <ul className="list-disc pl-5 space-y-2">
                {track.challengeDetails.map((detail, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">{detail}</li>
                ))}
              </ul>
            </Section>
          )}
          
          {track.technologies && Object.keys(track.technologies).length > 0 && (
            <Section title="Technologies">
              {Object.entries(track.technologies).map(([name, details], index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {typeof details === 'string' ? details : details.description}
                  </p>
                  {typeof details !== 'string' && details.skills && (
                    <p className="text-sm text-gray-500 mt-1">Skills required: {details.skills}</p>
                  )}
                </div>
              ))}
            </Section>
          )}
          
          {track.examples && track.examples.length > 0 && (
            <Section title="Examples">
              <ul className="list-disc pl-5 space-y-2">
                {track.examples.map((example, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">{example}</li>
                ))}
              </ul>
            </Section>
          )}
          
          {track.resources && track.resources.length > 0 && (
            <Section title="Recommended Resources">
              <ul className="list-disc pl-5 space-y-2">
                {track.resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      href={resource.url} 
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">{title}</h3>
    {children}
  </div>
);

const TrackCard: React.FC<{ track: Track }> = ({ track }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const badgeColors = {
    'Beginner': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
    'Intermediate': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
    'Advanced': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100',
    'Open': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100'
  };

  return (
    <>
      <div 
        className={`group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-102 border-l-4 ${track.color}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute top-3 right-3 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-blue-600">
          <ArrowUpRight size={28} className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"/>
        </div>
        <div className="p-6 flex-grow">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full ${track.color} bg-opacity-20 mr-3`}>
              {track.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{track.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">{track.description}</p>
          <Badge className={`mb-2 ${badgeColors[track.difficulty]}`}>
            {track.difficulty}
          </Badge>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} track={track} />
    </>
  );
};

export default function HackathonPage() {
  const tracks: Track[] = [
    {
      id: 'build',
      title: 'Build a Product',
      description: "This track challenges builders to develop impactful use cases that leverage Dijets's full tech stack. Participants will create practical applications addressing real-world problems with Dijets technology.",
      difficulty: 'Intermediate',
      color: 'border-blue-500 text-blue-700',
      icon: <Zap size={24} className="text-blue-500" />,
      challengeDetails: [
        'Create practical applications that address real-world problems',
        'Demonstrate the versatility and power of Dijets',
        'Focus on real-world use cases with significant impact potential'
      ],
      technologies: {
        'Dijets ECCs': { description: 'Deploy your own Layer 1 blockchain to meet diverse technical requirements and reach scalability', skills: 'Interact with CLI' },
        'Custom VMs': { description: 'Innovate with custom virtual machines and EVM-precompiles to enable new types of computations and functionalities on the blockchain', skills: 'Golang, Solidity' },
      },
      examples: [
        'Real World Assets (RWA)',
        'SocialFi',
        'DeFi',
        'Institutional Use Cases',
        'Supply Chain Management',
        'Gaming'
      ],
      resources: [
        { name: 'Dijets Starter Kit', url: 'https://github.com/Dijets-Inc/dijets-starter-kit' },
        { name: 'BuilderKit', url: 'https://www.npmjs.com/package/@0xstt/builderkit' },
        { name: 'Faucet', url: 'https://faucet.dijets.io' }
      ]
    },
    {
      id: 'interop',
      title: 'Interoperability',
      description: "Developers will design seamless, scalable solutions for cross-chain interoperability. Using Dijets's InterECC Messaging Protocol (ICM) and tools, builders will enable efficient multi-chain data transfers.",
      difficulty: 'Advanced',
      color: 'border-green-500 text-green-700',
      icon: <Link2 size={24} className="text-green-500" />,
      examples: [
        'Enable Utility Chain deployed services in L1s with ICM',
        'Chain abstraction asset transfers, modify the EVM in a way to improve Multichain User Experience',
        'USDC to ECC via an On-Ramp on the Utility Chain and DITTO'
      ],
      resources: [
        { name: 'Dijets Relayer Repo', url: 'https://github.com/Dijets-Inc/dijets-relayer' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Technical Development',
      description: "This track invites participants to push Dijets's technical boundaries. Focusing on performance, cryptography, and scalability, developers will explore cutting-edge blockchain solutions without business constraints.",
      difficulty: 'Advanced',
      color: 'border-purple-500 text-purple-700',
      icon: <Code size={24} className="text-purple-500" />,
      challengeDetails: [
        'Performance Optimization: Improve the speed and efficiency of blockchain operations, focusing on reducing latency and increasing throughput',
        'Scalability Solutions: Create innovative solutions to scale the Dijets network, addressing challenges related to consensus, data storage, and node management',
        'Developer Tools: Build advanced tools and frameworks to support developers in building, testing, and deploying blockchain applications more efficiently'
      ],
      examples: [
        'Build a DA solution with ECC',
        'Gas Sponsorship',
        'Cryptographic enablements such as ZK proofs, etc.'
      ],
      resources: [
        { name: 'Faucet', url: 'https://faucet.dijets.io' }
      ]
    },
    {
      id: 'innovation',
      title: 'Open Innovation',
      description: "This track invites participants to push Dijets's technical boundaries. Focusing on performance, cryptography, and scalability, developers will explore cutting-edge blockchain solutions without business constraints.",
      difficulty: 'Open',
      color: 'border-yellow-500 text-yellow-700',
      icon: <Lightbulb size={24} className="text-yellow-500" />,
      technologies: {
        'Dijets Stack': { description: 'Free use of all Dijets technologies' }
      },
      challengeDetails: ["Any innovative solution using Dijets's capabilities to address problems in various industries."]
    },
  ];

  return (
    <main className="container relative py-6">
    </main>
  );
}