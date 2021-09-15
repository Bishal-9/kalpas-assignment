import { useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import '../styles/ListView.css'
import Modal from './Modal'

const ListView = ({ id, title, body }) => {

    const [modal, setModal] = useState(false)

    useEffect(() => {
        console.log(modal)
    }, [modal])

    return (
        <div className='listView'>
            <div 
                className="listView__text"
                onClick={() => setModal(!modal)}
            >
                <h5>{title}</h5>
                <p>{body}</p>
            </div>

            {
                modal && (
                    <Modal
                        title={title}
                        body={body}
                        setModal={setModal}
                    />
                )
            }

            <CloseIcon />
        </div>
    )
}

export default ListView
