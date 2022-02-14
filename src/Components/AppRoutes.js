import React from 'react';
import { Routes, Route} from 'react-router-dom';
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
        </Routes>
);
