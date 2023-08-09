import React from 'react'
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import MostPopularCourses from '../../components/MostPopularCourses';
import TreadingArticles from '../../components/TreadingArticles';



const BlogHome = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPopularCourses />
      <TreadingArticles />
    </>
  )
}

export default BlogHome
