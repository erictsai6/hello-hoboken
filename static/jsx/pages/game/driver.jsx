import React from 'react';
import Cell from './cell.jsx';
import $ from 'jquery';
import 'jquery-touchswipe';
import CellModel from './cell.model.jsx';

class Driver extends React.Component {
    
    constructor() {
        super();

        this.moveHandler = this.moveHandler.bind(this);
        this.restart = this.restart.bind(this);

        this.emptySpaces = Array.from(new Array(16), (v, k) => k);
        this.ended = false

        // Construct 4x4 empty board
        this.state = {
            totalScore: 0,
            board: Array.from(new Array(16), () => new CellModel()),
        }; 

    }

    componentDidMount() {

        var self = this;

        $(document.body).on('keyup', this.moveHandler);
        // $(document.body).on('touchmove', this.disableTouchStart);
        $(document.body).swipe({
            swipeLeft: (event, direction, distance, duration, fingerCount) => {
                event.keyCode = 37;
                self.moveHandler(event);
            },
            swipeRight: (event, direction, distance, duration, fingerCount) => {
                event.keyCode = 39;
                self.moveHandler(event);
            },
            swipeDown: (event, direction, distance, duration, fingerCount) => {
                event.keyCode = 40;
                self.moveHandler(event);
            },
            swipeUp: (event, direction, distance, duration, fingerCount) => {
                event.keyCode = 38;
                self.moveHandler(event);
            }
        });
        this.addTwo();
    }
    
    componentWillUnmount() {
        $(document.body).off('keyup', this.moveHandler);
        // $(document.body).off('touchmove', this.disableTouchStart);
    }

    render() {
        var board = this.state.board.map((cell, index) => {
            return <Cell key={index} cell={cell}></Cell>
        });
        return (    
        <div>      
            <div>Total score: {this.state.totalScore}</div>  
            <div className="board">
                {board}
            </div>
            <button onClick={this.restart}>Restart</button>
        </div>
        );
    }

    disableTouchStart(e) {
        e.preventDefault();
    }

    restart() {
        this.ended = false;
        
        this.setState({
            totalScore: 0,
            board: Array.from(new Array(16), () => new CellModel()),
        });

        this.addTwo();
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
                var absIndex = this.getAbsoluteIndex(i, j, 0, 1);
                row += this.state.board[absIndex].value ? this.state.board[absIndex].value : '0';
                row += '  ';
            }
            console.log(row);
            console.log('-----');
        }
    }

    moveHandler(e) {      

        var canMove = false;

        switch (e.keyCode) {
            // UP
            case 38:  
                if (this.canMove(-1, 0)) {
                    this.moveCells(-1, 0);
                    canMove = true;
                }                       
                break;
            // RIGHT
            case 39:
                if (this.canMove(0, 1)) {
                    this.moveCells(0, 1);                
                    canMove = true;
                }
                break;
            // DOWN
            case 40:
                if (this.canMove(1, 0)) {
                    this.moveCells(1, 0);
                    canMove = true;
                }
                break;
            // LEFT
            case 37:
                if (this.canMove(0, -1)) {
                    this.moveCells(0, -1);
                    canMove = true;
                }
                break;
            default: 
                break;
        } 

        if (canMove) {
            this.getEmptySpaces();   
            this.addTwo();    

            this.totalScore();
            this.printBoard();

            if (this.canMove(0, 1) && 
                this.canMove(1, 0) &&
                this.canMove(0, -1) &&
                this.canMove(-1, 0)) {

                this.ended = true;
            }
        }            
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
            var previousValue = null;

            for (var j = 0; j < 4; j++) {
                var absIndex = this.getAbsoluteIndex(i, j, deltaX, deltaY),
                    currentValue = this.state.board[absIndex].value;        
                if (previousValue) {
                    if (!currentValue || currentValue === previousValue) {
                        return true;
                    }                    
                }
                previousValue = currentValue;                    
            }           
        }

        return false;
    }    

}

export default Driver;