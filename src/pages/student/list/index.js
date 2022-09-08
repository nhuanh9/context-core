import React, {useEffect, useState} from "react";
import axios from "axios";

export default function StudentList() {
    const [list, setList] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:3001/students').then(
            response => {
                setList(response.data);
            }
        )
    }, [])
    return (
        <div>
            Student List
            {list.map((item)=> (
                <h2>{item.name}</h2>
            ))}
        </div>
    )

}
