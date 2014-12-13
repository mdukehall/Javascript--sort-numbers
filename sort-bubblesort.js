function bubblesort(input) {
 
    var comparisons = 0,
        swaps = 0,
        endIndex = 0,
        len = input.length - 1;
 
    for (var i = 0; i < len; i++) {
 
        for (var j = 0, swapping, endIndex = len - i; j < endIndex; j++) {
            comparisons++;
 
            if (input[j] > input[j + 1]) {
         
                swapping = input[j];
 
                input[j] = input[j + 1];
                input[j + 1] = swapping;
 
                swaps++;
            }
        }
    }
 
    return input;
}

var x=[5,65,2,4,90,345,23,1,7,34,65,3];
alert(bubblesort(x));