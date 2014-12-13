/* QuickSort in JavaScript
Quicksort was developed by Tony Hoare (b.1934) in 1960 (26), a British computer scientist.
It is a comparison sort described as "divide and conquer".
1st: it divides the array in two, then recursively sorts the sub arrays.
Efficiency: O(n log n); worst case: O(n^2)
*/
function quicksort(input) {
return empty_p(input)? []
: sort( first(input)
, rest(input))
 
function sort(x, xs) {
return concat( quicksort(left(x, xs))
, [x]
, quicksort(right(x, xs))) }
 
function left(x, xs) {
return xs.filter(function(val) {
return val <= x })}
 
function right(x, xs) {
return xs.filter(function(val) {
return val > x })}}
 
 
// Helper functions
function slice(input) {
return [].slice.call(input) }
 
function empty_p(input) {
return !input.length }
 
function concat() {
return slice(arguments).reduce(function(acc, val) {
return acc.concat(val) }, [])}
 
function first(input) {
return input[0] }
 
function rest(input) {
return input.slice(1) }
 
alert(quicksort([23,5,7,1,9000,54,2344,2,1,56,43,76,12))
