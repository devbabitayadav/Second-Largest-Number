let arr = [2,0,10,20,4,7,10];
arr.sort();
let largest = -Infinity;
let secondLargest = -Infinity;

for(let i = 0; i<arr.length; i++){
    largest = Math.max(largest,arr[i])
};

for(let i = 0; i<arr.length; i++){
    if(arr[i]<largest){
        secondLargest = Math.max(secondLargest,arr[i])
    }
    
};

document.write(`<h2>Second Largest Number :`   + secondLargest);
