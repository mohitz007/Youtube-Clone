import React, { useState } from 'react';

const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log(search);
        props.search(search);
    }
    return (<div className="searchBar ui segment" >
        <form className="ui form" onSubmit={formSubmit}>
            <input type="search" value={search} placeholder="enter keyword" onChange={(e)=>{setSearch(e.target.value)}}/>
        </form>
    </div>);
}

export default SearchBar;