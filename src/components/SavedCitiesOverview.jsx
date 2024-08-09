import { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CityCard from "./CityCard";
import elephant from "../assets/images/Mastodon_mascot_vector_version.svg.png";

function SavedCitiesOverview({ loading }) {
  const [cities, setCities] = useState(null); //wir brauchen ein Array mit allen Städten die wir von der API bekommen
  const [page, setPage] = useState(0);

  useEffect(() => {
    getCities(); //immer wenn sich etwas verändert, bzw. beim ersten Laden sollen die Städte abgefragt werden
  }, [loading, page]); //leerer dependencies array, weil wir hier nichts brauchen

  const getCities = async () => {
    //async, denn wir müssen auch eine Antwort warten und können nicht sagen wie lange, aber die restliche Seite darf weiterladen
    try {
      const result = await fetch(`http://localhost:8080/cities?page=${page}`); //jetzt warten wir auf die Ergebnisse, wir fragen unsere API an, ob es was gibt
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
      {cities ? (
        cities.map((city) => {
          //map über alle Elemente des Arrays. Einzelne Felder des JSON werden über Dot Notation abgefragt .name .uuid etc
          return <CityCard key={city.uuid} city={city} />; //key ist bei Listen IMMER ein erforderliches Property damit React sich nicht selbst verwirrt
        })
      ) : (
        <div>
          <p>Nothing to see here yet. Please save a city.</p>
          <img src={elephant} />
        </div>
      )}
      {cities && (
        <div className="btn_container">
          <Button
            type="primary"
            shape="circle"
            ghost
            icon={<LeftOutlined />}
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page <= 0}
          />
          <Button
            type="primary"
            shape="circle"
            ghost
            icon={<RightOutlined />}
            onClick={() => setPage((prev) => prev + 1)}
          />
        </div>
      )}
    </Card>
  );
}

export default SavedCitiesOverview;
