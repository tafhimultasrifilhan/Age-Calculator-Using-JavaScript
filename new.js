function cal(){
	today = new Date();
	var d = today.getDate();
	var m = today.getMonth()+1;
	var y = today.getFullYear();
	var date= document.getElementById("date").value;
	var month= document.getElementById("month").value;
	var year= document.getElementById("year").value;

	//date calculation
	if(date > d){
		d=d+30;
		m=m-1
		var ageDate=(d-date);
	}
	if(date < d || date==d){
		var ageDate=(d-date);
	}

	if(month > m){
		m=m+12;
		y=y-1;
		var ageMonth=(m-month);
		var ageYear=(y-year);
	}
	if(month < m || month==m){
		m=m;
		y=y;
		var ageMonth=(m-month);
		var ageYear=(y-year);
	}
	alert("You are "+ageYear+" years "+ageMonth+" months "+ageDate+" days old")
	console.log("You are "+ageYear+" years "+ageMonth+" months "+ageDate+" days old")
}	