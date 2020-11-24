import React, { Fragment } from 'react';

const Jsx = () =>{
    const temperatura = 21;
    return(
        <Fragment>
            <h2> calor o frio?</h2>
            <h2> {
                temperatura > 21 ? 'calor' : 'frio'
            }</h2>
        </Fragment>
        
    );
}

export default Jsx;