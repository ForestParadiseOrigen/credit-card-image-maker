import ButtonBlack from "../../utils/buttons/ButtonBlack";

const Header = () => {
    return(
        <>
      <header className="flex justify-between align-middle px-10 py-5 bg-zinc-100">
          <h1 className="self-center uppercase font-extrabold max-sm:text-xl text-3xl text-zinc-800">
            Creador de tarjetas
          </h1>
          <ButtonBlack type='submit' >Ir a GitHub</ButtonBlack>
      </header>
    </>
    );
}

export default Header;