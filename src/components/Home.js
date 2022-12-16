import React from 'react'
import capture from './Capture.PNG'
import clov from './clov.jpeg'
import fk from './fk.svg'

const Home = (props) => {
    const { dark, hcolor } = props;


    return (
        <>
            <div className="container mt-3 mt-md-5 py-3 px-3 ">
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-9">
                        <h3 className="fs-2 mb-3">Yash Saini</h3>
                        <h5 className={`text-${hcolor}`} >Frontend Developer, and a Student</h5>
                        <p className="py-3 " style={{ lineHeight: "27px" }}>Building Web apps, proficient in Frontend  &<br />Developing  <br />Creative  & Responsive Design
                            <br />

                        </p>
                    </div>

                    <div className="col-md-4 col-lg-6 col-3 text-end align-self-center">
                        <img className="img-fluid" src={capture} alt="logo" id="avtar" />


                    </div>
                </div>
            </div>

            <div className="container mt-md-4 py-4 px-3 skills" id='skill'>
                <h3>Skills & Uses</h3>

                <div className="skills mt-md-4">
                    <p className={`pt-1 mb-2 text-${hcolor}`} ><i className="me-2 fa-solid fa-arrow-right fa-fw"></i><span className={`text-${dark === "light" ? "dark" : "light"}`}>React JS</span>&nbsp;
                        as my Frontend Framework</p>
                    <hr className="m-0" />
                    <p className={`pt-1 mb-2 text-${hcolor}`}><i className="me-2 fa-solid fa-arrow-right fa-fw"></i><span className={`text-${dark === "light" ? "dark" : "light"}`}>Javascript</span>&nbsp;
                        as my main language</p>
                    <hr className="m-0" />
                    <p className={`pt-1 mb-2 text-${hcolor}`}><i className="me-2 fa-solid fa-arrow-right  fa-fw"></i><span className={`text-${dark === "light" ? "dark" : "light"}`}>Tailwind CSS
                    </span>&nbsp;
                        as my CSS framework</p>
                    <hr className="m-0" />
                    <p className={`pt-1 mb-2 text-${hcolor}`}><i className="me-2 fa-solid fa-arrow-right fa-fw"></i><span className={`text-${dark === "light" ? "dark" : "light"}`}>Figma</span>&nbsp;
                        as my designing tool</p>
                    <hr className="m-0" />
                    <p className={`pt-1 mb-2 text-${hcolor}`}><i className="me-2 fa-solid fa-arrow-right fa-fw"></i><span className={`text-${dark === "light" ? "dark" : "light"}`}>Express JS
                    </span>&nbsp;
                        as my API framework</p>
                    <hr className="m-0" />
                    <p className={`pt-4 mb-2 text-${hcolor}`}>...more skills include <span className={`text-${dark === "light" ? "dark" : "light"}`}>Nodejs</span>, <span className={`text-${dark === "light" ? "dark" : "light"}`}>Rest APIs</span>,

                        <span className={`text-${dark === "light" ? "dark" : "light"}`}> Bootstrap</span></p>

                </div>

            </div>



            <div className="container mt-md-4 py-4 px-3 project" id='project'>
                <h3>Featured Projects</h3>
                
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner text-center">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <a href="https://clover-stream.netlify.app" target="_blank" rel="noopener noreferrer" className="">
                            <img src={clov} alt='project' className="img-fluid" style={{ border: "4px solid snow", height: "10rem", width: "18rem" }}></img>
                            </a>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <a href="https://fakeshop-ecom.netlify.app/" target="_blank" rel="noopener noreferrer" className="">
                            <img src={fk} alt='project' className="img-fluid" style={{ height: "10rem",width:'15rem'}}></img>
                            </a>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



            <div className="container mt-2 py-4 px-3 " id='contact'>


                <h3>Get in touch</h3>
                <div className="d-flex justify-content-center align-items-center my-2 links">
                    <a href="https://github.com/yash-189" className="m-2 text-white"><i className="fa-2xl fa-brands fa-github-square"
                        style={{ color: dark === "dark" ? "#fff" : "#000000" }}></i></a>
                    <a href="https://www.linkedin.com/in/yash-saini9/" className="m-2 text-white"><i className="fa-2xl fa-brands fa-linkedin" style={{ color: dark === "dark" ? "#fff" : "#000000" }}></i></a>
                    <a href="mailto:yashsaini189@gmail.com.com" className="m-2 text-white"><i className="fa-2xl fa-solid fa-square-envelope" style={{ color: dark === "dark" ? "#fff" : "#000000" }}></i></a>


                </div>
            </div>



        </>
    )
}

export default Home