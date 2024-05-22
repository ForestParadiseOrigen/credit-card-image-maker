const ButtonBlack = ({placeholder, type, url, children}) => {
    return(
        <a href={url}>
            <button
                className='text-zinc-200 max-sm:text-xs bg-zinc-800 hover:bg-zinc-700 p-3 rounded duration-50'
                type={type}>
                <span>{placeholder || children}</span>
            </button>
        </a>
    );
};

export default ButtonBlack;