import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
class TodoListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.item}
                <button onClick={() => this.props.deleteItem(this.props.item)}>X</button>
            </div>
        );
    }
}

// TodoListItems.propTypes = {
//     deleteItem: PropTypes.func.isRequired
//   }

  const mapStateToProps = state => {
    return {text: state.text,
            size: state.size
    }
};
  
  const mapDispatchToProps = dispatch=> ({
    deleteItem: (item) => dispatch({type: 'DELETE_LIST_ITEM', item: item})
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoListItems);