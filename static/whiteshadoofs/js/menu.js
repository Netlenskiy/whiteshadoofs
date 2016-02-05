//3
/*
 Класс "Menu" включает 4 подкласса, каждый из которых
 является одним из подменю на странице.
 Конструктору "Menu" передается DOM-элемент, обернутый в jquery (далее
 DOM-jquery-элемент), в котором содержится меню.

 */
function BaseMenu(doc_elem) {
    this.doc_elem = doc_elem;
    this.isOpened = false;
    this.show_position = 0;
    this.show_duration = "default";
    this.hide_position = 1000;
    this.hide_duration = "default";
    this.preview_style = {
        "display": "none"
    };

    this.hide = function () {
        this.isOpened = false;
        this.doc_elem.animate({
            left: this.hide_position
        }, {
            duration: this.hide_duration,
            complete: function () {
                this.doc_elem.css(this.preview_style);
            }.bind(this)
        });        
    };
    
    this.show = function () {
        this.isOpened = true;
        this.doc_elem.css("display", "block");
        this.doc_elem.animate({
            left: this.show_position
        }, {
            duration: this.show_duration
        });
    };
    
    this.toggle = function () {
        console.log(this.show_duration);
        this.isOpened ? this.hide() : this.show();
    };
    
    this.isOpen = function () {
        return this.isOpened;
    }
}

function MenuCategory(doc_elem) {

    BaseMenu.apply(this, arguments);
    var self = this;
    var posInLeft = -175;
    var posInRight = 200;
    self.show_position = 25;
    self.preview_style = {
        "display": "none",
        "left": posInLeft
    };

    var parent_hide = self.hide;
    self.hide = function (into) {
        /*
         into- направление смещения списка при закрытии или замещении
         его другим элементом в боковой панели. При завершении смещения
         список делается невидимым и возвращается в исходную позицию,
         слева от боковой панели.
         Вызов без аргумента - смещение вправо.
         */
        self.hide_position = into == "left" ? posInLeft : posInRight;
        parent_hide.apply(self, arguments);
    };

    doc_elem.last().on("click", function (e) {
        /*
         Обработчик нажатия на кнопку под списком. При нажатии
         callback-функция формирует массив, в котором названия
         категорий выбранных чекбоксов. Массив передается методу
         класса Mediator, который передает из объекту карты.
         */
        if (e.target.id != "filter") return;
        var types = [];
        doc_elem.find("input").each(function (index, element) {
            if (element.checked)
                types.push(index);
        });
        mediator.sendTypesToMap({
            type: "filter",
            types: types
        });
    });
}

function MenuActions(doc_elem) {
    BaseMenu.apply(this, arguments);
    var self = this;
    self.show_duration = "slow";

    //self.toggleAuth = function (flag) {
    //    function toggle(newElem) {
    //        doc_elem.animate({
    //            opacity: 0
    //        }, {
    //            duration: "default",
    //            complete: function () {
    //                doc_elem.css("display", "none");
    //                doc_elem = newElem;
    //                doc_elem.css("display", "block");
    //                doc_elem.animate({
    //                    opacity: 1
    //                }, {
    //                    duration: "default"
    //                });
    //            }
    //        });
    //    }
    //
    //    if (flag) {
    //        toggle(elem_2);
    //    } else {
    //        toggle(elem_1);
    //    }
    //};
}

function MenuAbout() {
    BaseMenu.apply(this, arguments);
    var self = this;
    self.show_duration = "slow";
}

function MenuSearch(search, searchResultElem) {
    /*
     Меню "Поиск". Аргументы:
     search - блок с формой поиска,
     searchResultElem - блок с результатами поиска.

     openedItem - отображаемый в данный момент блок.

     */
    BaseMenu.call(this);
    var self = this;
    var posInRight = 200;
    self.doc_elem = search;
    self.preview_style = {
        "display": "none",
        "left": -posInRight
    };

    self.toggle = function () {
        if (self.isOpen()) {
            self.doc_elem === searchResultElem ? self.hide(null, searchResultElem) : self.hide();
        } else {
            self.show();
        }
    };
    var parent_hide = self.hide;
    self.hide = function (into) {
        self.hide_position = into == "left" ? -posInRight : posInRight;
        self.doc_elem = self.doc_elem == searchResultElem ? searchResultElem : search;
        parent_hide.apply(self);
    };

    var parent_show = self.show;
    self.show = function (item) {
        self.doc_elem = item == "searchResultElem" ? searchResultElem : search;
        parent_show.apply(self, arguments);
    };

    function jxRequestSearchResult(url, elem) {
        /*Отправляет ajax-запрос форму с параметрами поиска.
         При получении результата встраивает его в элемент
         div блока результата поиска.*/
        if (url === 'undefined' || elem === 'undefined')
            throw new Error('2 arguments expected.');

        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = function () {
            // Обработка ответа сервера
            if (xhr.readyState != 4) return;

            if (xhr.status == 200)
                $('#sr_block', elem).html(this.responseText);
            else
                $('body').html(this.responseText);
        }
    }

    $("input[name=to_search]", search).on('click', function (event) {
        /*
         При клике прячется форма поиска и отображается блок с результатами
         поиска, далее обход формы и формирование строки GET-запроса.
         */
        event.preventDefault();
        self.hide();
        self.show("searchResultElem");

        var form = document.forms.search_form;
        var url = 'objects_search?';

        for (var i = 0; i < form.elements.length; i++) {
            var item = form.elements[i];
            if (i != 0 && item.type != 'submit') url += '&';

            if (item.type == 'checkbox' || item.type == 'text') {
                url += (item.name + '=');
                if (item.type == 'checkbox')
                    url += item.checked;
                else if (item.type == 'text')
                    url += encodeURIComponent(item.value);
            }
        }
        jxRequestSearchResult(url, $('#search_result'));
    });

    $("input[name=new_search]", searchResultElem).on('click', function (event) {
        event.preventDefault();
        self.hide("right", searchResultElem);
        self.show();
    });
}

function MenuProfile(doc_elem) {
    BaseMenu.apply(this, arguments);
    var self = this;
    self.show_duration = "slow";
}

function Menu(elem) {
    //
    var menu = {
        category: new MenuCategory($("#category_list")),
        actions: new MenuActions($('#actionsWindow_1')),
        about: new MenuAbout($('#about_window')),
        search: new MenuSearch($("#search_filter"), $("#search_result")),
        profile: new MenuProfile($("#profile_window"))
    };
    var lastOpened = null;
    var curOpened = null;

    function hideAll() {
        if (lastOpened) menu[lastOpened].hide();
    }

    elem.on('click', function (event) {
        event.preventDefault();
        curOpened = event.target.id;
        if (curOpened != lastOpened) {
            switch (lastOpened) {
                case "category":
                    if (curOpened != "search") menu.category.hide("left");
                    else menu.category.hide();
                    break;
                case "actions":
                    menu.actions.hide();
                    break;
                case "search":
                    if (curOpened != "category") menu.search.hide("left");
                    else menu.search.hide();
                    break;
                case "about":
                    menu.about.hide();
                    break;
                case "profile":
                    menu.profile.hide();
            }
            lastOpened = event.target.id;
        }
        menu[curOpened].toggle();
    });

    this.hideAll = hideAll;
}