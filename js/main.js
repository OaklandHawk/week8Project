//declare constants for textarea, button, and input
var addPostInput = document.querySelector('input.addPostInput');
var addTextArea = document.querySelector('textarea.addPostInput');
var addPostButton = document.querySelector('button.addPostButton');

//event listener for posting functionality
addPostButton.addEventListener('click', function() {
var body = document.getElementsByTagName('body')[0];

var postBody = document.createElement('div');
postBody.className = 'postBody';

var header = document.createElement('h1');
header.className = 'postHeader';
header.textContent = addPostInput.value;

var p = document.createElement('p');
p.className = 'bodyContent';
p.textContent = addTextArea.value;