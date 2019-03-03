if(events === null)
return; 

var returnEventData = getArray();
    
var params = {};
var filterIndex =0;
var    qString = "";
for(i = 0;i<events.length;i++){
    var        eventItem = events[i];
    var        providerEvent = {};
        
    if(eventItem.type == 'application.workouts')
    providerEvent.event_object_type = 'workouts';
    providerEvent.event_object_id = eventItem.object_id;
    providerEvent.event_type = 'UPDATED';
    returnEventData.add(providerEvent);
    }
return {
    	"events" : returnEventData
    	
}