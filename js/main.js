$("aside .fa-xmark").on("click", function () {
  $(".hold").animate({ width: "toggle", paddingInline: "toggle" }, 1000);
});
$("aside .fa-bars").on("click", function () {
  $(".hold").animate({ width: "toggle", paddingInline: "toggle" }, 1000);
});
$("#duration .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
  countDownToTime("10 october 2021 9:56:00");
function countDownToTime(countTo) {
      let futureDate = new Date(countTo);
  futureDate = (futureDate.getTime()/1000);
  let now = new Date();
  now = (now.getTime()/1000);
  timeDifference = (futureDate- now);    
 let days = Math.floor( timeDifference / (24*60*60));
 let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
 let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
 let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mins } m`);
  $('.seconds').html(`${ secs} s`)
  setInterval(function() {  countDownToTime(countTo); }, 1000);
}
const maxCharacters = 100;
$("textarea").on("input", function () {
  const length = $(this).val().length;
  const remaining = maxCharacters - length;

  if (remaining <= 0) {
    $("#msg").text("Character limit exceeded");
    $("#number").text('');
  } else {
    $("#msg").text('Character Remaining');
    $("#number").text(remaining);
  }
});
$("form").submit(function (e) { 
  e.preventDefault();
  setForm();
});
function setForm() {
  $("#email, #name, textarea").val("");
  $("#number").text(100);
}
