import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ModePage() {
    const param = useParams();
    const navigate = useNavigate();
    const id = param.id;
    const [, setData] = useState([]);
    const [modName, setModName] = useState("");
    const [modHostName, setModHostName] = useState("");
    const [modLocation, setModLocation] = useState("");
    const [modPrice, setModPrice] = useState("");
    const [modMinimumNights, setModMinimumNights] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://nodejs.sulla.hu/data/${id}`);
                const data = await res.json();
                setData(data);
                setModName(data.name);
                setModHostName(data.hostname);
                setModLocation(data.location);
                setModPrice(data.price);
                setModMinimumNights(data.minimum_nights);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [id, modName, modHostName, modLocation, modPrice, modMinimumNights])

    const handleModNameChange = (e) => {
        setModName(e.target.value);
    }

    const handleModHostNameChange = (e) => {
        setModHostName(e.target.value);
    }

    const handleModLocationChange = (e) => {
        setModLocation(e.target.value);
    }

    const handleModPriceChange = (e) => {
        setModPrice(e.target.value);
    }

    const handleModMinimumNightsChange = (e) => {
        setModMinimumNights(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'PUT',
            url: `https://nodejs.sulla.hu/data/${id}`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                name: e.target.elements.name.value,
                hostname: e.target.elements.hostname.value,
                location: e.target.elements.location.value,
                price: e.target.elements.price.value,
                minimum_nights: e.target.elements.minimum_nights.value
            }
        })
            .then(() => {
                navigate("/admin/get-all");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Mode Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Name:</label>
                    <input type="text" id="name" className="form-control" placeholder="Name" style={{ marginLeft: '10px' }} value={modName} onChange={handleModNameChange} />
                    <br />
                    <label>Hostname:</label>
                    <input type="text" id="hostname" className="form-control" placeholder="Hostname" style={{ marginLeft: '10px' }} value={modHostName} onChange={handleModHostNameChange} />
                    <br />
                    <label>Location:</label>
                    <input type="text" id="location" className="form-control" placeholder="Location" style={{ marginLeft: '10px' }} value={modLocation} onChange={handleModLocationChange} />
                    <br />
                    <label>Price:</label>
                    <input type="number" id="price" className="form-control" placeholder="Price" style={{ marginLeft: '10px' }} value={modPrice} onChange={handleModPriceChange} />
                    <br />
                    <label>Minimum Nights:</label>
                    <input type="number" id="minimum_nights" className="form-control" placeholder="Minimum Nights" style={{ marginLeft: '10px' }} value={modMinimumNights} onChange={handleModMinimumNightsChange} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Módosítás</button>
            </form>
        </div>
    )
}