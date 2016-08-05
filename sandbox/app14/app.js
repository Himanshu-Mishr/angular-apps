angular.module('myApp', ['ngMaterial'])
	.config(function($mdIconProvider) {
	  $mdIconProvider
	    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
	})
	.controller('mainController', ['$scope', mainController]);

function mainController($scope)  {
	$scope.todos = [
  {
    "title": "consequat eiusmod duis nostrud irure",
    "description": "Dolore dolore mollit exercitation proident. Commodo voluptate adipisicing id eiusmod minim voluptate. Consequat voluptate eu do ut qui voluptate reprehenderit excepteur sit ad.\r\n"
  },
  {
    "title": "minim enim duis ex deserunt",
    "description": "Exercitation elit fugiat excepteur ex minim velit dolor velit. Veniam velit dolore nulla esse duis elit magna cupidatat dolor veniam mollit dolor. Magna velit anim consectetur consequat enim ipsum culpa velit ut fugiat quis ea commodo consequat.\r\n"
  },
  {
    "title": "dolore pariatur magna tempor minim",
    "description": "Labore nisi pariatur fugiat Lorem nisi cillum eu et occaecat quis sint reprehenderit. Enim consectetur in anim fugiat sint esse quis dolore id cillum reprehenderit proident anim occaecat. Esse minim labore et fugiat velit consequat et.\r\n"
  },
  {
    "title": "qui laborum laboris ut occaecat",
    "description": "Laborum incididunt magna fugiat ipsum enim est eiusmod eiusmod ex tempor occaecat. Enim deserunt ullamco nostrud commodo adipisicing do velit reprehenderit est mollit. Amet elit nulla exercitation duis qui excepteur ullamco non dolor. Aute esse enim consequat aliquip sunt quis reprehenderit dolore. Quis esse sunt ullamco voluptate adipisicing dolor mollit elit aliquip excepteur. Tempor deserunt ullamco aliqua sint laborum esse.\r\n"
  },
  {
    "title": "eiusmod consequat consequat cillum laboris",
    "description": "Do pariatur amet excepteur ipsum. Excepteur enim id aute do. Nostrud aliqua nisi mollit laboris irure ut. Dolore cupidatat cillum velit aliquip esse voluptate deserunt est veniam amet dolore enim. Minim ad aliquip esse labore ea quis. Aliqua consectetur mollit amet nisi tempor. Occaecat dolore laborum in aliqua velit do.\r\n"
  },
  {
    "title": "dolore ut id duis labore",
    "description": "Laborum officia fugiat fugiat adipisicing nostrud consectetur voluptate consequat eu sit ut pariatur dolore. Qui aliqua pariatur voluptate ad proident do consectetur officia est magna. Irure dolore magna officia duis. Cillum ipsum do do cupidatat ut adipisicing ut nostrud qui esse.\r\n"
  },
  {
    "title": "ad exercitation adipisicing commodo non",
    "description": "Excepteur duis dolore id Lorem dolore officia commodo aliqua occaecat eiusmod amet. Nulla mollit consequat officia eu consectetur consequat enim laboris cupidatat dolor cillum nulla. Sit qui aute et mollit culpa aliquip cupidatat magna consequat aliquip sunt Lorem anim ut. Laboris anim anim enim aute commodo amet nostrud amet. Adipisicing nisi est dolor voluptate exercitation incididunt. Laborum Lorem do dolore laboris deserunt cupidatat elit in non proident.\r\n"
  },
  {
    "title": "sunt nostrud ex labore fugiat",
    "description": "Occaecat ea nostrud consequat in ipsum dolor nulla nisi. Esse est velit ut dolore eiusmod laboris sunt do. Dolor do amet adipisicing ad deserunt. In ea enim eu exercitation. Reprehenderit Lorem irure tempor Lorem. Do non reprehenderit excepteur aliquip cupidatat. Nostrud incididunt ad cupidatat aute ipsum.\r\n"
  },
  {
    "title": "elit ad ad veniam veniam",
    "description": "Occaecat ipsum proident incididunt veniam do anim minim tempor pariatur voluptate ad sit. Proident consequat veniam sit proident commodo et veniam ex consequat. Deserunt exercitation elit voluptate ex elit non. Nostrud adipisicing consectetur nisi quis duis consequat in eu pariatur eu eiusmod ut deserunt. Consequat cillum in do velit consectetur ut in eiusmod. Sint incididunt elit proident est aliquip officia aliquip non dolore quis laborum ipsum proident. Consectetur ex Lorem deserunt non.\r\n"
  },
  {
    "title": "aliqua nisi cillum qui anim",
    "description": "Officia consequat mollit ipsum et deserunt qui amet. Ipsum sint qui proident anim sint sunt ipsum ad adipisicing. Duis reprehenderit commodo anim veniam magna. Anim est excepteur cillum Lorem id tempor nisi Lorem quis nulla. Deserunt velit sit dolore dolor ipsum mollit proident eu nostrud elit proident. Laborum sunt non cupidatat Lorem occaecat irure elit irure minim nisi nostrud.\r\n"
  },
  {
    "title": "proident velit quis esse non",
    "description": "Est reprehenderit incididunt excepteur amet voluptate sit magna enim duis cillum enim esse aliqua. Nostrud consequat dolor esse fugiat sunt aliqua in mollit aliquip deserunt. Ipsum deserunt labore tempor officia cupidatat mollit sunt enim.\r\n"
  },
  {
    "title": "culpa sit culpa quis labore",
    "description": "Cillum officia officia incididunt aliqua sit cupidatat. Minim esse excepteur veniam do enim sint dolore adipisicing tempor tempor irure. Cupidatat anim veniam pariatur non voluptate reprehenderit. Minim laborum nisi reprehenderit proident eiusmod consequat in officia laborum consectetur do ea pariatur enim.\r\n"
  },
  {
    "title": "consequat incididunt aute cillum pariatur",
    "description": "Irure dolore consectetur non sit laborum. Cupidatat mollit do et sit officia consequat labore pariatur irure eu elit ipsum laboris elit. Fugiat ut laboris amet adipisicing pariatur et Lorem ullamco amet ad. Adipisicing pariatur enim ipsum veniam esse amet cillum minim eu.\r\n"
  },
  {
    "title": "anim duis voluptate duis cillum",
    "description": "Excepteur sunt aliquip amet qui sunt et ipsum sit consectetur commodo ipsum. Dolore est in labore laboris aliquip. Pariatur dolor aliquip eu sint velit officia ullamco esse velit ad. Lorem commodo proident laborum fugiat elit sit ipsum. Ad irure sunt veniam labore est proident pariatur occaecat elit. Sit voluptate et deserunt culpa labore tempor incididunt occaecat eiusmod enim. Occaecat culpa nulla ipsum deserunt enim exercitation esse dolore dolor ullamco proident mollit id adipisicing.\r\n"
  }
];
}