// use when iterations count is known

// ********************** FOR LOOP *************************

/* 
for (initialization; condition; increment/decrement) {
    // code 
} 
*/

for (let i = 1; i <= 5; i++){
    console.log(i);
}

// ******************* WHILE LOOP ************************

/*
while (condition) {
    // code
}
*/

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// for vs while

// for = fixed iterations, cleaner syntax
// while = condition-based, flexible

// *************************** NESTED LOOPS **********************

// loop inside another loop - mostly used for patterns & 2D arrays

for( let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(i,j);
        
    }
}

// break & continue  - break -> loop stop

for (let i = 1; i <= 5; i++) {
    if(i === 4) break;
    console.log(i);
}

// continue -> skip iteration

for (let i = 1; i <= 5; i++) {
    if(i === 3) continue;
    console.log(i);
}
