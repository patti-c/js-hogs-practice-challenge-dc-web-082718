class Hog {

  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.specialty = params.specialty;
    this.greased = params.greased;
    this.image = params.image;
    this.weight = params["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    this.medal = params["highest medal achieved"]
  }

  toggleGrease() {
    this.greased = !this.greased
  }

  element() {
    const div = document.createElement('div');
    div.classList.add('hog-card');
    div.id = `div-${this.id}`;

    const heading = document.createElement('h2');
    heading.innerText = this.name;
    div.append(heading);

    const img = document.createElement('img')
    img.src = this.image;
    div.append(img);

    const specialty = document.createElement('p');
    specialty.innerText = `Specialty: ${this.specialty}`;
    div.append(specialty);

    const weight = document.createElement('p');
    weight.innerText = `Weight: ${this.weight}`;
    div.append(weight);

    const medal = document.createElement('p');
    medal.innerText = `Highest Medal Achieved: ${this.medal}`;
    div.append(medal);

    const greased = document.createElement('p');
    if(this.greased) {
      greased.innerText = "Greased: ✅";
      greased.dataset.greased = "greased";
    } else {
      greased.innerText = "Greased: ❌";
      greased.dataset.greased = "not greased"
    }
    greased.dataset.id = this.id;
    greased.addEventListener('click', Controller.handleGreasing);
    div.append(greased);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete This Hog";
    deleteButton.addEventListener('click', Controller.handleDeletion);
    deleteButton.dataset.id = this.id;
    div.append(deleteButton);

    return div
  }

}
