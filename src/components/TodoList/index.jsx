import React from 'react';
import TodoListItems from '../TodoListItems';
import { connect } from 'react-redux';
class TodoList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         size: 1,
    //         text: ""
    //     };
    // }

    render() {
        return (
            
                    this.props.items.map((item, index) => (<TodoListItems 
                        item={item}
                        key={index} 
                        index={index}/>))
            
        );
    }
}


const mapStateToProps = state => {
    return {
        items: state.items
    }
};
export default connect(mapStateToProps)(TodoList);
