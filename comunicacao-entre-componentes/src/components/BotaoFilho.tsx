type Props = {
    texto: string;
}

export const BotaoFilhoParaPai = ( { texto } : Props) => {
    const textoBotaoFilhoParaPai = () => {
        alert("Filho mandou evento para o pai")
    }

    return (
        <button onClick={textoBotaoFilhoParaPai}> { texto } </button>
    );
}
