import React, { Component } from 'react';

//вспомогательные переменные:
const TableHeader = () => {
    return (
        <tbody>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </tbody>
        
    );
};

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

//основной компонент:
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table className="table">
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
            </table>
        );
    }
}

export default Table;