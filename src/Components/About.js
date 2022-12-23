// import React, { useState } from 'react' {/*Previous code commented for reference for future*/}
import React from 'react'
import AboutImg from '../Components/aboutBgImg.jpg'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'transparent'
    // })
    // const [btnStyle, setBtnStyle] = useState({
    //     backgroundColor: 'rgb(43,40,40)',
    //     color: 'azure'
    // })
    // const [btntxt, setBtnTxt] = useState('Switch To DarkMode')

    // const toggleStyle = () => {
    //     if (myStyle.backgroundColor === 'transparent') {
    //         setMyStyle({
    //             backgroundColor: 'rgb(43,40,40)'
    //         })
    //         setBtnTxt('Switch To LightMode')
    //         setBtnStyle({
    //             backgroundColor: 'azure',                                  {/*Previous code commented for reference for future*/}  
    //             color: 'black',
    //             fontWeight: 'bold'
    //         })

    //     }
    //     else {
    //         setMyStyle({
    //             backgroundColor: 'transparent'
    //         })
    //         setBtnTxt('Switch To DarkMode')
    //         setBtnStyle({
    //             backgroundColor: 'rgb(43,40,40)',
    //             color: 'azure'
    //         })
    //     }
    // }

    return (
        <>
            <div className={`full-container bg-${props.mode}`}>
            {/* <div className='full-container bg-light' style={myStyle}>  Previous code commented for reference for future */}
                <div className="container about-container">
                    <div className="card text-bg-dark">
                        <img src={AboutImg} className="card-img about-card-img" alt="..." />
                        <div className="card-img-overlay about-center">
                            <h3 className="card-title text-light line-height-about">About TextUtils App</h3>
                            <p className="card-text text-light line-height-about">We provide free application to help you with your daily tasks. You will find tools for formatting text, converters, tools for handling text, such as remove extra whitespaces, empty lines, text sorter and many others. Check the current features on the home page and feel free to recommend a new feature by contacting us.
                                Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you in performing your activity much faster. This includes tools to remove duplicates, specific strings accents from a text, sort lines, remove line breaks, and many others.</p>
                        </div>
                    </div>
                </div>
                {/* <button type="button" className="btn btn-primary my-3" style={btnStyle} onClick={toggleStyle}>{btntxt}</button> */} {/*Previous code commented for reference for future*/}
            </div>
        </>
    )
}
