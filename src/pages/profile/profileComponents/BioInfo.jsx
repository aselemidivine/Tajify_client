import React from 'react';

import { PiNotePencilFill, PiGearBold } from 'react-icons/pi';
import { BiSolidMessageAltDots } from 'react-icons/bi';
import { AiOutlineFolderAdd } from 'react-icons/ai';


function BioInfo() {
  return (
    <section className='bio__section'>
        <div className="section__container">
            <div className="bio--cards">
                <BioFigure />
                <BioContent />
            </div>
        </div>
      
    </section>
  )
}


function BioFigure () {
    return (
        <figure className="info--figures">
            <div className="followers--numbers">
                <span className="numbers">
                    <p className="numbers-count">567</p>
                    <p className="numbers-text">Followers</p>
                </span>
                <span className="numbers">
                    <p className="numbers-count">567</p>
                    <p className="numbers-text">Following</p>
                </span>
            </div>
            <div className="info--icons">
                <div className="info">
                    <span>
                        <PiNotePencilFill className='info--icon' />
                        <p>post</p>
                    </span>
                    <span>
                        <AiOutlineFolderAdd className='info--icon' />
                        <p>saved</p>
                    </span>
                </div>
                <div className="info">
                    <span>
                        <BiSolidMessageAltDots className='info--icon' />
                        <p>message</p>
                    </span>
                    <span>
                        <PiGearBold className='info--icon' />
                        <p>saved</p>
                    </span>
                </div>
            </div>
        </figure>
    )
}

import { FaUserAlt, FaBicycle } from 'react-icons/fa';
import { LiaEnvelopeSolid } from 'react-icons/lia';
import { FiPhone } from 'react-icons/fi';
import { PiGlobeSimpleBold } from 'react-icons/pi';
function BioContent () {
    return (
        <div className="bio--content">
            <h3 className="bio__heading">Personal Information</h3>
            <div className="bio--content--box">
                <ContentsInfo />
                <ContactsInfo />
            </div>
        </div>
    )
}

function ContentsInfo () {
    return (
        <div className="contents-box">
            <div className="content">
                <span>
                    <FaUserAlt className='bio--icon' />
                    <p>Bio</p>
                </span>
                <p className='bio--text'>I’m a professional Photographer and Videographer with over 5 years of experience working as a freelancer and contract staff, i capture imaginary pictures and make awesome videos for a living.</p>
            </div>
            <div className="content">
                <span>
                    <FaBicycle className='bio--icon' />
                    <p>Interest</p>
                </span>
                <p className='bio--text'>Photography, Video Creation, Cinematic Effects, Images, Adobe Creative Suites, Imaginary.</p>
            </div>
        </div>
    );
};

function ContactsInfo () {
    return (
        <div className="contents-box">
            <div className="content">
                <span>
                    <LiaEnvelopeSolid className='bio--icon' />
                    <p>Email</p>
                </span>
                <p className='bio--text'>andrewtate63@yahoo.com</p>
            </div>
            <div className="content">
                <span>
                    <FiPhone className='bio--icon' />
                    <p>Phone</p>
                </span>
                <p className='bio--text'>+234 815 6723 827</p>
            </div>
            <div className="content">
                <span>
                    <PiGlobeSimpleBold className='bio--icon' />
                    <p>Web</p>
                </span>
                <p className='bio--text'>andrewtateportfolio.com</p>
            </div>
        </div>
    );
};

export default BioInfo
