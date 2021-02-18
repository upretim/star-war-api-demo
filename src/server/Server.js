export const getData=(url)=> {
    return fetch(url)
      .then(data => data.json())
  }