import React, { useEffect, useState } from "react";
import { GetTransactions } from "../../api/transaction";
import type { Transaction } from "../../interfaces/FormsInterfaces";

const Listar: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filtered, setFiltered] = useState<Transaction[]>([]);
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [filterByMonth, setFilterByMonth] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [summary, setSummary] = useState({ ingresos: 0, egresos: 0, saldo: 0 });

    useEffect(() => {
        async function LoadTransactions() {
            try {
                const response = await GetTransactions();
                console.log(response);
                setTransactions(response.data);
                setFiltered(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        LoadTransactions();
    }, []);

    useEffect(() => {
        let temp = [...transactions];

        // Filtrar por mes actual
        if (filterByMonth) {
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            temp = temp.filter((t) => {
                if (!t.fecha) return false;
                const date = new Date(t.fecha);
                return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
            });
        }

        // Filtro por categoría
        if (categoria) {
            temp = temp.filter((t) =>
                t.categoria?.toLowerCase().includes(categoria.toLowerCase())
            );
        }

        // Filtro por fecha exacta (CORRECCIÓN)
        if (fecha) {
            temp = temp.filter((t) => {
                if (!t.fecha) return false;
                // Normalizamos ambas fechas para comparación
                const transactionDate = new Date(t.fecha).toLocaleDateString('es-CR');
                const selectedDate = new Date(fecha).toLocaleDateString('es-CR');
                return transactionDate === selectedDate;
            });
        }

        setFiltered(temp);

        // Calcular resumen
        const ingresos = temp
            .filter(t => t.tipo?.toLowerCase() === "ingreso")
            .reduce((acc, curr) => acc + (Number(curr.monto) || 0), 0);

        const egresos = temp
            .filter(t => t.tipo?.toLowerCase() === "egreso")
            .reduce((acc, curr) => acc + (Number(curr.monto) || 0), 0);

        const saldo = ingresos - egresos;

        setSummary({ ingresos, egresos, saldo });
    }, [categoria, fecha, filterByMonth, transactions]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Lista de Transacciones</h1>

            <div className="mb-4 space-x-4">
                <button
                    onClick={() => setFilterByMonth(false)}
                    className={`px-4 py-2 rounded border ${
                        !filterByMonth
                            ? "bg-cyan-400 text-gray-900"
                            : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                    } transition`}
                >
                    Todas las transacciones
                </button>
                <button
                    onClick={() => setFilterByMonth(true)}
                    className={`px-4 py-2 rounded border ${
                        filterByMonth
                            ? "bg-cyan-400 text-gray-900"
                            : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                    } transition`}
                >
                    Transacciones del mes
                </button>
            </div>

            <div className="mb-4">
                <button
                    onClick={() => setShowSummary(!showSummary)}
                    className="px-4 py-2 rounded border bg-cyan-400 text-gray-900 transition"
                >
                    {showSummary ? "Ocultar Resumen" : "Ver Resumen"}
                </button>
            </div>

            {showSummary && (
                <div className="mb-4 bg-gray-800 p-4 rounded">
                    <h3 className="text-xl font-semibold mb-2">Resumen</h3>
                    <p><strong>Ingresos:</strong> ${summary.ingresos.toFixed(2)}</p>
                    <p><strong>Egresos:</strong> ${summary.egresos.toFixed(2)}</p>
                    <p><strong>Saldo:</strong> ${summary.saldo.toFixed(2)}</p>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="bg-gray-800 text-white p-2 rounded border border-gray-600"
                />
                <input
                    type="text"
                    placeholder="Filtrar por categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="bg-gray-800 text-white p-2 rounded border border-gray-600"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-700">
                    <thead className="bg-gray-800 text-cyan-400">
                        <tr>
                            <th className="px-4 py-2 border border-gray-700">ID</th>
                            <th className="px-4 py-2 border border-gray-700">Tipo</th>
                            <th className="px-4 py-2 border border-gray-700">Monto</th>
                            <th className="px-4 py-2 border border-gray-700">Categoría</th>
                            <th className="px-4 py-2 border border-gray-700">Descripción</th>
                            <th className="px-4 py-2 border border-gray-700">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-400">
                                    No hay transacciones para mostrar.
                                </td>
                            </tr>
                        ) : (
                            filtered.map((t) => {
                                const fechaFormateada = t.fecha
                                    ? new Date(t.fecha).toLocaleDateString("es-CR", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })
                                    : "";

                                return (
                                    <tr key={t.id} className="bg-gray-700 hover:bg-gray-600 transition">
                                        <td className="px-4 py-2 border border-gray-700">{t.id}</td>
                                        <td className="px-4 py-2 border border-gray-700 capitalize">{t.tipo}</td>
                                        <td className="px-4 py-2 border border-gray-700">${Number(t.monto).toFixed(2)}</td>
                                        <td className="px-4 py-2 border border-gray-700 capitalize">{t.categoria}</td>
                                        <td className="px-4 py-2 border border-gray-700">{t.descripcion}</td>
                                        <td className="px-4 py-2 border border-gray-700">{fechaFormateada}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Listar;