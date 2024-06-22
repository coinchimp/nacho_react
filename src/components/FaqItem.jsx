import React, { useState } from 'react'

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={toggle}
                className="flex justify-between items-center w-full text-left"
            >
                <span className="text-lg font-medium dark:text-white text-gray-900">
                    {question}
                </span>
                <svg
                    className={`w-6 h-6 transition-transform ${
                        isOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <p className="mt-2 dark:text-gray-200 text-gray-700">
                    {answer}
                </p>
            )}
        </div>
    )
}

export default FaqItem
