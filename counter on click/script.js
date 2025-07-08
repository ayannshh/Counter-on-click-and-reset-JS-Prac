let count_ele = document.querySelector(".count");
let button = document.querySelector(".button");
let saveBtn = document.querySelector(".save-btn");
let save = document.querySelector(".save");

let count = 0;
function enterCount()
{

    count++;
    count_ele.innerHTML = count;
}

function saveCount()
{
    let count_save =  " -> " + count ;
    save.innerHTML += count_save;
    count = 0;
    count_ele.innerHTML = count;
}

let resetBtn = document.querySelector(".reset");
function resetCount()
{
    let countt = 0;
    save.innerHTML = countt;
    count_ele.innerHTML = countt;
}

saveBtn.addEventListener("click",saveCount);
resetBtn.addEventListener("click",resetCount);
button.addEventListener("click",enterCount);

