let gameGrid = new Array(9);
    for(let i = 0; i < 9; i++)
    {
        gameGrid[i] = new Array(10);
    }

function gameSetup()
{
    for(let i = 0; i < 9; i++)
    {
        for(let k = 0; k < 10; k++)
        {
            gameGrid[i][k] = 'e';
        }
    }
}

let playerTurn = 1;
let win = false;
let draw = false;
let Left=false;
let Right=false;
let Down=false;
let NW=false;
let NE=false;
let SW=false;
let SE=false;

function winCondition(row, col, color)
{
    if(row==5)
    {
    left(row,col,color,1);
    right(row,col,color,1);
    northWest(row,col,color,1);
    northEast(row,col,color,1);
    }
    else if(row==0)
    {
    left(row,col,color,1);
    right(row,col,color,1);
    below(row,col,color,1);
    southWest(row,col,color,1);
    southEast(row,col,color,1);
    }
    else
    {
    left(row,col,color,1);
    right(row,col,color,1);
    northWest(row,col,color,1);
    northEast(row,col,color,1);
    below(row,col,color,1);
    southWest(row,col,color,1);
    southEast(row,col,color,1);
    }

    if(Left==true)
    {
        return true;
    }
    else if(Right==true)
    {
        return true;
    }
    else if(Down==true)
    {
        return true;
    }
    else if(NW==true)
    {
        return true;
    }
    else if(NE==true)
    {
        return true
    }
    else if(SW==true)
    {
        return true;
    }
    else if(SE==true)
    {
        return true;
    }
}

function place(input, bottomRow)
{
    if(bottomRow == -1)
    {
        window.alert("That column is full. Try a different one");
        if(playerTurn==1)
        {
            playerTurn=2;
        }
        else if(playerTurn==2)
        {
            playerTurn=1;
        }
    }
    else if(gameGrid[bottomRow][input]!="e")
    {
        return place(input,bottomRow-1);
    }
    else if(gameGrid[bottomRow][input]=="e")
    {
        if(playerTurn==1)
        {
            gameGrid[bottomRow][input]="r";

            if(winCondition(bottomRow, input, "r") == true)
            {
                win = true;
                window.alert("Player 1 is the winner");
            }
        }
        else if(playerTurn==2)
        {
            gameGrid[bottomRow][input]="b";

            if(winCondition(bottomRow,input,"b")==true)
            {
                win=true;
                window.alert("Player 2 is the winner");

            }
        }
    }
}

function checkForDraw()
{
    let count = 0;
    for(let i = 0; i < 10; i++)
    {
        if(gameGrid[0][i] == "e")
        {
            count++;
        }
    }
    if(count > 0)
    {
        isDraw = false;
    }
    else
    {
        isDraw = true;
    }
}

function left(row, col, color, count)
{
    if(count==4)
    {
        Left=true;
    }
    else
    {
        if(gameGrid[row][col-1]== color && col-1>=0)
        {
            count++;
            return(left(row,col-1,color,count));
        }
    }
}

function right(row, col, color, count)
{
    if(count==4)
    {
        Right=true;
    }
    else
    {
        if(gameGrid[row][parseInt(col)+1]== color && parseInt(col)+1<10)
        {
            count++;
            return(right(row,parseInt(col)+1,color,count));
        }
    }
}

function below(row, col, color, count)
{
    console.log(count);
    if(count==4)
    {
        Down=true;
    }
    else
    {
        if(parseInt(row)+1>5)
        {
            if(gameGrid[row][col]==color)
            {
                count++;
                if(count==4)
                {
                    Down=true;
                }
            }
        }
        else if(gameGrid[parseInt(row)+1][col]==color && parseInt(row)+1<5)
        {
            count++;
            console.log(count);
            return(below(parseInt(row)+1,col,color,count));
        }
    }
}

function northWest(row, col, color, count)
{
    if(count==4)
    {
        NW=true;

    }
    else
    {
        if(parseInt(row)-1==5 || parseInt(col)-1==0)
        {
            if(gameGrid[parseInt(row)-1][parseInt(col)-1]==color)
            {
                count++;
            if(count==4)
            {
                NW=true;
            }
        }
    }
    else if(parseInt(col)-1<0 || parseInt(row)-1<0)
    {
        if(gameGrid[row][col]==color)
        {
            count++;
            if(count==4)
            {
                NW=true;
            }
        }
    }
    else if(gameGrid[row-1][col-1]== color && (parseInt(row)-1>0 && parseInt(col)-1>0))
    {
      count++;
      return(northWest(row-1,col-1,color,count));
    }
  }
}

