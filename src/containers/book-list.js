import React, {Component} from 'react';
import { connect } from 'react-redux';
//curly braces pull off just a single propertrty
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux' // to glue actions into the app

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"> {book.title}
        </li>
      );
    });
  } // close RenderList

  render () {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  } //close render

} // close BookList


//The glue between react and redux:
function mapStateToProps(state) {
  //takes in the entire application state
  //whatever is returned from here will show up as props inside of BookList
  //Now you see how containers are the link between React and Redux
  return {
    books: state.books
  }; // close return
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed
    // to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
    // allows calling this.props.selectBook in the appropriate place
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook, and make it avial as a prop
// container files export CONTAINERS not plain components
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//notes: whenever application state changes, this container
//instantly re-renders with the new state.
// and likewise, state becomes available via connect.
