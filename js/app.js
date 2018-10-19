var app = new Vue(
{
  el: "#app",
  data:
  {
    loginGithub: "",
    mdpGithub: "",
    listeRepos: []
  },
  methods:
  {
    chargerRepos : function()
    {
      callAPI.getRepos("ClementCaillaud").then(
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
    }
  }
});
