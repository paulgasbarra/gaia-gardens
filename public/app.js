window.onload = (event) => {
  console.log("page is fully loaded");
};

$(document).ready(function () {
  $("body").hide();
  $(window).on("load", function () {
    $("body").show();
  });
});
