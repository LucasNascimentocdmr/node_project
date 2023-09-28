import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Buscar eventos da API usando Axios
    axios.get('https://sua-api.com/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar eventos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <a href={`/event/${event.id}`}>{event.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
