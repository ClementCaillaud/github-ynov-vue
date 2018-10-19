var app = new Vue(
{
  el: "#app",
  data:
  {
    loginGithub: "",
    mdpGithub: "",
    listeRepos: [],
    listeReposFiltres: [],
    listeUtilisateurs: [
      "Killy85",
      "Nair0fl",
      "raphaelCharre",
      "mathiasLoiret",
      "thomaspich",
      "TeofiloJ",
      "Grigusky",
      "Dakistos",
      "mael61",
      "KevinPautonnier",
      "BenoitCochet",
      "sfongue",
      "ClementCaillaud",
      "gfourny",
      "Mokui",
      "LordInateur",
      "AntoineGOSSET",
      "etienneYnov",
      "Coblestone",
      "AlexDesvallees",
      "rudy8530",
      "benjaminbra",
      "mael61",
      "alixnzt"
    ]
  },
  methods:
  {
    chargerRepos : function()
    {
      $.each(app.listeUtilisateurs, function(id, utilisateur)
      {
        callAPI.getRepos(utilisateur).then(
          function(data)
          {
            $.each(data, function(id, repo)
            {
              app.listeRepos.push(new Repo(
                repo.owner.login,
                repo.html_url,
                repo.name,
                repo.commits_url.replace("{/sha}", "")
              ));
            });
            app.listeReposFiltres = app.listeRepos;
          }
        );
      });
    },

    afficherReposFiltres : function()
    {
      var filtreUtilisateur = $("#filtre-utilisateur").val();

      app.listeReposFiltres = [];
      $.each(app.listeRepos, function(id, repo)
      {
        if(repo.utilisateur == filtreUtilisateur || filtreUtilisateur == "Tous")
        {
          app.listeReposFiltres.push(repo);
        }
      });
    }
  }
});
