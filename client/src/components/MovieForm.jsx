import React from "react";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      length: "",
      rating: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const {name, value} = event.target;
    this.setState({[name] : value})
  }

  handleSubmit (event) {
    event.preventDefault();
    const movie = this.state;
    this.props.submitHandler(movie, ()=> {
      this.setState({name: "", length: "", rating: ""})
    })
  }

  render() {
    const { name, length, rating } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            name
            <input
              name="name"
              value={name}
              size="10"
              onChange={this.handleInput}
            />
          </label>
          <label>
            {" "}
            length
            <input
              name="length"
              value={length}
              size="4"
              onChange={this.handleInput}
            />
          </label>
          <label>
            {" "}
            rating
            <input
              name="rating"
              value={rating}
              size="2"
              onChange={this.handleInput}
            />
          </label>
          <button>Add Movie</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
