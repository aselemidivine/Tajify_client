import React from 'react';

import ProfileImage from '../../../assets/images/pngs/profile-img.jpg';

import { AiOutlinePlus } from 'react-icons/ai';
import { FaCamera } from 'react-icons/fa';

function ProfileHero() {
  return (
    <section className='profile-hero__section'>
      <div className="section__container profile-hero">

        <div className="profile-hero__details">
          <div className="profile-hero__image--box">
            <img src={ProfileImage} alt="profile image" className="profile-hero__image" />
            <span>

            <FaCamera className='image__icon' />
            </span>
          </div>
          <div className="profile-hero__content">
            <h4 className="profile-hero__fullname">Andrew tate</h4>
            <p className="profile-hero__username">(@andrewtate)</p>
            <p className="profile-hero__tags">Photographer, videographer</p>
          </div>
          <button className="profile-hero__button"><AiOutlinePlus /> Add Cover Image</button>
        </div>
        <div>&nbsp;</div>

      </div>
    </section>
  )
}

export default ProfileHero;
