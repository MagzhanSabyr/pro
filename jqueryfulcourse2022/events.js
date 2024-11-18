// function func1()
// {
//     document.getElementById("img1").style.width="500px"
// }


// $("button").click(func1);

// function func1(){
//     $("#img1").css('width', '500px')
// }



// Конструкция $(document).ready() в jQuery используется для определения функции, которая должна быть выполнена после того, как весь HTML-документ будет полностью загружен в браузере. Это позволяет избежать выполнения JavaScript-кода до того, как HTML-документ будет готов к обработке.

// $(document) - это функция jQuery, которая выбирает объект document (т.е. весь HTML-документ).
// .ready() - это метод jQuery, который определяет, что должно быть выполнено после загрузки документа.
// function(){ ... } - это анонимная функция JavaScript, содержащая код, который нужно выполнить после загрузки документа.


$("document").ready(function(){
    // $("button").dblclick(function(){
    //     $("#img1").css('width', '500px')
    // });

    // $("#img1").mouseenter(function(){
    //     $("#img1").css('width', '500px');
    // });

    // $("#img1").mouseleave(function(){
    //     $("#img1").css('width','300px');
    // });

    $("#img1").hover(func1,func2);

    function func1()
    {
        $("#img1").css('width', '500px');
    }
    function func2()
    {
        $("#img1").css('width', '300px');
    }



});










