$(function(){
  var panier = [];
  $('button[name=addPanier]').click(function(){
    var ParentOfButton = $(this).parents('.article');
    var refArticle = $('.ref').text();
    var imgArticle = ParentOfButton.children('img').attr('src');
    var descripArticle = $('.description').text();
    var price = $('.price').text();
    var titleArticle = $('.titre').text();
    eval('var ' + refArticle + ' ={ titre:titleArticle, img:imgArticle, desp:descripArticle, price:price};');
    panier.push(eval(refArticle));
    console.log(panier);
  });
});
