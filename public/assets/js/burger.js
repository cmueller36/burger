
    $(".devour-burger").on("click", function(data){
    
        var id = $(this).data("id");
        var newDevour = $(this).data("devour");
    
        var newDevourState = {
            devoured : newDevour
        };
    
        $.ajax("/api/burger/"+ id,{
            type: "PUT",
            data: newDevourState
        }).then(function(){
            location.reload();
        })
    });

    $("#newBurger").on("click", function(event){
        event.preventDefault();

        var newBurger={
            burger_name: $("#burgerText").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers",{
            type:"POST",
            data:newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        )
    })


