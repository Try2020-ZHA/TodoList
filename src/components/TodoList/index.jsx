import React from 'react';
import TodoListItems from '../TodoListItems';
import PropTypes from 'prop-types';
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
                    this.props.items.map((item, index) => (<TodoListItems item={item} key={index} />))
                }
            </div>
        );
    }
}

TodoList.propTypes = {
    addList: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

export default connect(
    mapStateToProps,
    null
)(TodoList);
