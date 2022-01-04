import "./style.css";
export default function footer() {
    return (
        <footer>
            <div class="footer-wave-box">
                <div class="footer-wave footer-animation">
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-content">
                    <p className="footer__title">Jhonathan Antonio</p>
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/jantoniocolque" target="_blank" class="footer__icon curserhover"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/dev_jhona" target="_blank" class="footer__icon curserhover"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/jantoniocolque" target="_blank" class="footer__icon curserhover"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="footer__copy" id="copy">Jhonathan Antonio 2021 © Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}