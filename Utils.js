// Fisher Yates Algorithm to randomly shruffle a array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function findPermuted(ch) {
	if(ch>=97 && ch<=122){
		var dif = ch - 97;
		return 122 - dif;
	}
	else if(ch>=65 && ch<=90){
		var dif = ch - 65;
		return 90 - dif;
	}
	else{
		return ch;
	}
}


function encryptionByCaesarCipher(plainText) {
	var cipherText ="";
	for(var i=0; i<plainText.length; i++){
		var ch = plainText.charCodeAt(i);
		cipherText += String.fromCharCode(findPermuted(ch));
	}
	console.log(cipherText)
    return {
        cipherText: cipherText,
    };
}

function decryptionByCaesarCipher(cipherText) {
	var plainText ="";
	for(var i=0; i<cipherText.length; i++){
		var ch = cipherText.charCodeAt(i);
		plainText += String.fromCharCode(findPermuted(ch));
	}
	console.log(plainText)
    return {
        plainText: plainText,
    };
}
