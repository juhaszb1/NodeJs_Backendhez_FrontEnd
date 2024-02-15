import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function AdminPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://nodejs.sulla.hu/data")
            .then((res) => {
                setData(res.data);
            })
    })

    return (
        <div className="container">
            <div className="row">
                <h1 style={{ textAlign: 'center' }}>Admin Page</h1>
                {
                    data.map((item) => {
                        return (
                            <div className="col-md-3">
                                <NavLink key={item.id + 4} to={`/get-all/${item.id}`}>
                                    <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h5 className="card-title">{item.hostname}</h5>
                                            <h5 className="card-title">{item.location}</h5>
                                            <h5 className="card-title">{item.price}</h5>
                                            <h5 className="card-title">{item.minimum_nights}</h5>
                                        </div>
                                        <NavLink key={item.id + 1} to={`/edit/${item.id}`}>
                                            <button className="btn btn-warning" style={{ width: '50%' }}>Szerkesztés</button>
                                        </NavLink>
                                        <NavLink key={item.id + 2} to={`/delete/${item.id}`}>
                                            <button className="btn btn-danger" style={{ width: '50%' }}>Törlés</button>
                                        </NavLink>
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