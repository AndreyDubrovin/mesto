export class Api {
  constructor({baseUrl,headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getAuthоr() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка getAuthоr: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  setAuthor(name,about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка setAuthor: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка getInitialCards: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  AddCards(name,link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка AddCards: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка DeleteCard: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  setLikeStatus(cardId, like) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: like ? 'DELETE' : 'PUT',
      headers: this.headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка setLikeStatus: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

editAvatar(link) {
  return fetch(`${this.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      avatar: link,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка AddCards: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

}
