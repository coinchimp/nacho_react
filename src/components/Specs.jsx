import React from 'react'

const Specs = () => {
    return (
        <div>
            <div className="md:flex justify-between py-8 px-12 hidden">
                <p className="font-semibold">Fair Launch</p>
                <p className="font-semibold">No Pre-Allocation</p>
                <p className="font-semibold">No Presale</p>
                <p className="font-semibold">No Taxes</p>
                <p className="font-semibold">Community Funded</p>
            </div>
            <div className="md:hidden justify-between pt-8 pb-4 px-12 flex">
                <p className="font-semibold">Fair Launch</p>
                <p className="font-semibold">No Pre-Allocation</p>
                <p className="font-semibold">No Presale</p>
            </div>
            <div className="md:hidden justify-between pb-8 px-12 flex">
                <p className="font-semibold">No Taxes</p>
                <p className="font-semibold">Community Funded</p>
            </div>
        </div>
    )
}

export default Specs
