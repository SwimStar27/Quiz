function game(){
    player1n=document.getElementById("p1").value;
    player2n=document.getElementById("p2").value;
    localStorage.setItem("player1n",player1n);
    localStorage.setItem("player2n",player2n);
    window.location.replace("game_page.html");
}