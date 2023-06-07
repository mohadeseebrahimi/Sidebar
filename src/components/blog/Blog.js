// import "./style.js";
import BlogItem from "./BlogItem";
import "./Blog.css";

function Blog() {
  let blogs = [
    {
      blogTitle: "post title1",
      blogDesc:
        "(1)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      
      blogTime: 5,
    },
    {
      blogTitle: "post title2",
      blogDesc:
        "(2)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      
      blogTime: 10,
    },
    {
      blogTitle: "post title3",
      blogDesc:
        "(3)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      
      blogTime: 7,
    },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">Hello</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]} />
          <BlogItem {...blogs[1]} />
          <BlogItem {...blogs[2]} />
        </div>
      </div>
    </section>
  );
}
export default Blog;
