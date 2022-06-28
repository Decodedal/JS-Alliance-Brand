var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    let header = documetn.querySelector("#tm-header")
    header.textContent = customerName;
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
     let intHeader = document.querySelector("#introheader")
     intHeader.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let colorShift = document.querySelectorAll(".tm-white-rect")

    for (let i = 0; i<colorShift.length; i++){
        colorShift[i].classList.add("tm-blue-rect")
        colorShift[i].classList.remove("tm-white-rect")
    }

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
      let social = document.querySelector("#nav flex-row tm-social-links")
      social.style.visibility = "none"
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
let intro = document.querySelector("#intropara1")
intro.textContent = "Alliance was founded in 1931 by Albert Daniels"
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
let introTwo = document.querySelector("#aboutpara1")
introTwo.textContent = "The company is a leader in P.C. Manufacturing"
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
let about = document.querySelector("#aboutpara2")
about.textContent = 'We deliver the best service this side of creation'
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
let phone = document.querySelector("#adresspara")
phone.textContent = "1-800-565-5656"
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



