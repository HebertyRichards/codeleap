import React from "react";
import "../styles/Post.css";

function EditModal({ title, content, setTitle, setContent, onCancel, onSave }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Item</h3>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="save" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
