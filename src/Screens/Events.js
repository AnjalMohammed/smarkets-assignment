import { Breadcrumb, Card, Empty } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventItem } from "../Components/EventItem";
import { useEventContext } from "../contexts/EventContext";
import { useLoadingContext } from "../contexts/LoadingContext";
import { EVENT_DETAILS_API, POPLAR_EVENTS_API } from "../data/EndPoints";
import { makeApiCall, makeMultipleApiCalls } from "../utils/apiHelpers";
import { getHumanReadableString } from "../utils/stringHelpers";

export const Events = () => {
    const { loading, setLoading } = useLoadingContext();
    const { popularEvents, setPopularEvents, eventDetails, setEventDetails } = useEventContext();

    const { eventType } = useParams();

    useEffect(() => {
        setLoading(true);
        makeApiCall(POPLAR_EVENTS_API(eventType || 'football'), ({ popular_event_ids }) => {
            setPopularEvents(popular_event_ids);
            setLoading(false);
        })
        // WAS MAKING THIS PAGINATED CALL BUT THE RESPONSE LIST WAS QUITE LONG, SO WENT WITH A SIMPLER APPROACH

        // makePaginatedApiCall(EVENTS_API, "events", (response) => {
        //     setPopularEvents(response);
        //     setLoading(false);
        // })
    }, [eventType])

    useEffect(() => {
        if (popularEvents.length) {
            setLoading(true);
            makeMultipleApiCalls(EVENT_DETAILS_API, popularEvents, 0, (response) => {
                setEventDetails(response);
                setLoading(false);
            }, 'events');

        }
    }, [popularEvents])

    return (
        <>
            <Breadcrumb separator=">" className="mb2">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                <Breadcrumb.Item>{getHumanReadableString(eventType)}</Breadcrumb.Item>
            </Breadcrumb>
            <Header className="uppercase flex items-center mb2" >
                <h2 className="mb0">{`Popular ${getHumanReadableString(eventType)} Events`}</h2>
            </Header>
            <div className="mb2">
                {eventDetails.length ?
                    eventDetails.map(event => {
                        const { id } = event;
                        return <EventItem key={id} eventType={eventType} {...event} />
                    })
                    :
                    !loading &&
                    < Card >
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Card>
                }

            </div>
        </>
    );
}


