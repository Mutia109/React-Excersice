import React from 'react'
import './gif.css'
function Gif({url, title}) {
    return (
        <div className="images">
                <img className="img" src={url} alt="images" />
        </div>
    )
}

export default Gif;