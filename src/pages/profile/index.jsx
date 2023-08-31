import React, { useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileHero from './profileComponents/ProfileHero';
import BioInfo from './profileComponents/BioInfo';
import './profile.css';
import FollowAndPersonals from './profileComponents/FollowAndPersonals';
// import SubHeader from '../../components/SubHeader';

function UserProfile() {

  useEffect(() => {
    // This code will run after the component has rendered
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <ProfileHeader />
      <ProfileHero />
      <BioInfo />
      <FollowAndPersonals />
    </>
  )
}

export default UserProfile
