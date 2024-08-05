import { useEffect } from "react";
import { useState } from "react";
import { Pagination, Card} from "antd";

function SavedCitiesOverview() {
  const [cities, setCities] = useState([]); //wir brauchen ein Array mit allen Städten die wir von der API bekommen

  useEffect(() => {
    getCities(); //immer wenn sich etwas verändert, bzw. beim ersten Laden sollen die Städte abgefragt werden
  }, []); //leerer dependencies array, weil wir hier nichts brauchen

  const getCities = async () => {
    //async, denn wir müssen auch eine Antwort warten und können nicht sagen wie lange, aber die restliche Seite darf weiterladen
    try {
      const result = await fetch("http://localhost:3000/cities"); //jetzt warten wir auf die Ergebnisse, wir fragen unsere API an, ob es was gibt
      const json = await result.json(); // wir müssen die antwort in ein verwendbares Format packen JSON
      console.log(json); //immer mal was loggen damit wir kontrolletti spielen können
      setCities(json); // useState wird mit den Ergebnissen geupdated
    } catch (error) {
      console.log(error); //falls was schief geht
    }
  };

  return (
    <Card className="saved_cities_container inconsolata-normal box">
      <h2 className="cabin-bold major_headline">Saved Cities</h2>
      {cities.map((city) => {
        //map über alle Elemente des Arrays. Einzelne Felder des JSON werden über Dot Notation abgefragt .name .uuid etc
        return <div key={city.uuid}>{city.name}</div>; //key ist bei Listen IMMER ein erforderliches Property damit React sich nicht selbst verwirrt
      })}

    <Pagination align="center" defaultCurrent={1} total={50} />
    </Card>
  );
}

export default SavedCitiesOverview;
