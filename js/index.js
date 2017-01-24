window.onload = function () {
  console.log(window.location.pathname);
  var tabs = document.getElementsByClassName('tabs');
  changeTab(tabs[0]);
  for (i = 0; i < tabs.length; i++) {
    (function () {
      var tab = tabs[i];
      tab.addEventListener('click', function () {
        changeTab(tab);
      }, false);
    }());
  }


  function changeTab(newTab) {
    var i, content, tabs;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    
    document.getElementById(newTab.children[0].innerHTML).style.display = "block";
    newTab.className += " active";
  }
}