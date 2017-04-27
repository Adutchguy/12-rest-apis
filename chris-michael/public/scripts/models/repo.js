'use strict';

(function(module) {
  const repos = {};

  function Repos(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get(`https://api.github.com/users/Adutchguy/repos?access_token=${gitToken}`)
    .then(
      results => {
        repos.all = results.map(data => new Repos(data));
        callback();
      });
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
