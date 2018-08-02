
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
            console.log("change burger to :"+newDevourState)
            location.reload();
        })
    });


