import React from 'react'
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import MostPopularCourses from '../../components/MostPopularCourses';
import TreadingArticles from '../../components/TreadingArticles';
import ExploreSkills from '../../components/ExploreSkills';
import ExploreCategories from '../../components/ExploreCategories';


const BlogHome = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPopularCourses />
      <TreadingArticles />
      <ExploreSkills />
      <ExploreCategories />
    </>
  )
}

export default BlogHome;
