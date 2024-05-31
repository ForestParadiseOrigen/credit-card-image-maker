import { useContext } from 'react';
import { FormDataContext } from '/src/data/context/FormDataContext';
import InputData from '../../data/documents/InputData';
import InputColor from '../../data/documents/InputColor';
import InputLogoData from "../../data/documents/InputLogoData";
import InputTypeCard from "../../data/documents/inputTypeCardData"


// Modulos con la estructura de los elementos.
const inputData = InputData;
const inputColor = InputColor;
const inputLogoData = InputLogoData;

const Parameters = () => {
    const { formData, setFormData } = useContext(FormDataContext);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const ColorSelector = inputColor.map(color => (
        <button
            key={color.id}
            className={color.color}
            name='color'
            value={color.value}
            onClick={handleChange}/>
    ));

    const InputsEstructure = inputData.map((data) => (
        <div key={data.name} className="min-w-full text-sm border-zinc-800 rounded-md flex flex-nowrap align-bottom">
            <label className="w-64 p-3 bg-zinc-800 text-zinc-100 text-nowrap border-b-2 border-zinc-800 rounded-s-lg" htmlFor={data.name}>
                {data.label}
            </label>
            <input
                className="w-full p-3 outline-none border rounded-e-lg border-zinc-400 hover:font-semibold"
                name={data.name}
                placeholder={data.placeholder}
                type={data.type}
                maxLength={data.maxLength}
                onChange={handleChange}
            />
        </div>
    ));

    const OptionLogo = inputLogoData().map(logo => (
        <option  key={logo.id} name={logo.nombre} value={logo.url}>{logo.nombre}</option>
    ));

    const OptionTypeCard = InputTypeCard().map(type => (
        <option  key={type.id} name={type.nombre}>{type.nombre}</option>
    ));

    return(
        <>
            <form
                onSubmit={(e) => e.preventDefault()}
                method="POST"
                id="zona-personalizacion" 
                className="bg-slate-100 px-10 py-10 2xl:col-span-3 col-span-4">
                <header className="py-10">
                    <h1 className="text-left text-4xl font-bold text-zinc-800 pb-2">
                        ZONA DE PERSONALIZACIÓN
                    </h1>
                    <p className="text-xl">
                        Elige los atributos que deseas colocarle a tu tarjeta de credito.
                    </p>
                </header>
                <section className="min-w-96 flex flex-col gap-10">
                    {InputsEstructure}
                </section>
                <section className="min-w-96 flex flex-col flex-wrap gap-5 mt-10 bg-zinc-100 ronded-t-lg border border-zinc-800 rounded-lg pb-5">
                    <label className="w-full p-3 bg-zinc-800 text-zinc-100 text-nowrap border-b-2 border-zinc-800 rounded-t" htmlFor="select-logo">
                        Elige un el logo: 
                    </label>
                    <div className='flex flex-row flex-wrap gap-4 px-5'>
                        {ColorSelector}
                    </div>
                </section>
                <section className="min-w-96 flex flex-col pt-10">
                    <div className="min-w-full text-sm border-zinc-800 rounded-md flex flex-nowrap align-bottom">
                        <label className="w-64 p-3 bg-zinc-800 text-zinc-100 text-nowrap border-b-2 border-zinc-800 rounded-s-lg" htmlFor="select-logo">
                            Elige un el logo: 
                        </label>
                        <select className="w-full p-3 outline-none border rounded-e-lg border-zinc-400 hover:font-semibold" name="logo" onChange={handleChange} >
                            {OptionLogo}
                        </select>
                    </div>
                </section>
                <section className="min-w-96 flex flex-col pt-10">
                    <div className="min-w-full text-sm border-zinc-800 rounded-md flex flex-nowrap align-bottom">
                        <label className="w-64 p-3 bg-zinc-800 text-zinc-100 text-nowrap border-b-2 border-zinc-800 rounded-s-lg" htmlFor="select-logo">
                            Elige un tipo de tarjeta: 
                        </label>
                        <select className="w-full p-3 outline-none border rounded-e-lg border-zinc-400 hover:font-semibold" name="typeCard" onChange={handleChange} >
                            {OptionTypeCard}
                        </select>
                    </div>
                </section>
            </form>
        </>
    );
}

export default Parameters;
