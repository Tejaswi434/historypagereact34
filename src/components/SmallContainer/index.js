import './index.css'

const SmallContainer = props => {
  const {item, ondeleting} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleting = () => {
    ondeleting(id)
  }
  return (
    <li className="individual">
      <p> {timeAccessed}</p>
      <div className="second-section">
        <img src={logoUrl} alt="domain logo" />
        <p className="bold">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="but"
        onClick={deleting}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deletesize"
        />
      </button>
    </li>
  )
}

export default SmallContainer
