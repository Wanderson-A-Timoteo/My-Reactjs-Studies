type Props = {
    texto: string;
    clickFuncao: () => void;
}

export const BotaoFilhoExecutaFuncaoApp = ( {texto, clickFuncao} : Props) => {
    return (
        <button onClick={clickFuncao}> { texto } </button>
    );
}