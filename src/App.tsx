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
      const {options} = this.state
      const eventValue = e.currentTarget.value
      options.push(eventValue)
      this.setState({options})
      e.currentTarget.value = ''
      localStorage.setItem("opts", JSON.stringify(options))
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
    localStorage.clear();
  }

  deleteOpt = (opt: string) => {
    let options = this.state.options.filter((OPT) => {
      return opt !== OPT
    });
    this.setState({ options })
    localStorage.setItem("opts", JSON.stringify(options))
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem('opts')
      const options: string[] = json !== undefined && json !== null && JSON.parse(json)
      if (!options) throw new Error("There is a problem")
      this.setState({options})
    } catch(e) {
      console.log(e)
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
