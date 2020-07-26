import React, {Components} from 'react'
import { render } from '@testing-library/react'

class App extends Components {
  state = {
    input:''
  }
};

render() {
  return (
    <h1>Hey</h1>
  )
}

export default App;