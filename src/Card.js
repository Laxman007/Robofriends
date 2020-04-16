import React from 'react';

const Card=(props) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ' style={{width:'20%',spacing:'5px'}} >
            <img alt='robots' src={`https://robohash.org/${props.id}`} />
            <div >
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    ); 
}

export default Card;