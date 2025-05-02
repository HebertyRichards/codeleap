import React from "react";
import "../styles/Post.css";

function DeleteModal({ onCancel, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>
          <strong>Are you sure you want to delete this item?</strong>
        </p>
        <div className="modal-buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
