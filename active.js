/* work only with full path in href 
and did't work on localhost */
/* your class name for active <a href=""> */
var activeMenuItemClass = "nav-item-active";

var myWebPath = window.location.pathname;

/*put you menu in <nav>*/
var item = document.querySelectorAll("nav a");
	
for (var i = 0; i < item.length; i++) {
	var z = item[i].getAttribute('href');
		if(myWebPath == z) {
			item[i].removeAttribute('href');
			item[i].className = activeMenuItemClass;
		}
}		