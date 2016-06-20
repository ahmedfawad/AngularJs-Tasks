


function display(val)
{
	document.getElementById("ans").value=val;   //for dispalying error or output 


}

function expression(val)
{
	//alert(val);
	
	//document.getElementsById("ans").value+=val;  // concatenating the values
	document.getElementById("ans").value+=val;
}





function calculate()
{
	//alert("in calculate function");

	try {
    display(eval(document.getElementById("ans").value))
}
	catch(calculate) {
    	display("Error")
}


}