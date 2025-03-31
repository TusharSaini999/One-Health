function generateCaptcha() {
 var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#£@&€¥$%';
 var captcha = '';
 for (var i = 0; i < 4; i++) {
 captcha += chars.charAt(Math.floor(Math.random() * chars.length));
 }
 document.getElementById('captcha').textContent = captcha;
 }
 
 // Function to validate form submission
 function validateForm() {
 var userInput = document.getElementById('captchaInput').value;
 var captchaText = document.getElementById('captcha').textContent;
 var tup=document.getElementById("tup");
 if (userInput.toLowerCase() === captchaText.toLowerCase()) {
 return true;
 } else {
 tup.innerText="Captcha not Validation";
 generateCaptcha(); 
 return false;
 }
 }
 
 window.onload = generateCaptcha;