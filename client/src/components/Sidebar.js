    import React, { useContext, useEffect } from 'react';
    import { AuthContext } from '../context/AuthContext';
    import {  useNavigate } from 'react-router-dom';

    const Sidebar = () => {
        const {logout:contextLogout,isAuthenticated}=useContext(AuthContext);

    return (
        <aside
        style={{
            width: '200px',
            backgroundColor: '#161b22',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh', // Make it full height
        }}
        >
        {/* <nav style={{ flex: 1 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>History</li>
            </ul>
        </nav> */}

        <div style={{ marginTop: 'auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{cursor:'pointer'}} onClick={()=>contextLogout()}>Logout</li>
            </ul>
        </div>
        </aside>
    );
    };

    export default Sidebar;
