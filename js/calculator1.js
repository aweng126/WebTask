/*计算器的js代码*/


//全局变量，用于保存每次的计算结果
var resultlist = [];

function add(obj) {
    //获得显示文本框中的内容	
	var curequal=document.getElementById("calShow");

    /*
	 * 当之前是有计算结果的，那么保留上次的结果继续计算
	 * 如果是第一次开始计算，那么输入
	 */

	console.log('obh.getclass'+obj.getAttribute('class'));
	
	if(curequal.value.indexOf("=")>0&&obj.getAttribute('class')=='optbtn'){
		
		var lastresult=resultlist.pop();
		console.log('lastresult'+lastresult)
		document.getElementById('calShow').value=lastresult+obj.value;
		resultlist.push(lastresult);
		
	}else if(curequal.value.indexOf("=")>0&&obj.getAttribute('class')=='numbtn'){
		
		document.getElementById("calShow").value = obj.value;
		
	}else{
		
		document.getElementById("calShow").value += obj.value;
		console.log('else'+lastresult+obj.value)

	}
}

/*等于计算结果*/
function results() {
	var obj = document.getElementById("calShow").value;
	if(obj.indexOf("=") < 0) {
		var curresult=eval(obj);
		document.getElementById("calShow").value += "=" + curresult;
        resultlist[resultlist.length]=curresult;
	}
}

/*清空操作*/
function clears() {
	document.getElementById("calShow").value = "";
	resultlist=[];
}