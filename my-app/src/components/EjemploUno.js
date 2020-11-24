import React, {useState ,  Fragment } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = ()=>{
    
    const {register, errors, handleSubmit} = useForm();

    const [entradas, setentradas] = useState([])
    const onSubmit = (data,e) =>{
        console.log(data);
        setentradas([
            ...entradas, data
        ])
        e.target.reset();
    }
    return(
        <Fragment>
            <h1>Ejemplo # 1</h1>
            <form onSubmit= {handleSubmit(onSubmit)}>
                <input
                    placeholder = "Ingrese el titulo"
                    name = "titulo"
                    className = "form-control my-2"
                    ref ={
                        register({
                            required : {value : true , message : 'Complo Obligatorio'},
                            minLength : {value : 2 , message : 'Minimo 2 letras'}
                        })
                    }
                ></input>
                {   errors.titulo &&
                    <span className = "text-danger text-small d-block mb-2">
                    {errors.titulo.message}
                    </span>}
                <input
                    placeholder = "Ingrese la descripcion"
                    name = "descripcion"
                    className = "form-control my-2"
                    ref ={
                        register({
                            required : {value : true , message : 'Complo Obligatorio'},
                        })
                    }
                ></input>
                { errors.descripcion &&
                    <span className = "text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                    </span>
                }

                <button className="btn btn-primary"> Agregar</button>
            </form>
            <ul>
                {
                    entradas.map( (item,key) => {
                        return (
                            <li key={key}>{item.titulo} - {item.descripcion}</li>
                        );
                    })
                }
            </ul>
            
        </Fragment>

    );
};

export default EjemploUno;