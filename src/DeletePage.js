import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeletePage() {
    const param = useParams();
    const navigate = useNavigate();
    const id = param.id;

    useEffect(() => {
        axios.delete(`https://nodejs.sulla.hu/data/${id}`)
            .then(() => {
                navigate("/admin/get-all");
            })
    })

    return (
        <></>
    )
}