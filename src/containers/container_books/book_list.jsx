import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../../actions/action_books/books_action.jsx';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    //     props.selectBook(props.books[0]);
    // }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

//1. If state ever changes, render() get called
//2. If state ever changes, the object in mapStateToProps will be assigned to props in the component
//3 .After use 'connect', whatever is returned will show up in props inside of BookList
    //return { asd: '123'}; in render(), console.log(this.props.asd) // -> 123
function mapStateToProps(state) {   // this state is the application state
    return {
        books: state.books
    }
}

// After using 'connect', anything returned from this function will show up in props inside of BookList
    //this.props.selectBook(left); selectBook(right) is the actions we imported in.
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect a function and a component then return a container(add to props)
//connect another function and a component then return a container(add to props)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
