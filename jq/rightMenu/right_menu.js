special_menu = {
    id: 'TEST-MENU',
    data: [
        {
            text: '当期招生指标',
            action: function(e, selector) {
                special_search_params.search_type = "population";
                school_search_params.search_type = "name";
                console.log(school_search_params);
                console.log(special_search_params);
                context.init({preventDoubleContext: false});
                context.attach('.population-item', population_menu);
                $("#population-div").show();
                $("#score-div").hide();
                $("#score-div").unbind();
                school_search_params.search_type = "name";
                special_search_params.search_type = "population";
                special_search_params.search_population(school_search_params.student_style, school_search_params.batch);
            }
        }
    ]
};

population_menu = {
    id: 'PPULATION-MENU',
    data: [
        {
            text: '查看历年分数线',
            action: function(e, selector) {
                special_search_params.search_type = "rank";
                school_search_params.search_type = "rank";
                context.init({preventDoubleContext: false});
                context.attach('.special-item', special_menu);
                $("#score-div").show();
                $("#population-div").hide();
                $("#population-div").unbind();
                school_search_params.search_type = "rank";
                special_search_params.search_type = "rank";
                special_search_params.search_score(school_search_params.student_style, school_search_params.batch);
            }
        },
        {
            text: '添加为',
            subMenu : [
                {
                    text: '平行志愿 A',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 0, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 0, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 0, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 0, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 0, 5);
                            }
                        }
                    ]
                },
                {
                    text: '平行志愿 B',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 1, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 1, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 1, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 1, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 1, 5);
                            }
                        }
                    ]
                },
                {
                text: '平行志愿 C',
                subMenu:[
                    {
                        text: "志愿 1",
                        action: function (e, selector) {
                            insert(e, selector, 2, 0);
                        }
                    },
                    {
                        text: "志愿 2",
                        action: function (e, selector) {
                            insert(e, selector, 2, 1);
                        }
                    },
                    {
                        text: "志愿 3",
                        action: function (e, selector) {
                            insert(e, selector, 2, 3);
                        }
                    },
                    {
                        text: "志愿 4",
                        action: function (e, selector) {
                            insert(e, selector, 2, 4);
                        }
                    },
                    {
                        text: "志愿 2",
                        action: function (e, selector) {
                            insert(e, selector, 2, 5);
                        }
                    }
                ]
            },
                {
                text: '平行志愿 D',
                subMenu:[
                    {
                        text: "志愿 1",
                        action: function (e, selector) {
                            insert(e, selector, 3, 0);
                        }
                    },
                    {
                        text: "志愿 2",
                        action: function (e, selector) {
                            insert(e, selector, 3, 1);
                        }
                    },
                    {
                        text: "志愿 3",
                        action: function (e, selector) {
                            insert(e, selector, 3, 3);
                        }
                    },
                    {
                        text: "志愿 4",
                        action: function (e, selector) {
                            insert(e, selector, 3, 4);
                        }
                    },
                    {
                        text: "志愿 2",
                        action: function (e, selector) {
                            insert(e, selector, 3, 5);
                        }
                    }
                ]
            },
                {
                    text: '平行志愿 E',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 4, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 4, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 4, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 4, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 4, 5);
                            }
                        }
                    ]
                },
                {
                    text: '平行志愿 F',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 5, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 5, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 5, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 5, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 5, 5);
                            }
                        }
                    ]
                },
                {
                    text: '平行志愿 G',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 6, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 6, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 6, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 6, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 6, 5);
                            }
                        }
                    ]
                },
                {
                    text: '平行志愿 H',
                    subMenu:[
                        {
                            text: "志愿 1",
                            action: function (e, selector) {
                                insert(e, selector, 7, 0);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 7, 1);
                            }
                        },
                        {
                            text: "志愿 3",
                            action: function (e, selector) {
                                insert(e, selector, 7, 3);
                            }
                        },
                        {
                            text: "志愿 4",
                            action: function (e, selector) {
                                insert(e, selector, 7, 4);
                            }
                        },
                        {
                            text: "志愿 2",
                            action: function (e, selector) {
                                insert(e, selector, 7, 5);
                            }
                        }
                    ]
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
            icon: 'glyphicon glyphicon-remove',
            text: '删除志愿',
            action: function(e, selector) {
                alert('Delete clicked on ' + selector.prop("tagName") + ":" + selector.attr("id"));
            }
        }
    ]
};

function insert(e, selector, school_index, special_index){
    let c_id = selector.attr("id");
    let special_name = $(selector.children()[0]).text();
    let s_id = $(selector.children()[1]).text();
    student.result.school_name = special_search_params.name;
    student.result.code = c_id;
    student.result.special_name = special_name;
    student.result.special_code = s_id;
    student.result.school_index = school_index;
    student.result.special_index = special_index;
    let html = "是否添加 - " + special_search_params.name + ":" + special_name + "为志愿：平行志愿" +
        school_index + "-" + special_index + "?";
    if(confirm(html)){
        student.result.add_preference(school_index, special_index, special_search_params.name, c_id, special_name, s_id);
    }
    // console.log(student.result);
}
