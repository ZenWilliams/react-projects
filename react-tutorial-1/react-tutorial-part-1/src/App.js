import React from 'react';
import Table from './Table';

const App = () => {
    const [characters] = React.useState([
        {
            id:1,
            FirstName: "Steven",    
            LastName: "Obrien"
        },
        {
            id:2,
            FirstName: "Stephen",
            LastName: "Orisis"
        }
    ])
    return (
        <div>
            <Table characters={characters}/>
        </div>
    )
}

export default App;