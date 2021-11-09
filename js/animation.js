const qoute1 = "The more that you read, the more things you will know, the more that you learn, the more places you’ll go." ;
const qoute2 = "Education is what remains after one has forgotten what one has learned in school.";
let index1 = 0;
let index2 = 0;

function typewriter (qoute, id, index) {
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.slice(0,index) + qoute[index] + "|";
    console.log(qoute.length);
    
    if(qoute[index] === " ")
    document.getElementById(id).innerHTML += " ";
}

setInterval(() => {
    typewriter(qoute1, "line-1",index1++);
    typewriter(qoute2, "line-2",index2++);
    if(index1 == qoute1.length - 1){
        index1 = 0;
        document.getElementById("line-1").innerHTML = "";
    }
    if(index2 == qoute2.length - 1){
        index2 = 0;
        document.getElementById("line-2").innerHTML = "";
    }
}, 75);



