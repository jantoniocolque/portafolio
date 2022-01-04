
import Portal from './Portal';
import "./style.css"
export default function ModalProject(props) {
    const { children, toggle, active, title, description, link } = props;

    return (
        <Portal>
            {
                active && (
                    <div style={styles.wrapper}>
                        <div className="window-modal" style={styles.window}>
                            <div>
                                <div className="modal-project">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <div className='modal-project__auth'>
                                        {children}
                                    </div>
                                    <div className='modal-project__btns'>
                                        <a href={link} target="_blank" rel="noreferrer">
                                            <span className="fas fa-external-link-alt" aria-hidden="true"></span> Ver página
                                        </a>
                                        <button onClick={toggle}>Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={toggle} style={styles.background} />
                    </div>
                )
            }
        </Portal>
    )
}

const styles = {
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: "relative",
        background: 'linear-gradient(-45deg, var(--primary),var(--light-secundary),var(--orange), var(--light))',
        backgroundSize: "400% 400%",
        borderRadius: 20,
        padding: "1.5rem",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        zIndex: 10,
        maxWidth: "65%",
        color: "var(--primary)",
        animation: "gradient 15s ease infinite",
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "#000",
        opacity: 0.4,
    }
}