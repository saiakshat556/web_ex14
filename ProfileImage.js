import React from "react";

const ProfileImage = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/passport.jpg`} // Access image from public folder
        alt="User Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfileImage;
