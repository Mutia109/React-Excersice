import React from 'react'
import './index.css';

function Home() {
    return (
        <div className="search-bar">
            <form>
                <input type="text" placeholder ="Search"/> 
                <button type='submit'>Button</button>
            </form>
            <div class="images">
                <img class="img" src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="images" />
            </div>
        </div>
    )
}
export default Home;