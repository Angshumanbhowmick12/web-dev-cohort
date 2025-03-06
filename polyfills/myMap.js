if(!Array.prototype.myMap){
    Array.prototype.myMap=function(callback){
        let result=[];

        for(let i=0; i<this.length;i++){
            let value = callback(this[i],i)

            result.push(value)
        }

        return result;
    }
}


const mp=[1,2,3,4,5]

let result=mp.myMap((x)=> x*2)

console.log(result); // [ 2, 4, 6, 8, 10 ]
