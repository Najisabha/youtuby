$(document).ready(function () {
  $("#mybut").on("click", function () {
    read();
  });
});

function read() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var mybut = document.getElementById("mybut");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    mybut.innerHTML = "عرض المزيد ";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    mybut.innerHTML = "عرض اقل .... ";
    more.style.display = "inline";
  }
}
