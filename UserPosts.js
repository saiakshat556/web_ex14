import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div style={styles.postContainer}>
      <h3 style={styles.heading}>User Posts</h3>
      <ul style={styles.list}>
        {posts.map((post, index) => (
          <li key={index} style={styles.postItem}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  postContainer: {
    marginTop: "15px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007bff",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  postItem: {
    background: "#f1f1f1",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
  },
};

export default UserPosts;
