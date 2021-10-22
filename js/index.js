$(document).ready(function(){    
    $(".logo-h1").click(function(){
        $(".principal").toggle(300);
    })

    $(".home").ready(function(){
        $(".home-copy").addClass(["home"]);
        var clase2 = $(".home").find("div").first();
        $(clase2).addClass(["home-nav"]);
        $(clase2).clone().appendTo(".home-copy");
    })
})