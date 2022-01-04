import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Events } from "react-scroll";

export default function Index({ theme }) {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.querySelector(".nav-desktop").style.top = "0";
            } else {
                document.querySelector(".nav-desktop").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }

    }, [])
    useEffect(() => {
        const navbar = document.querySelector('.nav-desktop');
        if (theme === 'dark') {
            navbar.style.boxShadow = "0 0.5rem 1rem rgb(255 255 255 / 15%)"
            navbar.style.backgroundColor = "rgba(0,0,0,0.9)";
        } else {
            navbar.style.boxShadow = "0 0.5rem 1rem rgb(0 0 0 / 15%)"
            navbar.style.backgroundColor = "rgba(255,255,255,0.9)";
        }
    }, [theme])
    return (
        <>
            <nav className="nav-desktop">
                <Container>
                    <div className="nav-desktop__content">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-15}
                            duration={400}
                            className="home"
                        >
                            <svg className="content-logo" width="152" height="82" viewBox="0 0 137 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.7 72.325L80.3 12.85L108.575 72.325H92L80.3 48.275L67.95 72.325H51.7Z" fill="var(--light-secundary)" />
                                <path d="M77.375 7H62.1L55.275 20.975L50.075 32.025L41.3667 49.4416C38.3381 55.4988 32.1472 59.325 25.375 59.325H21.15L14 72.325H29.6L30.6834 72.1406C39.6394 70.6162 47.3929 65.0489 51.7 57.05L77.375 7Z" fill="var(--light-secundary)" />
                                <path d="M24.6328 37.4209L37.1572 41.8374V47.9897L18.2388 39.9697V34.7842L37.1572 26.7642V32.9165L24.6328 37.4209Z" fill="var(--light-secundary)" />
                                <path d="M112.367 37.5791L99.8428 33.1626V27.0103L118.761 35.0303V40.2158L99.8428 48.2358V42.0835L112.367 37.5791Z" fill="var(--light-secundary)" />
                            </svg>
                        </Link>

                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about-me"
                                    spy={true}
                                    smooth={true}
                                    offset={-15}
                                    duration={400}
                                    className="about-me"
                                >
                                    Sobre mí
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-15}
                                    duration={400}
                                    className="skills"
                                >
                                    Habilidades
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-15}
                                    duration={400}
                                    className="portfolio"
                                >
                                    Portafolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-15}
                                    duration={400}
                                    className="contact"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
            <nav className="nav-mobile">
                <div className="nav__block_mobile">
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-15}
                                duration={400}
                                className="home"
                            ><span><i className="fas fa-home"></i></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="about-me"
                                spy={true}
                                smooth={true}
                                offset={-15}
                                duration={400}
                                className="about-me"
                            >
                                <span><i className="far fa-user"></i></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-15}
                                duration={400}
                                className="skills"
                            >
                                <span><i class="fas fa-bolt"></i></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-15}
                                duration={400}
                                className="portfolio"
                            >
                                <span><i className="far fa-folder-open"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-15}
                                duration={400}
                                className="contact"
                            >
                                <span><i className="fas fa-info-circle"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}