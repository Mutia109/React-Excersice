import React from 'react';
import './index.css';
import Gif from '../../Components/Gif';

const gif = {
    id: '4HrBfVJJveBNS9ytSk',
    title: 'Nintendo Plotting GIF by Gaming GIFs',
    uploadedDate: '2018-04-03 15:21:50',
    url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
    webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
  }


function Home() {
    return (
        <div className="search-bar">
            <form>
                <input type="text" placeholder ="Search"/> 
                <button type='submit'>Button</button>
            </form>
            <Gif url={gif.url} title={gif.title} />
        </div>
    )
}

export default Home;