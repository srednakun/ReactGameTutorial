import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//orginal square class that has now become a shortened function below
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

//when you click a square, it gets filled with something
//seee handleclick for more info
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

  //when a square is clicked, 
  //flip between showing an X or O
  //unless a player has won
  handleClick(i)
  {
    //we used slice to make the square array immutable
    //this created a new copy of squares array
    //after every move
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
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
    //change the status rext in the board's render so that it
    //displays which player has the next turn
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    //check if a player has won and display who won
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.XisNext ? 'X' : 'O');
    }

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

//declare a winner
//given an array of 9 squares, this function will
//check for a winner and return 'X', 'O', or null
function calculateWinner(squares)
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}








// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
