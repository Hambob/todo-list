import React from 'react';
import ActionView from './Views/ActionView'
import OptionsView from './Views/OptionsView'
import './App.scss'
import AddTask from './Views/AddTask';

export type State = {
  options: string[]
}
class App extends React.Component<{}, State> {
  state: State = {
    options: []
  }
  addInput = (e: any) => {
    if(e.keyCode === 13 && e.currentTarget.value) {
      let {options} = this.state
      let eventValue = e.currentTarget.value
      options.push(eventValue)
      this.setState({options})
      localStorage.setItem("opts", JSON.stringify(options))
      e.currentTarget.value = ''
    }
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  deleteAllOpts = () => {
    if(this.state.options.length){
      this.setState({
        options: []
      })
    }
  }

  deleteOpt = (opt: string) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((OPT) => {
        return opt !== OPT
      })
    }))
  }

  componentDidMount() {
    try{
    let json = localStorage.getItem('opts')
    const options: string[] = json !== null ? JSON.parse(json) : []
    this.setState({options})
    } catch(e) {
      console.log('error')
    }

  }
  render() {
    return (
      <React.Fragment>
        <div className="main--container">
          <h1>TODO List Application</h1>
          <ActionView handlePick={this.handlePick}/>
          <div className="opts--container">
            <h1>Your tasks are : </h1>
            <OptionsView addInput={this.addInput} options={this.state.options} deleteOpt={this.deleteOpt}/>
            <AddTask addInput={this.addInput} deleteAllOpts={this.deleteAllOpts}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
