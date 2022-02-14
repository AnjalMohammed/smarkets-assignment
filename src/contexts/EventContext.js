import React, { useContext, useState } from 'react';

const EventContext = React.createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
    const [popularEvents, setPopularEvents] = useState([]);
    const [eventDetails, setEventDetails] = useState([]);
    const [currentEvent, setCurrentEvent] = useState({});


    const value = {
        popularEvents, setPopularEvents,
        eventDetails, setEventDetails,
        currentEvent, setCurrentEvent
    }

    return <EventContext.Provider value={value}>
        {children}
    </EventContext.Provider>
}