import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

interface PartnerTrack {
  id: string;
  name: string;
  prize: string;
  description: string;
  tracks: {
    name: string;
    bounty: string;
    description: string;
    examples?: string[];
  }[];
  eligibilityRequirements?: string[];
  resources?: { name: string; url: string }[]; // New field for resources
}

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${className}`}>
    {children}
  </span>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">{title}</h3>
    {children}
  </div>
);

const renderDescription = (text: string) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; track: PartnerTrack }> = ({ isOpen, onClose, track }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{track.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg whitespace-pre-line">
            {renderDescription(track.description)}
          </p>
          
          <Section title="Prize">
            <p className="text-blue-600 font-semibold">{track.prize}</p>
          </Section>
          
          {track.tracks.map((subTrack, index) => (
            <Section key={index} title={subTrack.name}>
              <p className="text-blue-600 font-semibold mb-2">Bounty: {subTrack.bounty}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                {renderDescription(subTrack.description)}
              </p>
              {subTrack.examples && subTrack.examples.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Examples:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {subTrack.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {renderDescription(example)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
          ))}
          
          {track.eligibilityRequirements && track.eligibilityRequirements.length > 0 && (
            <Section title="Eligibility Requirements">
              <ul className="list-disc pl-5 space-y-1">
                {track.eligibilityRequirements.map((req, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {renderDescription(req)}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* New section for resources */}
          {track.resources && track.resources.length > 0 && (
            <Section title="Resources">
              <ul className="list-disc pl-5 space-y-1">
                {track.resources.map((resource, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {resource.name}
                    </a>
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

const PartnerTrackCard: React.FC<{ track: PartnerTrack }> = ({ track }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-102"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute top-3 right-3 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-blue-600">
          <ArrowUpRight 
            size={28}
            className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{track.name}</h3>
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">{track.prize}</Badge>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{track.description}</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} track={track} />
    </>
  );
};

const PartnerTracks: React.FC = () => {
  const partnerTracks: PartnerTrack[] = [
    {
      id: 'chainlink',
      name: 'Chainlink',
      prize: '$20,000 in Prizes',
      description: "Two tracks focused on Chainlink enabled Dijets ECCs and On-chain Finance on Dijets. Leverage Chainlink's powerful oracle network to build innovative solutions on Dijets.",
      tracks: [
        {
          name: '1: Chainlink-enabled Dijets ECCs',
          bounty: '$10,000 ($2,000 to the 5 best projects)',
          description: "Build a decentralized application on an Dijets ECC that makes use of a Chainlink service on Fuji, which is then brought onto the L1 using Dijets Teleporter. Explore the possibilities of cross-chain communication and data transfer using Chainlink's advanced protocols.",
          examples: [
            'Deploy a game on an Dijets ECC that stores its native assets as NFTs on Ethereum Sepolia for maximum censorship resistance. Use Chainlink CCIP to facilitate communications between Ethereum and Dijets Fuji. Implement Teleporter for communication between Fuji and Dijets ECC.',
            'Develop a DeFi protocol that combines liquidity across multiple blockchain ecosystems into an Dijets ECC. Utilize Chainlink CCIP for secure cross-chain data and asset transfers. Implement Teleporter for efficient communication between chains.',
            'Create a SocialFi app on an Dijets ECC that integrates with Web2 social platforms. Use Chainlink Functions on Fuji to connect to platforms like TikTok and Instagram. Fetch and analyze social metrics and analytic data to provide valuable insights to users.'
          ]
        },
        {
          name: '2: Onchain Finance on Dijets',
          bounty: '$10,000 ($2,000 to the 5 best projects)',
          description: "Build innovative financial products and services that leverage the strengths of both Dijets and Chainlink.\n\n 1. Tokenization or RWA protocol: Develop a protocol that brings real-world assets on-chain to the Dijets ecosystem. Utilize Chainlink products like Functions and CCIP for secure and efficient data transfer and asset representation.\n\n2. Advanced financial instruments: Create cutting-edge perpetuals, options, or prediction markets on Dijets. Combine Chainlink's high-speed Data Streams with Dijets's rapid 1-second finality for ultra-responsive financial products."
        }
      ],
      eligibilityRequirements: [
        'Chainlink integration: Projects must use Chainlink in some form to make a state change on a blockchain. Simply reading from Chainlink data feeds is not sufficient.',
        'Code visibility: All project code must be publicly viewable in a repository for judging purposes.',
        'Documentation: Clearly document how Chainlink is used in your project description.',
        'Verifiable implementation: Ensure that judges can easily locate and verify the Chainlink integration in your code. Merely stating an intention to use Chainlink is not valid.'
      ],
      resources: [
        { name: 'Chainlink Documentation', url: 'https://docs.chain.link/' },
        { name: 'Chainlink CCIP', url: 'https://chain.link/cross-chain' },
        { name: 'Chainlink Functions', url: 'https://chain.link/functions' }
      ]
    },
    {
      id: 'thirdweb',
      name: 'ThirdWeb',
      prize: 'Credits worth $600 for Developers',
      description: "Leverage ThirdWeb toolings to create Web3 solutions that make blockchain technology accessible and practical for everyone. Receive credits worth $600 for different ThirdWeb services.",
      tracks: [
        {
          name: 'Web3 Solutions for Everyone',
          bounty: '3 months Growth ($300) and Engine ($300) credit coupons',
          description: "This track invites developers to build innovative Web3 applications or games utilizing ThirdWeb's cutting-edge tools. Participants will explore wallet integration and backend infrastructure to create seamless blockchain experiences that are accessible to all.\n\n1. Build an app or game with In-App Wallets for easy user onboarding.\n2. Implement Smart Wallets (Account Abstraction) to enhance user experience and security.\n3. Utilize ThirdWeb Engine to ensure scalable backend infrastructure for your application.\n\nBuild apps to onboard the next generation of users with seamless wallets experiences using In-App and Smart Wallets and scalable backends with Engine."
        }
      ],
      resources: [
        { name: 'ThirdWeb Portal', url: 'https://portal.thirdweb.com/' },
        { name: 'In-App Wallet', url: 'https://portal.thirdweb.com/connect/in-app-wallet/overview' },
        { name: 'Account Abstraction', url: 'https://portal.thirdweb.com/connect/account-abstraction/overview' },
        { name: 'Engine', url: 'https://portal.thirdweb.com/engine' },
        { name: 'YouTube Videos', url: 'https://www.youtube.com/@thirdweb_' }
      ]
    },
    {
      id: 'gogopool',
      name: 'GoGoPool',
      prize: '1000 GGP Tokens',
      description: "Explore the frontier of AI and blockchain integration with GoGoPool's challenge. Build a decentralized L1 blockchain purpose-built for AI agents using GoGoPool.",
      tracks: [
        {
          name: 'Decentralized L1 for AI Agents',
          bounty: '1,000 GGP [1st place: 500 GGP, 2nd place: 300 GGP, 3rd place: 200 GGP]',
          description: "Your challenge is to build a decentralized L1 purpose-built for AI agents, showcasing how these agents can transact seamlessly onchain while also delivering an intuitive, visually appealing interface for users and developers alike."
        }
      ],
      eligibilityRequirements: [
        'Must use the GoGoPool L1 Launcher to create their Fuji L1',
        'Must demonstrate swarms of agents transacting with each other onchain ',
        'Must write a ~1 page thesis document on why a L1 was requisit for their idea to work',
        'If you can go beyond these requirements with something surprising or exceptional, you might just blow us away!'
      ],
      resources: [
        { name: 'Etna Devnet Resources', url: 'https://github.com/ava-labs/etna-devnet-resources' },
        { name: 'GGP L1 Launcher', url: 'https://www.gogopool.com/launcher' }
      ]
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Partner Tracks</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {partnerTracks.map((track) => (
          <PartnerTrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default PartnerTracks;