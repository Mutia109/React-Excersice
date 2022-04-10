import React from 'react'
const SearchBar = ({onSubmit, handleInput}) => { 
    return (
      <form className="formSearch" onSubmit={onSubmit}>
        <div className="form-group">
            <input type="text" name="query" placeholder="Search gif..." required onChange={handleInput}/>
            <button type='submit' id='btn'> Search</button>
        </div>
      </form>
    );
  };
  export default SearchBar;