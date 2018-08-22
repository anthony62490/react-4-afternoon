import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state =
    {
      students: []
    }
  }

  componentDidMount()
  {
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then((response) => this.setState({students:response.data}) )
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.students);
    let people = this.state.students.map((e, i) => (
      <Link to={`/student/${e.id}`} key={e.id}>
        <h3>{e.first_name} {e.last_name}</h3>
      </Link>));
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {people}
      </div>
    )
  }
}