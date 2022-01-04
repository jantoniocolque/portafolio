import './App.css';
import './components/Navbar/style.css';
import Navbar from './components/Navbar/Index';
import Footer from "./components/Footer/Index";
import {animateScroll as scroll } from "react-scroll";
import profileImgBig from './assets/img/JhonathanAntonio-img-xl.png';
import Slider from "react-slick";
import htmlLogo from "./assets/img/skills/front/html.png";
import jsLogo from "./assets/img/skills/front/js.png";
import node from "./assets/img/skills/back/node.png";
import bootstrap from './assets/img/skills/front/bootstrap.png';
import css from "./assets/img/skills/front/css.png";
import react from "./assets/img/skills/front/react.png";
import express from "./assets/img/skills/back/express.png";
import hibernate from "./assets/img/skills/back/hibernate.png";
import java from "./assets/img/skills/back/java.png";
import mysql from "./assets/img/skills/back/mysql.png";
import sequelize from "./assets/img/skills/back/sequelize.png";
import spring from "./assets/img/skills/back/spring.png";
import springboot from "./assets/img/skills/back/springboot.png";
import sqlserver from "./assets/img/skills/back/sqlserver.png";
import sass from "./assets/img/skills/front/sass.png";
import emilseBg from "./assets/img/projects/emilse-bg.png";
import emilseDashboard from "./assets/img/projects/emilse-dashboard.png";
import clinicaOdontologica from "./assets/img/projects/clinica-odontologica.png";
import antaresClinica from "./assets/img/projects/antares-clinica.png";
import misPeliculas from "./assets/img/projects/mis-peliculas.png";
import cv from "./assets/docs/CV_JhonathanAntonio.pdf";
import {useEffect, useState} from 'react';
import ItemPortfolio from "./components/ItemPortfolio/Index";
function App() {
    const [theme,setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");
    useEffect(()=>{
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", theme);
    },[])
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    const settings = {
      
      className: "center",
      centerMode: true,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerPadding: "10px",
      autoplay: true,
      speed: 600,
      autoplaySpeed: 2000,
      cssEase: "linear",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };

    
    const handleClickModeLight =(e)=>{
      localStorage.setItem("theme","dark");
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", "dark");
      setTheme("dark");
    }

    const handleClickModeDark =(e)=>{
      localStorage.setItem("theme","light");
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", "light");
      setTheme("light");
    }
  return (
      <>
        <Navbar theme={theme}/>
        <main>
        <div className="bg-stars">
                  <div id="stars"></div>
                  <div id="stars2"></div>
                  <div id="stars3"></div>
                </div>
        <section id="home" >
          <div className="container">
            <div className="row full-sreen">
                <div className="home-title">
                  <h3 className="">Hola, soy</h3>
                  <h2 className="name">Jhonathan</h2>
                  <h2 className="surname">Antonio</h2>
                  <div className="home-title__icons">
                    <a className="" href="https://linkedin.com/in/jantoniocolque"><i className="fab fa-linkedin"></i></a>
                    <a className="" href="https://github.com/jantoniocolque"><i className="fab fa-github"></i></a>
                    <a className="" href="mailto:jantoniocolque@gmail.com"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              <div className="home-content">
                {/* <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_208_169)">
                  <circle cx="142" cy="142" r="141" stroke="white" stroke-width="2"/>
                  </g>
                  <defs>
                  <filter id="filter0_b_208_169" x="-2" y="-2" width="288" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImage" stdDeviation="1"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_208_169"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_208_169" result="shape"/>
                  </filter>
                  </defs>
                </svg> */}
                <svg className="content-logo" width="152" height="82" viewBox="0 0 137 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51.7 72.325L80.3 12.85L108.575 72.325H92L80.3 48.275L67.95 72.325H51.7Z" fill="white"/>
                  <path d="M77.375 7H62.1L55.275 20.975L50.075 32.025L41.3667 49.4416C38.3381 55.4988 32.1472 59.325 25.375 59.325H21.15L14 72.325H29.6L30.6834 72.1406C39.6394 70.6162 47.3929 65.0489 51.7 57.05L77.375 7Z" fill="white"/>
                  <path d="M24.6328 37.4209L37.1572 41.8374V47.9897L18.2388 39.9697V34.7842L37.1572 26.7642V32.9165L24.6328 37.4209Z" fill="white"/>
                  <path d="M112.367 37.5791L99.8428 33.1626V27.0103L118.761 35.0303V40.2158L99.8428 48.2358V42.0835L112.367 37.5791Z" fill="white"/>
                </svg>
                <div className="home-logo-animation d-flex">
                  <svg width="138" height="138" viewBox="0 0 138 138" fill="url(#bg)" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_208_169)">
                  <circle cx="69" cy="69" r="65" stroke="#F1F3F2" stroke-width="3"/>
                  </g>
                  <defs>
                  <linearGradient id="bg" x1="0.5" y1="0" x2="0.5" y2="1" gradientTransform="rotate(-45)">
                    <stop offset="20%" stop-color="#A53A3B">
                      <animate attributeName='stop-color' from="90%" to="0%" values="#A53A3B;#F1F3F2;#A53A3B" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop offset="100%" stop-color="#F1F3F2">
                    <animate attributeName='stop-color' from="0%" to="90%" values="#F1F3F2;#A53A3B;#F1F3F2" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                  </linearGradient>
                  <filter id="filter0_f_208_169" x="0.5" y="0.5" width="137" height="137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_208_169"/>
                  </filter>
                  </defs>
                  </svg>
                </div>
                <h4 className="m-0 primary-rol">Desarrollador web full stack</h4>
              </div>
            </div>
          </div>
        </section>
        <div className="curved-line">
            <svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 49.98C149.99 150 349.2 -49.98 500 49.98V150H0V49.98Z" fill="var(--light-secundary)"/>
            </svg>
        </div>
        <section id="about-me">
        <div className="container about-me-content-total">
          <div className="row full-sreen">
            <div className="about-me-title">
              <h2 className="subtitles">SOBRE MI</h2>
              <figure className="profile-pic"><img src={profileImgBig} alt="Jhonathan Antonio" /></figure>
            </div>
          </div>
          <div className="row full-sreen">
            <div className="about-me-content">
              <div className="about-me-content__text">
                <p>Soy una persona apasionada por la tecnología, desde mi primer "hola mundo", supe que no estaba fuera de mi alcance aprender más de este rubro. Mi determinación me llevo a pasar por varios cursos de programación, una carrera terciaria y una carrera universitaria en curso. Es así que tengo conocimientos en las dos grandes àreas del desarrollo web, pero me especializo en Backend por gusto personal. Me considero una persona que siempre está dispuesta a aprender y adaptarse a nuevas situaciones para lograr objetivos o fracasar en el intento y no volver a fallar en la misma situacion. <br />Me gusta mucho compartir los conocimientos que tengo porque termino aprendiendo de otras personas y evaluando nuevos puntos de vista para resolver un problema.</p>
                <div className='about-me-content__text__info'>
                  <span><i className="fas fa-user"></i> 27 años</span>
                  <span><i className="fas fa-map-marker-alt"></i> Buenos aires - Argentina</span>
                </div>
              </div>
              <div className='about-me-content__controls'>
                <a href={cv} target="_blank" className='about-me-content__controls__btn-cv'>Ver curriculum</a>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section id="skills">
          <div className="container">
            <div className="row full-sreen">
              <div className="skills-content">
                <div className="skills-title">
                  <h2 className="subtitles">HABILIDADES</h2>
                </div>
                <div className="skills-content__carousel-items">
                  <h3><span className="skills-content__carousel-items__icon"><i class="fas fa-file-code"></i></span>  Frontend</h3>
                <Slider {...settings}>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={htmlLogo}
                      alt="html logo"
                    />
                    <p>HTML</p>
                  </div>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={jsLogo}
                      alt="javascript logo"
                    />
                    <p>Javascript</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={css}
                        alt="CSS logo"
                      />
                      <p>CSS</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={sass}
                        alt="CSS logo"
                      />
                      <p>Sass</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={react}
                        alt="React logo"
                      />
                      <p>React</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={bootstrap}
                        alt="Bootstrap logo"
                      />
                      <p>Bootstrap</p>
                    </div>
                  </Slider>
                  <h3><span className="skills-content__carousel-items__icon"><i class="fas fa-server"></i></span>  Backend</h3>
                  <Slider {...settings}>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={java}
                      alt="Java logo"
                    />
                    <p>Java</p>
                  </div>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={spring}
                      alt="Spring logo"
                    />
                    <p>Spring</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={springboot}
                        alt="Spring boot logo"
                      />
                      <p>Spring Boot</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={hibernate}
                        alt="Hibernate logo"
                      />
                      <p>Hibernate</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={mysql}
                        alt="MySQL slide"
                      />
                      <p>MySQL</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={node}
                        alt="Nodejs logo"
                      />
                      <p>Node JS</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={express}
                        alt="Express logo"
                      />
                      <p>Express JS</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={sqlserver}
                        alt="SQL logo"
                      />
                      <p>SQL server</p>
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={sequelize}
                        alt="Sequlize logo"
                      />
                      <p>Sequelize</p>
                    </div>
                  </Slider>
                   <h3><span className="skills-content__carousel-items__icon"><i class="fas fa-toolbox"></i></span> Herramientas</h3>
                   <div className='skills-content__carousel-items__tools'>
                    <p>
                      <svg width="90%" height="10%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.6899 13.1009C25.532 12.9855 25.4249 12.8556 25.3478 12.7162M25.6899 13.1009C25.793 13.1821 26.1458 13.3889 26.2711 13.3979C26.3514 13.4037 26.5528 13.5284 26.6135 13.5775C26.726 13.6686 26.8813 13.7106 27.0124 13.777C27.2021 13.873 27.391 13.9565 27.6134 13.9565C28.0919 13.9565 28.5959 14.0248 29.0344 13.8368C29.4545 13.6568 29.224 13.8368 30.1969 13.061C31.2239 11.8571 31.4037 11.2362 31.4037 10.7624C31.4037 10.3357 31.4213 9.9055 31.4037 9.47904C31.3969 9.31281 31.2834 9.04555 31.2239 8.885C31.1474 8.67839 31.0867 8.40006 30.9407 8.23111C29.6175 6.7 28.2181 7.07163 28.0177 6.97143C27.7882 6.97143 26.4774 7.4268 26.2711 7.53289C26.1783 7.68597 25.5716 8.0898 25.4629 8.23111C25.3467 8.38215 25.0647 8.81804 25.0225 8.98918C24.9095 9.44657 24.8427 9.85159 24.8427 10.3258C24.8427 10.7759 24.9078 11.247 25.0422 11.6823C25.1518 12.0375 25.1734 12.4011 25.3478 12.7162M25.6899 13.1009C25.5681 13.005 25.4999 12.7504 25.3478 12.7162M15.6164 20.2478C15.9564 20.5025 16.3148 20.8153 16.7094 21.0106C16.8468 21.0786 16.9873 21.1347 17.1038 21.2315C17.2927 21.3884 17.545 21.4234 17.7311 21.5732C17.9121 21.719 18.1034 21.8279 18.2933 21.9622C18.4781 22.0929 18.6127 22.2193 18.8031 22.3379C19.0171 22.4713 19.2087 22.6652 19.3926 22.8307C19.5318 22.956 19.7734 23.0076 19.9024 23.1366C19.9656 23.1998 20.0795 23.2475 20.1562 23.314C20.2325 23.3802 20.3163 23.4589 20.4038 23.5104C20.5543 23.599 20.6962 23.6875 20.8653 23.7483M30.4304 7.51429C30.1974 7.70625 29.8541 8.01069 29.7066 8.2906C29.5458 8.59562 29.1751 9.04208 28.9828 9.32569C28.9124 9.42951 28.0952 10.5233 28.0177 10.6196C28.3637 10.7874 29.034 11.3118 29.3289 11.5631C29.5551 11.7558 29.7737 11.9382 30.0191 12.1028C30.0705 12.1372 30.1129 12.1621 30.1612 12.1994C30.2525 12.2699 30.6125 12.6501 30.732 12.6714M30.0415 9.14286C30.0415 9.34453 30.0718 9.53943 30.0405 9.73715C30.025 9.8345 29.9837 9.93811 29.9484 10.0333C29.9174 10.1172 29.8272 10.1967 29.8272 10.2827M39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20ZM13.8431 22.1714C13.9221 22.0924 16.1164 19.5387 16.1855 19.4578C16.266 19.3636 16.3634 19.3333 16.4244 19.2184C16.5619 18.9596 16.7951 18.7612 16.9663 18.5202C17.3668 17.9559 17.8341 17.438 18.1928 16.8511C18.3009 16.6742 18.4441 16.4928 18.5942 16.3435C18.7362 16.2023 18.89 15.9825 19.0597 15.878C19.1896 15.798 19.309 15.6226 19.4242 15.5189C19.5908 15.369 19.7317 15.2153 19.8798 15.0512C20.0035 14.9142 20.1829 14.7962 20.3231 14.67C20.4712 14.5368 20.5682 14.3696 20.7197 14.2333C21.0383 13.9465 21.3406 13.661 21.6285 13.3533C21.8943 13.0692 22.2803 12.8883 22.5274 12.5975C22.6614 12.4398 22.8414 12.3777 23.015 12.2561C23.2273 12.1075 23.5011 12.1168 23.7145 11.9968C23.7944 11.9519 23.9103 11.9736 24.0002 11.9347C24.0762 11.9019 24.1372 11.8571 24.2243 11.8571H24.5125C24.8334 11.8571 24.9301 11.9841 25.0863 12.2184C25.2051 12.3966 25.3246 12.616 25.4089 12.8058C25.5023 13.016 25.8801 13.0086 26.0173 13.1937C26.1686 13.398 26.319 13.5927 26.5074 13.7723C26.8716 14.1193 26.6404 14.8532 26.6404 15.2884C26.6404 15.5244 26.6501 15.7619 26.6404 15.9977C26.6321 16.1982 26.6454 16.615 26.5271 16.7824C26.4244 16.9276 26.426 17.2575 26.4187 17.434C26.4085 17.6811 26.1764 17.9429 26.0444 18.1589C25.884 18.4213 25.7777 18.6981 25.5321 18.9191C25.3508 19.0823 25.2176 19.3019 25.0444 19.4799C24.5086 20.0311 24.0381 20.6206 23.547 21.2155C23.3285 21.4802 23.0898 21.7294 22.8697 21.9935C22.7547 22.1316 22.6562 22.2964 22.5643 22.4479C22.4912 22.5686 22.3085 22.6618 22.1974 22.7582C22.0706 22.8683 21.9116 22.9652 21.7738 23.0686C21.5334 23.2488 21.2961 23.4657 21.1014 23.6848C20.884 23.9293 20.1072 24.3877 19.8748 24.6143C19.6264 24.8565 18.6642 25.2145 18.3669 25.4286C18.0058 25.6886 17.299 26.1083 16.9663 26.3974C16.5428 26.7059 16.1037 27.0518 15.6526 27.3286C15.2199 27.5941 14.6267 28.4898 14.1447 28.6857C13.7624 28.8411 13.2589 29.5354 12.9383 29.7714C12.8148 29.8624 12.2129 30.4076 12.3656 30.9684V31.4073C12.3656 31.6115 12.3377 31.9208 12.4321 32.1077C12.5543 32.3496 12.543 32.5362 12.543 32.8038C12.543 32.9955 12.5364 33.3269 12.2129 33.1606C12.0445 33.074 11.9787 32.8664 11.8361 32.7461C11.691 32.6237 11.5875 32.4625 11.4445 32.3338C11.323 32.2244 11.2701 32.109 11.1244 32.0368C10.9641 31.9575 10.8186 31.7803 10.6835 31.6689C10.6037 31.603 10.4485 31.4871 10.3954 31.4051C10.316 31.2827 10.2565 31.1107 10.1491 31.0083C9.95976 30.8279 9.83581 30.6704 9.99637 30.4076C10.391 29.7619 16.8279 22.1026 17.3849 21.6012C17.1257 21.5321 14.6477 22.1329 14.6477 22.1329L13.8431 22.1714ZM9.92245 30.8571L9.31928 31.4L8.2381 32.5449H9.75903L11.4304 32.4857L9.92245 30.8571ZM17.7637 21.3571C17.7637 21.3571 17.5399 21.5838 18.0653 20.8143C18.305 20.6732 23.726 14.7322 23.8569 14.4967C24.0809 14.2726 24.2295 14.0032 24.4527 13.7906C24.6007 13.6495 24.7364 13.4629 24.9813 13.4507C25.1058 13.4445 25.1766 13.372 25.3023 13.3469C25.4388 13.4561 26.1498 13.3469 26.2568 13.9529C26.3376 14.171 26.3407 14.3404 26.3407 14.5722C26.3407 14.6769 26.3224 14.7598 26.3051 14.8611C26.2807 15.0034 26.1832 15.0999 26.1498 15.2349C26.1269 15.3279 25.9775 15.4478 25.9254 15.5389C25.7781 15.6715 19.2717 22.4429 19.2717 22.4429L18.6919 22.1529L18.0898 21.5902L17.7637 21.3571ZM18.9701 22.6856C18.7651 22.7266 16.0424 23.4882 15.8414 23.5399C15.8225 23.5447 15.7073 23.5822 15.7514 23.5605C15.7856 23.5436 15.8231 23.4645 15.825 23.4339C15.83 23.3539 15.9437 23.2701 15.9943 23.2095C16.0757 23.1117 16.1246 22.9892 16.2191 22.9012C16.2918 22.8334 16.3496 22.7593 16.4137 22.6856C16.4782 22.6114 16.5579 22.5497 16.623 22.4744C16.6836 22.4043 16.765 22.3747 16.8192 22.2949C16.8815 22.2031 16.9444 22.1157 17.026 22.0359C17.0952 21.9682 17.1522 21.8926 17.2263 21.8284C17.2767 21.7847 17.3418 21.7532 17.3931 21.7121C17.4658 21.654 17.547 21.457 17.6572 21.5488C17.7647 21.6384 18.8411 22.6198 18.9701 22.6856Z" stroke="var(--secundary)" />
                      </svg>
                        Postman
                    </p>
                    <p><i class="fab fa-docker"></i>Docker</p>
                    <p>
                      <svg width="100%" height="12%" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 36.2876V32.4127H6.87273L14.4727 36.2876H1Z" stroke="black"/>
                      <path d="M15.1636 36.2876V32.4127H19.3091V36.2876H15.1636Z" stroke="black"/>
                      <path d="M33.1273 36.6751H22.0727C25.1818 35.9001 27.6 33.5752 28.2909 32.4127H33.1273V30.0878L39 34.3502L33.1273 39V36.6751Z" stroke="var(--secundary)"/>
                      <path d="M16.8909 15.3634L18.9636 11.4885C30.3636 12.651 31.7455 26.213 27.9455 31.2503C25.8727 35.1252 20.3455 36.2876 20.3455 36.2876V32.4127C20.3455 32.4127 22.517 31.527 24.1455 29.7003C25.5273 28.1504 26.2182 26.9879 26.2182 24.2755C26.2182 22.7536 25.9277 21.0666 24.4909 18.8507C21.7273 14.5884 16.8909 15.3634 16.8909 15.3634Z" stroke="var(--secundary)"/>
                      <path d="M15.8545 14.5885L18.6182 9.93865H17.2363C17.2363 9.93865 16.8909 1.80141 9.29085 1.02639C4.99168 0.587976 0.309069 5.67625 1.34539 11.4886C2.3818 17.6883 8.59998 19.2383 8.59998 19.2383C7.21817 24.2756 8.25453 27.3755 9.63634 30.8629L7.90903 32.0253L14.1272 35.1252V27.3755L12.7454 28.538C11.3636 25.0505 10.3272 19.2382 15.509 16.1384L13.4363 12.6511L10.3272 15.7509H7.56362C7.56362 15.7509 4.73768 14.1147 4.10908 11.4886C3.35746 8.34854 5.37114 4.12633 8.94544 4.12633C13.7941 4.12633 14.4727 9.93865 14.4727 9.93865H13.0909L15.8545 14.5885Z" stroke="var(--secundary)"/>
                      </svg>
                        Scrum
                    </p>
                    <p><i class="fab fa-figma"></i>Figma</p>
                    <p><i class="fab fa-git-alt"></i>Git</p>
                   </div>
                  {/*<Slider {...settingsTools}>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={git}
                      alt="git logo"
                    />
                  </div>
                  <div className='skills-content__carousel-items__img'>
                    <img
                      className="d-block w-100"
                      src={scrum}
                      alt="scrum logo"
                    />
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={docker}
                        alt="docker boot logo"
                      />
                    </div>
                    <div className='skills-content__carousel-items__img'>
                      <img
                        className="d-block w-100"
                        src={postman}
                        alt="postman logo"
                      />
                    </div>
                  </Slider> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="curved-line-second">
            <svg width="600" height="80" viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17.9093C179.988 80 419.04 -44.1441 600 17.9093V80H0V17.9093Z" fill="var(--light)"/>
            </svg>
        </div>
        <section id="portfolio" >
        <div className="container">
            <div className="row full-sreen">
              <div className="portfolio-content">
                <div className="portfolio-title">
                  <h2 className="subtitles">PROYECTOS</h2>
                </div>
                <div className="portfolio-items">
                  <ItemPortfolio 
                    title="Emilse + API"
                    skills="HTML-CSS-JS-Node-Express-MySQL-Sequelize-Scrum-MVC"
                    img={emilseBg}
                    description="Se trata de una aplicación e-commerce que permite a cualquier usuario visualizar los productos publicados. Además tiene un sistema de usuario para gestionar los favoritos y el carrito de compras. Por otro lado el proyecto cuenta con una cuenta administrador que permite la creación, la edición y la eliminación de los productos disponibles."
                    linkPage="https://modasemilse.herokuapp.com/"
                    linkGit="https://github.com/jantoniocolque/modasemilse-backend"
                  >
                    <p><strong>Administrador</strong></p>
                    <p><strong>Usuario</strong>: emilse@modas.com</p>
                    <p><strong>Contraseña</strong>: emilsemodas</p>
                  </ItemPortfolio>
                  <ItemPortfolio
                    title="Emilse Dashboard"
                    skills="HTML-CSS-JS-React-API Emilse"
                    img={emilseDashboard}
                    description="Se programó un tablero informativo, para el administrador, sobre los usuarios, los productos y las categorias que existen en Emilse. Toda esta información se obtiene del API realizado para el ecommerce de dicha marca."
                    linkPage="https://modasemilse-dashboard.herokuapp.com/"
                    linkGit="https://github.com/jantoniocolque/modasemilse-frontend"
                  >
                    <p>Administrador</p>
                    <p>Usuario: emilse@modas.com</p>
                    <p>Contraseña: emilsemodas</p>
                  </ItemPortfolio>
                  <ItemPortfolio
                    title="Clinica odontologica API"
                    skills="Java-Spring Boot-Hibernate-MySQL"
                    img={clinicaOdontologica}
                    description="El proyecto se realizó en Java conformando una API REST que permita la gestión de una clinica odontologica. Entre sus funciones permite la gestión de pacientes, de doctores y de turnos para el usuario administrador. Todo esto respetando los roles de usuarios y permisos."
                    linkPage="https://api-clinica-odontologica.herokuapp.com/"
                    linkGit="https://github.com/jantoniocolque/clinica-odontologica-backend"
                  />
                  <ItemPortfolio
                    title="Antares"
                    skills="HTML-CSS-JS-React-API ClinicaOdontologica"
                    img={antaresClinica}
                    description="Tomando uno de los proyectos realizados con anterioridad, se conformo el Frontend, en React de la clinica odontologica que consume toda la información base de la API clinica odonotologica."
                    linkPage="https://antares-odontoclinica.herokuapp.com/"
                    linkGit="https://github.com/jantoniocolque/clinica-odontologica-frontend"
                  >
                    <p>Administrador</p>
                    <p>Usuario: antares@odontologica.com</p>
                    <p>Contraseña: antares123</p>
                  </ItemPortfolio>
                  <ItemPortfolio
                    title="Peliculas"
                    skills="HTML-CSS-JS-React-API MovieFlix"
                    img={misPeliculas}
                    description="La página web fue realizada en React y permite seleccionar las peliculas favoritas que se quedan almacenadas en su navegador consumiendo los datos de la API movieFlix."
                    linkPage="https://movies-react-rouge.vercel.app/"
                    linkGit="https://github.com/jantoniocolque/movies_react"
                  />
                </div>
              </div>
            </div>
        </div>
        </section>
        <section id="contact">
          <div className="container">
                <div className="row full-sreen contact-container">
                    <div className="contact-title">
                      <h2 className="subtitles">Contacto</h2>
                    </div>
                    <div className="contact-content">
                        <p>Si queres trabajar conmigo, o tenes alguna propuesta contàctame por alguno de estos medios. Todo comentario es bienvenido.</p>
                        <div className="contact-content__social-networks mb-5">
                            <div><a className="contact-content__social-networks__item" target="_blank" href="https://linkedin.com/in/jantoniocolque"><i className="fab fa-linkedin"></i>/jantoniocolque</a> </div>
                            <div><a className="contact-content__social-networks__item" target="_blank" href="https://github.com/jantoniocolque"><i className="fab fa-github"></i>/jantoniocolque</a></div>
                            <div><a className="contact-content__social-networks__item" target="_blank" href="mailto:jantoniocolque@gmail.com"><i className="fas fa-envelope"></i>jantoniocolque@gmail.com</a> </div>
                            <div><a className="contact-content__social-networks__item" target="_blank" href="https://api.whatsapp.com/send?phone=+541136575990"><i className="fab fa-whatsapp"></i>+54 11 3657-5990</a> </div>
                            <div><a className="contact-content__social-networks__item" target="_blank" href="https://instagram.com/dev_jhona"><i className="fab fa-instagram"></i>@dev_jhona</a> </div>
                        </div>
                    </div>
                </div>
          </div>
        </section>
        </main>
        <Footer />
        <div className="scroll-btns">
          {
            theme === 'dark' ?
            <span className="light-mode" onClick={handleClickModeDark}><i class="far fa-sun"></i></span>
            :
            <span className="dark-mode" onClick={handleClickModeLight}><i class="far fa-moon"></i></span>
          }
          <span className="btn-up" onClick={scrollToTop}><i class="far fa-arrow-alt-circle-up"></i></span>
        </div>
      </>
      
  );
}

export default App;
