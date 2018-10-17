class Controller {

  static init() {
    Adapter.getHogs().then(Controller.renderHogs);
    const form = document.querySelector('#hog-form');
    form.addEventListener('submit', Controller.handleHogCreation)
  }

  static renderHogs(hogsData) {
    hogsData.forEach(Controller.renderHog);
  }

  static renderHog(hogData) {
    const container = document.querySelector('#hog-container');
    const newHog = new Hog(hogData);
    container.append(newHog.element());
  }

  static handleHogCreation(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      specialty: e.target.specialty.value,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": e.target.weight.value,
      "highest medal achieved": e.target.medal.value,
      image: e.target.img.value,
      greased: e.target.greased.checked
    }

    Adapter.postHog(data).then(Controller.renderHog(data))

  }

  static handleDeletion(e) {
    const id = e.target.dataset.id;
    const div = document.querySelector(`#div-${id}`)
    Adapter.deleteHog(id).then(function(stuff) {
      div.remove()
    })
  }

  static handleGreasing(e) {
    const id = e.target.dataset.id;
    const greased = e.target.dataset.greased;

    Adapter.getHog(id).then(function(hogData) {
      const newHog = new Hog(hogData)
      newHog.toggleGrease();
      Adapter.patchHog(newHog);

      if(greased === "greased") {
        e.target.innerText = "Greased: ❌"
        e.target.dataset.greased = "false"
      } else {
        e.target.innerText = "Greased ✅"
        e.target.dataset.greased = "greased"
      }

    })

  }

}
