import { useEffect, useState } from 'react'
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {

    const feedbackState = useState(false)
    const viewState = useState('list')

    useEffect(() => {
        console.log(viewState[0])
    }, [viewState])

    return (
        <div className="app">

            {/* Left Section */}
            <div className="app__leftSection">
                <LeftSection feedbackState={feedbackState} viewState={viewState} />
            </div>

            {/* Right Section */}
            <div className="app__rightSection">
                <RightSection viewState={viewState} />
            </div>
        </div>
    );
}

export default App;
