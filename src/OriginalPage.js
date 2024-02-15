import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function OriginalPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://nodejs.sulla.hu/data")
            .then((res) => {
                setData(res.data);
            })
    }, [])

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Original Page</h1>
            <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className="col-md-3">
                                    <NavLink key={item.id} to={`/get-all/${item.id}`}>
                                    <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h5 className="card-title">{item.hostname}</h5>
                                            <h5 className="card-title">{item.location}</h5>
                                            <h5 className="card-title">{item.price}</h5>
                                            <h5 className="card-title">{item.minimum_nights}</h5>
                                        </div>
                                    </div>
                                </NavLink>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}