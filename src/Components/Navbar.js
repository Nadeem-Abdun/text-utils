import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {      
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={props.titlepage}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" onClick={props.homeTitle}>{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={props.aboutTitle}>{props.about}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.contact}
                                </Link>
                                <ul className={`dropdown-menu bg-${props.mode} border border-${props.mode==='dark'?'light':'dark'}`}>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} to="/">{props.contact_1}</Link></li>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} to="/">{props.contact_2}</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} to="/">{props.contact_3}</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <div className="customTheme">
                            <button className="btn btn-primary btn-colorPallet"></button>
                        </div> */}
                        <div className="darkmode">
                            <button className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={props.toggleMode}>{props.modetxt}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired, 
    home:PropTypes.string.isRequired, 
    contact:PropTypes.string.isRequired, 
    contact_1:PropTypes.string.isRequired, 
    contact_2:PropTypes.string.isRequired, 
    contact_3:PropTypes.string.isRequired 
}

Navbar.defaultProps = {
    title:'TextUtils App',
    home:'Home',
    about:'About TextUtils',
    contact: 'Reach Us',
    contact_1: 'Call Us',
    contact_2: 'Mail Us',
    contact_3: 'Custom Requests'
}
