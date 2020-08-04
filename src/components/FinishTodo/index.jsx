import React from 'react';
import {connect} from 'react-redux';
import TodoListItems from '../TodoListItems';

class FinishTodo extends React.Component {
 

    render() {
        const result = this.props.items.filter(item =>item.done === true)

        console.log(result);
        return (
                result.map((item, index) => (<TodoListItems 
                    item={item}
                    key={index} 
                    index={index}/>))
            
        );
    }
}


const mapStateToProps = state => {
    return {items: state.items}
};

  
  export default connect(mapStateToProps)(FinishTodo);