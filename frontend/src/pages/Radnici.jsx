import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RadniciService from "../services/radnici.service";

function Radnici() {
  const [data, setData] = useState(null);
  let radnici = [];

  const reduceRadnikRadniSati = (radnik) => {
    let radniSatiRadnika = 0;

    radnik.radni_sati.forEach((radniSati) => {
      radniSatiRadnika += radniSati.radni_sati;
    });

    return radniSatiRadnika;
  };

  const radniciService = new RadniciService();

  useEffect(() => {
    radnici.length == 0 &&
      fetch("http://localhost:4000/radnici")
        .then((res) => res.json())
        .then((resData) => {
          resData.forEach((radnik) => {
            radnik.radni_sati = reduceRadnikRadniSati(radnik);
            radnici.push(radnik);
          });
          setData(radnici);
        });
  }, []);
  return (
    <div className="p-6 container mx-auto">
      <div className="grid grid-cols-4 border-b font-semibold">
        <p>Ime</p>
        <p>Prezime</p>
        <p>Ukupno Radni sati</p>
        <p>Datum</p>
      </div>
      {data &&
        data.map((radnik, index) => (
          <Link
            to={`/radnici/${radnik.id}`}
            key={radnik.id}
            className={`grid grid-cols-4 block cursor-pointer duration-300 hover:bg-slate-300 py-2 ${
              index % 2 === 0 ? "" : "bg-slate-100"
            }`}
          >
            <p>{radnik.ime}</p>
            <p>{radnik.prezime}</p>
            <p>{radnik.radni_sati}</p>
            <p>{radnik.datum}</p>
          </Link>
        ))}
    </div>
  );
}

export default Radnici;
