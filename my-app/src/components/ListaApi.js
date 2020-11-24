import React,{useState , Fragment} from 'react'

const ListaApi = () =>{
    const [numero , setNumero] = useState([1,2,3,4,5]);
    const aumentar = ()=>{
        setNumero([
            ...numero , 100
        ])
    }
    return(
        <Fragment>
            <button onClick = {aumentar}>aumentar 6</button>
            {
                numero.map((ele,key) =>{
                    return <p key = {key}> {ele}</p>;
                })
            }
            
        </Fragment>
    );
}

export default ListaApi;