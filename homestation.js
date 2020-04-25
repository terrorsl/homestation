/*!
Home Station javascript
*/
$( document ).ready(function() {
	console.log( "document loaded" );
	var socket=new WebSocket("/homestationws");
	
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