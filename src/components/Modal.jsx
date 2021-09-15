import { useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import '../styles/Modal.css'

const Modal = ({ title, body, setModal }) => {

    useEffect(() => {
        console.log('Modal')
    }, [])

    return (
        <div className='modal'>
            <CloseIcon onClick={() => setModal(false)} />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Modal
