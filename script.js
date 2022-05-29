$(function () {





    // ナビゲーション

    $(".my_nav_link").hover(
        function () {

            $(this).css('color', 'white');
            $(this).css('background-color', '#B8B8B8');
        },
        function () {

            $(this).css('color', '#4193BF');
            $(this).css('background-color', 'white');
        }
    );


    $(".ima").hover(
        function () {

            $(this).css('color', 'white');
            $(this).css('background-color', '#B8B8B8');
        },
        function () {

            $(this).css('color', 'white');
            $(this).css('background-color', '#57C4FF');
        }
    );

    $('.kie').css('display', 'none');


    $('.mie').hover(
        function () {

            $('.kie').show();

        },
        function () {

            $('.kie').hide();
        }
    );


    // モーダルメニュー
    $('.hanb').click(function () {
        $('.modal').fadeIn();
    });

    $('.batu').click(function () {
        $('.modal').fadeOut();
    });


    // モーダル２メニュー
    // $('.hanb2').click(function () {
    // $('.naka2').fadeIn();
    // });



    // ナビゲーション






















});
