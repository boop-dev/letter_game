
const TABLE_SIZE = Math.round(window.innerWidth * 0.5)/30;// window width divided by approximate width of one button
const letter_arr = [['6', '9'],['q', 'p'],['W', 'M'],['E', 'F'],['2', 'Z'],['0', 'O'],
                    ['1', 'I'],['S', '5'],['K', 'X'],['g', 'p'],['g', 'q']];
const board = document.getElementById("board");
let score = -1;

function renderBoard (){
    board.innerHTML = '';
    var tree = document.createDocumentFragment();
    let letter_selection = refreshBoard();
    let rand_row = Math.abs(Math.ceil((Math.random() * TABLE_SIZE-1)));
    let rand_col = Math.abs(Math.ceil((Math.random() * TABLE_SIZE-1)));
    score++;

    for(let i = 0; i<TABLE_SIZE; i++){
        let p = document.createElement("p");
        p.setAttribute("class", "row");
        for(let j = 0; j<TABLE_SIZE; j++){
            if(i === rand_row && j === rand_col){
                let button = document.createElement("button");
                button.setAttribute("onclick", "renderBoard()");
                button.setAttribute("id", "sol-btn");
                button.innerText = letter_selection[letter_selection[3]];
                p.appendChild(button);
            } else {
                let button = document.createElement("button");
                button.setAttribute("class", "btn");
                button.innerText = letter_selection[letter_selection[2]];
                p.appendChild(button);
            }
        }
        tree.appendChild(p);
    }
    board.appendChild(tree);
    
    let sol_btn = document.getElementById("sol-btn");
    let reveal_btn = document.getElementById("reveal-sol");
    reveal_btn.addEventListener("click", function(){
        sol_btn.style.cssText = "font-weight: bolder; font-size: 25px;";
    })

    document.getElementById("score").innerText = "SCORE: " + score;
    document.getElementById("upper").innerText = "Find the character " + '"' + letter_selection[letter_selection[3]] +'"'
}

let refresh = document.getElementById("refresh-btn");
refresh.addEventListener("click", function(){
    score--; // score automatically increases when board is rendered, "score--" counteracts the effect
    renderBoard();
})


function refreshBoard(){
    maj_letter = Math.round(Math.random()); // choosing what index will be the majority letter on the board
    if(maj_letter === 0){
        min_letter = 1; // minority letter on the board
    }else{
        min_letter = 0;
    }
    return letter_arr[Math.floor(Math.random() * letter_arr.length)].concat([maj_letter,min_letter]);
}

function main (){
    renderBoard();
}

main();