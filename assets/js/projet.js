$(function(){
  var panier = [];
  $('button[name=addPanier]').click(function(){
    var ParentOfButton = $(this).parents('.article');
    var refArticle = ParentOfButton.children('.reference').children('strong').children('.ref').text().toString();
    var imgArticle = ParentOfButton.children('img').attr('src').toString();
    var descripArticle = ParentOfButton.children('.description').text();
    var price = ParentOfButton.children('.price').text();
    var titleArticle = ParentOfButton.children('.titreArticle').text().toString();
    eval('var ' + refArticle + ' ={ titre:titleArticle, img:imgArticle, desp:descripArticle, price:price};');
    panier.push(eval(refArticle));
    console.log(eval(refArticle).titre);
    //
    //   jQuery.each( panier, function( i, val ) {
    //   $(titre).appendTo( '#basket' );
    // });
    tableau.push(eval(refArticle));
    var NombreArticleSelec = 0;
    console.log(tableau);
  });
});
