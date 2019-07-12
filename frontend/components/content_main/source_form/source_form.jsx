
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import FollowSourceModalContainer from "./follow_source_modal/follow_source_modal_container";

class SourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: null,
      source: {
        stream_url: ""
      }
    }
    
    this.handleSubmitSource = this.handleSubmitSource.bind(this)
  }

  handleSubmitSource(e) {
    e.preventDefault();

    $.ajax()
      .then(() => this.props.createSource(this.state.source))
      .then(payload => this.setState({searched: payload.source}))
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.source[type] = e.target.value;

      this.setState(nextState);
    };
  }

  render() {
    let source = this.state.searched
    return (
      <div className="discover-form">
        <header>
          Discover the best sources for any topic
        </header>

        <form onSubmit={this.handleSubmitSource}>
          <div className="search-form-wrapper">
            <input 
              className="input-text-discover"
              type="text" 
              placeholder="Search by Name or RSS link"
              value={this.state.source.stream_url}
              onChange={this.handleInput("stream_url")}
              />
              <i className="material-icons search">search</i>
          </div>
          <input type="submit" style={{display: "none"}} />
        </form>

        { source !== null
          ? <div className="search-match">
              <img src={source.icon_url} />
              <div className="search-body">
                <h1>{source.name}</h1>
                <h2>{source.source_url}</h2>
                <p>{source.description}</p>
              </div>
              <div className="follow-modal">
                <FollowSourceModalContainer source={source}/>  
              </div>
            </div>
          : null
        }
      </div>
    );
  }
}

export default SourceForm;