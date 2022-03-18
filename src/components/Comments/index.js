import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  ontypingName = event => {
    this.setState({nameInput: event.target.value})
  }

  ontypingComment = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleIsliked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isliked: !eachComment.isliked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  onSubmitting = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const colorName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const commentObject = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isliked: false,
      initialColor: colorName,
    }
    this.setState(prevState => ({
      nameInput: '',
      commentInput: '',
      commentList: [...prevState.commentList, commentObject],
    }))
  }

  renderingComments = () => {
    const {commentList} = this.state

    return commentList.map(item => (
      <CommentItem
        key={item.id}
        commentListDetails={item}
        toggleIsliked={this.toggleIsliked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
    const lengthNum = commentList.length
    console.log(commentList)
    return (
      <div className="totalBg">
        <div className="contentContainer">
          <h1 className="heading">Comments</h1>

          <div className="imageinputContainer">
            <img
              className="imgCss"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <form className="inputContainer" onSubmit={this.onSubmitting}>
              <p className="greyText">Say something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="inputEl"
                onChange={this.ontypingName}
                value={nameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="textCss"
                rows="5"
                onChange={this.ontypingComment}
                value={commentInput}
              />
              <button className="buttons" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="line" />
          <div className="commentsContainer2">
            <p className="commentscss">
              <span className="numberColouring">{lengthNum}</span> Comments
            </p>
            <ul className="ulCSS">{this.renderingComments()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
