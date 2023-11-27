


export default class APIService {

    static UpdateArticle(article_id: number | undefined, body: { title: string | undefined; description: string | undefined; }, token: undefined) {

        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertArticle(body: any, token: undefined) {

        return fetch('http://127.0.0.1:8000/api/articles/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id: any, token: undefined) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
              }
        })
    }

    static LoginUser(body: any) {

        return fetch('http://127.0.0.1:8000/auth/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser(body: any) {

        return fetch('http://127.0.0.1:8000/api/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}