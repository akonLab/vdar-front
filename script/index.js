 isNavBarOpened = false;

 function openNav() {
     if (isNavBarOpened) {
         document.getElementById("catNav").style.height = '0px';
         document.getElementById("catNav").style.opacity = '0';
         isNavBarOpened = false;

     } else { //calc(100% - 82px)
         document.getElementById("catNav").style.height = 'calc(100% - 80px )';
         document.getElementById("catNav").style.opacity = '1';

         isNavBarOpened = true;
     }
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