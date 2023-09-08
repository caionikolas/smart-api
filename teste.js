/*

const ambiente = [
  {
    id: 'b773eb71-3a52-409b-94d7-3eaf5e2cb21e',
    descricao: 'Cozinha',
    dispositivos: []
  },
  {
    id: '528a4b79-1768-4ec7-9594-98d7f069bb16',
    descricao: 'Sala',
    dispositivos: []
  }
]

const ident = "528a4b79-1768-4ec7-9594-98d7f069bb16"

function teste(){
  for (let i = 0; i < ambiente.length; i++) {
    if (ident == ambiente[i].id){
      return ambiente[i]
    } 
  }
  return false
}

console.log(teste(ident))

ambiente[0].dispositivos.push({
  nome: 'lampada',
  conexao: 'ligado',
  status: true
})






vai[0].dispositivos.push({
  "nome": "lampada",
  "conexao": "ligado",
  "status": true
})

vai[0].dispositivos

console.log(vai)

*/
//console.log(ambiente[0].dispositivos)

const vai = {
  id: '4e3e8188-1f06-4976-9e98-028ed9821e8b',
  descricao: 'Sala',
  dispositivos: [
    {
      dispositivoId: '3f19cda6-b6f5-40d9-b105-4d7301bf7918',
      nome: 'Cama',
      conexao: 'ligado',
      status: true
    },
    {
      dispositivoId: '76534af5-c7e8-4037-b482-b8d70abd5327',
      nome: 'Tv',
      conexao: 'ligado',
      status: true
    }
  ]
}

function testeDisp(DisId) {
  for (let j = 0; j < vai.dispositivos.length; j++) {
    if (DisId == vai.dispositivos[j].dispositivoId) {
      return vai.dispositivos[j].dispositivoId
    }
  }
  return false
}

vai.dispositivos.splice(0, 1)
console.log(vai)
