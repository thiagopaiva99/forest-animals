$('.animals .tab-menu a').first().addClass('active')
$('.animals .item').first().addClass('active')

$('.animals .tab-menu a').on('click', function(e) {
    // stop default execution of the link
    e.preventDefault()

    // remove active classes from itens
    $('.animals .tab-menu a, .animals .item').removeClass('active')

    // get the item id
    const itemId = $(this).attr('href')

    // add active class to button clicked
    $(this).addClass('active')

    // add active class to the item content
    $(itemId).addClass('active')
})

$('.florestas .tab-menu a').first().addClass('active')
$('.florestas .item').first().addClass('active')

$('.florestas .tab-menu a').on('click', function(e) {
    // stop default execution of the link
    e.preventDefault()

    // remove active classes from itens
    $('.florestas .tab-menu a, .florestas .item').removeClass('active')

    // get the item id
    const itemId = $(this).attr('href')

    // add active class to button clicked
    $(this).addClass('active')

    // add active class to the item content
    $(itemId).addClass('active')
})