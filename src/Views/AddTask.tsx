import React from 'react'
import '../Styles/AddTask.scss'

export type Props = {
    addInput: (e: any) => void,
    deleteAllOpts: () => void
}

export type State = {
    //
}
class AddTask extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <div className="addTask">
                    <button onClick={this.props.deleteAllOpts}>Remove All</button>
                    <input onKeyDown={this.props.addInput} type="text" placeholder="Type Your Task" />
                </div>
            </React.Fragment>
        )
    }
}

export default AddTask;