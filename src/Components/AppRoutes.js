import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { EventDetailsPage } from '../Screens/EventDetailsPage';
import { Events } from '../Screens/Events';

export const AppRoutes = () => (
    <Routes>
        <Route path=":eventType">
            <Route path="events" element={<Events />} />
            <Route path=":eventId">
                <Route path="event" element={<EventDetailsPage />} />
            </Route>
        </Route>
        {/* having this deafult route so that the blank page doesnt come up */}
        <Route path="/" element={<Navigate replace to="/football/events" />} />

    </Routes>
);
