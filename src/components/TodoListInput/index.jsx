import React from 'react';
import {connect} from 'react-redux';
class TodoListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text:"", size: 0 ,done:false };
    }

    handleAdd = () => {
        if(this.state.text===""){
            alert("input again")
            return;
        }
        this.props.addList({"text":this.state.text,"done":false})
        this.setState({text: ""})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
                <button onClick={this.handleAdd}>click</button>
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
    addList: (obj) => dispatch({type: 'ADD_LIST_ITEM', obj: obj})
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoListInput);