$('[data-group]').each(function() {
    const $allTarget  = $(this).find('[data-target]')
    const $allClicks  = $(this).find('[data-click]')
    const activeClass = 'active'

    $allTarget.first().addClass(activeClass)
    $allClicks.first().addClass(activeClass)

    $allClicks.on('click', function(e) {
        e.preventDefault()

        const id      = $(this).data('click')
        const $target = $('[data-target="' +  id + '"]')

        $allClicks.removeClass(activeClass)
        $allTarget.removeClass(activeClass)

        $target.addClass(activeClass)
        $(this).addClass(activeClass)
    })
})

$('.menu-nav a[href^="#"').on('click', function(e) {
    e.preventDefault()

    const id           = $(this).attr('href')
    const targetOffset = $(id).offset().top
    const menuHeight   = $(".menu").height()

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
})

$('section').each(function() {
    const height     = $(this).height()
    const offsetTop  = $(this).offset().top
    const id         = $(this).attr('id')
    const menuHeight = $('.menu').innerHeight()
    const $itemMenu  = $('a[href="#' + id + '"]')

    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop()

        if ( offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop )
            $itemMenu.addClass('active')
        else
            $itemMenu.removeClass('active')
    })
})

$('.mobile-btn').on('click', function() {
    $(this).toggleClass('active')
    $('.mobile-menu').toggleClass('active')
})

const slider = ( sliderName ) => {
    const sliderClass = '.' + sliderName
    const activeClass = 'active'
    
    let rotate      = setInterval(rotateSlide, 2000)

    $(sliderClass + ' > :first').addClass(activeClass)

    $(sliderClass).hover(function() {
        clearInterval(rotate)
    }, function() {
        rotate      = setInterval(rotateSlide, 2000)
    })

    function rotateSlide() {
        let activeSlide = $(sliderClass + ' > .' + activeClass)
        let nextSlide   = activeSlide.next()

        if( nextSlide.length == 0 )
            nextSlide = $(sliderClass + ' > :first')

            activeSlide.removeClass(activeClass)
            nextSlide.addClass(activeClass)
    }
}

slider('introducao')

// scroll animation