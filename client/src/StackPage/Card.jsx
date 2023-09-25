import React from 'react'

export class Card extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href={this.props.link} target='_blank' >
                <div className="card">
                    <div className='left'>
                        <img src={this.props.image} className='image' />
                    </div>
                    <div className='right'>
                        <div>{this.props.title}</div>
                        <div>{this.props.description}</div>
                    </div>
                </div>
            </a>
        )
    }
}

