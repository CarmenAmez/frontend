import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeamPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();

    const handleClose = () => {
        setIsOpen(false); 
        navigate('/profile'); 
    };

    return (
        <div className="relative bg-gray-100 flex items-center justify-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
                Crear Equipo
            </button>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={handleClose} 
                    ></div>


                    <div className="fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Crear un Nuevo Equipo</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Introduce los detalles para crear un nuevo equipo.
                        </p>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="team-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nombre del Equipo
                                </label>
                                <input
                                    type="text"
                                    id="team-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Introduce el nombre del equipo"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                >
                                    Crear
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamPage;
