import React from 'react'
import CraftCard from './CraftCard'

export default function CraftGrid({ crafts }) {
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 gap-[4rem] md:gap-4 lg:gap-10'>
            {crafts.map((craft) => (
                <CraftCard
                    key={craft.id}
                    id={craft.id}
                    title={craft.title}
                    img={craft.img}
                    skills={craft.skills}
                />
            ))}
        </div>
    )
}