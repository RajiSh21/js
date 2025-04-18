// testCases examples
Process.stdinSetEncoding('utf8');
process.stdin.on('data', function (input){
    const lines = input.split('\n');
    const testCases1 = parseInt(lines[0]);
    const testCases2 = parseInt(lines[1]);
    const testCases3 = parseInt(lines[2]);
    const testCases4 = parseInt(lines[3]);
    const testCases5 = parseInt(lines[4]);

    console.log(testCases1);
    console.log(testCases2);
    console.log(testCases3);
    console.log(testCases4);
    console.log(testCases5);
    // Add your test cases here 
})