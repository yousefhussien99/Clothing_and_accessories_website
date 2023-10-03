const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}

function newsletter(){
    let input = document.querySelector("#newsletter input");
    let alert = document.getElementById("alert");
    let alert2 = document.getElementById("alert2");
    let alert3 = document.getElementById("alert3");
    let alert4 = document.getElementById("alert4");
    var arr=[];
    if (localStorage.getItem("Email") == null) {
        arr = [];
    } 
    else {
        arr = JSON.parse(localStorage.getItem("Email"));
    }
    if(input.value == ""){
        alert4.style.display = "block";
        setTimeout(()=>{alert4.style.display = "none";},2000)
    }
    else if (validateEmail()==false) {
        alert3.style.display = "block";
        setTimeout(()=>{alert3.style.display = "none";},2000)
    }
    else if (arr.includes(input.value)) {
        alert2.style.display = "block";
        setTimeout(()=>{alert2.style.display = "none";},2000)
    } 
    else {
        arr.push(input.value);
        localStorage.setItem("Email", JSON.stringify(arr));
        alert.style.display = "block";
        setTimeout(()=>{alert.style.display = "none";},2000);        
    }   
}
function validateEmail() {
    let email = document.querySelector("#newsletter input");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    return (false)
}

function paginationShop(i){
    let product1 = document.getElementsByClassName("pro d-0");
    let product2 = document.getElementsByClassName("pro d-1");
    let product3 = document.getElementsByClassName("pro d-2");
    if (i==1){  
        for (let i = 0; i < product1.length; i++) {
            product1[i].style.display = "block";
        }
        for (let i = 0; i < product2.length; i++) {
            product2[i].style.display = "none";
        }
        for (let i = 0; i < product3.length; i++) {
            product3[i].style.display = "none";
        }
    }
    else if (i==2){
         for (let i = 0; i < product1.length; i++) {
            product1[i].style.display = "none";
        }
        for (let i = 0; i < product2.length; i++) {
            product2[i].style.display = "block";
        }
        for (let i = 0; i < product3.length; i++) {
            product3[i].style.display = "none";
        }
    }
    else{
        for (let i = 0; i < product1.length; i++) {
            product1[i].style.display = "none";
        }
        for (let i = 0; i < product2.length; i++) {
            product2[i].style.display = "none";
        }
        for (let i = 0; i < product3.length; i++) {
            product3[i].style.display = "block";
        }
    }
    location.href = "shop.html#product1";
}
function paginationBlog(i){ 
    let blog1 = document.getElementsByClassName("blog-box d-0");
    let blog2 = document.getElementsByClassName("blog-box d-1 d-none");
    let blog3 = document.getElementsByClassName("blog-box d-2 d-none");
    if (i==1){
        for (let i = 0; i < blog1.length; i++) {
            blog1[i].style.display = "block";
        }
        for (let i = 0; i < blog2.length; i++) {
            blog2[i].style.display = "none";
        }
        for (let i = 0; i < blog3.length; i++) {
            blog3[i].style.display = "none";
        }
    }
    else if (i==2){
        for (let i = 0; i < blog1.length; i++) {
            blog1[i].style.display = "none";
        }
        for (let i = 0; i < blog2.length; i++) {
            blog2[i].style.display = "block";
        }
        for (let i = 0; i < blog3.length; i++) {
            blog3[i].style.display = "none";
        }
    }
    else{
        for (let i = 0; i < blog1.length; i++) {
            blog1[i].style.display = "none";
        }
        for (let i = 0; i < blog2.length; i++) {
            blog2[i].style.display = "none";
        }
        for (let i = 0; i < blog3.length; i++) {
            blog3[i].style.display = "block";
        }
    }
    location.href = "blog.html#blog1";
}
function myFunction() {
    var x=[];
    let file = document.querySelector(".file");
    let myemail = document.getElementById("myemail");
    if(localStorage.getItem("file") == null){
      localStorage.setItem("file",JSON.stringify(x));
    }
    else{
      x=JSON.parse(localStorage.getItem("file"));
    }
    if (file.value == ""||document.querySelector("textarea").value=="" || myemail.value==""){
      document.getElementById("alert3").style.display="block";
      setTimeout(function(){ document.getElementById("alert3").style.display="none"; }, 2000);
    }
    else if(x.includes(file.value)){
      document.getElementById("alert4").style.display="block";
      setTimeout(function(){ document.getElementById("alert4").style.display="none"; }, 2000);
    }
    else{
      x.push(file.value);
      localStorage.setItem("file",JSON.stringify(x));
      document.getElementById("alert").style.display="block";
      setTimeout(function(){ document.getElementById("alert").style.display="none"; }, 2000);
    }


}
let arr2= [];   
function addToCart(src,productName,salary){
   let obj = {
      Src:src,
      ProductName:productName,
      Salary:salary
   }
    if(localStorage.getItem("Cart") == null){
        arr2.push(obj);
        localStorage.setItem("Cart",JSON.stringify(arr2));
    }
    else{
        arr2 = JSON.parse(localStorage.getItem("Cart"));
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i].Src == obj.Src){
                document.getElementById("alert2").style.display="block";
                setTimeout(function(){ document.getElementById("alert2").style.display="none"; }, 5000);
                return;
            }
        }
        arr2.push(obj);
        localStorage.setItem("Cart",JSON.stringify(arr2));
        document.getElementById("alert").style.display="block";
        setTimeout(function(){ document.getElementById("alert").style.display="none"; }, 5000);

    }
    // alert(localStorage.getItem("Cart"));
}
let arr = JSON.parse(localStorage.getItem("Cart"));
let tbody = document.getElementById("mybody");
let here = document.querySelector(".here");
let Here = document.querySelector(".Here");
let sum = 0;
for(let i = 0; i < arr.length; i++){
    let obj={
        src : arr[i].Src,
        name : arr[i].ProductName,
        price : arr[i].Salary,
    }
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let img = document.createElement("img");
    img.src = obj.src;
    td1.innerHTML = "<a onclick='Delete()'><i class='far fa-times-circle'></i></a>";
    td2.appendChild(img);
    td3.innerHTML = obj.name;
    td4.innerHTML = obj.price+"$";
    td5.innerHTML = "<input type='number' value='1' onchange='Change()'>";
    td6.innerHTML = obj.price+"$";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
    sum += obj.price;
    document.querySelector(".ifEmpty").style.display="none";
}
here.innerHTML = sum;
Here.innerHTML = sum+"$";
function Change(){
    var table = document.getElementById("mytable");
    for(var i = 0; i < table.rows.length; i++)
    {
        table.rows[i].cells[4].onchange = function()
        {
            var x = this.parentElement.rowIndex;
            var y = this.parentElement.cells[3].innerHTML;
            y = parseFloat(y);
            var z = this.parentElement.cells[4].children[0].value;
            z = parseInt(z);
            this.parentElement.cells[5].innerHTML = y*z+"$";
            var sum = 0;
            for(var j = 1; j < table.rows.length; j++){
                var a = table.rows[j].cells[5].innerHTML;
                a = parseFloat(a);
                sum += a;
            }
            here.innerHTML = sum;
            Here.innerHTML = sum+"$";
        };
    }
}
function Delete(){
    var table = document.getElementById("mytable");
    for(var i = 0; i < table.rows.length; i++)
    {
        table.rows[i].cells[0].onclick = function()
        {
            table.deleteRow(this.parentElement.rowIndex);
            var sum = 0;
            for(var j = 1; j < table.rows.length; j++){
                var a = table.rows[j].cells[5].innerHTML;
                a = parseFloat(a);
                sum += a;

            }
            here.innerHTML = sum;
            Here.innerHTML = sum+"$";
            var arr = JSON.parse(localStorage.getItem("Cart"));
            for(var i = 0; i < arr.length; i++){
                let img =this.parentElement.cells[1].innerHTML;
                let im2='<img src='+'"'+arr[i].Src+'"'+'>';
                if(im2==img){
                    arr.splice(i,1);
                    localStorage.setItem("Cart",JSON.stringify(arr));
                }
            }   
            if (table.rows.length==1){
                document.querySelector(".ifEmpty").style.display="block";
            }
        }
    };
}
function applyCoupon(){
    myCoupon = document.getElementById("myCoupon"); 
    let alert = document.getElementById("alert");
    let alert1 = document.getElementById("alert1");
    if(myCoupon.value == "123456"){
        if (parseFloat(Here.innerHTML)*0.9<0){
            Here.innerHTML = "By Coupon 0$";
        }
        Here.innerHTML = " By Coupon  "+(parseFloat(Here.innerHTML)*0.9)+"$";
        alert.style.display = "block";
        setTimeout(()=>{alert.style.display = "none";},2000);
    }
    else{
        alert1.style.display = "block";
        setTimeout(()=>{alert1.style.display = "none";},2000);

    }
}
function Proceed() {
    let mail = document.getElementById("myEmail");
    let alert2 = document.getElementById("alert2");
    let alert3 = document.getElementById("alert3");
    let alert4 = document.getElementById("alert4");       

    if (here.innerHTML==0){
        alert4.style.display = "block";
        setTimeout(()=>{alert4.style.display = "none";},2000);
        return;
    }
    else if (ValidateEmail(mail.value)==false){        

        alert3.style.display = "block";
        setTimeout(()=>{alert3.style.display = "none";},2000);
        return;
    }
    else{        
        alert2.style.display = "block";
        setTimeout(()=>{alert2.style.display = "none";},2000);
    }
    setTimeout(function(){ localStorage.removeItem("Cart");
    tbody.innerHTML = "";
    here.innerHTML = "0";
    Here.innerHTML = "0$";
    document.getElementById("myEmail").value = "";
    },2000);
   
}
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}