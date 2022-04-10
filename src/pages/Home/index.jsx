import React from 'react';
import './index.css';
import Gif from '../../components/Gif';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import {setQuery} from '../../reducer/querySlice';

function Home() {
    const text = useSelector((state) => state.query.value);
    const dispatch = useDispatch();
    const [gifs, setGifs] = useState([]);

    const handleInput = (e) =>{
        dispatch(setQuery(e.target.value));
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
            <SearchBar onSubmit = {onSubmit} handleInput={handleInput}/>
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