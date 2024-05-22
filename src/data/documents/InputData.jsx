const InputData = [
    {
        label: "Nombre del propietario:",
        name: "nombre",
        placeholder: "Escribe un nombre",
        type: "text",
    },
    {
        label: "Numero de tarjeta:",
        name: "numero",
        placeholder: "Escribe un numero de 16 digitos",
        type: "number",
        maxLength: 16,
    },
    {
        label: "Fecha de caducidad:",
        name: "caducidad",
        placeholder: "Escribe una fecha",
        type: "month",
    },
];

export default InputData;