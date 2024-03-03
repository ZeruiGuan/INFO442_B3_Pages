import React, {useState} from "react";
import DefaultDiscussion from '../data/DefaultDiscussion.json';
import {SubmitComment} from "./SubmitComment";

export function Discussion(props) {
  const [commentArray, setCommentArray] = useState(DefaultDiscussion);

  const addComment = (userId, userName, text) => {
    const newComment = {
      "userId": userId,
      "userName": userName,
      "userImg": "/img/" + userName + ".jpg",
      "text": text,
      "timestamp": Date.now(),
    }

    const newCommentList = [...commentArray, newComment];
    setCommentArray(newCommentList);
  }
  const handleReply = (text) => {
    console.log("Replying with text:", text);
  };

  const orderedCommentArray = commentArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp);

  const displayCommentArray = orderedCommentArray.map((comment) => {
    const commentElem = <Comment
      key={comment.userId}
      Image={comment.userImg}
      UserName={comment.userName}
      Text={comment.text}
      onReply={handleReply}/>

    return commentElem;
  })

  const textCenter = {
    textAlign: "center"
  };
  return (<div>
      <br/>
      <h1 style={textCenter}>Discussion Board</h1>
      <SubmitComment addComment={addComment}/>
      {displayCommentArray}
    </div>)
}

function ReplyPopup({onReply, onCancel}) {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    onReply(replyText);
    setReplyText('');
  };

  return (<div className="reply-popup">
          <textarea
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            placeholder="Write your reply here..."
          />
      <div className="reply-buttons">
        <button onClick={handleReply}>Reply</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>);
}

export default ReplyPopup;

function Comment(props) {
  const UserName = props.UserName;
  const Text = props.Text;
  const Image = props.Image;

  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState(''); const [showReminderPopup, setShowReminderPopup] = useState(false);

  const handleLikeClick = () => setLike(!like);
  const handleSaveClick = () => setSave(!save);

  const handleReply = () => {
    setReplying(true);
  };

  const handleCancelReply = () => {
    setReplying(false);
    setReplyText('');
  };

  const handlePostReply = (text) => {
    if (!props.isLoggedIn) {
      // Show the reminder pop-up if the user is not logged in
      setShowReminderPopup(true);
  } else {
      setReplyText(text);
      props.onReply(text);
      setReplying(false);
  }
  };

  let buttonColorLike = like ? "red" : "grey";
  let buttonColorSave = save ? "orange" : "grey";

  return (<div className="comment d-flex mb-3">
      <div className="me-2">
        <img src={Image} alt={UserName + "'s icon"}/>
      </div>
      <div className="commentContent">
        <p className="username">{UserName}</p>
        <p>{Text}</p>
        <button className="btn like-button" onClick={handleLikeClick}>
          <span className="material-icons" style={{color: buttonColorLike}}>favorite_border</span>
        </button>
        <button className="btn save-button" onClick={handleSaveClick}>
          <span className="material-icons" style={{color: buttonColorSave}}>star_border</span>
        </button>
        <button className="btn reply-button" onClick={handleReply}>
          <span className="material-icons">Reply</span>
        </button>
        {replying && (<ReplyPopup
            onReply={handlePostReply}
            onCancel={handleCancelReply}
          />)}
        {replyText && (<div className="reply-message">
            <p><strong>You:</strong> {replyText}</p>
          </div>)}
        {showReminderPopup && (
              <div className="reminder-popup">
                  <p>Please log in to post your reply.</p>
                  <button onClick={() => setShowReminderPopup(false)}>Close</button>
              </div>
            )}
      </div>
    </div>);
}

