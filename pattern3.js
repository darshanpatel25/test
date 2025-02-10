// let a = 5

// if(a%2==0){
//     console.log("Invalid Input")
// }

// else{

//     let n = Math.ceil(a/2)
//     let i,j

//     for(i=1;i<=n;i++){
//         for(j=0;j<i;j++){
//             process.stdout.write(" * ")
//         }
//         console.log()
//     }
//     for(i=n-1;i>0;i--){
//         for(j=0;j<i;j++){
//             process.stdout.write(" * ")
//         }
//         console.log()
//     }
// }

let n = 5

for(i = -n;i<=n;i++){
    for(j=0;j<=n;j++){
        if(j+Math.abs(i)<n){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write("   ")
        }
    }
    console.log()
}