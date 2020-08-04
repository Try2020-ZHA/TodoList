import React from 'react';
import PropTypes from 'prop-types';
class TodoListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                todoListItems: {this.props.item}
                <button>X</button>
            </div>
        );
    }
}

TodoListItems.propTypes = {
    addList: PropTypes.func.isRequired
  }

export default TodoListItems;