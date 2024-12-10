import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegPaperPlane, FaPlus } from 'react-icons/fa';
import TeamPage from './TeamPage';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen">
            <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    <FaRegPaperPlane />Planeo
                </Link>
                <button
                    onClick={handleLogout}
                    className="bg-blue-800 py-2 px-4 rounded hover:bg-blue-900"
                >
                    Logout
                </button>
            </header>
                        
            <main className="container mx-auto mt-6 px-4">
                <h2 className="text-3xl font-bold mb-6">Equipos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-bold mb-2">Equipo A</h3>
                        <p className="text-gray-600">Miembros del equipo.</p>
                        <button className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-700">
                            Ver Detalles
                        </button>
                    </div>
                    <div
                        className="bg-gray-200 p-4 rounded-lg flex items-center justify-center"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <button className="text-blue-600 flex items-center space-x-2 hover:text-blue-700">
                            <FaPlus /><TeamPage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Profile;
