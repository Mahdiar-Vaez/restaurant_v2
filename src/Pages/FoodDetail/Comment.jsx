import React, { useState } from 'react';
import './food-detail.css';

const Comments = ({ foodId }) => {
  const [comments, setComments] = useState([
    { id: 1, author: 'علی', text: 'این غذا خیلی خوشمزه است!', date: '2023-06-15' },
    { id: 2, author: 'مریم', text: 'من عاشق این غذا هستم.', date: '2023-06-16' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const comment = {
      id: comments.length + 1,
      author: 'کاربر',
      text: newComment,
      date: new Date().toISOString().split('T')[0],
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="comments-section">
      <h3>نظرات</h3>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <strong>{comment.author}</strong> <span className="comment-date">{comment.date}</span>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="نظر خود را بنویسید..."
        />
        <button type="submit">ارسال نظر</button>
      </form>
    </div>
  );
};

export default Comments;