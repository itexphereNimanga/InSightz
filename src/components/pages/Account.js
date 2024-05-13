import React, { useState, useEffect } from "react";
import "./Account.css";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userBio, setUserBio] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const uploadPhoto = () => {
    // Implement the functionality for uploading photo
    console.log("Upload photo clicked");
  };

  const deleteBio = () => {
    // Implement the functionality for deleting bio
    console.log("Delete bio clicked");
  };

  const logout = () => {
    // Implement the functionality for logging out
    console.log("Logout clicked");
  };

  const saveBio = () => {
    // Implement the functionality for saving bio
    console.log("Save bio clicked");
  };

  const saveProfile = (event) => {
    event.preventDefault();
    // Implement the functionality for saving profile
    console.log("Save profile clicked");
  };

  const onFileSelected = (event) => {
    // Implement the functionality for handling file selection
    console.log("File selected:", event.target.files[0]);
  };

  return (
    <div className="account-page">
      {/* Profile Section */}
      <section className="profile-section">
        {/* Display user's profile details */}
        <div className="profile-details">
          {/* Placeholder for user's photo */}
          <div className="profile-photo">
            <img src="" alt="" />
            <button onClick={uploadPhoto}></button>
          </div>
          {/* User's basic info */}
          <div className="basic-info">
            <h1>Profile</h1>
            <p>
              <strong>Name : </strong> {userName}
            </p>
            <p>
              <strong>Email :</strong> {userEmail}
            </p>
            <p>
              <strong>Bio :</strong> {userBio}
            </p>
            {/* Add more user info */}
          </div>
        </div>
        <button className="Button" onClick={deleteBio}>
          Delete Bio
        </button>
      </section>

      {/* About Me Section */}
      <section className="about-me-section">
        <h2>About Me</h2>
        {/* Textarea to display/edit user's bio or description */}
        <textarea
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
        ></textarea>
        <button onClick={saveBio}>Save Bio</button>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>My Social Media Accounts</h2>
        {/* Display user's Logged accounts */}
      </section>

      {/* Edit Profile Section */}
      <section className="edit-profile-section">
        <h2>Edit Profile</h2>
        {/* Form to edit user's details */}
        <form onSubmit={saveProfile}>
          <label htmlFor="uName">Name:</label>
          <input
            type="text"
            id="uName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label htmlFor="uEmail">Email:</label>
          <input
            type="email"
            id="uEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <label htmlFor="userphoto">Upload Photo:</label>
          <input
            type="file"
            onChange={onFileSelected}
            id="userphoto"
            name="userphoto"
          />
          <button type="submit">Save</button>
        </form>
      </section>
      <div>
        <button className="Button" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
