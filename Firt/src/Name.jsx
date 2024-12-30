
import { useState } from "react";

function Name() {
    let [name, setName] = useState("aruna");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <h1>Name: {name}</h1>
        </div>
    );
}

export default Name; 