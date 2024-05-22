const Hero = () => {
    return(
        <>
            <section className="w-full h-96 flex flex-col justify-center align-middle text-zinc-800 text-center bg-gradient-to-b from-zinc-100 to-white">
                <h1 className="text-6xl font-bold uppercase mb-5">¡Bienvenido! <br /><span className="bg-gradient-to-br from-zinc-400 to-orange-700 bg-clip-text text-transparent">exportalas como quieras</span></h1>
                <p className="text-xl font-regular xl:px-96 px-10">Una herramienta facil en la que vas a lograr crear tu tarjeta de crédito o débito como quieras. Tu solamente escribe y elige lo que desses, y exportalo. Estas tarjetas se exportaran como imagenes en tu dispositivo.</p>
            </section>
        </>
    );
}

export default Hero;