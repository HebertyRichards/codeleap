import React, { useState, useEffect } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import "../styles/Post.css";

function Post({ post, currentUser, onEdit, onDelete }) {
  const { id, title, content, username, created_datetime } = post;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timeAgo = `${Math.floor(
    (Date.now() - new Date(created_datetime)) / 60000
  )} minutes ago`;

  const isOwner = currentUser === username;

  const handleSave = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <h4>{title}</h4>
          {isOwner && (
            <>
              {!isMobile ? (
                <div className="post-actions">
                  <button title="Edit" onClick={() => setIsEditing(true)}>
                    <img src={editIcon} alt="Edit" width={20} />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    <img src={deleteIcon} alt="Delete" width={20} />
                  </button>
                </div>
              ) : (
                <div className="dropdown-wrapper">
                  <button
                    className="dots-button"
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    &#8942;
                  </button>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <button
                        onClick={() => {
                          setIsEditing(true);
                          setShowDropdown(false);
                        }}
                      >
                        <img src={editIcon} alt="Edit" width={20} />{" "}
                      </button>
                      <button
                        onClick={() => {
                          setShowDeleteModal(true);
                          setShowDropdown(false);
                        }}
                      >
                        <img src={deleteIcon} alt="Delete" width={20} />{" "}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        <div className="post-meta">
          <span>@{username}</span>
          <span>{timeAgo}</span>
        </div>
        <p className="post-content">{content}</p>
      </div>

      {isEditing && (
        <EditModal
          title={editedTitle}
          content={editedContent}
          setTitle={setEditedTitle}
          setContent={setEditedContent}
          onCancel={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            onDelete(id);
            setShowDeleteModal(false);
          }}
        />
      )}
    </>
  );
}

export default Post;
