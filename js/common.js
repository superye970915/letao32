$(function () {
    $('.lt_list ul li:nth-child(2)').click(function () {
        $('.child').stop().slideToggle();
    });

});
NProgress.configure({ showSpinner: false });
$(document).ajaxStart(function () {
    // console.log(1);

    NProgress.start();
});

$(document).ajaxStop(function () {
    // console.log(2);

    NProgress.done();
})