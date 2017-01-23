window.onload = function () {
  var header = document.getElementById('header');
  header.className = "splash";
  headerChildren = header.childNodes;
  for (i = 0; i < headerChildren.length; i++) {
    headerChildren[i].className = 'splash';
  }

  var tablinks = document.getElementsByClassName('tablinks');
  for(i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener('onclick', openCity, false);
  }

  header.onclick = function () {
    header.className = 'main';
    for (i = 0; i < headerChildren.length; i++) {
      headerChildren[i].className = 'main';
    }
  }


  function changeTab(evt, newTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    console.log("here")
    document.getElementById(newTab).style.display = "block";
    evt.currentTarget.className += " active";
}
}