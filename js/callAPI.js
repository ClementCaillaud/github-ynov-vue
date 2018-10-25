var callAPI =
{
  getRepos : function(utilisateur, callback)
  {
    var auth = b64EncodeUnicode(app.loginGithub + ":" + app.mdpGithub);
    return $.ajax(
    {
        url: 'https://api.github.com/users/'+utilisateur+'/repos',
        headers: { Authorization: "Basic " + auth },
        method: 'GET'
    });
  },

  getCommits : function(url, callback)
  {
    var auth = b64EncodeUnicode(app.loginGithub + ":" + app.mdpGithub);
    return $.ajax(
    {
        url: url,
        headers: { Authorization: "Basic " + auth },
        method: 'GET'
    });
  }
};
