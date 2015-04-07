$(function() {
  var availableTags = [
    "Toronto",
    "Munich",
    "Waterloo",
    "New York City",
    "Hong Kong",
    "Tokyo"
  ];
  $( "#locations" ).autocomplete({
    source: availableTags
  });
});