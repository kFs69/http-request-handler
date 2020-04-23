const create = params => {
  const post = async (url, body, headers) => {
    return await new Promise((resolve, reject) => {
      fetch(`${params.baseURL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body,
      })
        .then(response => {
          try {
            response.json().then(data => {
              if(response.status >= 400) {
                return reject(data);
              }

              return resolve({ success: true, error: false, status: response.status, data });
            })
          } catch (err) {
            return reject(err);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
  
  const get = async url => {
    return await new Promise((resolve, reject) => {
      fetch(`${params.baseURL}${url}`, {
        method: 'GET',
      })
        .then(response => {
          try {
            response.json().then(data => {
              if(response.status >= 400) {
                return reject(data);
              }

              return resolve({ success: true, error: false, status: response.status, data });
            })
          } catch (err) {
            return reject(err);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });

  }

  return { post, get };
}

const api = create({
  baseURL: 'https://www.mercadobitcoin.net'
})

module.exports = { create, api };
