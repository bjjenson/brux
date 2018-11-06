
const fetchCaches = []

export const useFetch = (input, init, lifespan) => {
  for (const fetchCache of fetchCaches) {

    if (input === fetchCache.input && init === fetchCache.init) {
      if (fetchCache.error) {
        throw fetchCache.error
      }

      if (fetchCache.response) {
        return fetchCache.response
      }
      throw fetchCache.fetch
    } else {
      const fetchCache = {
        fetch: fetch(input, init)
          .then(response => {
            if (response.headers['Content-Type']) {
              return response.json()
            }
            return response.text()
          })
          .then(response => {
            fetchCache.response = response
          })
          .catch(e => {
            fetchCache.error = e
          })
          .then(() => {
            if (lifespan > 0) {
              setTimeout(() => {
                const index = fetchCaches.indexOf(fetchCache)
                if (index !== -1) {
                  fetchCaches.splice(index, 1)
                }
              }, lifespan)
            }
          }),
        init,
        input,
      }

      fetchCaches.push(fetchCache)
      throw fetchCache.fetch
    }
  }
}