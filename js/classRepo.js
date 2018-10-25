function Repo(utilisateur, url, nom, url_commits)
{
  this.utilisateur = utilisateur;
  this.url = url;
  this.nom = nom;
  this.url_commits = url_commits;
  this.commits = [];

  var self = this;

  this.getCommits = function()
  {
    if(self.commits.length == 0)
    {
      callAPI.getCommits(self.url_commits).then(
        function(data)
        {
          self.commits = data;
        }
      );
    }
  };

  this.getDate = function(commit)
  {
    var date = new Date(commit.commit.author.date);
    var dateFormatee = date.toLocaleDateString("fr-FR");
    return dateFormatee;
  };

  this.getHeure = function(commit)
  {
    var date = new Date(commit.commit.author.date);
    var heureFormatee = date.toLocaleTimeString("fr-FR").slice(0, 5);
    return heureFormatee;
  }
}
