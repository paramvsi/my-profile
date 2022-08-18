import React from 'react';
import './Profile.css';
import MyPhoto from '../assets/images/MyPhoto.png';

const Profile = ({ name }) => {
  console.log(name);
  return (
    <div className="Main">
      <div className="ProfilePhoto">
        <img src={MyPhoto} alt={name}></img>
      </div>
      <div className="ProfileSection">
        <h1>Hi! I am {name}</h1>
        <p>
          A senior web developer working with a dynamic team in Touchnote. As a
          web dev I have crafted multiple web applications using my favorite
          technologies. Creating huge web application is my passion but they are
          difficult to maintain thats why I like to create them with scalable
          qualities. I love when my web app works for all devices across globe,
          and I have the skills to do so.
        </p>
      </div>
    </div>
  );
};

export default Profile;
