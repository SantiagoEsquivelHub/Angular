angular.module("CustomDirective").directive('backImg', function () {
    return function (scope, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                "background": "url(" + value + ")",
                "background-size": "cover",
                "background-position": "center",
            })
        })
    }
})







/* 
DOES NOT WORKING

app.directive('myAutocomplete', function () {
    function link(scope, element, attrs, value) {
        console.log(element[0].id)
        let repos = attrs.myAutocomplete
        console.log(attrs.myAutocomplete)

        console.log(scope)
        $("#" + element[0].id + "").autocomplete({
            source: scope[repos],
            select: function (ev, ui) {
                ev.preventDefault()
                if (ui.item) {
                    scope.optionSelected(ui.item.value)
                }
            },
            focus: function (ev, ui) {
                ev.preventDefault()

                $(this).val(ui.item.label)
            }
        })
    }
    return {
        link: link
    }
}) */