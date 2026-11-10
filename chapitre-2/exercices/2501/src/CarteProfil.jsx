export default function CarteProfil({ nom, estDeplie, onToggle }) {
  return (
    <article className="carte">
      <h2>{nom}</h2>
      <button onClick={onToggle}>
        {estDeplie ? 'Fermer' : 'Ouvrir'}
      </button>
      {estDeplie && <p>Présentation de {nom}.</p>}
    </article>
  );
}
