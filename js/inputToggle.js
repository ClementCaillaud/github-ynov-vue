$('#toggle-input').change(function()
{
  var valeur = $(this).prop('checked')
  if(app.filtreNomProjet != '' || app.filtreUtilisateur.length != app.listeUtilisateurs.length)
  {
    $("#info-toggle").hide();
    if(valeur)
    {
      $.each(app.listeReposFiltres, function(id, repo)
      {
        repo.getCommits();
      });
      $(".collapse").collapse('show');
    }
    else
    {
      $(".collapse").collapse('hide');
    }
  }
  else
  {
    $("#info-toggle").show();
  }

});
