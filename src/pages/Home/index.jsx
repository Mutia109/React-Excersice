import React from 'react';
import './index.css';
import Gif from '../../components/Gif';
import data from '../../data/dataGif';
import { useState } from 'react';

// const gif = {
//     id: '4HrBfVJJveBNS9ytSk',
//     title: 'Nintendo Plotting GIF by Gaming GIFs',
//     uploadedDate: '2018-04-03 15:21:50',
//     url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
//     webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
//   }


function Home() {
    const [text, setText] = useState('');
    const [gifs, setGifs] = useState([]);

    const handleInput = (e) =>{
        setText(e.target.value)
    }

    const onSubmit = async (e) =>{
        e.preventDefault()

        const gifs = await fetch(
           `http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${text}&limit=12`
        ).then((data) => data.json());
        setGifs(gifs.data);
    }
    
    return (
        <div className="home">
            <form className="formSearch" onSubmit={onSubmit}>
                <div className="form-group">
                <input type="text" name="query" placeholder="Search gif..." required onChange={handleInput}/>
                <button type='submit' id='btn'> Search</button>
                </div>
            </form>
            <div className='gifs'>
                {gifs.map(gif => (
                    <React.Fragment key ={gif.id}> 
                        {gif.rating === 'g' &&(
                            <Gif url={gif.images.original.url} title={gif.title} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Home;