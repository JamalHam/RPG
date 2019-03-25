$(document).ready(function() {
    
	var playerChar;
	
	var enemyChar;
		
	var playerOne = {
		Health: 300,
		Attack: 100,
	}
	
	var playerTwo = {
		Health: 200,
		Attack: 35,
	}
	
	var playerThree = {
		Health: 75,
		Attack: 100,
	}
	
	var playerFour = {
		Health: 75,
		Attack: 100,
	}
	
    var contender;
	
	$(document).on('click', '.pick', function(){
		console.log("pick container was clicked");
		if ($('.pick-container').children().length > 1){
        
		$('#instructions').empty;
		$('#instructions').text("choose your first opponent");
			
		$('.pick').not(this).each(function(){
			$(this).appendTo('.combat-div');
     	});	
			
		if($(this).attr('id') == "one"){
		
			playerChar = playerOne;
			
		}
		if($(this).attr('id') == "two"){
			
			playerChar = playerTwo;
            
		}
		if($(this).attr('id') == "three"){
			
			playerChar = playerThree;	
		}
        if($(this).attr('id') == "four"){
			
			playerChar = playerFour;	
		}
        $('.combat-div').children().removeClass('pick');    
        $('.combat-div').children().addClass("combatents");
        
            
        }
        
        $('.pick-container').css('width', '50%');
        $('.fight').css('width', '50%');
        
	});
    
     $(document).on('click','.combatents',function () {

        if ($('.combat-div').children().length > 2){
            
            $(this).appendTo('.fight');
            
            
            
            chooseYourVictim();
            }
         
         if ($('.pick-container').children().length == 1 && $('.fight').children().length == 0 && $('.combat-div').children().length == 2){
             
             $(this).appendTo('.fight');
             
             chooseYourVictim();
            }
		 if ($('.pick-container').children().length == 1 && $('.fight').children().length == 0 && $('.combat-div').children().length == 1){
            
             $(this).appendTo('.fight');
             
             chooseYourVictim();
        }
    });
    
  
    $(document).on('click','#attack',function () {
        if($('.pick-container').children().length == 1 && $('.fight').children().length == 1 && $('.combat-div').children().length == 2){
        	evilChar();
			battle();
		} 
        if($('.pick-container').children().length == 1 && $('.fight').children().length == 1 && $('.combat-div').children().length == 1){
        	evilChar();
			battle();
		} 
		if($('.pick-container').children().length == 1 && $('.fight').children().length == 1 && $('.combat-div').children().length == 0){
			evilChar();
			battleTwo();
		}
    });
    
    
    function chooseYourVictim(){
            
        $('#instructions').empty;
        
        $('#instructions').text("Fight!!!!!!");
        
        $('.combat-div').css('opacity', '0');
            
        contender = $(".fight .combatents");
    }
    
    function quickClear(){
        alert("you won!");
        $('.fight').html("");
        $('#instructions').empty;
        $('.combat-div').css('opacity', '100');
        $('#instructions').text("Choose your Next Victim");
    };
	
	function finalClear(){
        alert("you won the Tournament");
        $('.fight').html("");
		$('.mHealthText').html("");
		$('.oHealthText').html("");
        $('#instructions').empty;
		$('#instructions').text("Unleash your chaos on the world!!!");
		
		$('#instructions').empty;
		$('#instructions').text("you lose");
		setTimeout(gameReset(), 15000);
    };
	
	function evilChar(){
		if(contender.attr('id') == "one"){
			enemyChar = playerOne ;
		}
		if(contender.attr('id') == "two"){
			enemyChar = playerTwo;
		}
		if(contender.attr('id') == "three"){
			enemyChar = playerThree;
		}
		if(contender.attr('id') == "four"){
			enemyChar = playerFour;
		}
	};
	
	function battle(){
        
		if(playerChar.Health > 0 && enemyChar.Health > 0){
			enemyChar.Health = enemyChar.Health - playerChar.Attack;
			playerChar.Health = playerChar.Health - enemyChar.Attack;

			$('.mHealthText').empty;
			$('.mHealthText').text(playerChar.Health);

			$('.oHealthText').empty;
			$('.oHealthText').text(enemyChar.Health);

		}else if(playerChar.Health > 0 && enemyChar.Health <= 0){
		/*new function goes here*/
			quickClear();
		}else{ 
			$('#instructions').empty;
			$('#instructions').text("you lose");
			setTimeout(gameReset(), 5000);
			 }
	}
	
	function battleTwo(){
		if(playerChar.Health > 0 && enemyChar.Health > 0){
			enemyChar.Health = enemyChar.Health - playerChar.Attack;
			playerChar.Health = playerChar.Health - enemyChar.Attack;

			$('.mHealthText').empty;
			$('.mHealthText').text(playerChar.Health);

			$('.oHealthText').empty;
			$('.oHealthText').text(enemyChar.Health);

		}else if(playerChar.Health > 0 && enemyChar.Health <= 0){
		/*new function goes here*/
			finalClear()
		}else{ 
			$('#instructions').empty;
			$('#instructions').text("you lose");
			setTimeout(gameReset(), 5000);
			 }
	}

	function gameReset(){
        playerChar =undefined;
        contender =undefined;
        enemyChar =undefined;
		$('.mHealthText').empty;
		$('.mHealthText').text("");
		$('.oHealthText').empty;
		$('.oHealthText').text("");
        $('#instructions').empty;
        $('.pick-container').html("");
        $('.fight').html("");
        $('.combat-div').html("");
		$('#instructions').html("Choose your Character");
		
		$('.pick-container').css('width', '100%');
		$('.fight').css('width', 'auto');
		$('.fight').css('max-width', '60%');
		$('.combat-div').css('opacity', '100');

		playerOne = {
			Health: 300,
			Attack: 100,
		}
		
		playerTwo = {
			Health: 200,
			Attack: 35,
		}
		
		playerThree = {
			Health: 75,
			Attack: 100,
		}
		
		playerFour = {
			Health: 75,
			Attack: 100,
		}
        
        $('.pick-container').html('<div id="one" class="pick pick-style"> <img src="assets/images/naruto.gif"></div>' +
		'<div id="two" class="pick pick-style"><img src="assets/images/sasuke.gif"></div>' +
		'<div id="three" class="pick pick-style"><img src="assets/images/kakashi.gif"></div>' +
        '<div id="four" class="pick pick-style"><img src="assets/images/sakura.gif"></div>');
		}
		
		setInterval(function(){ console.log("enemy char def" +  enemyChar); }, 1000);
		setInterval(function(){ console.log("player char def" + playerChar); }, 1000);
		setInterval(function(){ console.log("contender def" + contender); }, 1000);
});
