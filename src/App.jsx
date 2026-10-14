import { useState } from 'react'

import './App.css'
const student={
  nom: "boubaker",
  prenom: "lina",
  email:"linaboubaker2006@gmail.com",
  telphone:"55467593" ,
  filere:"genie logiciel et systémes d'information",
  annedetude:"2026/2027",
  groupe:"GLSI2",
  ville:"mahdia",
  img:"https://tse3.mm.bing.net/th/id/OIP.X1BcAnYuYVgdd-vjNMbqYAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  
}
function App() {
  return (
    <div>
      <h1>fiche etudiant</h1>
      <img src={student.img} /> <td></td>
      <strong>nom et prenom :</strong>{student.nom} {student.prenom} <td></td>
      <strong>email:</strong>{student.email}  <td></td>
      <strong>telphone :</strong>{student.telphone}  <td></td>
      <strong>filere:</strong>{student.filere}  <td></td>
      <strong>année d'etude :</strong>{student.annedetude}  <td></td>
      <strong>groupe :</strong>{student.groupe}  <td></td>
      <strong>ville :</strong>{student.ville}  
    </div>
  )
}

export default App
