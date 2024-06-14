import React, { useContext, useRef, useState } from 'react';
import { FormDataContext } from '/src/data/context/FormDataContext';
import { toPng } from 'html-to-image';

const Maker = () => {
    const { formData } = useContext(FormDataContext);
    const { nombre, numero, caducidad, color, logo, typeCard } = formData;

    console.log('Nombre:', nombre);
    console.log('Numero:', numero);
    console.log('Caducidad:', caducidad);
    console.log('Color:', color);
    console.log('Logo:', logo);
    console.log('typeCard:', typeCard);

    //SECCION: Módulo de exportacion del elemento como imagen.
    const [image, setImage] = useState(null);
    const ref = useRef(null);

    const handleExport = async () => {
        const element = ref.current;
        const dataUrl = await toPng(element, { width: element.offsetWidth, height: element.offsetHeight });
        setImage(dataUrl);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;

        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const downloadLink = URL.createObjectURL(blob);
                const downloadElement = document.createElement('a');
                downloadElement.href = downloadLink;
                downloadElement.download = 'Tarjeta creada.jpg';
                downloadElement.click();
                URL.revokeObjectURL(downloadLink);
            }, 'image/png', 0.9);
        };

        img.src = dataUrl;
    };

    // Con esta función nos encargamos de seccionar en 4 digitos los numero de tarjeta que ingresa el usuario.
    const formatNumber = (numero) => {
        if (numero.length > 4) {
            return numero.match(/.{1,4}/g).join(' - ');
        } else {
            return numero;
        }
    };

    return (
        <>
            <main className='px-10 bg-slate-200 2xl:col-span-7 col-span-6'>
                <div className='py-20 flex flex-col flex-nowrap'>
                    {/* SECCION: Modelo de la carta modelada */}
                    <section className='flex justify-center select-none'>
                        <section
                            ref={ref}
                            className={color || 'p-5 grid grid-cols-7 grid-rows-6 rounded-xl border-2 border-zinc-800 border-dashed'}
                            style={{ width: '652px', height: '422px' }}
                        >
                            <header className="grid grid-cols-2 col-span-7 justify-between">
                                <div className='flex flex-row justify-between align-middle col-span-7 row-span-1'>
                                    <h1 className="text-xl font-bold font-jura justify-self-start">{typeCard || 'CRÉDITO'}</h1>
                                    <img
                                        className="w-32 h-fit justify-self-end"
                                        src={logo || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png'}
                                        alt="lo del banco"
                                    />
                                </div>
                            </header>
                            <article className='col-span-7 row-span-2'>
                                <aside className='flex items-end px-10 h-full'>
                                    <img
                                        src="src/assets/img/credit-card-chip-silver-isolated.png"
                                        alt="chip-tarjeta"
                                        width={'70'}
                                    />
                                </aside>
                            </article>
                            <footer className='col-span-7 row-span-3 text-center'>
                                <div className='h-full flex flex-col justify-end gap-5 '>
                                    <h1 className='font-credit-card font-bold text-xl'>{nombre || 'Tu nombre va aquí'}</h1>
                                    <h2 className='font-credit-card font-extrabold text-4xl'>{numero ? formatNumber(numero) : '0000 - 0000 - 0000 - 0000'}</h2>
                                    <div>
                                        <h3 className='font-credit-card font-bold text-xl'><span className='font-credit-card font-extrabold text-end'>GOOD-THRU</span> {caducidad || '00/00'}</h3>
                                    </div>
                                </div>
                            </footer>
                        </section>
                    </section>
                    {/* SECCION: Apartado de campos */}
                    <section className='2xl:px-36'>
                        <article className='py-10'>
                            <p className='text-xl text-zinc-500 text-center'>
                                Recuerda que esta pagina está creada para que las tarjetas que se hagan sean
                                utilizadas con fines lúdicos y educativos, no usos criminales. Recuerde que el
                                uso que le dé al producto final es responsabilidad suya.
                                <br /><br />
                                Disfruta de tu nueva tarjeta.
                            </p>
                        </article>
                        <button
                            onClick={handleExport}
                            className='text-zinc-200 bg-zinc-800 p-4 rounded w-full hover:bg-green-800 duration-500'
                        >Descargar</button>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Maker;
