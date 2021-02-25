const Post = ({ api }) => {
  return (
    <>
      {api.map((post) => {
        const { id, title, content, tags } = post;
        return (
          <section className="section_post" key={id}>
            <div className="container_post">
              <h2>{title}</h2>
              <p>{content}</p>
              <a>{tags}</a>
            </div>
          </section>
        );
      })}
    </>
  );
};
export default Post;
