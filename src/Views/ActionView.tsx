import React from 'react'
import  '../Styles/ActionView.scss'

export type Props = {
    handlePick: () => void
}

export type State = {
    //
}

class ActionView extends React.Component<Props, State> {
    render() {
        return(
            <React.Fragment>
                <button onClick={this.props.handlePick}>What should i Do ?!</button>
            </React.Fragment>
        )
    }
}

export default ActionView;