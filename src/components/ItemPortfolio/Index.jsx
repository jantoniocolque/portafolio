import { useState } from 'react';
import Modal from "../Modal/ModalProject";
export default function Index({ title, skills, img, description, linkPage, linkGit, children }) {
    const [active, setActive] = useState(false);
    const toggle = (e) => {
        setActive(!active);
    }
    return (
        <div className="item">
            <div className="inner">
                <img src={img} alt="imagen de proyecto" />
                <div className="overlay">
                    <h5>{title}</h5>
                    <p>{skills}</p>
                    <div className="overlay__btns">
                        <Modal active={active} toggle={toggle}
                            title={title}
                            description={description}
                            link={linkPage}
                        >
                            {children}
                        </Modal>
                        <button onClick={toggle}>
                            <span className="fas fa-external-link-alt" aria-hidden="true"></span> Ver màs
                        </button>
                        <a href={linkGit} target="_blank" rel="noreferrer">
                            <span className="fas fa-code" aria-hidden="true"></span>  Vér Codigo
                        </a>
                    </div>
                </div>
                <div className="overlay-mobile">
                    <h5>{title}</h5>
                    <p>{skills}</p>
                    <div className="portfolio-items__item__buttons">
                        <button onClick={toggle}>
                            <span className="fas fa-external-link-alt" aria-hidden="true"></span>
                        </button>
                        <a href={linkGit} target="_blank" rel="noreferrer">
                            <span className="fas fa-code" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}