import { Link } from "react-router-dom";

const Post = ({ api }) => {
    return (
        <>
            {api.map((post) => {
                const { id, title, content, tags } = post;
                return (
                    <section className="section_post" key={id}>
                        <div className="container_post">
                            <Link to={`blog/${post.title}`}>
                                <h2>{title}</h2>
                                <p>{content}</p>
                                <a>{tags}</a>
                            </Link>
                        </div>
                    </section>
                );
            })}
        </>
    );
};
export default Post;
