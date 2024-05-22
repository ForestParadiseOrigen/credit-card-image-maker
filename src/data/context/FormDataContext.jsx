import React, { createContext, useState } from 'react';

// Crear el contexto
export const FormDataContext = createContext();

// Crear el proveedor de contexto
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        numero: '',
        caducidad: '',
        color: '',
        logo: '',
    });

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};

export default FormDataProvider;
