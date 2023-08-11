import React from 'react'
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import MostPopularCourses from '../../components/MostPopularCourses';
import TreadingArticles from '../../components/TreadingArticles';
import ExploreSkills from '../../components/ExploreSkills';
import ExploreCategories from '../../components/ExploreCategories';
import TopNewsAndFeaturedArticles from '../../components/TopNewsAndFeaturedArticles';
import TopCreators from '../../components/TopCreators';
import ExploreMore from '../../components/ExploreMore';


const BlogHome = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPopularCourses />
      <TreadingArticles />
      <ExploreSkills />
      <ExploreCategories />
      <TopNewsAndFeaturedArticles />
      <TopCreators />
      <ExploreMore />
    </>
  )
}

export default BlogHome;
