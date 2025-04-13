import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    name: "Akshat MSV",
    email: "saiakshat@gmail.com",
    bio: "Web Developer | React Enthusiast",
    imageUrl: `${process.env.PUBLIC_URL}/passport.jpg`,
    posts: ["First post!", "Loving React!", "Coding is fun!"]
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <ProfileImage imageUrl={user.imageUrl} />
        <UserInfo name={user.name} email={user.email} bio={user.bio} />
        <UserPosts posts={user.posts} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    width: "350px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }
};

export default ProfilePage;
