import Item from './components/Item'
import Card from './components/Card'

const App = () => {
    return (
        <>
            <h1>Aplicação com React</h1>
            <ul>
                <Item>Item 01</Item>
                <Item>Item 02</Item>
                <Item>Item 03</Item>
            </ul>
            <Card />
        </>
    )
}

export default App
