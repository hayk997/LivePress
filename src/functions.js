import api from "./api";

export async function fetchNews(page = 1){
  return fetch(`${api.News.index.url}?page=${page}`, {
        method: api.News.index.method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(news=>{
      return news.json()
  })
      .catch((e)=>{
        console.log(e)
  })

}
