import './Blog.css'
function BlogItem(props) {
    return (
      <div  className="col-4">
        <div className="blog-box">
          <div className="blog-img">
            <img src={props.blogImage} className="img-fluid" />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">{props.blogTitle}</h3>
            <p className="blog-desc">{props.blogDesc}</p>
          </div>
          
           
          </div>
        </div>
      
    );
  }
  export default BlogItem;