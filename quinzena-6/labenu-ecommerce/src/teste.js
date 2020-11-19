import axios from 'axios';

axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
    headers: {
      Authorization: 'tang-vulquimar-silva'
    }
}).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error.response.data)
})



const body = {
  name: "Rock Nervoso"
}

axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
headers: {
  Authorization: 'tang-vulquimar-silva'
  }
}).then((response) => {
console.log(response)
}).catch((error) => {
console.log(error.message)
})
