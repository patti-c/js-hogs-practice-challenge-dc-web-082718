const HOGS_URL = 'http://localhost:3000/hogs'

class Adapter {

  static getHogs() {
    return fetch(HOGS_URL).then(res => res.json())
  }

  static getHog(id) {
    const url = HOGS_URL + '/' + id
    return fetch(url).then(res => res.json())
  }

  static postHog(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(HOGS_URL, options)
  }

  static deleteHog(id) {

    const url = HOGS_URL + '/' + id;
    const options = {
      method: 'DELETE'
    }

    return fetch(url, options)
  }

  static patchHog(hogData) {
    const url = HOGS_URL + '/' + hogData.id
    const data = {
      name: hogData.name,
      specialty: hogData.specialty,
      greased: hogData.greased,
      image: hogData.image,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": hogData.weight,
      "highest medal achieved": hogData.medal
    }

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, options)

  }

}
