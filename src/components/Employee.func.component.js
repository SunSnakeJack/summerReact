import React, { useEffect, useState } from "react";
import axios from "axios";

function Employee_func() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/employees/")
            .then(response => {
                setData(response.data);
            });
    }, []);
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}><h6>name</h6>{item.name} <h6>position </h6>{item.position}</li>
            ))}

        </ul>
    );
};

export default Employee_func;