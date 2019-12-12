import React from 'react';

const Card = ( { id, name, email } ) => {
    return(
        <div className='bg-dark-green light-yellow tc ba bw2 b--near-black br3 pa3 ma2 shadow-5 dib grow w-auto-ns w-40-m w-20-l'>
            <img src={`https://robohash.org/${id}?size=240x240`} alt="robo foto" />
            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;