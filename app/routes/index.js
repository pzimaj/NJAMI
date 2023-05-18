import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/menu.json');
    let { menu } = await response.json();

    return menu.map((model) => {
      let data = model;

      return data;
    });
  }
}
