// Variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
// Parse currentHour so it returns as an integer 
var currentHourInt = parseInt(currentHour); 

// Set data attributes to each hour input element to assign a color to each row based on the current hour
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

//jQuery 
$(document).ready(function () {

    // Function to store inputted data 
    renderPlans();

  // Date/Time in Header 
  $("#currentDay").append();

  function addDate() { 
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
  } setInterval(addDate, 1000);

  // Change color in each row 
  for (var i = 0; i <= 12; i++) {  

      var inputHour = $("#" + i + "Row").attr("data-time"); // Variable for the hour of the row 
      var inputHourInt = parseInt(inputHour); 

      if (currentHourInt === inputHourInt) {
          $("#" + i + "Row").addClass("present"); // red for present hour 
      }
      if (currentHourInt > inputHourInt) { // grey for the future 
          $("#" + i + "Row").addClass("past");
      }
      if (currentHourInt < inputHourInt) { // green for the future 
          $("#" + i + "Row").addClass("future");
      }
    }

    // Function to store data locally on click 
    saveBtn.on("click", function () { 

      var rowHour = $(this).attr("data-hour"); // accessing data-hour in html
      var input = $("#" + rowHour + "Row").val(); // saves input text to variable
      localStorage.setItem(rowHour, input); //variable saved locally
    });
  
    //  Function to retrieve the stored input for each item
    function renderPlans() {
      for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
      }
    }
});
