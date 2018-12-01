 var config = {
    apiKey: "AIzaSyC5B5H8afqVT3AOA1R-WnCRP2PCbj_KQik",
    authDomain: "rashmipatilcv.firebaseapp.com",
    databaseURL: "https://rashmipatilcv.firebaseio.com",
    projectId: "rashmipatilcv",
    storageBucket: "rashmipatilcv.appspot.com",
    messagingSenderId: "498427152109"
  };
  firebase.initializeApp(config);
//Reference message collection
var messagesRef=firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
	e.preventDefault();
//get values
var name=getInputVal('name');
var phone=getInputVal('phone');
var email=getInputVal('email');
var subject=getInputVal('subject');
var message=getInputVal('message');
saveMessage(name,email,subject,message);
//Show Alert
document.querySelector('#success').style.display='block';

//Hide alert after 3 sec
setTimeout(function(){
document.querySelector('#success').style.display='none';

},3000);

document.getElementById('contactForm').reset();


}
function getInputVal(id){
	return document.getElementById(id).value;
}
function saveMessage(name,email,subject,message){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		name:name,
		email:email,
		subject,subject,
		message:message
	});
}