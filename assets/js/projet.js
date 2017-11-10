$(function(){
  $('button[name=addPanier]').click(function(){
    var ParentOfButton = $(this).parents('.article');
    var refArticle = ParentOfButton.children('.reference').text();
    var imgArticle = ParentOfButton.children('img').attr('src');
    var descripArticle = ParentOfButton.children('.description').text();
    var price = ParentOfButton.children('.price').text();
    var titleArticle = ParentOfButton.children('.titleArticle').text();
    console.log(ParentOfButton);
    console.log(refArticle);
    console.log(titleArticle);
    console.log(imgArticle);
    console.log(descripArticle);
    console.log(price);
  });
});
$(function(){
$('img').mouseover(function(){
  $(this).css('width','270px');   <!--'this' sert à repeter ce qui a été fait-->
  $(this).mouseout(function(){
  $(this).css('width', '220px');
  });
});
});
