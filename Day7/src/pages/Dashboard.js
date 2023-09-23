import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from './authActions';
import '../assets/css/Dashboard.css'; // Import your dashboard CSS for styling
import { selectUser } from '../redux/userSlice';
export const Dashboard = () => {
    // const user = useSelector((state) => state.user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log(user)
    const handleLogout = () => {
        // Dispatch a logout action
        dispatch(logoutUser());
        // Redirect to the login page (you can use react-router-dom for this)
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="logo"></div>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/academic">Rent</Link></li>
                    <li><Link to="/application">owned </Link></li>
                    <li><Link to="/application">sale</Link></li>
                    <li><Link to="/application">Help </Link></li>
                </ul>
            </div>
            <div className="content">
                <header>
                    <div className="top-nav">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </header>
                <main>
                    {/* Your dashboard content goes here */}
                        <div className="welcome">Welcome, {user.email}</div>
                    <h1>Welcome to Your Dashboard</h1>
                    <p>This is where you can manage your information.</p>
                    <section className="product-management">
                        <div className="product-card1">
                        </div>

                        <div className="product-card2">
                        </div>

                        <div class="product-card3">
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

