var effect = 100;
$('#nav > p').click(function() {
    
    if($(this).html() != "|") {
        $('#nav > p').css('color', '#4c4c4c');
        $(this).css('color', '#1082cb');
        $('.about_sanrad, .our_history, .awards, .customer_care, .partner').hide();
        
        switch ($(this).html()) {
            case "About Sanrad":
                $('.about_sanrad').show(effect);
                break;
            case "Our History":
                $('.our_history').show(effect);
                break;
            case "Awards &amp; Recognition":
                $('.awards').show(effect);
                break;
            case "Customer Care":
                $('.customer_care').show(effect);
                break;
            case "Our Fabled Partner":
                $('.partner').show(effect);
        }

    }
});

$('#nav > p:first-child').click();