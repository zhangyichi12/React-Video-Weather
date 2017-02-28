import React, { Component } from 'react';

import BookList from '../../containers/container_books/book_list.jsx';
import BookDetail from '../../containers/container_books/book_detail.jsx';

export default class BooksApp extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4">
                    <BookList/>
                </div>
                <div className="col-md-8">
                    <BookDetail />
                </div>
            </div>
        );
    }
}