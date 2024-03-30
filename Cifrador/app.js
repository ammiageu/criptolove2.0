

// ------------------------------------------------

const imputMessage = document.querySelector("#message");
const imputResult = document.querySelector("#result");
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");

function encrypt (){
    var message = imputMessage.value;
    var encryptedMessage = message
    .replaceAll("e", "°")
    .replaceAll("i", "!")
    .replaceAll("o", "#")
    .replaceAll("a", "$")
    .replaceAll("u", "%")
    
   
//    ----------------------------- 
    .replaceAll("b", "&")
    .replaceAll("c", "/")
    .replaceAll("d", "(")
    .replaceAll("f", ")")
    .replaceAll("g", "=")
    .replaceAll("h", "?")
    .replaceAll("j", "¡")
    .replaceAll("k", "@")
    .replaceAll("l", "|")
    .replaceAll("m", "^")
    .replaceAll("n", "¨")
    .replaceAll("ñ", "*")
    .replaceAll("p", "+")
    .replaceAll("q", "~")
    .replaceAll("r", "{")
    .replaceAll("s", "[")
    .replaceAll("t", "<")
    .replaceAll("v", ":")
    .replaceAll("x", "-")
    .replaceAll("z", ">")
    .replaceAll("w", ",")
    .replaceAll("y", ";");

    imputResult.value = encryptedMessage;
}

function decrypt (){
    var message = imputMessage.value;
    var decryptedMessage = message
    .replaceAll("°", "e")
    .replaceAll("!", "i")
    .replaceAll("#", "o")
    .replaceAll("$", "a")
    .replaceAll("%", "u")

  
    //    ----------------------------- 
   
    .replaceAll("&", "b")
    .replaceAll("/", "c")
    .replaceAll("(", "d")
    .replaceAll(")", "f")
    .replaceAll("=", "g")
    .replaceAll("?", "h")
    .replaceAll("¡", "j")
    .replaceAll("@", "k")
    .replaceAll("|", "l")
    .replaceAll("^", "m")
    .replaceAll("¨", "n")
    .replaceAll("*", "ñ")
    .replaceAll("+", "p")
    .replaceAll("~", "q")
    .replaceAll("{", "r")
    .replaceAll("[", "s")
    .replaceAll("<", "t")
    .replaceAll(":", "v")
    .replaceAll("-", "x")
    .replaceAll(">", "z")
    .replaceAll(",", "w")
    .replaceAll(";", "y");

  

    imputResult.value = decryptedMessage;
}

function copy (){
    encryptedMessage = imputResult.value;
    navigator.clipboard.writeText(encryptedMessage);


}

btnCopy.onclick = copy;
btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

function replace(element){
    let texto = element.value
    texto = texto.split(/[A-Z,À,È,Ì,Ò,Á,É,Í,Ó,Ú,Ý,Â,Ê,Î,Ô,Û,Ã,Ñ,Õ,Ä,Ë,Ï,Ö,Ü,Ÿ,Å,Æ,Œ,Ç,Ð,Ø,¿,¡,ß,&,/,(,),=,?,¡,@,|,^,¨,*,+,~,{,[,<,:,-;>,.,à,è,ì,ò,ù,á,é,í,ó,ú,ý,â,ê,î,ô,û,ã,ñ,õ,ä,ë,ï,ö,ü,ÿ,å,æ,œ,ç,ð,`,ø\d-]/)
    texto = texto.join("")
    element.value = texto
  }





    //    ----------------------------- 
 


