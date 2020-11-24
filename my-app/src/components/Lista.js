import React,{useState , Fragment} from 'react';

const Lista = ()=>{
    const [array , setArray] = useState([1,2,3,4]);
    return(
        <Fragment>
            <h1>LISTA</h1>
            {
                array.map((ele , key) =>{
                    return <p key ={key}>{ele} - {key}</p>;
                })
            }
        </Fragment>
        

    );
}

export default Lista;