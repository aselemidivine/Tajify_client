import React from 'react'
import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import Hero from '../../components/Hero';
import MostPopularCourses from '../../components/MostPopularCourses';
import TreadingArticles from '../../components/TreadingArticles';
import ExploreSkills from '../../components/ExploreSkills';
import ExploreCategories from '../../components/ExploreCategories';
import TopNewsAndFeaturedArticles from '../../components/TopNewsAndFeaturedArticles';
import TopCreators from '../../components/TopCreators';
import ExploreMore from '../../components/ExploreMore';
import Footer from '../../components/Footer';

import '../../index.css'
import './style.css';

const BlogHome = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <SubHeader />
      <Hero />
      <MostPopularCourses />
      <TreadingArticles />
      <ExploreSkills />
      <ExploreCategories />
      <TopNewsAndFeaturedArticles />
      <TopCreators />
      <ExploreMore />
      <Footer />
    </>
  )
}

export default BlogHome;
