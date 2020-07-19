import React from 'react'
import '../Styles/AddTask.scss'

export type Props = {
    addInput: (e: any) => void
}

export type State = {
    //
}
class AddTask extends React.Component<Props, State> {
    render() {
        return (
                <React.Fragment>
                    <input onKeyDown={this.props.addInput} type="text" placeholder="Type Your Task" />
                </React.Fragment>
        )
    }
}

export default AddTask;