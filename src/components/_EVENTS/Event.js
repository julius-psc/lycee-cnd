


import React from "react";

import '../../styles/_EVENTS/Events.css';

const eventsArray = [
    {date: "2023-07-04",event: "Résulats du Bac"},
    {date: "2023-06-19",event: "Epreuve du Grand Oral"},
    {date: "2023-06-15",event: "Epreuve écrite anticipée de Français"},
    {date: "2023-06-14",event: "Epreuve écrite de Philosophie"},
    {date: "2023-06-07",event: "Séjour à Thury Harcourt"},
    {date: "2023-04-11",event: "Séjour à Londres"},
    {date: "2023-04-09",event: "Séjour au Danemark & Norvège"},
    {date: "2023-04-02",event: "Séjour au ski 2"},
    {date: "2023-03-28",event: "Epreuves communes expérimentales"},
    {date: "2023-03-19",event: "Séjour au ski 1"},
    {date: "2023-03-24",event: "Sortie au stade de foot (France - Pays Bas)"},
    {date: "2023-03-20",event: "Epreuves écrites de spécialités"},
    {date: "2023-03-18",event: "Matinée Portes Ouvertes (9h à 13h"},
    {date: "2023-01-26",event: "Séjour à Paris - Terminales"},
    {date: "2023-01-21",event: "Forum des métiers (9h à 13h)"},
    {date: "2022-12-10",event: "Remise des diplômes du bac - Anciens Termianles"},
    {date: "2022-12-09",event: "RDV individuels parents / profs - Secondes"},
    {date: "2022-11-25",event: "RDV individuels parents / profs - Terminales"},
    {date: "2022-11-18",event: "RDV individuels parents / profs - Premières"},
    {date: "2022-10-14",event: "Distribution du pack numérique - Secondes"},
    {date: "2022-09-23",event: "Réunion (parents) - Premières / Terminales"},
    {date: "2022-09-20",event: "Journée à Dinard - Secondes / Terminales"},
    {date: "2022-09-16",event: "Réunion (parents) - Secondes"},
    {date: "2022-09-09",event: "Journée au Mont Saint-Michel - Secondes"},
    {date: "2022-09-07",event: "Atelier Sciences-Po (14h)"},
    {date: "2022-09-02",event: "Rentrée - Premières (13h30) / Terminales (14h30)"},
    {date: "2022-09-01",event: "Rentrée - Secondes"},
    {date: "2022-08-22",event: "Ouverture du lycée"}
];


const Events = () => {
    return (
      <div className="events-section">
        <h1>Evènements</h1>
          <div className="events-container">
            {eventsArray.map((event, index) => {
              const eventDate = new Date(event.date);
              const today = new Date();
              const isPast = eventDate < today;
              const wrapperClass = `event-wrapper ${isPast ? "event-past" : ""}`;
              return (
                <div className={wrapperClass} key={index}>
                  <div class="event-date">
                    <div className="event-day">{eventDate.getDate()}</div>
                    <div>
                        <div className="event-month">{eventDate.toLocaleString("fr-FR", { month: "short" })}</div>
                        <div className="event-year">{eventDate.getFullYear()}</div>
                    </div>
                  </div>
                  <div className="event-details">{event.event}</div>
                </div>
              );
            })}
          </div>
      </div>
    );
};

export default Events;