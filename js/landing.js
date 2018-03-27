
function mapCover(){
    var time = 1000;
    var timer;
    if(jQuery(window).width() < 767){
        if(jQuery('.google-map').find('.map-cover').length == 0) {
            jQuery('.google-map').append('<div class="map-cover"/>').on('click', function(){
                jQuery('.map-cover').hide();
            });
            jQuery(document).on('click', function(e) {
                if (!jQuery(e.target).closest(".google-map").length) {
                    jQuery('.map-cover').show();
                }
                e.stopPropagation();
            });
        }
    }
    else{
        jQuery('.map-cover').remove();
    }
}

jQuery(window).on('load resize', function(){
      mapCover();
});

jQuery(document).ready(function() {
    jQuery('#rewiews').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    jQuery('#works').owlCarousel({
        loop: true,
        nav: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});

jQuery(document).ready(function(){
    jQuery('#play-video').click(function (event) {
        event.preventDefault();
        jQuery('.author-video-block').hide();
        jQuery('.video-block').show();
        jQuery("#landing-video").get(0).play();
    });

    jQuery('.footer-arrow').on('click',function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    jQuery('#contacts-number-modal, #contacts-number').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        jQuery(this).removeClass('error');
    });
    jQuery('#contacts-name-modal, .textarea-modal1, #contacts-name').bind("change keyup input click", function() {
        jQuery(this).removeClass('error');
    });

    jQuery('#kurseappoinment').submit(function(e) {
        e.preventDefault();
        var name = jQuery(this).find('#contacts-name-modal');
        var phone = jQuery(this).find('#contacts-number-modal');
        var time = jQuery(this).find('button.multiselect').attr('title');
        var addInfo = jQuery(this).find('#textarea-modal1');
        if (name.val() == '') {
            name.addClass('error');
        }
        else if (phone.val() == '') {
            phone.addClass('error');
        }
        else if (addInfo.val() == '') {
            addInfo.addClass('error');
        }
        else {
            name.removeClass('error');
            phone.removeClass('error');
            addInfo.removeClass('error');
            jQuery.ajax({
                type: 'post',
                url: 'sendemail.php',
                data: {name:name.val(), phone:phone.val(), time:time, addInfo: addInfo.val()},
                dataType: 'html',
                success: function (data) {
                    console.log('ok');
                    jQuery('#myModal1').modal('hide');
                    jQuery('#kurseappoinment').trigger('reset');
                    jQuery('#ThankYouModal').modal('show');
                },
                error: function (data) { // if error occured
                    alert("Error occured.please try again");
                    alert(data);
                }
            });
        }
    });

    jQuery('#kurseCallBack').submit(function(e) {
        e.preventDefault();
        var name = jQuery(this).find('#contacts-name');
        var phone = jQuery(this).find('#contacts-number');
        if (name.val() == '') {
            name.addClass('error');
        }
        else if (phone.val() == '') {
            phone.addClass('error');
        }
        else {
            name.removeClass('error');
            phone.removeClass('error');
            jQuery.ajax({
                type: 'post',
                url: 'sendemail2.php',
                data: {name:name.val(), phone:phone.val()},
                dataType: 'html',
                success: function (data) {
                    console.log('ok');
                    jQuery('#kurseCallBack').trigger('reset');
                    jQuery('#ThankYouModal').modal('show');
                },
                error: function (data) { // if error occured
                    alert("Error occured.please try again");
                    alert(data);
                }
            });
        }
    });
});

