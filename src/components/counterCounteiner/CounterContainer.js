import React, { PureComponent } from 'react'
import Counter from '../counter/counter'
import { connect } from 'react-redux'

class CounterContainer extends PureComponent {
    render() {
        return (
            <Counter
                counter={this.props.counter}
                increment={this.props.increment}
                decrement={this.props.decrement}
             />
        )
    }
}

const mapStateToProps = state => ({
        counter: state
})

const mapDispatchToProps = dispatch => ({
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)