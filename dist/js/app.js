$('.tab-menu a').on('click', function(e) {
    // stop default execution of the link
    e.preventDefault()

    // remove active classes from itens
    $('.tab-menu a, .item').removeClass('active')

    // get the item id
    const itemId = $(this).attr('href')

    // add active class to button clicked
    $(this).addClass('active')

    // add active class to the item content
    $(itemId).addClass('active')
})