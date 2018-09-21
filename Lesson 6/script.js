"use strict";

// Create item slots.
const $items = $('.items');
const arrItemPrice = [100, 125, 150, 140, 175, 160];

arrItemPrice.forEach((price, i) => {
    $items.append(
        $('<div>', {class: 'itemWrapper'})
            .append($('<img>', {
                class: 'itemImage',
                src: `images/item_${i + 1}.png`,
                alt: `Item ${i + 1}`,
                data_price: arrItemPrice[i]}))
            .append($('<p>', {class: 'itemPrice', text: `$${arrItemPrice[i]}`})))
});

// Drag & Drop behaviour for elements.
$('.shoppingCart').droppable({
    accept: '.itemImage',
    drop: function (event, ui) {
        $(this)
            .attr('src', $(this).attr('src').replace('empty', 'full'))
            .removeClass('shoppingCartOver')
            .draggable({
                cursor: 'move',
                revert: true
            });
        $('.totalCostValue').text(
            parseInt($('.totalCostValue').text()) +
            parseInt(ui.draggable.attr('data_price')));
        $('.itemsAmount').text(parseInt($('.itemsAmount').text()) + 1);
        $('.emptyCart').css('visibility', 'visible');
    },
    over: function () {
        $(this).addClass('shoppingCartOver');
    },
    out: function () {
        $(this).removeClass('shoppingCartOver');
    }
});

$('.itemImage').draggable({
    cursor: 'move',
    helper: 'clone'
});

$('.emptyCart').droppable({
    accept: '.shoppingCart',
    drop: function (event, ui) {
        ui.draggable.attr('src', ui.draggable.attr('src').replace('full', 'empty'));
        $(this)
            .css('visibility', 'hidden')
            .removeClass('emptyCartOver');
        $('.totalCostValue, .itemsAmount').text('0');
    },
    over: function () {
        $(this).addClass('emptyCartOver');
    },
    out: function () {
        $(this).removeClass('emptyCartOver');
    }
});