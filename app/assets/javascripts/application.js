// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require_tree .

// $(function(){ $(document).foundation(); });

$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});

$(document).ready(function() {
  $('.nav-dropdown').hide();
  $('.search-dropdown').hide();
  // $('.centered-div-text').hide();
  // $('#search').hide();
});

// setTimeout(function(){
//   document.getElementById('.centered-div-text').style.visibility = "visible";
// },1000);

// $(function() {
//     setTimeout(function(){
//         showElement();
//      }, 1500);
//
//     function showElement() {
//         $('.centered-div-text').fadeToggle();
//     }
//  });

$(document).ready(function() {
  $('#account-menu').click( function(event){
    event.stopPropagation();
    $('.nav-dropdown').slideToggle("fast");
  });

  $('#search-options').click( function(event){
    event.stopPropagation();
    $('.search-dropdown').slideToggle("fast");
  });

  $('#search-icon').click( function(event){
    event.stopPropagation();
    $('#search').fadeToggle();
    $('#page-title').fadeToggle();
  });

  // $(document).click( function(){
  //  $('#search').hide();
  //  $('.nav-dropdown').hide();
  // });

});
