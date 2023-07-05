// function merge(leftSide,rightSide) {
//     var l=0;
//     var r=0;
//     var answers=[];
//     while (l<leftSide.length || r<=rightSide.length) {
//         if (l===leftSide.length) {
//             answers.push(rightSide[r]);
//             r++
//         }
//         else if (leftSide[l]>=rightSide[r] ) {
//             answers.push(leftSide[l]);
//             l++
//         }
//         else{
//             answers.push(rightSide[r]);
//             r++
//         }
//     }
//     return answers
// }
// console.log(merge([3,8,7,2],[5,1,10,4]));



function mergeSort(left,right) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
			results.push(right[j]);
			j++;
		} 
      else if (j === right.length || left[i] <= right[j]) {
			results.push(left[i]);
			i++;
		} else {
			results.push(right[j]);
			j++;
		}
	}
	return results;
}

console.log(mergeSort([1,3,4], [3,7,9]));