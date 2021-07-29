let ttt = [[1,2,3], [4,5,6], [7,8,9]]

let counter = 1

// function to print the result of symbol which wins
function result(letter){
    alert(letter+" wins the game")
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    }
    counter = 1
    for(let i=0; i<3; i++) {
        ttt[i] = [2*i + 1, 2*i + 2, 2*i + 3];
    }
    // console.log("after clearing: Value", value)
    console.log("after clearing: ttt", ttt)
}

// function to display the X's and O's
function render_letter(object){
    if (counter<=9)
    {
        var id = object.id;
        let index = id.split("")
        if(counter%2 != 0){
            if(document.getElementById(id).innerText == ""){
            document.getElementById(id).innerText = "O" 
            ttt[parseInt(index[0])][parseInt(index[1])] = "O"
            counter++
            }
            else 
            alert('Choose other tile')
        }
        else{
            if(document.getElementById(id).innerText == ""){
            document.getElementById(id).innerText = "X" 
            ttt[parseInt(index[0])][parseInt(index[1])] = "x"
            counter++
            }
            else
            alert('Choose other tile')         
        }
           console.log(ttt)
           if(ttt[0][0]==ttt[0][1] && ttt[0][1]==ttt[0][2])
           result(ttt[0][0])
           if(ttt[1][0]==ttt[1][1] && ttt[1][1]==ttt[1][2])
           result(ttt[1][0])
           if(ttt[2][0]==ttt[2][1] && ttt[2][1]==ttt[2][2])
           result(ttt[6].innerText)

           if(ttt[0][0]==ttt[1][0] && ttt[1][0]==ttt[2][0])
           result(ttt[0].innerText)
           if(ttt[0][1]==ttt[1][1] && ttt[1][1]==ttt[2][1])
           result(ttt[0][1])
           if(ttt[0][2]==ttt[1][2] && ttt[1][2]==ttt[2][2])
           result(ttt[0][2])

           if(ttt[0][0]==ttt[1][1] && ttt[1][1]==ttt[2][2])
           result(ttt[0][0])
           if(ttt[0][2]==ttt[1][1] && ttt[1][1]==ttt[2][1])
           result(ttt[0][2])
    }
}
