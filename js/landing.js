function equiv(){
    jQuery.fn.equivalent = function (){
        blocks = jQuery(this);
        maxH    = blocks.eq(0).height();
        blocks.each(function(){
            maxH = ( jQuery(this).height() > maxH ) ? jQuery(this).height() : maxH;
        });
        blocks.height(maxH);
    };
    jQuery('.cost-it .col-md-4 .money-title-height').height('auto').equivalent();
    jQuery('.cost-it .col-md-4 .manicure-block').height('auto').equivalent();
    jQuery('.cost-it .col-md-4 .manicure-script-h').height('auto').equivalent();
    jQuery('.cost-it .col-md-4 .ul-script-height').height('auto').equivalent();
    jQuery('.course-enroll .col-md-3').height('auto').equivalent();
    jQuery('.course-enroll .mini-group-title').height('auto').equivalent();
    jQuery('.course-enroll .mini-group-text').height('auto').equivalent();
    jQuery('.cost-it .manicure-title').height('auto').equivalent();
    jQuery('.author-achievements .author-achievements-block1').height('auto').equivalent();
    jQuery('.manicure-title').height('auto').equivalent();
}

function adaptiveManicureBlock() {
    if(jQuery(window).width() < 991){
        jQuery('.cost-it .col-md-4 .money-title-height').height('auto');
        jQuery('.cost-it .col-md-4 .manicure-block').height('auto');
        jQuery('.cost-it .col-md-4 .manicure-script-h').height('auto');
        jQuery('.cost-it .col-md-4 .ul-script-height').height('auto');
    }
}

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
    equiv();
    mapCover();
    adaptiveManicureBlock();
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
});

jQuery(document).ready(function(){
    jQuery('#play-video').click(function (event) {
        event.preventDefault();
        jQuery('.author-video-block').hide();
        jQuery('.video-block').show();
        jQuery("#landing-video").get(0).play();
    });

    jQuery('.header-bottom').on('click',function(){
        jQuery("html, body").animate({ scrollTop: jQuery('#course-author-id').height() }, 1000);
         return false;
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

