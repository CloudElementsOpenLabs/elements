var formattedEvents = []; 
var eventObj = {}; 
eventObj.event_date = new Date().toISOString();
eventObj.event_object_id = events.event['ride_id']; 
eventObj.event_type = "UPDATED"; 
eventObj.event_object_type = events.event_type;


formattedEvents.push(eventObj);
return {    
	"events" : formattedEvents    
}