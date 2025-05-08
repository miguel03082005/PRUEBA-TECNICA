import React from "react";
import { useForm } from "react-hook-form";
import { SaveFile } from "../../api/transaction";
import type { FormData } from "../../interfaces/FormsInterfaces";
import { SuccessModal } from "../../hooks/modals";

const Dashboard: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await SaveFile(data);
            SuccessModal('Transacción creada con éxito');
            console.log('Respuesta del servidor:', res.data);
            reset();
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* FORMULARIO */}
            <div className="flex justify-center items-start py-10">
                <div className="w-full max-w-lg bg-gray-800 p-8 rounded shadow">
                    <h2 className="text-2xl font-bold mb-6 text-center">Registrar Transacción</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium mb-1">Monto</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('monto', { required: true })}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Tipo</label>
                            <select
                                {...register('tipo', { required: true })}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                            >
                                <option value="">Seleccionar</option>
                                <option value="ingreso">Ingreso</option>
                                <option value="egreso">Egreso</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Categoría</label>
                            <select
                                {...register('categoria', { required: true })}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                            >
                                <option value="">Seleccionar</option>
                                <option value="ventas">Ventas</option>
                                <option value="servicios">Servicios</option>
                                <option value="alquiler">Alquiler</option>
                                <option value="impuestos">Impuestos</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Descripción</label>
                            <textarea
                                {...register('descripcion')}
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                                placeholder="Detalle de la transacción"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-gray-900 transition"
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
