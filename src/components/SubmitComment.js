import React, { useState } from 'react';

export function SubmitComment(props) {
  const addComment = props.addComment;
  const [newComment, setNewComment] = useState('');
  const [placeholder, setPlaceholder] = useState('Questions? Comments? Concerns?');

  const handleChange = (event) => {
    const content = event.target.value;
    setNewComment(content);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment("flower", "Flower", newComment);
    setNewComment(''); // Clear the text box
    setPlaceholder('Questions? Comments? Concerns?'); // Change the placeholder after submission
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder={placeholder}
          value={newComment}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-warning" type="submit">
          <span className="material-icons">add</span>
        </button>
      </div>
    </form>
  );
}
