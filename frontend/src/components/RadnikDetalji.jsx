function DetaljiRadnika({ className, radnik }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <img src="https://picsum.photos/200" alt="" />
        <h2 className="text-center text-2xl mt-3">
          {radnik.ime} {radnik.prezime}
        </h2>
      </div>
    </div>
  );
}

export default DetaljiRadnika;
