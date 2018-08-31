"use strict";

function Container(id, className) {
    this.id = id;
    this.className = className;
}

Container.prototype.render = function () {
    var div = document.createElement('div');

    div.className = this.className;
    div.id = this.id;

    return div;
};

Container.prototype.remove = function () {
    var elem = document.getElementsByTagName('div');
    elem.remove();
};

function Menu(id, className, items) {
    Container.call(this, id, className);

    this.items = items;
}

Menu.prototype = Object.create(Container.prototype);

Menu.prototype.render = function () {
    var ul = document.createElement('ul');

    ul.className = this.className;
    ul.id = this.id;

    this.items.forEach(function (item) {
        if (item instanceof Container) {
            ul.appendChild(item.render());
        }
    });

    return ul;
};

function MenuItem(href, label) {
    Container.call(this, '', 'menu-item');

    this.href = href;
    this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);

MenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.href = this.href;
    a.textContent = this.label;

    li.appendChild(a);
    li.className = this.className;

    return li;
};

function SubMenu(id, className, items) {
    Menu.call(this, id, className);

    this.items = items;
}

SubMenu.prototype = Object.create(Menu.prototype);

SubMenu.prototype.render = function () {
    var ul = document.createElement('ul');

    ul.className = this.className;
    ul.id = this.id;

    this.items.forEach(function (item) {
        if (item instanceof Menu) {
            ul.appendChild(item.render());
        }
    });

    return ul;
};

function SubMenuItem(href, label) {
    Menu.call(this, '', 'submenu-item');

    this.href = href;
    this.label = label;
}

SubMenuItem.prototype = Object.create(Menu.prototype);

SubMenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.href = this.href;
    a.textContent = this.label;

    li.appendChild(a);
    li.className = this.className;

    return li;
};

