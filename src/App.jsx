import Header from "./components/header2";
import Navbar from "./components/navbar";
import StudentCard from "./components/studentcard";
import Footer from "./components/footer2";
import "./App.css";
import Image from './assets/etudiant3.jpg'
import Image2 from './assets/etudiant1.jpg'


const etudiants = [
  {   email: "linaboubaker2006@gmail.com",
    prenom: "lina",
    nom: "Boubaker",
    telephone: "55467593",
    filiere: "GLSI",
  image:Image },
        {   email: "slimboubaker@gmail.com",
      prenom: "slim",
      nom: "Boubaker",
      telephone: "23274270",
      filiere: "GLSI2",
    image:Image2}
 
  ]

function App() {
  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2>Liste des étudiants</h2>

        <div className="students">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              image={etudiant.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
