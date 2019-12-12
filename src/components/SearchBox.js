import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='bg-dark-green light-yellow tc bw2 b--near-black br1 pa3 dib'>
            <input className='bg-lightest-blue tc pa2'
                type='search'
                name='searchbar'
                placeholder='Search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default  SearchBox;