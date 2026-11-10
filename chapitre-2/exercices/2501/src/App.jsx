import { useState } from 'react';
import CarteProfil from './CarteProfil.jsx';

export default function App() {
  const[cartesDepliees, setCartesDepliees] = useState([false, false, false, false, false, false]);

  // Fonction qui permet d'inverser l'état d'une carte
  function bascule(index) {
    setCartesDepliees(etat=> (etat.map((valeur, i) => i === index ? !valeur : valeur)));
  }

  // On calcule le nombre de cartes depliées
  const nbCartesDepliees = cartesDepliees.filter(Boolean).length;

  return (
    <main>
      <h1>Équipe du studio</h1>
      <p className="info">{nbCartesDepliees} profils ouverts sur {cartesDepliees.length}</p>

      <div className="grille">
        <CarteProfil nom="Awa Ndiaye" 
          estDeplie={cartesDepliees[0]}
          onToggle={() => bascule(0)}
        />
        
        <CarteProfil nom="Moussa Diallo" 
          estDeplie={cartesDepliees[1]}
          onToggle={() => bascule(1)}
        />

        <CarteProfil nom="Ahmed Seye" 
          estDeplie={cartesDepliees[2]}
          onToggle={() => bascule(2)}
        />

        <CarteProfil nom="Astou Diop"
          estDeplie={cartesDepliees[3]}
          onToggle={() => bascule(3)}
        />


        <CarteProfil nom="Fatou Sall"
          estDeplie={cartesDepliees[4]}
          onToggle={() => bascule(4)}
        />

        <CarteProfil nom="Fatou Ndiaye"
          estDeplie={cartesDepliees[5]}
          onToggle={() => bascule(5)}
        />

        <CarteProfil nom="Moustapha Diakhaté" 
          estDeplie={cartesDepliees[6]}
          onToggle={() => bascule(6)}
        />
      </div>
    </main>
  );
}
