$(() => {
  $("li .nav-items").click(function (e) {
    let $this = $(this);
    $this.closest("ul").children("li").removeClass("active");
    $this.parent().addClass("active");
  });
});

$(() => {
  $(".to-top ").click(function (e) {
    $("li").removeClass("active");
  });
});
