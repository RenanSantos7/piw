import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal({ src, alt, setModalOpen }) {
    
    function fechaModal() {
        setModalOpen(false)
    }

    return (
        <div className={'modalContainer'}>
            <div className={'modalContent'}>
                <div className={'btnFechar'} onClick={fechaModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}
