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