import CloseIcon from '@material-ui/icons/Close'
import '../styles/ListView.css'

const ListView = ({ id, title, body }) => {
    return (
        <div className='listView'>
            <div className="listView__text">
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
            <CloseIcon />
        </div>
    )
}

export default ListView
