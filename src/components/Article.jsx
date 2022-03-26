import React from 'react';
const Article = ({title, author, date, content}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h3>{date}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Article;
