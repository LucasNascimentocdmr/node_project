import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventDetails({ match }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventId = match.params.id;

    // Buscando detalhes do evento da API usando Axios
    axios.get(`https://sua-api.com/api/events/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do evento:', error);
      });
  }, [match.params.id]);

  if (!event) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Data: {event.date}</p>
      {/* tramitir ao vivo */}
      {/* chat */}
    </div>
  );
}

export default EventDetails;
