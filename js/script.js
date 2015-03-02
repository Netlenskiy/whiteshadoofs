//5

// ymaps.ready(init);
// var filter = new Filter( document.getElementById("mainMenu").getElementsByTagName("ul")[0] );
// var actions = new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[1] );
// var about = new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[2] );
// var search = new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[3] );
var menuItems = {
	categories:  new Filter( document.getElementById("mainMenu").getElementsByTagName("ul")[0] )
	, actions:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[1] )
	, about:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[2] )
	, search:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[3] )
};
var nav = new Navigation(mainMenu, menuItems);