import React, { useState } from 'react';

export default function List({ valuePassShop, nameCard, adressUser }) {
    const [arrayValues, setArrayValues] = useState([nameCard, adressUser, valuePassShop]);
    const [editIndex, setEditIndex] = useState(null);
    const [newValue, setNewValue] = useState("");

    const handleSortChange = (e) => {
        let sortedArray = [...arrayValues];
        if (e.target.value === "decrescente") {
            sortedArray.sort((a, b) => b.localeCompare(a));
        } else {
            sortedArray.sort((a, b) => a.localeCompare(b));
        }
        setArrayValues(sortedArray);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewValue(arrayValues[index]);
    };

    const handleUpdate = () => {
        const updatedArray = [...arrayValues];
        updatedArray[editIndex] = newValue;
        setArrayValues(updatedArray);
        setEditIndex(null);
        setNewValue("");
    };

    const handleRemove = (index) => {
        const updatedArray = arrayValues.filter((_, i) => i !== index);
        setArrayValues(updatedArray);
    };

    return (
        <div className="list-register">
            <div className="sub">
                <h3>Seus dados</h3>
                <select name="ordem" onChange={handleSortChange}>
                    <option value="crescente">crescente</option>
                    <option value="decrescente">decrescente</option>
                </select>
            </div>
            <ul>
                {arrayValues.map((value, index) => (
                    <li key={index}>
                        <div>
                            {editIndex === index ? (
                                <div className='edit'>
                                    <input
                                        type="text"
                                        value={newValue}
                                        onChange={(e) => setNewValue(e.target.value)}
                                    />
                                    <button onClick={handleUpdate}>OK</button>
                                </div>
                            ) : (
                                <p>{value}</p>
                            )}
                        </div>
                        <div>
                            <button onClick={() => handleEdit(index)}>editar</button>
                            <button onClick={() => handleRemove(index)}>remover</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
