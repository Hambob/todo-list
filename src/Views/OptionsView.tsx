import React from 'react'
import OptionView from './OptionView';


import '../Styles/OptionsView.scss'

export type Props = {
    addInput: (e: any) => void,
    options: string[],
    deleteOpt: (opt: string) => void
}

export type State = {
    //
}

class View extends React.Component<Props, {}> {
    render() {
        return (
            <div className="options">
                {
                    this.props.options.map((opt,  idx) => <OptionView option={opt} key={idx} deleteOpt={this.props.deleteOpt}/>)
                }
            </div>
        )
    }
}

export default View;