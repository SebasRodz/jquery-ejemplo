$(document).ready(function(){    
    $(".header").click(function(){
        alert("Diste click flow");
    })

    $(".nav").ready(function(){
        var clase2 = $(".nav").find("div");
        $(clase2).click(function(){
            alert($(this).text());
        })
    })

    $(".boton-section").ready(function(){
        var clase2 = $(".boton-section").find("button");
        $(clase2).html("<p>Ver Mas</p>");
        var cont = true;
        $(clase2).click(function(){
            $(".oculto").toggle(150);
            if(cont) {
                cont = !cont;
                $(clase2).html("<p>Ver Menos</p>");
            }
            else{
                cont = !cont;
                $(clase2).html("<p>Ver Mas</p>");
            }
        })
    })

    // $("footer div").dblclick(function () { 
    //     $(this).hide();
    // });

    // $("footer div").mouseenter(function () { 
    //     alert("Entraste");
    // });

    // $("footer div").mouseleave(function () { 
    //     alert("Saliste");
    // });
    
})