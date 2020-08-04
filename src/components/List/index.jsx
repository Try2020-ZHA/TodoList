import React from 'react';
import {connect} from 'react-redux';
class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
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
    addList: (text) => dispatch({type: 'ADD_LIST_ITEM'})
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List);
