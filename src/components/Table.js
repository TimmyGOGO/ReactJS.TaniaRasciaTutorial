import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//вспомогательные переменные:
const TableHeader = () => {
    return (
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
    );
};

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button className="btn-primary" onClick={() => props.removeCharacter(index)}>Delete</button></td>
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