$(document).ready(function(){

        $( "#slider-vertical" ).slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 36,
            value: 14,
            slide: function( event, ui ) {
                var currentRange = $( "#slider-vertical" ).slider( "value" );
                $( "#amount" ).val( ui.value );
                $('.sliderRange--content').css("font-size", currentRange + "px");
            }
        });
        $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );

});