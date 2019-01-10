var maxNum = 100;

function randomNum(){
    return Math.floor((Math.random() * maxNum));
}

//allows us to reference in our main code, which allows us to use this functon
module.exports = randomNum;