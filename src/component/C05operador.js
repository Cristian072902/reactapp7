import react, {fragment} from 'react';

const operador = () => {

    const edad = 18;
    return (
        <fragment>
            <h1>operador ternario</h1>
            {edad >= 18? 'Mayor de edad': 'Menor de edad'}
        </fragment>
    );
}

export default operador;