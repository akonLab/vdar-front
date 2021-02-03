function openNav() {
    open("catNav");
}

function openSubNav() {
    open("subCatNav");
}

function open(navId) {
    var wWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    if (wWidth < 450) {
        document.getElementById(navId).style.width = '60%';
    } else if (wWidth < 770) {
        document.getElementById(navId).style.width = '37%';
    } else {
        document.getElementById(navId).style.width = '25%';
    }

}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("catNav").style.width = '0%';
}

function closeSubNav() {
    document.getElementById("subCatNav").style.width = '0%';
}
// functioon to change text in dropdown btn "Whole Kazakhstan"(in choose location) after choosing city from dropdown items
function cityBtn(cityName) {
    $("#choosedCityName").empty();
    $("#choosedCityName").append(cityName);
}

//! add form func{start}

function chooseCategVar(categoryName, icon, categoryValue) { //category
    $("#choosedCategory").empty();
    $("#choosedCategory").append(icon + ' ' + categoryName);

    //add value to real input
    document.getElementById("categType").value = categoryValue;
}

function chooseLocationVar(location) { //location
    $("#choosedLocation").empty();
    $("#choosedLocation").append(location);

    //add value to real input
    document.getElementById("locationType").value = location;
}

function addImage(btn) { //photo
    if (btn == 'image') {
        $("#addImage").click();
    }
}

//! add form func{end}

function searchBtnTap() {
    $("#realSearchBtn").click();
}
//log reg auth btns
function openLogBody(formType) {
    if (formType == 'openRegForm') {
        document.getElementById("openRegForm").style.backgroundColor = "#1C89A1"
        document.getElementById("openRegForm").style.color = "#FEC061"
        document.getElementById("openRegForm").style.borderRadius = "10px 10px 0 0"

        document.getElementById("openAuthForm").style.backgroundColor = "#003044"
        document.getElementById("openAuthForm").style.color = "#F0E9E8"
        document.getElementById("openAuthForm").style.borderRadius = "0 10px 0 0"

        document.getElementById("AuthFormBody").style.display = "none";
        document.getElementById("RegFormBody").style.display = "block";
    } else {
        document.getElementById("openAuthForm").style.backgroundColor = "#1C89A1"
        document.getElementById("openAuthForm").style.color = "#FEC061"
        document.getElementById("openAuthForm").style.borderRadius = "10px 10px  0 0"

        document.getElementById("openRegForm").style.backgroundColor = "#003044"
        document.getElementById("openRegForm").style.color = "#F0E9E8"
        document.getElementById("openRegForm").style.borderRadius = "10px 0 0 0"

        document.getElementById("RegFormBody").style.display = "none";
        document.getElementById("AuthFormBody").style.display = "block";
    }
}