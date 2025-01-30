const trimText = str => str.trim();
const toLowerCase = str => str.toLowerCase();

function cleanText(str){
    return toLowerCase(trimText(str));
}

console.log(cleanText("   JavaScript!  "));