
var init = "";
for (k = 0; k < allDays.length; k++) { 
	init += "<div><span>" + allDays[k][0] + "</span></div>";
}

var initCN = "";
for (i = 0; i < allDaysCN.length; i++) { 
	initCN += "<div><span>" + allDaysCN[i][0] + "</span></div>";
}


$(document).ready(function(){

	function newHTML(k) {
		$('.container > div').addClass('inAct');
		for (j = 0; j < days[k].length; j++) { 
	 		$('.container > div').each(function(){
	 			if($(this).children('span').html() === days[k][j][0]) {
	 				$(this).removeClass('inAct').children().css("font-size",14+days[k][j][1]*.7).css("width",days[k][j][1]*1.5 + "px");
	 			}
	 		});
	 	}
	 	$('.container').masonry({
	 		itemSelector: 'div',
	  		columnWidth: 1
		});
		newDay = "";
	}
	
	function newHTMLCN(i) {
		$('.containerCN > div').addClass('inAct');
		for (j = 0; j < daysCN[i].length; j++) { 
	 		$('.containerCN > div').each(function(){
	 			if($(this).children('span').html() === daysCN[i][j][0]) {
	 				$(this).removeClass('inAct').children().css("font-size",14+daysCN[i][j][1]*.7).css("width",daysCN[i][j][1]*1.5 + "px");
	 			}
	 		});
	 	}
	 	$('.containerCN').masonry({
	 		itemSelector: 'div',
	  		columnWidth: 1
		});
		newDayCN = "";
	}


	function myLoop () { 
		setTimeout(function () {    
		    
		   newHTML(k);  
		   $('h1.day').html("Day: " + dates[k]); 
		   k++; 

		   if (k < days.length) {      
		      myLoop();            
		   }
		   if (k == days.length) {      
		      k = 0;   
		      myLoop();          
		   }

		}, 800);
	}

	$('.container').html(init);
	var k = 0;                     
	
	myLoop();
	var newDay = ""; 



	function myLoopCN () { 
		setTimeout(function () {    
		    
		   newHTMLCN(i);  
		   i++; 

		   if (i < daysCN.length) {      
		      myLoopCN();            
		   }
		   if (i == daysCN.length) {      
		      i = 0;   
		      myLoopCN();          
		   }

		}, 800);
	}

	$('.containerCN').html(initCN);
	var i = 0;                     
	
	myLoopCN();
	var newDayCN = ""; 
});

