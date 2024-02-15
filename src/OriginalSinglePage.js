import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OriginalSinglePage() {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://nodejs.sulla.hu/data/${id}`)
            .then((res) => {
                setData(res.data);
            })
    })

    return (
        <div className="container" style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <div>
                <h5>{data.name}</h5>
                <h5>{data.hostname}</h5>
                <h5>{data.location}</h5>
                <h5>{data.price}</h5>
                <h5>{data.minimum_nights}</h5>
            </div>
        </div>
    )
}