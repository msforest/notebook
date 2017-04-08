/**
 *自定义控制器
 */
var app = angular.module('pm25', ['ui.router', 'serviceModule']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('');
	$stateProvider.state('default', {
		url: '',
		templateUrl: 'view/home.html',
		controller: 'citiesCtrl'
	}).state('city', {
		url: '/city/{city}',
		templateUrl: 'view/city.html',
		controller: 'cityCtrl'
	}).state('iscroll', {
		url: '/iscroll',
		templateUrl: 'view/iscroll.html',
		controller: 'iscrollCtrl'
	});
}])
.controller('citiesCtrl', ['$scope', '$compile', function($scope, $compile){
	$scope.hotCities = ['北京', '上海', '广州', '深圳', '杭州', '天津', '成都', '南京', '西安', '武汉'];
	$scope.allCities = ["七台河","三亚","三明","三沙","三门峡","上海","上饶","东莞","东营","中卫","中山","临夏州","临安","临汾","临沂","临沧","丹东","丽水","丽江","义乌","乌兰察布","乌海","乌鲁木齐","乐山","九江","乳山","云浮","五家渠","亳州","伊春","伊犁哈萨克","伊犁哈萨克州","佛山","佳木斯","保定","保山","信阳","克州","克拉玛依","六安","六盘水","兰州","兴安盟","内江","凉山州","包头","北京","北海","十堰","南京","南充","南宁","南平","南昌","南通","南阳","博州","即墨","厦门","双鸭山","句容","台州","合肥","吉安","吉林","吐鲁番地区","吕梁","吴忠","吴江","周口","呼伦贝尔","呼和浩特","和田地区","咸宁","咸阳","哈密地区","哈尔滨","唐山","商丘","商洛","喀什地区","嘉兴","嘉峪关","四平","固原","塔城地区","大兴安岭地","大兴安岭地区","大同","大庆","大理州","大连","天水","天津","太仓","太原","威海","娄底","孝感","宁德","宁波","安庆","安康","安阳","安顺","定西","宜兴","宜宾","宜昌","宜春","宝鸡","宣城","宿州","宿迁","富阳","寿光","山南地区","岳阳","崇左","巴中","巴彦淖尔","常州","常德","常熟","平凉","平度","平顶山","广元","广安","广州","庆阳","库尔勒","廊坊","延安","延边州","开封","张家口","张家港","张家界","张掖","徐州","德宏州","德州","德阳","忻州","怀化","怒江州","恩施州","惠州","成都","扬州","承德","抚州","抚顺","拉萨","招远","揭阳","攀枝花","文山州","文登","新乡","新余","无锡","日喀则地区","日照","昆山","昆明","昌吉州","昌都地区","昭通","晋中","晋城","普洱","景德镇","曲靖","朔州","朝阳","本溪","来宾","杭州","松原","林芝地区","果洛州","枣庄","柳州","株洲","桂林","梅州","梧州","楚雄州","榆林","武威","武汉","毕节","永州","汉中","汕头","汕尾","江门","江阴","池州","沈阳","沧州","河池","河源","泉州","泰安","泰州","泸州","洛阳","济南","济宁","海东地区","海北州","海南州","海口","海西州","海门","淄博","淮北","淮南","淮安","深圳","清远","温州","渭南","湖州","湘潭","湘西州","湛江","溧阳","滁州","滨州","漯河","漳州","潍坊","潮州","濮阳","烟台","焦作","牡丹江","玉林","玉树州","玉溪","珠海","瓦房店","甘南州","甘孜州","白城","白山","白银","百色","益阳","盐城","盘锦","眉山","石嘴山","石家庄","石河子","福州","秦皇岛","章丘","红河州","绍兴","绥化","绵阳","聊城","肇庆","胶南","胶州","自贡","舟山","芜湖","苏州","茂名","荆州","荆门","荣成","莆田","莱州","莱芜","莱西","菏泽","萍乡","营口","葫芦岛","蓬莱","蚌埠","衡水","衡阳","衢州","襄阳","西双版纳州","西宁","西安","许昌","诸暨","贵港","贵阳","贺州","资阳","赣州","赤峰","辽源","辽阳","达州","运城","连云港","迪庆州","通化","通辽","遂宁","遵义","邢台","那曲地区","邯郸","邵阳","郑州","郴州","鄂尔多斯","鄂州","酒泉","重庆","金华","金坛","金昌","钦州","铁岭","铜仁地区","铜川","铜陵","银川","锡林郭勒盟","锦州","镇江","长春","长沙","长治","阜新","阜阳","防城港","阳江","阳泉","阿克苏地区","阿勒泰地区","阿坝州","阿拉善盟","阿里地区","陇南","随州","雅安","青岛","鞍山","韶关","马鞍山","驻马店","鸡西","鹤壁","鹤岗","鹰潭","黄冈","黄南州","黄山","黄石","黑河","黔东南州","黔南州","黔西南州","齐齐哈尔","龙岩"];
	// var s = Date.now();
	initials($scope.allCities);
	$compile(angular.element('.cities .all .bottom'))($scope);
	// var e = Date.now();
	// console.log(e-s);
}])
.controller('cityCtrl', ['$scope', '$stateParams','my-pinyin', function($scope, $stateParams, py){
	$scope.chinese = $stateParams.city;
	$scope.fullpy = py.getFullChars($scope.chinese);
	$scope.$watch('chinese', function(newValue, oldValue){
		if(newValue !== oldValue) {
			$scope.fullpy = py.getFullChars(newValue);
		}
	}, true);
}])
.controller('iscrollCtrl', ['$scope', '$stateParams', 'my-iscroll', function($scope, $stateParams, myScroll){
	$scope.pretty = [];
	for (var i = 20; i >= 0; i--) {
		$scope.pretty.push('Pretty row '+i);
	}
	$scope.init = function(){
		myScroll.loaded();
	};
}])
;