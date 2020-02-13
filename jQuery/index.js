   /* $(document).ready(function(){
    }); If you write jquery at head section use this otherwise no need
    */
$("h1").css("color","red");

$("h1").text("bye");

$("h1").click(function(){
    $("h1").css("color","black");

});

// $("button").click(function(){
//     $("h1").css("color","purple");

// });

$("input").keypress(function(){
    $("h1").text(event.key);

});

$("h1").on("mouseover",function(){
    $("h1").css("color","black");

});

/*$("h1").before("<button>hi</button>");
$("h1").after("<button>hi</button>");
$("h1").prepend("<button>hi</button>"); //before the content of the h1 
$("h1").append("<button>hi</button>");  //after the content*/

//$("button").remove();
// $("button").click(function(){
//     $("h1").hide();

// });

// $("button").click(function(){
//     $("h1").toggle(); //another option show();

// });
// $("button").click(function(){
//     $("h1").fadeToggle();

// });
// $("button").on("click",function(){
//     $("h1").slideUp();

// });

// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5}); //stcik to things that have value like margin and others

// });

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

});