import React, { useState } from "react";

const Formulaire = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setPost(title, content, tags);
    console.log(post);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({});



  return (
    <div>
      <form className="post_form" onSubmit={handleSubmit}>
        <label htmlFor="post_title">Titre du post : </label>
        <input
          type="text"
          name="post_title"
          id="post_title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="post_content">Contenu : </label>
        <textarea
          placeholder="Quoi de neuf ?"
          name="post_content"
          id="post_content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <label htmlFor="post_tags">Tags/Catégories #</label>
        <input
          type="text"
          name="post_tags"
          id="post_tags"
          value={tags}
          onChange={(e) => {
            let newTags = e.target.value.split(",");
            setTags(newTags);
          }}
        />
        <input className="button" type="submit" value="CRÉER MON POST" />
      </form>
    </div>
  );
};

export default Formulaire;
