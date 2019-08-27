import React from "react";
import PropTypes from "prop-types";
import './Profile.css';

// const Profile = ({ name, email }) => (
//     <div>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );

function Profile({ name, email }) {
  return (
    <div className='container'>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Profile;
