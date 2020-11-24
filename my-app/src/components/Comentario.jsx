import React, { Fragment } from 'react';
import Avatar from './Avatar';
const Comentario = ({sujeto}) =>{
    return(
        <Fragment>
            <h1>Cometarios</h1>
            <hr/>
            <div className = "media">
                <Avatar url = {sujeto.urlImagen}/>
                <div className = "media-body">
                    <h5 className = "mt-0">{sujeto.nombre}</h5>
                    {sujeto.text}
                </div>
            </div>
            
        </Fragment>
    );
}

export default Comentario;