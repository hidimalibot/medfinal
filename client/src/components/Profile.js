import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./Profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="container">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>First Name: {user?.name}</p>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>Date of Birth: {moment(user?.birthday).format("YYYY-MM-DD")}</p>
        <p>Blood Type: {user?.bloodType}</p>
        <p>Height: {user?.height} cm</p>
        <p>Weight: {user?.weight} kg</p>
        <p>Address: {user?.address}</p>
        <p>Email: {user?.email}</p>
        <p>Contact Number: {user?.phoneNumber}</p>
      </div>
    </div>
  );
};

export default Profile;