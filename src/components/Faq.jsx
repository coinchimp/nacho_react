import React from 'react'
import FaqItem from './FaqItem'

const Faq = () => {
    const faqItems = [
        {
            question: 'What is KRC-20?',
            answer: 'KRC-20 is a token standard on the Kaspa network. It defines the rules and conventions for creating and managing fungible tokens, similar to the ERC-20 standard on Ethereum. This standard ensures that all tokens created on the Kaspa network are interoperable and can be used within the ecosystem seamlessly.',
        },
        {
            question: 'When and how can I buy Nacho?',
            answer: 'We are waiting for KRC-20 to be launched to provide a date. Nacho will be minted. You will need to mint your tokens.',
        },
        {
            question: 'What does mint mean?',
            answer: 'When a token is minted, it is generated and added to the total supply, making it available for use within the Kaspa ecosystem. The token will be available to mint from any KRC20 compatible wallet like Kasware. Official ticker for Nacho is NACHO, confirmed by Kasplex on June 20.',
        },
        {
            question: 'Does Nacho have an official ticker?',
            answer: `Yes, it does. Official ticker for Nacho is NACHO, confirmed by Kasplex on June 20.`,
        },        
        {
            question: 'Will Nacho offer airdrops?',
            answer: `No. Fair launch won't make it possible.`,
        },
        {
            question: 'What is Kasplex?',
            answer: (
                <>
                    Kasplex is designed as a versatile solution, incorporating
                    the data insertion protocol, an open-source indexer, data
                    availability, and comprehensive APIs. It leverages Kaspa's
                    high block rate, scalability, and decentralized POW Layer-1
                    to facilitate efficient data insertion, address the UTXO
                    bloat issue, and support a sustainable ecosystem. Kasplex
                    provides an open-source indexer that enables developers and
                    users to effectively retrieve and check data associated with
                    KRC-20 tokens, NFTs, and other digital assets on Kaspa.
                    Kasplex introduces the KRC-20 token standard, which defines
                    a set of rules and conventions for creating and managing
                    fungible tokens on Kaspa.{' '}
                    <a
                        href="https://www.kasplex.org/home"
                        className="text-[#65c0b1]"
                    >
                        (https://www.kasplex.org/home)
                    </a>
                </>
            ),
        },
        {
            question: 'Will Nacho have a presale?',
            answer: `Nacho will be fair launch. A fair launch ensures equal opportunity for all to acquire tokens without pre-sales or preferential treatment, fostering trust and transparency in the community.`,
        },
        {
            question: 'Where can I store Nacho?',
            answer: (
                <>
                    Once the KRC20 standard is live on the Kaspa Mainnet, wallet
                    providers are highly likely to update their wallets to
                    support KRC20. The only wallet known to be working on
                    supporting KRC20 at the time of launch is Kasware -{' '}
                    <a
                        href="https://www.kasware.xyz/"
                        className="text-[#65c0b1]"
                    >
                        https://www.kasware.xyz/
                    </a>
                </>
            ),
        },
        {
            question: 'Can I mine Nacho?',
            answer: `Based on our understanding, KRC20 tokens are not mineable, including Nacho.`,
        },
        {
            question: 'How much will Nacho cost?',
            answer: `To be determined. Based on the Kasplex whitepaper, each mint of new KRC20 Tokens will require a gas fee of 1 KAS that will be paid to miners. Nacho will allow for batch mints of 28,700 Nacho tokens per mint. This is subject to change prior to finalization of the whitepaper..`,
        },
        {
            question: 'What will be the DEX for Nacho?',
            answer: `To be determined. Once the KRC20 standard is live on the Kaspa Mainnet, it is highly likely we will see a DEX built and deployed. We will need to wait and see.`,
        },
        {
            question: 'Does Nacho receive donations?',
            answer: (
                <div className="flex justify-center">
                    <img src="donation_wallet.png" alt="donation wallet" />
                </div>
            ),
        },
    ]

    return (
        <div className="py-12 px-12 md:px-28" id="about" data-aos="fade-up">
            <div>
                {faqItems.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default Faq
