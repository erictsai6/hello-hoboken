import React from 'react';
import Cell from './cell.jsx';
import $ from 'jquery';
import CellModel from './cell.model.jsx';

class Driver extends React.Component {
    
    constructor() {
        super();

        this.moveHandler = this.moveHandler.bind(this);
        this.emptySpaces = Array.from(new Array(16), (v, k) => k);

        // Construct 4x4 empty board
        this.state = {
            totalScore: 0,
            board: Array.from(new Array(16), () => new CellModel()),
        }; 
    }

    componentDidMount() {
        $(document.body).on('keyup', this.moveHandler);
    }
    
    componentWillUnmount() {
        $(document.body).off('keyup', this.moveHandler);
    }

    render() {
        var board = this.state.board.map((cell, index) => {
            return <Cell key={index} cell={cell}></Cell>
        });
        return (            
        <div className="board">
            {board}
        </div>
        );
    }

    restart() {
        this.setState({
            totalScore: 0,
            board: Array.from(new Array(16), () => new CellModel()),
        });
    }

    getEmptySpaces() {
        this.emptySpaces = [];
        for (var i = 0; i < 16; i++) {
            if (!this.state.board[i].value) {
                this.emptySpaces.push(i);
            }
        }
    }

    addTwo() {
        var max = this.emptySpaces.length,
            digit = Math.floor(Math.random() * max);
        
        this.setState((previous, current) => {
            previous.board[this.emptySpaces[digit]].value = 2;
            return {
                board: previous.board
            };
        });
    }

    totalScore() {
        var totalScore = 0; 
        for (var i = 0; i < 16; i++) {
            if (this.state.board[i].value) {
                totalScore += this.state.board[i].value;
            }
        }
        this.setState({
            totalScore: totalScore
        });
    }

    getAbsoluteIndex(x, y) {
        return x * 4 + y;
    }    

    /**
     * @param direction - 0 up, 1 right, 2 down, 3 left
     * 
     * Iterate through row 
     * - Iterate through row, 
     * - first non null, matches with next non-null 
     * - Find the 
     * 
     * 0  1  2  3
     * 4  5  6  7
     * 8  9  10 11
     * 12 13 14 15
     */

    /**
     * Used for debugging purposes only
     */
    printBoard() {
        for (var i = 0; i < 4; i++) {
            var row = '';
            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j);
                row += this.state.board[absIndex].value ? this.state.board[absIndex].value : '0';
                row += '  ';
            }
            console.log(row);
            console.log('-----');
        }
    }

    moveHandler(e) {      

        switch (e.keyCode) {
            // UP
            case 38:
                this.moveCells(-1, 0); 
                break;
            // RIGHT
            case 39:
                this.moveCells(0, 1);                
                break;
            // DOWN
            case 40:
                this.moveCells(1, 0);
                break;
            // LEFT
            case 37:
                this.moveCells(0, -1);
                break;
            default: 
                break;
        } 

        this.getEmptySpaces();   
        this.addTwo();    

        this.printBoard();
    }

    getAbsoluteIndex(x, y, deltaX, deltaY) {
        var getIndex = (x, y) => {
            return x * 4 + y;
        };

        if (deltaX === 1 && deltaY === 0) {
            return getIndex(y, x);
        } else if (deltaX === -1 && deltaY === 0) {
            return getIndex(4 - (y + 1), x);
        } else if (deltaX === 0 && deltaY === 1) {
            return getIndex(x, y);
        } else if (deltaX === 0 && deltaY === -1) {
            return getIndex(x, 4 - (y + 1));
        }
    };
        
    
    moveCells(deltaX, deltaY) {

        for (var i = 0; i < 4; i++) {
            var validCells = [];

            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j, deltaX, deltaY),
                    currentValue = this.state.board[absIndex].value;        
                if (currentValue) {
                    if (validCells.length > 0 && 
                            validCells[validCells.length - 1] === currentValue) {
                        validCells[validCells.length - 1] = validCells[validCells.length - 1] * 2; 
                    } else {
                        validCells.push(currentValue);
                    }
                }                     
            }

            var numEmptyCells = 4 - validCells.length;
            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j, deltaX, deltaY);

                this.setState((previous, current) => {
                    if (j < numEmptyCells) {
                        previous.board[absIndex].value = null;
                    } else {
                        previous.board[absIndex].value = validCells[j - numEmptyCells];
                    }
                    return {
                        board: previous.board
                    };
                });
                
            }
        }
    }

    canMove(deltaX, deltaY) {
        for (var i = 0; i < 4; i++) {
            var validCells = [];

            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j, deltaX, deltaY),
                    currentValue = this.state.board[absIndex].value;        
                if (currentValue) {
                    if (validCells.length > 0 && 
                            validCells[validCells.length - 1] === currentValue) {
                        validCells[validCells.length - 1] = validCells[validCells.length - 1] * 2; 
                    } else {
                        validCells.push(currentValue);
                    }
                }                     
            }

            var numEmptyCells = 4 - validCells.length;
            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j, deltaX, deltaY);

                this.setState((previous, current) => {
                    if (j < numEmptyCells) {
                        previous.board[absIndex].value = null;
                    } else {
                        previous.board[absIndex].value = validCells[j - numEmptyCells];
                    }
                    return {
                        board: previous.board
                    };
                });
                
            }
        }
    }    

}

export default Driver;