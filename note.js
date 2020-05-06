fetch(`url`)
.then(resp => resp.json())
.then(json_resp => console.log(json_resp))