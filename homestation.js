/*!
Home Station javascript
*/
var socket;
$( document ).ready(function() {
	console.log( "document loaded" );
	socket=new WebSocket("/homestationws");
	
	socket.onmessage = function(event) {
	alert("Получены данные " + event.data);
	var myObj = JSON.parse(event.data);
	if(myObj.response=='updateLayout')
	{AppendCard();}
	socket.send("command:getLayout");
	};
});
function Test()
{
  alert('test');
}