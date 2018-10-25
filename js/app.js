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
    ],
    filtreNomProjet: "",
    filtreUtilisateur: [],
    filtreDateDebut: "",
    filtreDateFin: ""
  },
  methods:
  {
    chargerRepos : function()
    {
      $('.selectpicker').selectpicker('selectAll');
      app.listeRepos = [];
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
            $("#alert-authentification").hide();
          },
          function(erreur)
          {
            $("#alert-authentification").show();
          }
        );
      });
    }
  },
  computed:
  {
    listeReposFiltres: function()
    {
      var reposFiltres = [];

      $.each(this.listeRepos, function(id, repo)
      {
        if(app.filtreUtilisateur.includes(repo.utilisateur) || app.filtreUtilisateur.length == app.listeUtilisateurs.length)
        {
          if(repo.nom == app.filtreNomProjet || app.filtreNomProjet == '')
          {
            reposFiltres.push(repo);
          }
        }
      });
      return reposFiltres;
    },

    listeCommitsFiltres: function()
    {
      var commitsFiltres = [];

      var dateDebut = (app.filtreDateDebut != "")? new Date(
        new Date(app.filtreDateDebut).getFullYear(),
        new Date(app.filtreDateDebut).getMonth(),
        new Date(app.filtreDateDebut).getDate()) : "";

      var dateFin = (app.filtreDateFin != "")? new Date(
        new Date(app.filtreDateFin).getFullYear(),
        new Date(app.filtreDateFin).getMonth(),
        new Date(app.filtreDateFin).getDate()) : "";

      $.each(this.listeRepos, function(idR, repo)
      {
        $.each(repo.commits, function(idC, commit)
        {
          var dateDecomposee =
          {
            annee: new Date(commit.commit.author.date).getFullYear(),
            mois: new Date(commit.commit.author.date).getMonth(),
            jour: new Date(commit.commit.author.date).getDate()
          }
          var dateCommit = new Date(dateDecomposee.annee, dateDecomposee.mois, dateDecomposee.jour);

          if(dateCommit >= dateDebut || dateDebut == "")
          {
            if(dateCommit <= dateFin || dateFin == "")
            {
              commitsFiltres.push(commit);
            }
          }
        });
      });
      return commitsFiltres;
    }
  }
});
