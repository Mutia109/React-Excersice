import React from "react";
import Article from "./Article";

const ObjectLoop = () => {
    const articles = [
        {
            id :'2020202020',
            title : "Article 1",
            author: "Jhon Doe",
            date:"2017-09-08",
            content: "This is article 1",
        },
        {
            id:'1010101010',
            title : "Article 2",
            author: "Jhon Legend",
            date:"2017-10-08",
            content: "This is article 2",
        }
    ];

    return articles.map(article =>(
        <Article key= {article.id} title = {article.title} author={article.author} content = {article.content}/>
    ));
}

export default ObjectLoop;