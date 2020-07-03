import React from 'react'

export type Props = {
    option: string,
    deleteOpt: (opt: string) => void
}

class View extends React.Component<Props, {}> {
    render() {
        return (
            <React.Fragment>
                <div className="opts-row">
                    <p>#{this.props.option}</p>
                    <p onClick={(e) => this.props.deleteOpt(this.props.option)}>
                        <i className="fa fa-times"></i>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default View;