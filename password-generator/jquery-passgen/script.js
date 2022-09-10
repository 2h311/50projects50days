// TODO: wait for the dom to be ready before loading the JS
// TODO: user can bypass the maxvalue, by inputting a value into the number widget
// TODO: the copy to clipboard doesn't work as good as it should. I'll be working on this at a later time.

const NUMBERS = "0123456789";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = `!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~`;

function copyPasswordToClipboard(){
    // TODO: you can't copy an empty value
    const showPasswordInput = $("#show-password")[0];
    if (showPasswordInput.value){
        document.querySelector("#show-password").select();
        document.execCommand("copy");
        // show alert
        alertDiv = document.querySelector(".alert");
        alertDiv.innerText = "Password copied to clipboard";
        setTimeout(() => alertDiv.innerHTML="&nbsp;", 5000); 
    }

};

function generateString(){
    const password_length_value = document.querySelector("#password_length").value;
    const password_length = Number(password_length_value);
    const include_uppercase_letters = document.querySelector("#include_uppercase_letters").checked;
    const include_lowercase_letters = document.querySelector("#include_lowercase_letters").checked;
    const include_numbers = document.querySelector("#include_numbers").checked;
    const include_symbols = document.querySelector("#include_symbols").checked;
    
    letters = "";
    if (include_uppercase_letters) letters += UPPERCASE;
    if (include_lowercase_letters) letters += LOWERCASE;
    if (include_numbers) letters += NUMBERS;
    if (include_symbols) letters += SYMBOLS;
    
    let randomStrings = ""; 
    for (let number=0; number<password_length; number++){
        randomString = letters.charAt(Math.floor(Math.random() * letters.length));
        randomStrings += randomString;
    };
    console.log(randomStrings);
    return randomStrings;
};

const generatePasswordButton = document.querySelector('#generate-password');
generatePasswordButton.addEventListener("click", function(event){
    password = generateString();
    document.querySelector("#show-password").value = password;
});

const copyToClipboardButton = $("#copyButton");
copyToClipboardButton.on("click", copyPasswordToClipboard);