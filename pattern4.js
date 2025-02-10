let n = 4

for(let i=-n;i<=n;i++){
    for(let j=-n;j<=n;j++){
        if(Math.abs(i) >=Math.abs(j)){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write("   ")
        }
    }
    console.log()
}