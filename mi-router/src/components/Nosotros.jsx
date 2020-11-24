import React from 'react';

const Nosotros = () =>{
    // const datos = [
    //     {id : 1 , nombre : 'alejandro'},
    //     {id : 2 , nombre : 'adolfo'},
    //     {id : 3 , nombre : 'angela'},
    // ]

    const [equipo,setEquipo] = React.useState([]);
    React.useEffect(() =>{
        console.log('useEffect');
        obtenerDatos()
    },[]);

    const obtenerDatos = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setEquipo(users); 
        //console.log(users);
    }
    return(
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item =>(
                        <li key = {item.id}> {item.name} - {item.email}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Nosotros;