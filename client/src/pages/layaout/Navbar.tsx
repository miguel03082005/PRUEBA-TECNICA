import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
    children: ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* NAVBAR */}
            <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Mi Finanzas App</h1>
                <div className="space-x-4">
                    <Link to={"/"} className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded hover:bg-cyan-400 hover:text-gray-900 transition">
                        Inicio
                    </Link>
                    <Link to={"/listar"} className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded hover:bg-cyan-400 hover:text-gray-900 transition">
                        Transacciones y Filtros
                    </Link>
                    <Link to={"/graficas"} className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded hover:bg-cyan-400 hover:text-gray-900 transition">
                        Graficas 
                    </Link>
                </div>
            </nav>

            {/* CONTENIDO */}
            <main className="p-6">
                {children}
            </main>
        </div>
    );
};

export default Navbar;
