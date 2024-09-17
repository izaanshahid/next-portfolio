import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id='about'>
        <BentoGrid>
            {[{title: "Title 1", description: "Description", id:"1"}].map((item)=>(
                <BentoGridItem
                id={item.id}
                title={item.title}
                key={item.id}
                description={item.description}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid
