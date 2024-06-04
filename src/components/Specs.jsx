import React from 'react'

const Specs = () => {
    return (
        <div>
            <div className="md:flex justify-between py-8 px-12 hidden">
                <code className="font-semibold">Fair Launch</code>
                <code className="font-semibold">No Pre-Allocation</code>
                <code className="font-semibold">No Presale</code>
                <code className="font-semibold">No Taxes</code>
                <code className="font-semibold">Community Funded</code>
            </div>
            <div className="md:hidden justify-between pt-8 pb-4 px-12 flex">
                <code className="font-semibold">Fair Launch</code>
                <code className="font-semibold">No Pre-Allocation</code>
                <code className="font-semibold">No Presale</code>
            </div>
            <div className="md:hidden justify-between pb-8 px-12 flex">
                <code className="font-semibold">No Taxes</code>
                <code className="font-semibold">Community Funded</code>
            </div>
        </div>
    )
}

export default Specs
