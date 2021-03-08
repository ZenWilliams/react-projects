import React from 'react';

const Table = (props) => {
    const characters = props.characters.map((character) => {
                return(
                <tr key={character.id}>
                    <td>{character.FirstName}</td>
                    <td>{character.LastName}</td>
                </tr>)
            });
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {characters}
            </tbody>
        </table>
    )
}

export default Table;