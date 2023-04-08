$('h1').click(function(){
    $(this).text('Changed')
})

$('input').keypress(function (event) { 
    if(event.which === 13){
        $('h3').toggleClass('turnBlue');
    }
});

