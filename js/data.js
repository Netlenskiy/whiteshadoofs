//1
var Types = {
	alley: 0,
	eternalFlame: 1,
	memorial: 2,
	monument: 3,
	record: 4,//памятник
	square: 5,
	place: 6,
	obelisk: 7,
	street: 8,
	other: 9
}
var myPMarks = [[55.10, 37.10], [55.30, 37.30], [55.10, 37.30], [55.30, 37.10], [55.20, 37.20]];
var mySrcStrings = [
		"face/Smolensk_skver_pamyati_geroyev.jpg"
		, "face/DSC_0014.jpg"
		, "face/96_big.jpg"
		, "face/1424204291_3.jpg"
		, "face/image31207551.jpg"
];
var myDisclamers = [
		"Sed pretium euismod erat ut congue. Maecenas ac maximus enim, ac bibendum turpis. Aliquam erat volutpat."
		, "Donec a sagittis justo. Proin faucibus pulvinar nisl, vel sagittis turpis consectetur eget. Duis porttitor rutrum gravida."
		,"Nam commodo luctus erat, sed scelerisque turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
		, "Proin placerat felis tristique, cursus purus a, faucibus leo. Proin suscipit orci dapibus convallis blandit."
		, "Quisque a volutpat metus. Aliquam malesuada arcu enim, nec pretium nunc commodo eu. Curabitur eleifend ipsum at risus porttitor, in sollicitudin felis aliquam."
];
var pmarksType = [
		0, 0, 1, 1, 0
];
var icons = [
	"RedStarPic.gif"
	, "RedStarPic.gif"
	, "fire.gif"
	, "fire.gif"
	, "RedStarPic.gif"
];