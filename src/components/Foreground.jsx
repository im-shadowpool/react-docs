import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
        {
            description: "Prioritize sleep for optimal physical and mental health, aiming for 7-9 hours nightly to support overall well-being.",
            fileSize: "0.5mb",
            noDownload: true,
            tag : {tagTitle: 'Download', isOpen: true, tagColor: 'blue'}
        },
        {
            description: "Choose nutrient-dense foods, incorporating a colorful variety of fruits, vegetables, lean proteins, and whole grains for balanced nutrition.",
            fileSize: "0.2mb",
            noDownload: false,
            tag : {tagTitle: 'Text to Speech', isOpen: true, tagColor: 'green'}
        },
        {
            description: "Hydrate consistently to support bodily functions; aim for 8 glasses (64 ounces) of water daily for optimal health.",
            fileSize: "0.7mb",
            noDownload: true,
            tag : {tagTitle: 'Download', isOpen: false, tagColor: 'blue'}
        },
        {
            description: "Regular exercise boosts energy, enhances mood, and reduces the risk of chronic diseases aim for at least 150 minutes weekly.",
            fileSize: "0.9mb",
            noDownload: true,
            tag : {tagTitle: 'Download', isOpen: true, tagColor: 'blue'}
        }
    ]
    const ref = useRef(null);
  return (
    <div ref={ref} className='bg-transparent fixed flex top-0 left-0 z-[3] w-full h-full flex-wrap gap-9 p-3'>
      {data.map((item, index) =>(<Card card={item} key={index} refe={ref} />))}
    </div>
  )
}

export default Foreground