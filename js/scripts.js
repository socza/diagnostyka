var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

	acc[i].addEventListener("click", function() {
    
    	this.classList.toggle("active");
    	var panel = this.nextElementSibling;
    
    	if (panel.style.maxHeight){
      		panel.style.maxHeight = null;
    	} else {
      		panel.style.maxHeight = panel.scrollHeight + "px";
    	} 
  	
  	});

}

var acc = document.getElementsByClassName("accordion-2");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    
      this.classList.toggle("active-2");
      var panel = this.nextElementSibling;
    
      if (panel.style.maxHeight){
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    
    });

}
