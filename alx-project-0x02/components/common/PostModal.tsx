import { useState } from 'react';

const PostModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form action="">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default PostModal;
