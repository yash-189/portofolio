import React from 'react'
import Home from './Home';
import Logo from './Logo';
// import logo from './iconw.png'
import Switch from './Switch';



const Navbar = (props) => {
    const {dark, mode, textcolor, hcolor, pcolor} = props;
    return (
        <>
         <div className={`container-fluid bg-${dark} text-${textcolor}`}  id='home'>
             <div className='container  pt-2' id='main'>
            <nav className={`navbar navbar-expand-sm navbar-${dark}  bg-${dark} sticky-sm-top py-2 `}>

                <div className="container p-0 d-sm-flex d-none ">


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
                        <ul className="navbar-nav d-inline-flex me-5">
                            <li className="nav-item me-3 ms-2 ">
                                <a className="nav-link " aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link " href="#skill">Skills</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#project">Projects</a>
                            </li>


                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <a className="navbar-brand me-0 p-0 px-2" href="#home" >
                    <Logo color={dark === "dark"?"#fff":"#000000"}/>
                    </a>
                
                
                <Switch mode={mode}/>

            </nav>

            <Home dark={dark} hcolor={hcolor} pcolor={pcolor} textcolor={textcolor} />
            </div>
            </div>
        </>
    )
}

export default Navbar