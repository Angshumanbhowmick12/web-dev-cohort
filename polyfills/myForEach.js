if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(callback){
        let orgA=this

        for(let i=0;i<orgA.length;i++){
            callback(orgA[i],i)
        }
    }
}



let forE=[1,2,3,4,5,6]
forE.myForEach((x)=>{
    console.log(x+2);
    
})

// 3
// 4
// 5
// 6
// 7
// 8



