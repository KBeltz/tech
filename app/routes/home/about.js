import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("current route");
    console.log(this.get('routeName'));
  },
  renderTemplate() {
    this.render('home.about', { into: 'application' });
  }
});
