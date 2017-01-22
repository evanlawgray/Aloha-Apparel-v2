$(function() {

    //initializes the smooth scrolling plugin
    smoothScroll.init();

    //regex function for verifying email input
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    //click handler for subscribe button
    //if empty ask user for valid email address
    //if valid email then thank user for subscribing
    //uses default html5 behaviour for invalid text entry
    $('.subscribe-button').on('click', function(event) {

        var newEmail = $('input').val();

        if (isEmail(newEmail)) {

            event.preventDefault();
            $('input').val('');
            alert("Thanks for subscribing!");

        } else if (newEmail === '') {

            event.preventDefault();
            alert("Please submit a valid email address.");

        }
    });

    //click handler for 'add to cart'
    var cartCount = 0;
    //when any 'add to cart' button is clicked it increments 'counter-text'
    //which is displayed over the cart logo
    $('.add-to-cart-button').on('click', function(event) {

        $('.cart-counter').css('display', 'block');
        cartCount++;
        $('.counter-text').text(cartCount);

    });

});
