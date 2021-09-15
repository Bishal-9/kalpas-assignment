import { useEffect, useState } from 'react'
import axios from 'axios'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import '../styles/RightSection.css'
import BoxView from './BoxView'
import ListView from './ListView'

const RightSection = ({ viewState }) => {

    const view = viewState[0]
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = posts.data.slice(0, 6)
        setPostList(data)
    }

    return (
        <>
            <div className={`rightSection ${view}`}>
                {
                    postList.map(post => {
                        return view === 'box' ? <BoxView
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        /> : <ListView
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    })
                }
            </div>
            <div className="rightSection__pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span><DoubleArrowRoundedIcon /></span>
            </div>
        </>
    )
}

export default RightSection
