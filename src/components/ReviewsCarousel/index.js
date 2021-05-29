import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewIndex: 0,
  }

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state
    if (reviewIndex !== 0) {
      this.setState({reviewIndex: reviewIndex - 1})
    }
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsData} = this.props
    const len = reviewsData.length
    if (reviewIndex !== len - 1) {
      this.setState({reviewIndex: reviewIndex + 1})
    }
  }

  renderReviewsContainer = () => {
    const {reviewsData} = this.props
    const {reviewIndex} = this.state
    const reviewObj = reviewsData[reviewIndex]
    const {imgUrl, username, companyName, description} = reviewObj
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div>
          <img src={imgUrl} alt={`${username}-avatar`} className="avatar-img" />
        </div>
        <div className="arrows-container">
          <button
            testid="leftArrow"
            type="button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
              className="arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            testid="rightArrow"
            type="button"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    return <>{this.renderReviewsContainer()}</>
  }
}

export default ReviewsCarousel
