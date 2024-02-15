import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (document.getElementById("username").value === "admin" && document.getElementById("password").value === "admin") {
                navigate("/admin/get-all");
            }
        } }>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Admin Login</h1>
                <div className="row">
                    <label>Username:</label>
                    <input type="text" id="username" className="form-control" placeholder="Username" style={{ marginLeft: '10px' }} />
                    <br />
                    <label>Password:</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" style={{ marginLeft: '10px' }} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}