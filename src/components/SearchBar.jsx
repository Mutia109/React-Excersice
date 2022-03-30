const SearchBar = () => {
    return (
      <form className="formSearch">
        <div className="form-group">
          <input type="text" name="query" placeholder="Search gif..." required />
          <button type='submit'> Search</button>
        </div>
      </form>
    );
  };
  
  export default SearchBar;