Apps.Router.map(function(){
	this.resource('apps',{path:'/'});
});

Apps.PostRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('apps', { outlet: 'apps' });
  }
});