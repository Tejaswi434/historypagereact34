import {Component} from 'react'
import SmallContainer from '../SmallContainer'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class MainContainer extends Component {
  state = {search: '', history: initialHistoryList}

  searchingdata = event => {
    this.setState({search: event.target.value})
  }

  ondeleting = id => {
    const {history} = this.state
    const deletingdata = history.filter(each => each.id !== id)

    this.setState({history: deletingdata})
  }

  render() {
    const {search, history} = this.state
    const searchingdetails = history.filter(each =>
      each.title.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div>
        <div className="blue-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="applogo"
          />
          <div className="searchcontainer_input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt=" search"
            />
            <hr className="hori" />
            <input
              type="search"
              className="input_a"
              placeholder="search history"
              onChange={this.searchingdata}
            />
          </div>
        </div>
        <div className="bottom_container">
          {searchingdetails.length !== 0 ? (
            <ul>
              {searchingdetails.map(each => (
                <SmallContainer
                  item={each}
                  ondeleting={this.ondeleting}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <p className="middle">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default MainContainer
