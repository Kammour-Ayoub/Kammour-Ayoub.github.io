
goToOtherSection(0,0);

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

