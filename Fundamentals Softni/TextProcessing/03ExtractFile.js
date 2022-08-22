function solve(input) {
    let extractedEl = input.split('\\')
    let fileName = extractedEl[extractedEl.length -1].split('.')
    let extension = fileName[fileName.length-1]
    fileName.pop()
    fileName = fileName.join('.')
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    
}
solve('C:\\Internal\\training-internal\\Template.bak.pptx')