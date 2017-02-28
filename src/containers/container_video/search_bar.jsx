import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';

import { fetchVideos, fetchOneVideo } from '../../actions/action_video/action_video.jsx';

// const SearchBar = () => {
//     var a = 3;
//     var foo = (v) => {
//         return v
//     }
//     return (
//         <div>
//             <input />
//             <p>{a}</p>
//             <p>{foo(5)}</p>
//         </div>
//     )
// };
// export default SearchBar;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        const throttlingUpdateVideos = _.debounce(() => {
            this.props.fetchVideos(this.state.term);
            this.props.fetchOneVideo(this.state.term);
        }, 300);

        return (
            <div className="input-group search-bar">
                <i className="input-group-addon  glyphicon glyphicon-search" aria-hidden="true"></i>
                <input className="form-control"
                    value={this.state.term}
                    onChange={
                        (event) => {
                            // event.persist(); //to avoid event be nullified
                            this.setState({ term: event.target.value });
                        }
                    }
                    onKeyPress={
                        (event) => {
                            if(event.key === 'Enter') {
                                throttlingUpdateVideos();
                            };
                        }
                    }
                />
                <span className="input-group-btn">
                    <button
                        type="button" className="btn btn-primary"
                        onClick={ throttlingUpdateVideos }
                    >Search</button>
                </span>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchVideos, fetchOneVideo }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);