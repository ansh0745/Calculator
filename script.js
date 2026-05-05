let showButtons = document.querySelectorAll(".toShow");
let display = document.querySelector("#display");
let deleteBtn = document.querySelector("#delete");
let deleteAllBtn = document.querySelector("#deleteAll");
let decimleBtn = document.querySelector(".point");
let ansBtn = document.querySelector("#equalto");

let fnBtn = document.querySelectorAll(".function");
btnDisable(fnBtn);

let exp = "";
let eqlClicked = false;

for(let btn of showButtons){
    btn.addEventListener("click",()=>{
        if(eqlClicked){
            display.innerHTML = `<h3></h3>`;
            eqlClicked = false;
        }
        let text = btn.innerText;
        display.innerHTML += `<h3>${text}</h3>`;
        exp = exp+btn.textContent;
        btnEnable(fnBtn);
    })
}

deleteBtn.addEventListener("click",()=>{
    let text = display.textContent;
    text = text.slice(0,-1);
    display.innerHTML = `<h3>${text}</h3>`;
})

deleteAllBtn.addEventListener("click",()=>{
    display.innerHTML = "<h3></h3>";
})

for(let btn of fnBtn){
    btn.addEventListener("click",()=>{
        btnDisable(fnBtn);
        decimleBtn.disabled = false;
        func = btn.innerText;
    })
}

decimleBtn.addEventListener("click",()=>{
    decimleBtn.disabled = true;
})

ansBtn.addEventListener("click",()=>{
    let result = eval(exp);
    display.innerHTML = `<h3>${result}</h3>`;
    exp = "";
    btnDisable(fnBtn);
    decimleBtn.disabled = false;
    eqlClicked = true;
    
})


function btnDisable(btns){
    for(btn of btns){
        btn.disabled = true;
    }
}
function btnEnable(btns){
    for(btn of btns){
        btn.disabled = false;
    }
}





