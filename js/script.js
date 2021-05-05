var input_1 = $('#input_1');
var input_2 = $('#input_2');
input_1.click(() => {
    $('#first').toggleClass('test_1');
})
input_2.click(()=>{
    $('#seccond').toggleClass('test_2');
})

$('.test').click(function(){
    location.href = 'http://www.google.com'
})