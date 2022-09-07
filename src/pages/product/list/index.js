import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";

export default function ListProduct() {

    const [list, setList] = useState(useContext(AppContext))
    return (
        <div>
            <h2>List Products:</h2>
            {list.map((item, index) => (
                <h3 key={index}>
                    {item.name}: {item.price}$</h3>
            ))}
        </div>
    )

}
