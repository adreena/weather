import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term :''};
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //using 1- fat arrow wrap up function
  // onInputChanged(term){
  //   console.log(term);
  //   this.setState({ term:term});
  // }
  onInputChanged(event){
    this.setState({ term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //call action fetchWeather
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render(){
    //using 1- fat arrow function wrap up
    // <input placeholder="search ..."
    //        className="form-control"
    //       value={this.state.term}
    //       onChange={(event)=>{this.onInputChanged(event.target.value)}}/>
    return(
      <form className="input-group"
            onSubmit = {this.onFormSubmit}>
        <input placeholder="search ..."
               className="form-control"
              value={this.state.term}
              onChange={this.onInputChanged}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> submit </button>
        </span>
      </form>
    );
  }
}
//
// function mapStateToProps(state){
//   return {};
// }
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
