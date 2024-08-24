import React, { useState } from 'react'
import './board.css'
import circle from '../assets/images/circle.png'
import cross from '../assets/images/cross.png'



var game = ['','','','','','','','',''];


const Board = () => {
    const [player1, setPlayer1] = useState(0); // Player 1 score
    const [player2, setPlayer2] = useState(0); // Player 2 score
    const [draw, setDraw] = useState(0); // Draw count
    
    var [count, setCount] = useState(0);
    var [lock, setLock] = useState(false);

    const play = (e,num) => { 
        if (lock) {
            return ;
        }
        else if(game [num] === ''){
            if (count % 2 === 0){
                e.target.innerHTML = `<img src='${cross}' alt="cross" />`;
                game [num] = 'x';
            }
            else{
                e.target.innerHTML = `<img src='${circle}' alt="circle" />`;
                game [num] = 'o';
            }
            setCount(++count);
            checkWin();
             
        }
    }

    const checkWin = () => {
        if(game[0] === game[1] && game[1] === game[2] && game[2]!=''){
            setLock(true);
            won(game[0]);
            
        }
        else if(game[3] === game[4] && game[4] === game[5] && game[5]!=''){
            setLock(true);
            won(game[3]);
            
        }
        else if(game[6] === game[7] && game[7] === game[8] && game[8]!=''){
            setLock(true);
            won(game[6]);
            
        }
        else if(game[0] === game[3] && game[3] === game[6] && game[6]!=''){
            setLock(true);
            won(game[0]);
            
        }
        else if(game[1] === game[4] && game[4] === game[7] && game[7]!=''){
            setLock(true);
            won(game[1]);
            
        }
        else if(game[2] === game[5] && game[5] === game[8] && game[8]!=''){
            setLock(true);
            won(game[2]);
            
        }
        else if(game[0] === game[4] && game[4] === game[8] && game[8]!=''){
            setLock(true);
            won(game[0]);
            
        }
        else if(game[2] === game[4] && game[4] === game[6] && game[6]!=''){
            setLock(true);
            won(game[2]);
            
        }
        else if(count === 9){
            setDraw(prevDraw => prevDraw + 1);
            setLock(true);
        }
        
        
        

    }

    

    const won = (winner) => {
        if (winner === 'x'){
            setPlayer1(prevPlayer1 => prevPlayer1 + 1);
        }
        else {
            setPlayer2(prevPlayer2 => prevPlayer2 + 1);
        }
    }

    const resetGame = () => {
        game = ['','','','','','','','',''];
        setCount(0);
        setLock(false);
        const columns = document.querySelectorAll('.column');
        columns.forEach(column => {
            column.innerHTML = '';
    });

    }
  
    return (
    <>
        <div className="container">
            <span>Player 1    -    Player 2</span>
            <span>{player1}          {draw}          {player2}</span>
            <span id='score'></span>
            <div className="row">
                <div className="column" onClick={(e)=>{play(e,0)}}></div>
                <div className="column" onClick={(e)=>{play(e,1)}}></div>
                <div className="column" onClick={(e)=>{play(e,2)}}></div>
            </div>
            <div className="row">
                <div className="column" onClick={(e)=>{play(e,3)}}></div>
                <div className="column" onClick={(e)=>{play(e,4)}}></div>
                <div className="column" onClick={(e)=>{play(e,5)}}></div>
            </div>
            <div className="row">
                <div className="column" onClick={(e)=>{play(e,6)}}></div>
                <div className="column" onClick={(e)=>{play(e,7)}}></div>
                <div className="column" onClick={(e)=>{play(e,8)}}></div>
            </div>
            <button onClick={resetGame}>Reset</button>
        </div>
    </>
  )
}

export default Board