// TODO: the copy to clipboard doesn't work as good as it should. I'll be working on this at a later time.

$(document).ready(function(){
    
    const NUMBERS = "0123456789";
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const SYMBOLS = `!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~`;

    function copyPasswordToClipboard(){
        const showPasswordInput = $("#show-password")[0];
        if (showPasswordInput.value){
            showPasswordInput.select();
            document.execCommand("copy");
            // show alert
            alertDiv = $(".alert");
            alertDiv.text("Password copied to clipboard");
            setTimeout(() => alertDiv.html("&nbsp;"), 5000); 
        }
    };

    function generateString(){
        const password_length_value = $("#password_length")[0].value;
        const password_length = Number(password_length_value);
        const include_uppercase_letters = $("#include_uppercase_letters")[0].checked;
        const include_lowercase_letters = $("#include_lowercase_letters")[0].checked;
        const include_numbers = $("#include_numbers")[0].checked;
        const include_symbols = $("#include_symbols")[0].checked;
        
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

    const generatePasswordButton = $("#generate-password");
    generatePasswordButton.on("click", function(event){
        password = generateString();
        $("#show-password")[0].value = password;
    });
    
    const copyToClipboardButton = $("#copyButton");
    copyToClipboardButton.on("click", copyPasswordToClipboard);
});


