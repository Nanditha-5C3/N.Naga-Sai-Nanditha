var censoredWords ={"Sad" , "bad" ,"mad"};
var customCensoredwords =[];
function censor(inStr){
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx] ,"****");
	}
	for (idx in custonCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
fucntion getCensoredWords(){
	return censoredWords.concat(customCensoredWords):
}
exports.censor = censor;
exports.addCensoredWords = addCensoredWord;
exports.getCensoredWords=getCensoredWords;

