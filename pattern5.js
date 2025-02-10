let n = 5

let i,j

for(i=1;i<=n;i++){
    if(i<=n){

        for(let k = i;k>0;k--){
            process.stdout.write(" ")

        }
    }
    for(j=i;j<=n;j++){
        process.stdout.write(" "+j)
    }
    console.log()
}
for(i=n-1;i>=1;i--){
    if(i<=n-1){

        for(let k = i;k>0;k--){
            process.stdout.write(" ")

        }
    }
    for(j=i;j<=n;j++){
        process.stdout.write(" "+j)
    }
    console.log()
}