$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
            if (navegador.indexOf('Firefox') != -1) {
                mozillaPresente = true;
            }
        })(navigator.userAgent);

    function darEfecto(efecto) {
        el = $('.cajainterna');
        el.addClass(efecto);
        el.one(
            'webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                el.removeClass(efecto);
            },
        );
    }

    function darEfecto2(efecto) {
        el = $('.cajainterna2');
        el.addClass(efecto);
        el.one(
            'webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                el.removeClass(efecto);
            },
        );
    }

    function darEfecto3(efecto) {
        el = $('.cajainterna3');
        el.addClass(efecto);
        el.one(
            'webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                el.removeClass(efecto);
            },
        );
    }

    function mostrar(e) {
        $('.cajaexterna').show();
        darEfecto('bounceIn');
    }

    function ocultar() {
        $('.cajaexterna').fadeOut('fast', function() {
            if (mozillaPresente) {
                setTimeout(function() {
                    $('.cajainterna').removeClass('bounceIn');
                }, 5);
            }
        });
    }

    function mostrar2(e) {
        $('.cajaexterna2').show();
        darEfecto2('bounceIn');
    }

    function ocultar2() {
        $('.cajaexterna2').fadeOut('fast', function() {
            if (mozillaPresente) {
                setTimeout(function() {
                    $('.cajainterna2').removeClass('bounceIn');
                }, 5);
            }
        });
    }

    function mostrar3(e) {
        $('.cajaexterna3').show();
        darEfecto3('bounceIn');
    }

    function ocultar3() {
        $('.cajaexterna3').fadeOut('fast', function() {
            if (mozillaPresente) {
                setTimeout(function() {
                    $('.cajainterna3').removeClass('bounceIn');
                }, 5);
            }
        });
    }

    $('#curso1').click(mostrar);
    $('#cierracurso1').click(ocultar);

    $('#curso2').click(mostrar2);
    $('#cierracurso2').click(ocultar2);

    $('#curso3').click(mostrar3);
    $('#cierracurso3').click(ocultar3);
});