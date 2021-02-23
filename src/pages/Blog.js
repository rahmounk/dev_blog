
import React, { useState } from 'react'


const Blog = () => {
    
    function handleChange(e) {
        
    }

    const [title, setTitle] = useState ("");
    const [content, setContent] = useState ("");
    const [tags, setTags] = useState ([]);
    const [submit, setSubmit] = useState ("false");
    return (
        <div>
            Blog
            <form className="post_form">
                <label htmlFor="post_title">Titre du post : </label>

                <input type="text" name="post_title" id="post_title" value={title} onChange={() => handleChange()}/>

                <textarea name="post_content" id="post_content" cols="30" rows="10" value={content} onChange={() =>handleChange()}></textarea>

                <input type="text" name="post_tags" id="post_tags" value={tags} onChange={handleChange}/>


                <input type="submit" vlue={"Envoyer"}/>

            </form>
        </div>
    )
}

export default Blog
