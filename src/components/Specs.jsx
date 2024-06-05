import React from 'react'

const Specs = () => {
    return (
        <div>
            <div className="md:flex justify-center space-x-8 py-8 px-12 hidden">
                <p className="text-xl">Fair Launch</p>
                <p>|</p>
                <p className="text-xl">No Pre-Allocation</p>
                <p>|</p>
                <p className="text-xl">No Presale</p>
                <p>|</p>
                <p className="text-xl">No Taxes</p>
                <p>|</p>
                <p className="text-xl">Community Funded</p>
            </div>
            <div className="md:hidden py-4">
                <p className="text-center text-xl">
                    Fair Launch | No Pre-Allocation | No Presale | No Taxes |
                    Community Funded
                </p>
            </div>
        </div>
    )
}

export default Specs
