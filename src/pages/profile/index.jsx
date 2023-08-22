import React from 'react';
import MainHeader from '../../components/MainHeader';
import ProfileHero from './profileComponents/ProfileHero';
import BioInfo from './profileComponents/BioInfo';
import './profile.css';

function UserProfile() {
  return (
    <>
      <MainHeader />
      <ProfileHero />
      <BioInfo />
    </>
  )
}

export default UserProfile
