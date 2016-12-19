import angular from 'angular';

(function (){
  var app = angular.module('blogApp',[]);

  app.controller('BlogController', function() {
    this.title = 'Code Muse';
    this.posts = [
      {
        id: 1,
        title: "Moby Dick",
        subtitle: "Searching for the white whale",
        category: "Maritimes",
        author: "Ernest Hemingway",
        avatarImgLink: "./ernesthemingway.jpg",
        timeSincePublication: "5 days ago",
        readTime: "2 minute read",
        teaserImgLink: "",
        // teaserText: "<p>See with what entire freedom the whaleman takes his handful of lamps—often but old bottles and vials, though—to the copper cooler at the try-works, and replenishes them there, as mugs of ale at a vat. He burns, too, the purest of oil, in its unmanufactured, and, therefore, unvitiated state; a fluid unknown to solar, lunar, or astral contrivances ashore.</p>",
        text: "<p>See with what entire freedom the whaleman takes his handful of lamps—often but old bottles and vials, though—to the copper cooler at the try-works, and replenishes them there, as mugs of ale at a vat. He burns, too, the purest of oil, in its unmanufactured, and, therefore, unvitiated state; a fluid unknown to solar, lunar, or astral contrivances ashore. It is sweet as early grass butter in April. He goes and hunts for his oil, so as to be sure of its freshness and genuineness, even as the traveller on the prairie hunts up his own supper of game.</p><p>Already has it been related how the great leviathan is afar off descried from the mast-head; how he is chased over the watery moors, and slaughtered in the valleys of the deep; how he is then towed alongside and beheaded; and how (on the principle which entitled the headsman of old to the garments in which the beheaded was killed) his great padded surtout becomes the property of his executioner; how, in due time, he is condemned to the pots, and, like Shadrach, Meshach, and Abednego, his spermaceti, oil, and bone pass unscathed through the fire;—but now it remains to conclude the last chapter of this part of the description by rehearsing—singing, if I may—the romantic proceeding of decanting off his oil into the casks and striking them down into the hold, where once again leviathan returns to his native profundities, sliding along beneath the surface as before; but, alas! never more to rise and blow.</p><p>While still warm, the oil, like hot punch, is received into the six-barrel casks; and while, perhaps, the ship is pitching and rolling this way and that in the midnight sea, the enormous casks are slewed round and headed over, end for end, and sometimes perilously scoot across the slippery deck, like so many land slides, till at last man-handled and stayed in their course; and all round the hoops, rap, rap, go as many hammers as can play upon them, for now, EX OFFICIO, every sailor is a cooper.</p><p>At length, when the last pint is casked, and all is cool, then the great hatchways are unsealed, the bowels of the ship are thrown open, and down go the casks to their final rest in the sea. This done, the hatches are replaced, and hermetically closed, like a closet walled up.</p>",
      },
      {
        id: 2,
        title: "A Princess of Mars",
        category: "Extraterrestrial",
        author: "Edgar Rice Burroughs",
        avatarImgLink: "./edgarriceburroughs.jpg",
        timeSincePublication: "5 days ago",
        readTime: "2 minute read",
        teaserImgLink: "",
        teaserText: "<p>I do not mean that the adult Martians are unnecessarily or intentionally cruel to the young, but theirs is a hard and pitiless struggle for existence upon a dying planet, the natural resources of which have dwindled to a point where the support of each additional life means an added tax upon the community into which it is thrown.</p>",
        text: "<p>I do not mean that the adult Martians are unnecessarily or intentionally cruel to the young, but theirs is a hard and pitiless struggle for existence upon a dying planet, the natural resources of which have dwindled to a point where the support of each additional life means an added tax upon the community into which it is thrown.</p><p>By careful selection they rear only the hardiest specimens of each species, and with almost supernatural foresight they regulate the birth rate to merely offset the loss by death.</p><p>Each adult Martian female brings forth about thirteen eggs each year, and those which meet the size, weight, and specific gravity tests are hidden in the recesses of some subterranean vault where the temperature is too low for incubation.  Every year these eggs are carefully examined by a council of twenty chieftains, and all but about one hundred of the most perfect are destroyed out of each yearly supply. At the end of five years about five hundred almost perfect eggs have been chosen from the thousands brought forth.  These are then placed in the almost air-tight incubators to be hatched by the sun's rays after a period of another five years.  The hatching which we had witnessed today was a fairly representative event of its kind, all but about one per cent of the eggs hatching in two days.  If the remaining eggs ever hatched we knew nothing of the fate of the little Martians.  They were not wanted, as their offspring might inherit and transmit the tendency to prolonged incubation, and thus upset the system which has maintained for ages and which permits the adult Martians to figure the proper time for return to the incubators, almost to an hour.</p><p>The incubators are built in remote fastnesses, where there is little or no likelihood of their being discovered by other tribes.  The result of such a catastrophe would mean no children in the community for another five years.  I was later to witness the results of the discovery of an alien incubator.</p>",
      }
    ];

  });

  app.controller('CommentsController', function())

  app.filter('unsafe', ['$sce', function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }]);

})();
