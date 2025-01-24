import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import blogPosts from '../../data';
export default function Blog() {
 

  return (
    <div className='blogContainer'>
      <h1 className='blogTitle'>وبلاگ ما</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className='blogPost'>
            <img className='blogImage' src={post.img} alt={post.title} />
          <h2 className='postTitle'>{post.title}</h2>
          <p className='postMeta'>تاریخ انتشار: {post.date}</p>
          <p className='postContent'>{post.excerpt}</p>
          <Link to={`/blogs/${post.id}/${post.title.split(' ').join('-')}`} className='readMore'>
            ادامه مطلب
          </Link>
        </div>
      ))}
    </div>
  );  
}