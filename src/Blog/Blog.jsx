import React from 'react'
import PageHeader from '../components/PageHeader'
import blogList from '../utilis/blogdata'

const Blog = () => {
  return (
    <div>
       <PageHeader title="Blogs Page" curPage="blogs"/>
       <div className="blog-container">
            {blogList.map((blog) => (
                <div key={blog.id} className="blog-card">
                    <img src={blog.imgUrl} alt={blog.imgAlt} />
                    <div className="blog-content">
                        <h3>{blog.title}</h3>
                        <p>{blog.desc}</p>
                        <div className="blog-meta">
                            <span><i className={blog.metaList[0].iconName}></i> {blog.metaList[0].text}</span>
                            <span><i className={blog.metaList[1].iconName}></i> {blog.metaList[1].text}</span>
                        </div>
                        <button className="blog-btn">{blog.btnText}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog