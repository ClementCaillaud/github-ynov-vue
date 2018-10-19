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
    var date = commit.commit.author.date;
    var dateFormatee = date.slice(0, 10);
    return dateFormatee;
  };
}
