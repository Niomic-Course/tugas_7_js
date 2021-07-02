let tinggiBadan = [172,156,163,174,168,170,150,162,159,153];

// ======== for ========
console.log('For:')
let i = 0;

for (i; i < (tinggiBadan.length); i++){
    console.log(tinggiBadan[i]);
}

console.log();

// ======== while ========
console.log('While:');
let j = 0;

while (j < (tinggiBadan.length)){
    console.log(tinggiBadan[j]);
    j++;
}

console.log();

// ======== do while ========
console.log('Do While:');
let k = 0;

do {
    console.log(tinggiBadan[k]);
    k++;
} while (k < (tinggiBadan.length));

console.log();

// ======== for of ========
console.log('For Of:');
let m = 0;

for (m of tinggiBadan){
    console.log(m);
}
