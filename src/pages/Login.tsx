import React, { useState } from 'react';
import axios from 'axios';
import imagen1 from '../assets/imagen4.png';
import { useNavigate, Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
//import Waves from '../assets/waves.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/profile');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white-100">
            <header className="bg-white-600 text-black py-4 px-8 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold"><FaPaperPlane />Planeo</Link>
                <Link to="/register" className="border mr-2 px-6 py-3 rounded-lg bg-blue-900 hover:bg-white m-2 hover:text-blue-900 hover:border-blue-900 text-white font-bold"
                >Register</Link>
            </header>
            <div className="min-h-screen bg-custom-gradient flex items-center justify-center">
            <img src={imagen1} alt="imagen productividad" className="h-auto p-5 max-w-xs object-cover" />
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Iniciar sesión</h2>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative mb-4">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                            peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
                            ${email && "top-2 text-xs text-blue-600"}`}
                        >
                            Correo electrónico
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                            required
                        />
                        <label
                            htmlFor="password"
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                            peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
                            ${password && "top-2 text-xs text-blue-600"}`}
                        >
                            Contraseña
                        </label>
                    </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default Login;
