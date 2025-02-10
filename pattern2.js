// let n = 4
// let i,j
// for(i=0;i<n;i++){
//     for(j=0;j<n-i-1;j++){
//         process.stdout.write("   ")
//     }
//     process.stdout.write(" * ")

//     if(i>0){
//         for(j=0;j<2*i-1;j++){
//             process.stdout.write("   ")
//         }
//         process.stdout.write(" * ")
//     }
//     console.log()
// }

// for(i=n-2;i>=0;i--){
//     for(j=0;j<n-i-1;j++){
//         process.stdout.write("   ")
//     }
//     process.stdout.write(" * ")

//     if(i>0){
//         for(j=0;j<2*i-1;j++){
//             process.stdout.write("   ")
//         }
//         process.stdout.write(" * ")
//     }
//     console.log()
// }

let n = 4

for(let i=-n;i<=n;i++){
    for(let j=-n;j<n;j++){
        if(Math.abs(i) +Math.abs(j)==n){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write("   ")
        }
    }
    console.log()
}