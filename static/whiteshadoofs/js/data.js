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
var face_path = "static/whiteshadoofs/";
var myPlaceMarks = [
	{
		"id": 0,
		"coordnts": [55.10, 37.10],
		"srcString": face_path + "face/Smolensk_skver_pamyati_geroyev.jpg",
		"disclamer": "Сквер памяти героев один из старейших скверов в Смоленске. В январе 1911 года, во время подготовки к празднованию 100-летнего юбилея победы над армией императора Наполеона, Смоленская городская Дума постановила: «Устроить бульвар возле крепостной стены… и назвать этот бульвар и сооружаемое здесь здание начального городского училища «Бульваром и начальным городским училищем в память 1812 года»..",
		"icontype": 0,
		"icon": "RedStarPic.gif"
	},
	{
		"id": 1,
		"coordnts": [55.30, 37.30],
		"srcString": face_path + "face/DSC_0014.jpg",
		"disclamer": "Мемориальная аллея Памяти в Московском парке Победы Санкт-Петербурга — создана к 60-летию снятия блокады Ленинграда 27 января 2004 г. по инициативе Московского районного общества «Жители Блокадного Ленинграда»",
		"icontype": 0,
		"icon": "RedStarPic.gif"
	},
	{
		"id": 2,
		"coordnts": [55.10, 37.30],
		"srcString": face_path + "face/96_big.jpg",
		"disclamer": "Мемориал памяти погибшим в Великой Отечественной Войне.",
		"icontype": 1,
		"icon": "fire.gif"
	},
	{
		"id": 3,
		"coordnts": [55.30, 37.10],
		"srcString": face_path + "face/1424204291_3.jpg",
		"disclamer": "Ве́чный ого́нь — постоянно горящий огонь, символизирующий вечную память о чём-либо или о ком-либо.",
		"icontype": 1,
		"icon": "fire.gif"
	},
	{
		"id": 4,
		"coordnts": [55.20, 37.20],
		"srcString": face_path + "face/image31207551.jpg",
		"disclamer": "Ве́чный ого́нь — постоянно горящий огонь, символизирующий вечную память о чём-либо или о ком-либо.",
		"icontype": 0,
		"icon": "RedStarPic.gif"
	}
]