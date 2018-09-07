'use strict';
function QuoteReplace(sampleString, patternOld, patternNew) {
    let sampleStringResult = sampleString.replace(patternOld, patternNew);
    return sampleStringResult;
}

var patternOld = /\s\'/g,
    patternNew = ' "',
    sampleString = "to be or not to be, can't 'what' is the question",
    sampleStringResult = QuoteReplace(sampleString, patternOld, patternNew);

sampleString = sampleStringResult;
patternOld = /\'\s/g;
patternNew = '" ';

sampleStringResult = QuoteReplace(sampleString, patternOld, patternNew);

alert('вот что стало:  ' + sampleStringResult);