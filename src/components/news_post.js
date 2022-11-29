import React from "react";
import "./styles/news_post.css"

function NewsPost({h, text, image_src}) {
    return (
        <>
            <div className='news-post'>
                <h2>{h}</h2>
                <p>{text}</p>
                <div className='image-container'>
                    <img src={image_src}></img>
                </div>
            </div>
        </>
    )
}

export default NewsPost