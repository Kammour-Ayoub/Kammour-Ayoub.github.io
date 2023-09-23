goToOtherSection(1,6);

function goToOtherSection(i,j) {

  if(i==0)
    var removeThis = document.querySelector('.MyApp');
  if(i==1)
    var removeThis = document.querySelector('.homePage');
  if(i==2)
    var removeThis = document.querySelector('.mapTrafficUpdatesPage');
  if(i==3)
    var removeThis = document.querySelector('.tripHistoryPage');
  if(i==4)
    var removeThis = document.querySelector('.couponListPage');
  if(i==5)
    var removeThis = document.querySelector('.settingsPage');
  if(i==6)
    var removeThis = document.querySelector('.redeemListPage');
  if(i==7)
    var removeThis = document.querySelector('.myCouponPage');

  if(j==0)
    addContent(removeThis, 'Settings.html');
  if(j==1)
    addContent(removeThis, 'Home.html');
  if(j==2)
    addContent(removeThis, 'Car.html');
  if(j==3)
    addContent(removeThis, 'Road.html');
  if(j==4)
    addContent(removeThis, 'Coupons.html');
  if(j==5)
    addContent(removeThis, 'BackHome.html');
  if(j==6)
    addContent(removeThis, 'RedeemFood.html');
  if(j==7)
    addContent(removeThis, 'MyCoupon.html');
}


function addContent(removable, newCode) {
  // Load the new code from newContent.html
  fetch(newCode)
      .then(response => response.text())
      .then(newCode => {
          // Replace the existing content with the new code
          removable.outerHTML = newCode;
      })
      .catch(error => {
          console.error('Error loading new content:', error);
      });
}



window.addEventListener('load', calculateTime)
function calculateTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    //hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;

    setTimeout(calculateTime, 200);
}


function chnageBoxStyle(languageNumber) {
  var selectedElement = document.querySelector('.language-box.selectedBox');
  if (selectedElement) {
    selectedElement.classList.remove('selectedBox');
  }
  var languageElement = document.querySelector('.language-box:nth-child(' + languageNumber + ')');
  languageElement.classList.add('selectedBox');
}


function toEN() {
  var account = "Account Information";
  var payment = "Payment Methods";
  var theme = "Theme Settings";
  var privacy = "Advanced Privacy";
  var logOut = "Log Out";
  var saveText = "Save";
  var discard = "Discard";

  document.getElementById("accountText").innerHTML = account;
  document.getElementById("paymentText").innerHTML = payment;
  document.getElementById("themeText").innerHTML = theme;
  document.getElementById("privacyText").innerHTML = privacy;
  document.getElementById("logOutText").innerHTML = logOut;
  document.getElementById("saveText").innerHTML = saveText;
  document.getElementById("discardText").innerHTML = discard;
  chnageBoxStyle(1); 
}

function toFR() {
  var account = "Informations du Compte";
  var payment = "Méthodes de Paiement";
  var theme = "Paramètres du Thème";
  var privacy = "Confidentialité Avancée";
  var logOut = "Se Déconnecter";
  var saveText = "Sauvegarder";
  var discard = "Abandonner";

  document.getElementById("accountText").innerHTML = account;
  document.getElementById("paymentText").innerHTML = payment;
  document.getElementById("themeText").innerHTML = theme;
  document.getElementById("privacyText").innerHTML = privacy;
  document.getElementById("logOutText").innerHTML = logOut;
  document.getElementById("saveText").innerHTML = saveText;
  document.getElementById("discardText").innerHTML = discard;
  chnageBoxStyle(2); 

}

function toAR() {
  var account = "معلومات الحساب";
  var payment = "وسائل الدفع";
  var theme = "إعدادات القالب";
  var privacy = "الخصوصية المتقدمة";
  var logOut = "تسجيل الخروج";
  var saveText = "حفظ";
  var discard = "تجاهل";

  document.getElementById("accountText").innerHTML = account;
  document.getElementById("paymentText").innerHTML = payment;
  document.getElementById("themeText").innerHTML = theme;
  document.getElementById("privacyText").innerHTML = privacy;
  document.getElementById("logOutText").innerHTML = logOut;
  document.getElementById("saveText").innerHTML = saveText;
  document.getElementById("discardText").innerHTML = discard;
  chnageBoxStyle(3); 
}