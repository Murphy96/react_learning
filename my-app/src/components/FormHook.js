import React,{Fragment} from 'react'
import { useForm } from "react-hook-form";

const FormHook =() =>{
    const {register , errors , handleSubmit} = useForm();
    
    const onSubmit = (data,e)=>{
        console.log(data);
        console.log("hola");
        e.target.reset();
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit = {handleSubmit( onSubmit )}>
                <input
                    placeholder = "ingrese el nombre"
                    className = "form-control mb-2"
                    name = "titulo"
                    ref = {
                        register({
                            required:{
                                value : true,
                                message : 'Nombre requerido'
                            },
                            maxLength:{
                                value :10,
                                message : 'no mas de 10 caracteres'
                            },
                            minLength:{
                                value : 5,
                                message : 'no menos de 5 caracteres'
                            }
                        })
                    }
                ></input>
                <span className = "text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <button className = "btn btn-primary" type = "submit">Enviar</button>
            </form>
        </Fragment>
    );
};

export default FormHook;