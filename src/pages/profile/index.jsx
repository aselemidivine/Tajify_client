import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileHero from './profileComponents/ProfileHero';
import BioInfo from './profileComponents/BioInfo';
import './profile.css';
import FollowAndPersonals from './profileComponents/FollowAndPersonals';
import SubHeader from '../../components/SubHeader';

function UserProfile() {
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
