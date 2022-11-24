import React, { useState } from 'react'
import Image from 'next/image'

function Accordion(props) {
  const [active, setActive] = useState(false)

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div className="accordion-title" onClick={() => setActive(!active)}>
        <div className="accordion-icon">
          <Image
            src="/images/ArrowUp.png"
            alt="dropdown"
            width={10}
            height={10}
          />
        </div>
        <span>{props.title}</span>
      </div>
      <div
        className="accordion-content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  )
}

export default Accordion
