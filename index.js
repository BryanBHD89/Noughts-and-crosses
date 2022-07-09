let player1 = true
let player2 = false
let block1 = 0
let block2 = 0
let block3 = 0
let block4 = 0
let block5 = 0
let block6 = 0
let block7 = 0
let block8 = 0
let block9 = 0




document.getElementById("data-cell").addEventListener("click", click)
document.getElementById("data-cell2").addEventListener("click", click2)
document.getElementById("data-cell3").addEventListener("click", click3)
document.getElementById("data-cell4").addEventListener("click", click4)
document.getElementById("data-cell5").addEventListener("click", click5)
document.getElementById("data-cell6").addEventListener("click", click6)
document.getElementById("data-cell7").addEventListener("click", click7)
document.getElementById("data-cell8").addEventListener("click", click8)
document.getElementById("data-cell9").addEventListener("click", click9)
document.getElementById("btn").addEventListener("click",restartGame)

function restartGame(){
    block1 = 0
    block2 = 0
    block3 = 0
    block4 = 0
    block5 = 0
    block6 = 0
    block7 = 0
    block8 = 0
    block9 = 0

    document.getElementById("data-cell").style.pointerEvents = "auto"
    document.getElementById("data-cell2").style.pointerEvents = "auto"
    document.getElementById("data-cell3").style.pointerEvents = "auto"
    document.getElementById("data-cell4").style.pointerEvents = "auto"
    document.getElementById("data-cell5").style.pointerEvents = "auto"
    document.getElementById("data-cell6").style.pointerEvents = "auto"
    document.getElementById("data-cell7").style.pointerEvents = "auto"
    document.getElementById("data-cell8").style.pointerEvents = "auto"
    document.getElementById("data-cell9").style.pointerEvents = "auto"

    document.getElementById("x").style.display = "none"
    document.getElementById("x2").style.display = "none"
    document.getElementById("x3").style.display = "none"
    document.getElementById("x4").style.display = "none"
    document.getElementById("x5").style.display = "none"
    document.getElementById("x6").style.display = "none"
    document.getElementById("x7").style.display = "none"
    document.getElementById("x8").style.display = "none"
    document.getElementById("x9").style.display = "none"

    document.getElementById("o").style.display = "none"
    document.getElementById("o2").style.display = "none"
    document.getElementById("o3").style.display = "none"
    document.getElementById("o4").style.display = "none"
    document.getElementById("o5").style.display = "none"
    document.getElementById("o6").style.display = "none"
    document.getElementById("o7").style.display = "none"
    document.getElementById("o8").style.display = "none"
    document.getElementById("o9").style.display = "none"
    document.getElementById("player").innerHTML = "player1's turn"

    document.getElementById("btn").style.display = "none"
}



function checkWin(){
       console.log(block1),
        console.log(block2),
        console.log(block3)
    // player1 check
    if(block1 === 1 && block2 === 1 && block3 === 1){
     document.getElementById("player").innerHTML = "Player1 Wins"
     document.getElementById("btn").style.display = "block"
    }else if (block4 === 1 && block5 === 1 && block6 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins"
        document.getElementById("btn").style.display = "block"  
    }else if (block7 === 1 &&  block8 === 1 && block9 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    } else if (block1 === 1 && block4 === 1 && block7 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    }else if (block2 === 1 && block5 === 1 && block8 ===1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    }else if (block3 === 1 && block6 === 1 && block9 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    }else if (block1 === 1 && block5 === 1 && block9 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    }else if (block3 === 1 && block5 === 1 && block7 === 1){
        document.getElementById("player").innerHTML = "Player1 Wins" 
        document.getElementById("btn").style.display = "block"
    // player2 check
    }else if(block1 === 2 && block2 === 2 && block3 === 2){
        document.getElementById("player").innerHTML = "Player2 Wins" 
        document.getElementById("btn").style.display = "block" 
       }else if (block4 === 2 && block5 === 2 && block6 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins"
           document.getElementById("btn").style.display = "block"  
       }else if (block7 === 2 &&  block8 === 2 && block9 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       } else if (block1 === 2 && block4 === 2 && block7 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       }else if (block2 === 2 && block5 === 2 && block8 ===2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       }else if (block3 === 2 && block6 === 2 && block9 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       }else if (block1 === 2 && block5 === 2 && block9 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       }else if (block3 === 2 && block5 === 2 && block7 === 2){
           document.getElementById("player").innerHTML = "Player2 Wins" 
           document.getElementById("btn").style.display = "block"
       }
       
}





function click(){
    
    document.getElementById("data-cell").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x").style.display = "block"
        block1 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o").style.display = "block"
        block1 = 2
        checkWin()
        return player1 = true
    }

    
}

function click2(){
    
   
    document.getElementById("data-cell2").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x2").style.display = "block"
        block2 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o2").style.display = "block"
        block2 = 2
        checkWin()
        return player1 = true
    }
    
}

function click3(){
 
  
    document.getElementById("data-cell3").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x3").style.display = "block"
        block3 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o3").style.display = "block"
        block3 = 2
        checkWin()
        return player1 = true
    }
  
}


function click4(){
   
  
    document.getElementById("data-cell4").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x4").style.display = "block"
        block4 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o4").style.display = "block"
        block4 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)

}

function click5(){
    
   
    document.getElementById("data-cell5").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x5").style.display = "block"
        block5 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o5").style.display = "block"
        block5 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)

}

function click6(){
   
  
    document.getElementById("data-cell6").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x6").style.display = "block"
        block6 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o6").style.display = "block"
        block6 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)
}

function click7(){
   
   
    document.getElementById("data-cell7").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x7").style.display = "block"
        block7 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o7").style.display = "block"
        block7 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)

}

function click8(){
    
    checkWin()
    document.getElementById("data-cell8").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x8").style.display = "block"
        block8 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o8").style.display = "block"
        block8 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)

}

function click9(){
   
    checkWin()
    document.getElementById("data-cell9").style.pointerEvents = "none"
    if (player1 === true) {
        document.getElementById("player").innerHTML = "Player 2's turn!"
        document.getElementById("x9").style.display = "block"
        block9 = 1
        checkWin()
        return player1 = false
        
    }else if (player1 === false){
        document.getElementById("player").innerHTML = "Player 1's turn!"
        document.getElementById("o9").style.display = "block"
        block9 = 2
        checkWin()
        return player1 = true
    }
    console.log(player1)
}


