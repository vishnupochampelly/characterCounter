import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    inputText: '',
    inputList: [],
  }

  onInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onAddText = () => {
    const {inputText} = this.state
    const item = {
      id: uuidv4(),
      name: inputText,
    }

    this.setState(prevState => ({
      inputList: [...prevState.inputList, item],
      inputText: '',
    }))
  }

  renderResults = () => {
    const {inputList} = this.state

    return (
      <div className="card card1">
        <h1>Count The Characters like a Boss...</h1>
        {inputList.length === 0 && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="image"
          />
        )}
        <ul>
          {inputList.map(each => (
            <li key={each.id}>
              <p>
                {each.name} : <span>{each.name.length}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderInputCard = () => {
    const {inputText} = this.state
    return (
      <form className="card card2">
        <h1 className="b">Character Counter</h1>
        <input
          type="text"
          className="input"
          onChange={this.onInputText}
          value={inputText}
          placeholder="Enter the Characters here"
        />
        <button type="button" className="btn" onClick={this.onAddText}>
          Add
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderResults()}
        {this.renderInputCard()}
      </div>
    )
  }
}

export default App
