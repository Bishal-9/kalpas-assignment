import CloseIcon from '@material-ui/icons/Close'
import '../styles/BoxView.css'

const BoxView = ({ id, title, body }) => {
    return (
        <div className='boxView'>
            <CloseIcon />
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    )
}

export default BoxView
