const player_selections = document.querySelectorAll("#player img");
const computer_selection = document.querySelector("#computer img");
const display = document.querySelector("#display");
const reset = document.querySelector("#reset");

let selec;


// putting a eventListner to 'clicked img' by player.
player_selections.forEach(selected => {
    selected.addEventListener("click", (event) => {

        selec = selected;

        let win_index = gen_index();
        let selected_index = parseInt(selected.getAttribute("data-type"));

        selected.classList.add("clicked");
        computer_selection.classList.add("clicked");
        computer_selection.src = player_selections[win_index].src;
        
        // Enabling reset button.
        reset.classList.add("winLose");
        
        //todo: evaluating the selections made by both players.
        evaluation(win_index, selected_index);

    })
})




// creating a function to generate a num b/w '0 and 2' to provide a selection to computer.
function gen_index() {

    let gen_num = Math.floor(Math.random() * 3);
    return gen_num;
    
}




// evaluating the selections made by both players.
function evaluation(computer, player) {
    if ((computer == 0 && player == 2) || (computer == 1 && player == 0) || (computer == 2 && player == 1)) {
        
        //todo: if yoou won.
        display.textContent = "You Won";
        display.classList.add("win");

        //disabling all 'player' selection.
        for (var i = 0; i < player_selections.length; i++) {

            player_selections[i].classList.add("winLose");
        
        }
    } else if ((computer == 0 && player == 1) || (computer == 1 && player == 2) || (computer == 2 && player == 0)) {
        
        //todo: if you lose
        display.textContent = "You lose";
        reset.textContent = "Try Again";
        display.classList.add("lose");
        
        //disabling all 'player' selection.
        for (var i = 0; i < player_selections.length; i++) {

            player_selections[i].classList.add("winLose");
        
        }
    } else {
        
        display.textContent = "Oops...!";

    }
}




//reset game.
reset.addEventListener("click", () => {

    display.textContent = "";
    reset.textContent = "New Game";
    reset.classList.remove("winLose");
    display.classList.remove("lose");
    display.classList.remove("win");
    computer_selection.src = "";
    selec.classList.remove("clicked");
    computer_selection.classList.remove("clicked");

    //Enabling all 'player' selection.
    for (var i = 0; i < player_selections.length; i++) {

        player_selections[i].classList.remove("winLose");
    
    }

})