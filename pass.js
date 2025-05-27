const numbers = "0123456789";
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+{}:[];,./`~";

const radio_btn_num=document.getElementById("radio_btn_num");
const radio_btn_up=document.getElementById("radio_btn_up");
const radio_btn_lo=document.getElementById("radio_btn_lo");
const radio_btn_sp=document.getElementById("radio_btn_sp");

const len = document.getElementById("length");
let my_output = document.getElementById("output");
const my_btn = document.getElementById("btn");

my_btn.onclick= function () {
    let charpool = "";

    if (radio_btn_num.checked){
        charpool+=numbers
    }

    if (radio_btn_up.checked) {
        charpool += uc
    }
    if (radio_btn_lo.checked) {
        charpool += lc
    }
    if (radio_btn_sp.checked) {
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

