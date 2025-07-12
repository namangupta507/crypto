import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSuccessToast } from '../api/toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
        showSuccessToast('Login Successful')
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        showSuccessToast('Logout successful')
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login,logout }}>
            {children}
        </AuthContext.Provider>
    );
};
