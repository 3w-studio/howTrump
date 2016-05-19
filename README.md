# howTrump
Wordcloud about #Trump 16/04/25—16/05/04 with data from Weibo and Twitter. 

This HTML site intends to visualize the use of #Trump from 16/04/25 to 16/05/04 on Weibo and Twitter. It takes data from  »data.js«, generates all words in the arrays allDays and allDaysCN. Then it assigns a font-size to each word according to the count of occurence in posts. This data is stored in the array days/daysCN. To allow more universal use some tings could still be simplyfied. For example there shouldn't be two functions in parallel for English and Chinese.

```javascript

// Genereate the English words
var init = "";
for (k = 0; k < allDays.length; k++) { 
	init += "<div><span>" + allDays[k][0] + "</span></div>";
}

// Genereate the Chinese words
var initCN = "";
for (i = 0; i < allDaysCN.length; i++) { 
	initCN += "<div><span>" + allDaysCN[i][0] + "</span></div>";
}

$(document).ready(function(){

	function newHTML(k) {
	
	  // Hide all words in the beginning of the loop. 
		$('.container > div').addClass('inAct');
		for (j = 0; j < days[k].length; j++) { 
		  
		  // Iterate through the words and see which one matches to the dataset given for a particular day
	 		$('.container > div').each(function(){
	 			if($(this).children('span').html() === days[k][j][0]) {
	 			  
	 			  //If the current word occured on that day remove the class that hides it and increase the font-size according to the word count (Factor is .7, works fine to fit in 13" screens)
	 				$(this).removeClass('inAct').children().css("font-size",14+days[k][j][1]*.7).css("width",days[k][j][1]*1.5 + "px");
	 			}
	 		});
	 	}
	 	
	 	// after the words have their size we use jquery.masonry by David Desandro to layout the output.
	 	$('.container').masonry({
	 		itemSelector: 'div',
	  		columnWidth: 1
		});
		newDay = "";
	}
	
	// Same thing for Chinese, should be unified one day.
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
  
  //Run the loop, reset counter if the itereation reaches the end.
	function myLoop () { 
		setTimeout(function () {    
		   newHTML(k);
		   
		   //Update the date top right from array "dates"
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
```
