// ranktable starts off sorted in descending order of sum
var wasPreviouslySumDescSorted = true;

var table = $('#ranktable').DataTable({
  "fnDrawCallback": function(oSettings) {
    var sortProperties = oSettings.aaSorting[0];
    if (sortProperties[0] === 12 && sortProperties[1] === "desc") {
      setRowHeightAccordingToSum();
      wasPreviouslySumDescSorted = true;
    } else if (wasPreviouslySumDescSorted) {
      // if we sorted according sum in desc order previously and
      // now arrange according other cols, we need to reset row height
      resetRowHeight();
      wasPreviouslySumDescSorted = false;
    }
  },
  "bPaginate": false,
  "bAutoWidth": false,
  "bFilter": false,
  "bInfo" : false,
  "aaSorting": [[12, 'desc']],
  "columnDefs": [{
    "targets": [0],
    "orderable": false, //Disable ordering of first collumn
  }]
});
$("#ranktable tbody").find("tr:first").find("td:eq(0)").html("1");
var i = 2;
function setRowHeightAccordingToSum() {
  $('#ranktable tbody tr').not(':last').each(function(){
      var currentRow = $(this);
      var currScore = parseFloat(currentRow.find("td:eq(12)").text());

      var nextRow = currentRow.next("tr");
      var nextScore = parseFloat(nextRow.find("td:eq(12)").text());
      nextRow.find("td:eq(0)").html(i-48);
    i++;
      var difference = currScore - nextScore;
      var newHeight = 30 + 20 * difference;
      nextRow.css('height', newHeight);
  });
}

function resetRowHeight() {
  $('#ranktable tbody tr').each(function(){
      $(this).css('height', 30);
  });
}
