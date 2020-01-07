var FilterString = function(value) {
    let res='';
    for(let i=0; i< value.length; i++){
        if (value[i] >= '0' && value[i]<= '9'){
            res=res+value [i];
        }
    }
    return +res;
}

console.log(FilterString("a1b2c3"));