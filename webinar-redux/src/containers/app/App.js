import React, {Components} from 'react'
import List from '../../components/list';
import Input from '../../components/input';
import Button from '../../components/button';

class App extends Components {
  state = {
    input:''
  };


  handleOnClick = () => {
    console.log('Button was clicked');

  };

  handleOnChange = event => {
    console.log('Input was changed', event.target.value);
  };

  render() {
    return (
      <div>
        <List todoList={[]} />
        <Input onChange={event => this.handleOnChange(event)} />
        <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
      </div>
    );
  }
}

export default App;