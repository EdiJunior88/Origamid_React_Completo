import React, { Component } from "react";

class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Montou agora");
  }

  componentDidUpdate() {
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log("Saiu da tela");
  }

  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produto;
