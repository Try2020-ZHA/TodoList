import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
class TodoListItems extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    handleMark = () => {
        this.props.markListItem(this.props.index);
    }

    render() {
        return (
            <div>
                <label style={{ textDecorationLine: this.props.item.done ? 'line-through' : 'none' }} 
                onClick={() => this.props.markListItem(this.props.index)}>
                    {this.props.item.text}
                </label>
                <button onClick={() => this.props.deleteItem(this.props.item)}>X</button>
            </div>
        );
    }
}

TodoListItems.propTypes = {
    markListItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

const mapDispatchToProps = dispatch => ({
    markListItem: (index) => dispatch({ type: 'MARK_LIST_ITEM', index: index }),
    deleteItem: (item) => dispatch({ type: 'DELETE_LIST_ITEM', item: item })
})

export default connect(null, mapDispatchToProps)(TodoListItems);