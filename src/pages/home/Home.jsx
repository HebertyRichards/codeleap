import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Post from "../../components/Post";
import rawPosts from "../../data/post.json";

function Home() {
  const location = useLocation();
  const username = location.state?.username || "Guest";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(
    rawPosts.map((post) => ({
      ...post,
      createdAt: new Date(post.createdAt),
    }))
  );

  useEffect(() => {
    document.title = "CodeLeap - Home";
  }, []);

  const handleCreate = () => {
    if (!title || !content) return;
    const newPost = {
      id: Date.now(),
      title,
      content,
      username: username,
      created_datetime: new Date(),
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const handleEdit = (id, newTitle, newContent) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, title: newTitle, content: newContent } : post
    );
    setPosts(updatedPosts);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="app-container">
      <header className="app-header">CodeLeap Network</header>
      <div className="post-form">
        <div className="border-post">
          <h3>What's on your mind?</h3>
          <label>Title</label>
          <input
            type="text"
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content</label>
          <textarea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            disabled={!title.trim() || !content.trim()}
            onClick={handleCreate}
          >
            Create
          </button>
        </div>

        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            currentUser={username}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
