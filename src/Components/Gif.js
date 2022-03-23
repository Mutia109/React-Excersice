import React from 'react'
function Gif({url, title}) {
    return (
        <div class="images">
                <img class="img" src={url} alt="images" />
        </div>
    )
}

export default Gif;