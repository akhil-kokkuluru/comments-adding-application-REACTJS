import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {name, comment, initials, date, colorVal} = props
  const postedOn = formatDistanceToNow(date)

  return (
    <div className="commentsContainer">
      <div className="INTCcontainer">
        <div className="initialContainer">
          <p className={`initialText ${colorVal}`}>{initials}</p>
        </div>
        <div className="nameTimeCommment">
          <div className="nameTime">
            <p className="name">{name}</p>
            <p className="timing">{postedOn}</p>
          </div>
          <div className="commentContainer">
            <p className="commentText">{comment}</p>
          </div>
        </div>
      </div>
      <div className="likeDeleteContainer">
        <button className="buttonCss" type="button">
          <img
            className="delLikeImg"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
        </button>
        <button className="buttonCss" type="button">
          <img
            className="delLikeImg"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="lines" />
    </div>
  )
}
export default CommentItem
