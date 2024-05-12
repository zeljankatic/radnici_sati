import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RadniciService from "../services/radnici.service";
import UnosRadnika from "../components/UnosRadnika";
import RadnikSati from "../components/RadnikSati";
import DetaljiRadnika from "../components/RadnikDetalji";

function DetaljiRadnikapage() {
  const { id } = useParams();
  const [radnik, setRadnik] = useState({});
  const radnici = [];

  const createDatum = (datum) => {
    const date = new Date(datum);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  useEffect(() => {
    const radniciService = new RadniciService();
    radniciService
      .getOne(id)
      .then((res) => {
        res.data.radni_sati.forEach((radniSati) => {
          radniSati.datum = createDatum(radniSati.datum);
          radnici.push(radniSati.radni_sati);
          console.log(radnici);
        });
        setRadnik(radnici);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto grid grid-cols-12">
      {radnik && (
        <>
          <DetaljiRadnika
            className={"col-span-3 border-r mt-10"}
            radnik={radnik}
          />
          <RadnikSati radnik={radnik} className={"col-span-7 col-start-6"} />
        </>
      )}
      <UnosRadnika id={id} className={"col-span-7 col-start-6"} />
    </div>
  );
}

export default DetaljiRadnikapage;
