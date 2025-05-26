const numbers = "0123456789";
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+{}:[];,./`~";

const len = document.getElementById("length");
const need_num = document.getElementById("need_num");
const need_up = document.getElementById("need_up");
const need_lc = document.getElementById("need_lc");
const need_sp = document.getElementById("need_sp");
let my_output = document.getElementById("output");
const my_btn = document.getElementById("btn");

my_btn.onclick= function () {
    let charpool = "";

    if (need_num.value.toLowerCase() === "yes") {
        charpool += numbers
    }
    if (need_up.value.toLowerCase() === "yes") {
        charpool += uc
    }
    if (need_lc.value.toLowerCase() === "yes") {
        charpool += lc
    }
    if (need_sp.value.toLowerCase() === "yes") {
        charpool += symbols
    }

    let password="";
    let len_password=parseInt(len.value);
    if (isNaN(len_password) || len_password <=0){
        my_output.textContent="Please enter length of the password";
        return;
    }

    if (!charpool){
        my_output.textContent="please select at least one character set!";
        return;
    }

    for (let i=0;i<len_password;i++){
        const random_idx=Math.floor(Math.random()*charpool.length);
        password+=charpool[random_idx];
    }

    my_output.textContent = password;
};

