import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div style={styles.infoContainer}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

const styles = {
  infoContainer: {
    marginTop: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default UserInfo;
