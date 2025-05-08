import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { GetTransactions } from "../../api/transaction";
import type { Transaction } from "../../interfaces/FormsInterfaces";

// Registrar componentes necesarios de ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ResumenMensual {
    ingresos: number;
    egresos: number;
    fechaBase: Date;
}

const Graficas: React.FC = () => {
    const [datosGrafica, setDatosGrafica] = useState({
        labels: [] as string[],
        datasets: [] as any[]
    });
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerDatos = async () => {
        try {
            const respuesta = await GetTransactions();
            const transacciones: Transaction[] = respuesta.data;

            const resumen: Record<string, ResumenMensual> = {};

            transacciones.forEach((transaccion) => {
            if (!transaccion.fecha || !transaccion.tipo || transaccion.monto === undefined) return;
                const fecha = new Date(transaccion.fecha);
                const mes = fecha.toLocaleString("es-ES", { month: "long", year: "numeric" });

            if (!resumen[mes]) {
                resumen[mes] = {
                    ingresos: 0,
                    egresos: 0,
                    fechaBase: new Date(fecha.getFullYear(), fecha.getMonth(), 1),
                };
            }

            if (transaccion.tipo.toLowerCase() === "ingreso") {
                resumen[mes].ingresos += Number(transaccion.monto);
            } else if (transaccion.tipo.toLowerCase() === "egreso") {
                resumen[mes].egresos += Number(transaccion.monto);
            }
        });

        const mesesOrdenados = Object.entries(resumen)
            .sort((a, b) => a[1].fechaBase.getTime() - b[1].fechaBase.getTime())
            .map(([mes]) => mes);

        const ultimos3Meses = mesesOrdenados.slice(-3);

        const nuevosDatos = {
            labels: ultimos3Meses,
            datasets: [
                {
                    label: "Ingresos",
                    data: ultimos3Meses.map(mes => resumen[mes].ingresos),
                    backgroundColor: "rgba(0, 230, 118, 0.7)",
                    borderColor: "rgba(0, 230, 118, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Egresos",
                    data: ultimos3Meses.map(mes => resumen[mes].egresos),
                    backgroundColor: "rgba(255, 23, 68, 0.7)",
                    borderColor: "rgba(255, 23, 68, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Saldo",
                    data: ultimos3Meses.map(mes => resumen[mes].ingresos - resumen[mes].egresos),
                    backgroundColor: "rgba(41, 121, 255, 0.7)",
                    borderColor: "rgba(41, 121, 255, 1)",
                    borderWidth: 1,
                },
            ],
        };

        setDatosGrafica(nuevosDatos);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        } finally {
            setCargando(false);
        } 
    };

    obtenerDatos();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Gráfica de Ingresos, Egresos y Saldo por Mes
        </h2>
        {cargando ? (
            <p className="text-white">Cargando gráfica...</p>
        ) : (
        <div className="bg-gray-800 p-4 rounded-lg h-96">
            <Bar
                data={datosGrafica}
                options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: 'white',
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1f2937',
                        titleColor: '#fff',
                        bodyColor: '#e0f7fa',
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)',
                        },
                    },
                },
            }}
        />
        </div>
    )}
    </div>
  );
};

export default Graficas;