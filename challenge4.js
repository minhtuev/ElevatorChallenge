{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        var up = 1;
        var down = -1;
        var direction = up;
        var topFloor = 7;
        var bottomFloor = 0;
        var nextFloor = 0;
        elevator.on("idle", function() {
            nextFloor = elevator.currentFloor() + direction;
            if (nextFloor < bottomFloor || nextFloor > topFloor) {
                direction = direction * -1;
                nextFloor = elevator.currentFloor() + direction;
            }
            elevator.goToFloor(nextFloor);
        });
        
        elevators[1].on("idle", function() {
            elevators[1].goToFloor(nextFloor);   
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}