$(function () {
    // 表单验证
    $("#form").bootstrapValidator({
        // 配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6之间'
                    },
                    callback: {
                        message: '用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度必须在6到12之间'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            }
        }

        // 重置表单

    });

    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();

        //发送ajax
        $.ajax({
            url: '/employee/employeeLogin',
            type: 'post',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (res) {
                if (res.success) {
                    location.href = "index.html";
                }
                if (res.error == 1000) {
                    $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback')
                }
                if (res.error == 1001) {
                    $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback');
                }
            }
        })
    })

    $("[type='reset']").click(function () {
        var validator = $('#form').data('bootstrapValidator');
        validator.resetForm();//重置表单，并且会隐藏所有的错误提示和图标
    })
});