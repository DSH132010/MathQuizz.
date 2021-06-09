function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

  
      localStorage.setItem("Player1 Name:", player1_name);
      localStorage.setItem("Player2 Name:", player2_name);
  

      console.log(player1_name);
      console.log(player2_name);
	  document.getElementById("li_stagger1").style.animation = "stagger 9s ease-in-out";
	  document.getElementById("li_stagger2").style.animation = "stagger 9s ease-in-out";
	  document.getElementById("li_stagger3").style.animation = "stagger 9s ease-in-out";
	  document.getElementById("li_stagger4").style.animation = "stagger 9s ease-in-out";
	  document.getElementById("li_stagger5").style.animation = "stagger 9s ease-in-out";
  
		  
  document.addEventListener('animationend', e => {
	  // setTimeout(()=>{window.location = "index.html";},5000);
      window.location = "main.html";
  });

  }
  
  function back() {
	document.getElementById("li_stagger1").style.animation = "stagger 9s ease-in-out";
	document.getElementById("li_stagger2").style.animation = "stagger 9s ease-in-out";
	document.getElementById("li_stagger3").style.animation = "stagger 9s ease-in-out";
	document.getElementById("li_stagger4").style.animation = "stagger 9s ease-in-out";
	document.getElementById("li_stagger5").style.animation = "stagger 9s ease-in-out";

		
document.addEventListener('animationend', e => {
	// setTimeout(()=>{window.location = "index.html";},5000);
	window.location = "index.html";
});
  }

  player1_name = localStorage.getItem("Player1 Name:");
	player2_name = localStorage.getItem("Player2 Name:");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " x "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}


  




