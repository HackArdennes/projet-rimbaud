// Quotes about learning from goodreads -- http://www.goodreads.com/quotes/tag/learning

var quotes = [
    "“On n'est pas sérieux, quand on a dix-sept ans.”",
    "“Je me crois en enfer, donc j'y suis.”",
    "“La morale est la faiblesse de la cervelle.”",
    "“Ah ! Que le temps vienne Où les coeurs s’éprennent.”",
    "“La femme ne sait plus même être courtisane !”",
    "“Quand sera brisé l'infini servage de la femme, quand elle vivra pour elle et par elle, elle sera poète, elle aussi ! ”",
    "“A noir, E blanc, I rouge, U vert, O bleu : voyelles, Je dirai quelque jour vos naissances latentes.”", 
    "“Je est un autre.”",
    "“Le Poète se fait voyant par un long, immense et raisonné dérèglement de tous les sens.”",
    "“Si stupide que soit son existence, l'homme s'y rattache toujours.”",
    "“Le monde marche ! Pourquoi ne tournerait-il pas ?”", 
    "“Le monde est très grand et plein de contrées magnifiques que l'existence de mille hommes ne suffirait pas à visiter.”",
    "“Il faut être absolument moderne.”",
    "“J'ai tendu des cordes de clocher à clocher ; des guirlandes de fenêtre à fenêtre ; des chaînes d'or d'étoile à étoile, et je danse.”" 
];

var index = 0;
var max = quotes.length - 1;
var delay = .1 ;

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}
function cycleQuotes(arr, i, sel) {
    var el = $(sel);
    var message = arr[i];
    el.html(message);
    var split = new SplitText(el,{type:"words,chars",position:"absolute"});
    var time = split.chars.length * delay;

    $(split.chars).each(function (i) {
        TweenMax.from($(this), time, {
            opacity: 0,
            x: -400,
            y: random(-200, 200),
            z: random(500, 1000),
            rotation: random(-180,180),
            // scale: .1,
            delay: i * delay,
            yoyo: true,
            repeat: -1,
            repeatDelay: time * 4,
            ease: Power1.easeOut
        });
    });

    //index = index == max ? 0 : (index + 1);
    index = Math.floor(random(0,quotes.length-1));

    setTimeout(function () {

        cycleQuotes(quotes, index, ".split");
    }, ((time * 4) + (time * 4)) * 1000);

    
    
}

$(window).load(function () {
    cycleQuotes(quotes, index, ".split");
});