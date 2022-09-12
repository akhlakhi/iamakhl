$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
        },
            lastname:{
                required:true,
                minlength:4
        },
            cont: {
                required:true,
                email:true
        },
        pas: {
            required:true,
            minlength:4,
            maxlength:6

        },
        gender: {
            required:true
        },
        messages: {
            fname:"Enter First Name"
        }
    
    }
        
    })
})