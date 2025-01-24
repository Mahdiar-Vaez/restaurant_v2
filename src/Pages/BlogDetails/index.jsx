import React from 'react';
import { useParams } from 'react-router-dom';
import './blogDetails.css';

import blogPosts  from '../../data';
export default function BlogDetails() {
  const { id } = useParams();
  console.log(id)
  const post = blogPosts.find(post => {
      console.log("🚀 ~ BlogDetails ~ post:", post)
      return post.id == id
  })
  if (!post) {
    return <div className="blogDetails">پست مورد نظر یافت نشد.</div>;
  }

  return (
    <div className="blogDetails">
      <h1 className="blogDetailTitle">{post.detailTitle}</h1>
      <img className="blogDetailImage" src={post.img} alt={post.title} />
      <div className="blogDetailMeta">
        <p className="blogDetailDate">تاریخ انتشار: {post.date}</p>
      </div>
      <div className="blogDetailContent">
        <h2 className="blogDetailSubtitle">{post.title}</h2>
        <p className="blogDetailDescription">{post.fullDescription}</p>
      </div>
    </div>
  );
}