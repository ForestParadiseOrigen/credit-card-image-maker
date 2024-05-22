const InputText = (input) => {
    return (
        <div className="min-w-full border-zinc-800 rounded-md flex flex-nowrap align-bottom">
            <label className="w-64 p-3 bg-zinc-800 text-zinc-100 text-nowrap border-b-2 border-zinc-800 rounded-s-lg"  htmlFor={input.name}>
                {input.label}
            </label>
            <input 
                className="w-full p-3 outline-none border rounded-e-lg border-zinc-400 hover:font-semibold"
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                size={input.maxlength}/>
        </div>
    );
}

export default InputText;

