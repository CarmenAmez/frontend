import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Usando axios en lugar de fetch
            const response = await axios.post('http://localhost:3000/auth/register', {
                name,
                email,
                password,
            });

            console.log('Registro exitoso:', response.data);
            navigate("/profile");

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message || 'Error en el registro');
            } else {
                setError('Error desconocido');
            }
        }
    };


    return (
        <div className="min-h-screen bg-gray-100">

            <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold"><FaRegPaperPlane />Planeo
                </Link>
            </header>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <form
                    className="bg-white p-6 rounded shadow-md"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
                    <div className="mb-4">
                        <label className="block mb-2">Nombre:</label>
                        <input
                            type="text"
                            className="border p-2 w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Correo:</label>
                        <input
                            type="email"
                            className="border p-2 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Contraseña:</label>
                        <input
                            type="password"
                            className="border p-2 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded">Registrar</button>
                </form>
            </div>
            <footer className="bg-gray-800 text-white py-4 mt-10">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default Register;
