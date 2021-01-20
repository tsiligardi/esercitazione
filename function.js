const elpost = (elenco)=>{
    return elenco.reduce((acc,e)=>{
        return acc+=`<h1>${e.title}</h1><p>${e.body}</p>`
    },``)
}

const getpost = (arr,id)=>{
    const post = arr[id-1]
    const html = `<h1>${post.title}</h1><p>${post.body}</p>`
    return html
}
const getcomments = (elenco)=>{
    return elenco.reduce((acc,e)=>{
        return acc+=`<p>nome: ${e.name}<br>email: ${e.email}<br>${e.body}`
    },`<h1>COMMENTI</h1>`)
}
module.exports = {
    elpost : elpost,
    getpost: getpost,
    getcomments: getcomments
}