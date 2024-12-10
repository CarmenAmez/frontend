import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <FaRegPaperPlane />Planeo
                    </h1>
                    <nav>
                        {isLoggedIn ? (
                            <Link to="/profile" className="hover:underline">
                                Perfil
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="mr-4 hover:underline">
                                    Login
                                </Link>
                                <Link to="/register" className="hover:underline">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <main className="container mx-auto mt-10 px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Gestión de Tareas para Equipos
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Planeo te ayuda a organizar tareas, colaborar en equipo y cumplir tus
                    objetivos con eficiencia. ¡Crea proyectos, asigna tareas y logra más!
                </p>
                {!isLoggedIn && (
                    <Link
                        to="/register"
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                    >
                        Comienza Gratis
                    </Link>
                )}
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Ilustración de gestión"
                    className="mx-auto mt-10"
                />
            </main>
            <footer className="bg-gray-800 text-white py-4 mt-10">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default Home;
