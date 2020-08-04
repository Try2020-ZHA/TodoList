import React from 'react';
import {connect} from 'react-redux';
class TodoListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text:[], size: 0  };
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
                <button onClick={() => this.props.addList(this.state.text)}>click</button>
            </div>
        );
    }
}
  
const mapStateToProps = state => {
    return {text: state.text,
            size: state.size
    }
};
  
  const mapDispatchToProps = dispatch=> ({
    addList: (text) => dispatch({type: 'ADD_LIST_ITEM', text: text})
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoListInput);