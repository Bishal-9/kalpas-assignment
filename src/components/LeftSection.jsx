import '../styles/LeftSection.css'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import ViewListIcon from '@material-ui/icons/ViewList'

const LeftSection = ({ feedbackState, viewState }) => {

    const setView = viewState[1]
    const [viewFeedback, setViewFeedback] = feedbackState

    return (
        <div className='leftSection'>

            {/* Details and Toggle Button */}
            <div className={viewFeedback ? 'leftSection__details' : ''}>

                {/* User Details */}
                <div className="leftSection__user">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                        alt="User's Avatar"
                        title="Avatar of user"
                    />

                    <div className="">
                        <h4>Hi Reader,</h4>
                        <p>Here's your News!</p>
                    </div>
                </div>

                {/* View Toggle */}
                <div className="leftSection__toggle">
                    <h2>View Toggle</h2>
                    <div className="leftSection__icons">
                        <div 
                            className={`leftSection__icon ${viewState[0] === 'box' ? 'selected' : ''}`}
                            onClick={() => setView('box')}
                        >
                            <ViewModuleIcon />
                        </div>
                        <div 
                            className={`leftSection__icon ${viewState[0] === 'list' ? 'selected' : ''}`}
                            onClick={() => setView('list')}
                        >
                            <ViewListIcon />
                        </div>
                    </div>
                </div>

                {/* Feedback Button */}
                <div className="leftSection__feedbackChoice">
                    <h2>Have a Feedback?</h2>
                    <button
                        className={viewFeedback ? 'disabled' : ''}
                        onClick={() => setViewFeedback(p => !p)}
                    >
                        We're Listening!
                    </button>
                </div>
            </div>

            {
                viewFeedback && (
                    // {/* Feedback Form */ }
                    <div div className="leftSection__feedbackForm">

                        {/* Thanking Section */}
                        <div className="leftSection__feedbackForm__thanks">
                            <h4>Thank you so much for taking the time!</h4>
                            <p>Please provide the below details!</p>
                        </div>

                        <form action="">

                            <div className="leftSection__feedbackForm__inputGroups">
                                <label htmlFor="firstName">First Name:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <input
                                        type="text"
                                        name='firstName'
                                        placeholder='John'
                                    />
                                </div>
                            </div>

                            <div className="leftSection__feedbackForm__inputGroups">

                                <label htmlFor="lastName">Last Name:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <input
                                        type="text"
                                        name='lastName'
                                        placeholder='Doe'
                                    />
                                </div>
                            </div>

                            <div className="leftSection__feedbackForm__inputGroups">

                                <label htmlFor="address">Address:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <textarea
                                        name="address"
                                        id="address"
                                        cols="30"
                                        rows="10"
                                        placeholder='Enter your full Postal Address'
                                    />
                                </div>
                            </div>

                            <div className="leftSection__feedbackForm__inputGroups">

                                <label htmlFor="country">Country:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <input
                                        type="text"
                                        name='country'
                                        placeholder='India'
                                    />
                                </div>
                            </div>
                            <div className="leftSection__feedbackForm__inputGroups">

                                <label htmlFor="email">Email:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='example@sample.com'
                                    />
                                    <span>Please enter a valid e-mail.</span>
                                </div>
                            </div>

                            <div className="leftSection__feedbackForm__inputGroups">

                                <label htmlFor="phone">Phone Number:</label>
                                <div className="leftSection__feedbackForm__input">
                                    <input
                                        type="tel"
                                        name='code'
                                        placeholder='+91'
                                        size='5'
                                        pattern='+-[0-9]{2}'
                                    />
                                    <input
                                        type="tel"
                                        name='phone'
                                        placeholder='123456789'
                                        pattern='[0-9]{4}-[0-9]{3}-[0-9]-{3}'
                                    />
                                    <span>Please enter a valid number.</span>
                                </div>
                            </div>

                            <button type='submit'>Submit Feedback</button>
                        </form>
                    </div>
                )
            }
        </div >
    )
}

export default LeftSection
