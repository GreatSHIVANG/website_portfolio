$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolLY > 20){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
    })
    //toggle menu/navbar script
    $('.menu-btn').click(function){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass('')
    }
});