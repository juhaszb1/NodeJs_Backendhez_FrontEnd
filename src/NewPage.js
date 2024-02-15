import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewPage() {
    const navigate = useNavigate();

    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          axios({
              method: 'POST',
              url: 'https://nodejs.sulla.hu/data',
              headers: {
                  "Content-Type": "application/json"
              },
              data: {
                  name: document.getElementById("name").value,
                  hostname: document.getElementById("hostname").value,
                  location: document.getElementById("location").value,
                  price: document.getElementById("price").value,
                  minimum_nights: document.getElementById("minimum_nights").value
              }
          })
              .then((res) => {
                  console.log(res);
                  navigate("/get-all");
              })
              .catch((error) => {
                  console.log(error);
              })
      }}>
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>New Page</h1>
            <div className="row">
                <label>Name:</label>
                <input type="text" id="name" className="form-control" placeholder="Name" style={{ marginLeft: '10px' }} />
                <br />
                <label>Hostname:</label>
                <input type="text" id="hostname" className="form-control" placeholder="Hostname" style={{ marginLeft: '10px'}} />
                <br />
                <label>Location:</label>
                <input type="text" id="location" className="form-control" placeholder="Location" style={{ marginLeft: '10px' }} />
                <br />
                <label>Price:</label>
                <input type="number" id="price" className="form-control" placeholder="Price" style={{ marginLeft: '10px' }} />
                <br />
                <label>Minimum Nights:</label>
                <input type="number" id="minimum_nights" className="form-control" placeholder="Minimum Nights" style={{ marginLeft: '10px' }} />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Hozzáadás</button>
        </div>
      </form>  
    );
}