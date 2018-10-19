var app = new Vue(
{
  el: "#app",
  data:
  {
    loginGithub: "",
    mdpGithub: "",
    listeRepos: [],
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
        console.log(utilisateur);
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
          }
        );
      });
      console.log(app.listeRepos);
    }
  }
});
