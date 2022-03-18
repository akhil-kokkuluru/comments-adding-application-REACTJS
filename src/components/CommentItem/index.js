import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentListDetails, toggleIsliked} = props
  const {name, comment, isliked, date, initialColor, id} = commentListDetails
  const onLikeClick = () => {
    toggleIsliked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const postedOn = formatDistanceToNow(date)
  const initials = name ? name[0].toUpperCase() : ''
  const imgUrl = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="commentsContainer">
      <div className="INTCcontainer">
        <div className="initialContainer">
          <p className={`initialText ${initialColor}`}>{initials}</p>
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
        <button className="buttonCss" type="button" onClick={onLikeClick}>
          <img className="delLikeImg" src={imgUrl} alt="like" />
        </button>
        <button className="buttonCss" type="button" onClick={onDeleteComment}>
          <img
            className="delLikeImg"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="lines" />
    </li>
  )
}
export default CommentItem
