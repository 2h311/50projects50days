const NUMBERS = "";
const UPPERCASE = "";
const LOWERCASE = "";
const SYMBOLS = "";

const password_length_value = document.querySelector("#password_length").value;
const password_length = Number(password_length_value);
const include_uppercase_letters = document.querySelector("#include_uppercase_letters").checked;
const include_lowercase_letters = document.querySelector("#include_lowercase_letters").checked;
const include_numbers = document.querySelector("#include_numbers").checked;
const include_symbols = document.querySelector("#include_symbols").checked;

for (let number=0; number<password_length; number++){
    console.log(number);
}






function copyPasswordToClipboard(){
    document.querySelector("textarea").select();
    document.execCommand("copy");
};