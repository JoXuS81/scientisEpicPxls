$(document).ready(function()
{
    $(".dropdownLink").hover(function()
    {
      $(".dropdownMenu").show();
      $(".navbar").css("border-bottom-left-radius", "0px");
    });
    $(".dropdownArea").mouseleave(function()
    {
      $(".dropdownMenu").hide();
      $(".navbar").css("border-bottom-left-radius", "8px");
    });
});