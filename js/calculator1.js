

/*计算器的js代码*/

function add(obj) {
	document.getElementById("calShow").value += obj.value;
}

/*等于计算结果*/
function results() {

	var obj = document.getElementById("calShow").value;
	if(obj.indexOf("=") < 0)
		document.getElementById("calShow").value += "=" + eval(obj);
}

/*清空操作*/
function clears() {
	document.getElementById("calShow").value = "";
}