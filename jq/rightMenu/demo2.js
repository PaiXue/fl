exampleMenuItemSource = function (selector) {
    if ($(selector).attr('id') == 'PNG_JPG') {
        return [
                {
                    header: 'Example Dynamic'
                },
                {
                    text: 'PNG',
                    action: function(e, selector) {
                        alert('PNG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id"));
                    }
                },
                {
                    text: 'JPG',
                    action: function(e, selector) { alert('JPG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                },
                {   divider: true   },
                {
                    icon: 'glyphicon-list-alt',
                    text: 'Dynamic nested',
                    subMenu : [
                    {
                        text: 'More dynamic',
                        action: function(e, selector) { alert('More dynamic clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                    },
                    {
                        text: 'And more...',
                        action: function(e, selector) { alert('And more... clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                    }
                    ]
                }
            ]
    } else {
        return [
                {
                    icon: 'glyphicon-exclamation-sign',
                    text: 'No image types supported!'
                }
            ]
    }
};

special_menu = {
    id: 'TEST-MENU',
    data: [
        {
            header: '专业名'
        },
        {
            icon: 'glyphicon-edit',
            text: '当期招生指标',
            action: function(e, selector) {
                console.log(selector);
                alert('Edit clicked on ' + selector.prop("tagName") + ": a new special" + selector.text());
            }
        },
        {
            icon: 'glyphicon-list-alt',
            text: '添加为',
            subMenu : [
            {
                text: '平行志愿 A',
                action: function(e, selector) {
                    alert('Text clicked on ' + selector.prop("tagName"));
                }
            },
            {
                text: '平行志愿 B',
                action: function (e, selector) {
                    alert("ADD " + selector.prop("tagName"));
                }
            },
                {
                text: '平行志愿 C',
                action: function (e, selector) {
                    alert("ADD " + selector.prop("tagName"));
                }
            },
                {
                text: '平行志愿 D',
                action: function (e, selector) {
                    alert("ADD " + selector.prop("tagName"));
                }
            }
            ]
        },
        {
            divider: true
        },
        {
            header: '其他操作'
        },
        {
            icon: 'glyphicon-trash',
            text: '删除志愿',
            action: function(e, selector) { alert('Delete clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
        }
    ]
};
