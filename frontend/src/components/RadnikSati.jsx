function RadnikSati({ radnik, className }) {
  return (
    <div className={className}>
      <h3>Radni Sati</h3>
      <div className="grid grid-cols-[200px_1fr]">
        <p>Radni sati</p>
        <p>Datum</p>
      </div>
      {radnik.radni_sati &&
        radnik.radni_sati.map((sati) => {
          return (
            <div key={sati.id} className="grid grid-cols-[200px_1fr]">
              <p>{sati.radni_sati}</p>
            </div>
          );
        })}
    </div>
  );
}

export default RadnikSati;
