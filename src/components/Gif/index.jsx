import React from 'react'
import './index.css'
function Gif({url, title}) {
    return (
        <div className="images">
                <img className="img" src={url} alt="images" />
        </div>
    )
}

export default Gif;