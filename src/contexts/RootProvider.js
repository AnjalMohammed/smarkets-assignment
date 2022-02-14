import React from 'react';
import { EventProvider } from './EventContext';
import { LoadingProvider } from './LoadingContext';

export const RootProvider = ({ children }) => (
    <LoadingProvider>
        <EventProvider>
            {children}
        </EventProvider>
    </LoadingProvider>
)