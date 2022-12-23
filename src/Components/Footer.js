import React from 'react'

export default function Footer(props) {
  return (
    <div className={`footer bg-${props.mode}`}>
        <p className={`text-${props.mode==='dark'?'light':'dark'}`}>Copyrights&copy; Reserved @ {props.webSiteName} 2000-2022</p>
    </div>
  )
}
