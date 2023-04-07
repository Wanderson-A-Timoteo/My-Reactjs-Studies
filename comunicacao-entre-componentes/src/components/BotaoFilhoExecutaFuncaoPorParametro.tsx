type Props = {
    texto: string;
    clickFuncaoParametro: (parametro: string) => void;
}

export const BotaoFilhoExecutaFuncaoPorParametro = ( {texto, clickFuncaoParametro} : Props) => {
    const handleClick = () => {
        clickFuncaoParametro("Executou função por parametro");
    }
    return (
        <button onClick={handleClick}> { texto } </button>
    );
}