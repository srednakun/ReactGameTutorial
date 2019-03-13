import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {

//   //we want the square component to remember that it got clicked
//   //and fill it with an "x" mark
//   //to remember things, components use state
//   constructor(props)
//   {
//     //in JavaScript classes we need to call super when defining the 
//     //constructor of a subclass. 
//     //All react component classes that have a constructor should start 
//     //with a super(props) call
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render() {
//     return (
//       <button 
//         className="square"
//         //here we are passing a function, onClick, as a square property
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props)
{
  return(
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}

class Board extends React.Component {

  //add a contructor to the board and set the board's initial state 
  //to contain an array of 9 nulls corresponding to the 9 squares
  constructor(props)
  {
    super(props);
    this.state = 
    {
      squares: Array(9).fill(null),
      //set the first move in the board to be X
      XisNext:true,
    };
  }

  //xIsNext is a boolean that gets flipped between x and o 
  handleClick(i)
  {
    const squares = this.state.squares.slice();
    squares[i] = this.state.XisNext ? 'X' : 'O';
    this.setState
    ({
      squares: squares,
      XisNext: !this.state.XisNext,
    });
  }

  renderSquare(i) {
    //passing a prop(property) to square called "value"
    return (
      <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
    ////this parenthesis was added so that JavaScript doesn't
      //insert a semicolon after the return and break the code
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
