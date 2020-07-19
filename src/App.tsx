import React from 'react';
import './App.scss'
import OptionsView from './Views/OptionsView'
import AddTask from './Views/AddTask';

export type Props = {
  //
}

export type State = {
  options: string[]
}
class App extends React.Component<Props, State> {
  state: State = {
    options: []
  }
  addInput = (e: any) => {
    if (e.keyCode === 13 && e.currentTarget.value) {
      const { options } = this.state
      const eventValue = e.currentTarget.value
      options.push(eventValue)
      this.setState({ options })
      e.currentTarget.value = ''
      localStorage.setItem("opts", JSON.stringify(options))
    }
  }

  deleteAllOpts = () => {
    if (this.state.options.length) {
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
    try {
      const json = localStorage.getItem('opts')
      const options: string[] = json !== undefined && json !== null && JSON.parse(json)
      if (!options) throw new Error("There is a problem")
      this.setState({ options })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
        <div className="main--container">
          <header>
            <h1><i className="fa fa-list">   TODO List Application</i></h1>
          </header>
          <div className="opts--container">
              <div className="top-area">
                  <div className="top-area__taskName"><h4>#Task:</h4></div>
                  <div className="top-area__removeAll"><button className={this.state.options.length === 0 ? 'disabled' : ''}  onClick={this.deleteAllOpts}>Remove All</button></div>
              </div>
            {
            this.state.options.length === 0 ? (
             <div className="empityTasks">
                There are no tasks
             </div>
            ) 
            : 
            (
              <OptionsView options={this.state.options} addInput={this.addInput} deleteOpt={this.deleteOpt}/>
            )
            }
          </div>
          <div className="input--con">
              <AddTask addInput={this.addInput}/>
          </div>
        </div>
    )
  }
}

export default App;
