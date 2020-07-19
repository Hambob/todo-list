import React from 'react'

export type Props = {
    option: string,
    deleteOpt: (opt: string) => void
}

class View extends React.Component<Props, {}> {
    render() {
        return (
            <div className="opt-row">
                <div className="task">#{this.props.option}</div>
                <div className="remove"><i onClick={(e) => this.props.deleteOpt(this.props.option)} className="fa fa-trash"></i></div>
            </div>
        )
    }
}

export default View;