import React from 'react';
import TodoListItems from '../TodoListItems';
import { connect } from 'react-redux';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 1,
            text: ""
        };
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => (<TodoListItems 
                        item={item}
                        key={index} 
                        index={index}/>))
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        items: state.items
    }
};

  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(TodoListItems);

// export default TodoList;
export default connect(mapStateToProps)(TodoList);
