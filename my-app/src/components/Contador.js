import React , {useState , Fragment} from 'react'


const Contador= () =>{

    const [numero , setNumero] = useState(0);
    const aumentar = ()=>{
        console.log('me diste click');
        setNumero(numero+1);
        // una opcion
        // fetch('https://pokeapi.co/api/v2/pokemon/')
        // .then((res) =>{
        //     return res.json();
        // })
        // .then(data =>{
        //     console.log(data);
        //     data.results.forEach(element =>{
        //         console.log(element.name);
        //     })
        // })
        // otra opcion

        const obtenerPokemones = async()=>{
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
                const data = await res.json();
                //console.log(data.results);
                //map
                const arrayName =  data.results.map((poke) =>{
                    return poke.name;
                });
                // filter
                console.log(arrayName);
                const array = data.results.filter((elem) =>{
                    return elem.name ==='bulbasaur';
                })
                console.log(array);
                

            }catch(error){
                console.log(error);
            }
        }
        obtenerPokemones();
        
    }
    return(
        <Fragment>
            <h3>Me llamo alejandro {numero}</h3>
            <button onClick = {aumentar}> Aumentar</button>
        </Fragment>
        
    );
}

export default Contador;