function northEast(row, col, color, count)
{
    if(count==4)
    {
        NE=true;
    }
    else
    {
        if(parseInt(row)-1==5 && parseInt(col)+1==9)
        {
            if(gameGrid[parseInt(row)-1][parseInt(col)+1]==color)
            {
                count++;
            if(count==4)
            {
                NE=true;
            }
        }
    }
    else if(parseInt(row)-1<0 || parseInt(col)+1>9)
    {
        if(gameGrid[row][col]==color)
        {
            if(count==4)
            {
                NE=true;
            }
        }
    }
    else if(gameGrid[row-1][parseInt(col)+1]== color && (row-1>=0 && parseInt(col)+1<=10))
    {
        count++;
        return(northEast(row-1,parseInt(col)+1,color,count));
    }
  }
}

function southEast(row, col, color, count)
{
    if(count==4)
    {
      SE=true;
    }
    else
    {
        if(parseInt(row)+1==5 && parseInt(col)+1==9)
        {
            if(gameGrid[parseInt(row)+1][parseInt(col)+1]==color)
            {
                count++;
            if(count==4)
            {
                SE=true;
            }
        }
      }
      else if(parseInt(row)+1>5 || parseInt(col)+1>9)
      {
            if(gameGrid[row][col]==color)
            {
                count++;
                if(count==4)
                {
                    SE=true;
                }
            }
      }
      else if(gameGrid[parseInt(row)+1][parseInt(col)+1]==color && (parseInt(row)+1<5 && parseInt(col)+1<9))
      {
            count++;
            return(southEast(parseInt(row)+1,parseInt(col)+1,color,count));
      }
    }
}

function southWest(row, col, color, count)
{
    if(count==4)
    {
        SW=true;
    }
    else
    {
        if(parseInt(row)+1==5 || parseInt(col)-1==0)
        {
            if(gameGrid[parseInt(row)+1][parseInt(col)-1]==color)
            {
                count++;
                if(count==4)
                {
                    SW=true;
                }
            }
        }
        else if(parseInt(row)+1>5 || parseInt(col)-1<0)
        {
            if(gameGrid[row][col]==color)
            {
                count++;
                if(count==4)
                {
                    SW=true;
                }
            }
        }
        else if(gameGrid[parseInt(row)+1][parseInt(col)-1]== color && (parseInt(row)+1<5 && parseInt(col)-1>0))
        {
            count++;
            return(southWest(parseInt(row)+1,parseInt(col)-1,color,count));
        }
    }
}

function southEast(row,col,color,count)
{
    if(count==4)
    {
        SE=true;
    }
    else
    {
        if(parseInt(row)+1==5 && parseInt(col)+1==9)
        {
            if(gameGrid[parseInt(row)+1][parseInt(col)+1]==color)
            {
                count++;
                if(count==4)
                {
                   SE=true;
                }
            }
        }
        else if(parseInt(row)+1>5 || parseInt(col)+1>9)
        {
            if(gameGrid[row][col] == color)
            {
                count++;
                if(count==4)
                {
                    SE=true;
                }
            }
        }
        else if(gameGrid[parseInt(row)+1][parseInt(col)+1]==color && (parseInt(row)+1<5 && parseInt(col)+1<9))
        {
            count++;
            return(southEast(parseInt(row)+1,parseInt(col)+1,color,count));
        }
    }
}

function board()
{
    document.querySelector("#board").innerHTML ="";
    for(let i = 0; i < 9; i++)
    {
        for(let k = 0; k < 10; k++)
        {
            document.querySelector("#board").innerHTML += gameGrid[i][k]+" ";
            document.querySelector("#board").innerHTML+=" ";
        }

        document.querySelector("#board").innerHTML += "<br>";
    }
}
gameSetup();
board();

function gameStart()
{
    if(win == true)
    {

    }

    document.querySelector("#inputButton").addEventListener('click', () =>{
    let input = document.querySelector("#colNum").value;
    document.querySelector("#colNum").value="";
    
    place(input, 5);
    board();
    checkForDraw();
    if(draw == true)
    {
        win == true;
        window.alert("Draw!");
    }

    if(playerTurn == 1)
    {
        playerTurn = 2;
    }
    else
    {
        playerTurn = 1;
    }
    })
}
gameStart();