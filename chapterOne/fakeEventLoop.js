/*
  this is an example of the event loop, and kindog explains the lifecycle of a node application
*/

// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
  // check 1: looks to see if there are any functions pretending
  // setTimeout, setInterval, or setImmediate
  const hasPendingTimers = pendingTimers.length;

  // check 2: looks to see if there are any operating system task
  // looks to see if any server request are still pending
  const hasPendingOSTasks = pendingOSTasks.length;

  // check 3: looks to see if there are any long running operation,
  // like looking to see if FS is reading/writing or something
  const hasPendingOperations = pendingOperations.length;

  return hasPendingTimers || hasPendingOSTasks || hasPendingOperations;
}

// new timers, tasks, operations are recorded from myFile running
myFile.runContents() // pretending that node runs all the content of this

// fake event loop
// entrie while loop executes in one "tick"
while(shouldContinue()) {
  // 1) node looks at pending timers, and sees if any functions are ready to be called, and calls callbacks
  // 2) node looks at pending OS tasks, and operations, and calls relevant callbacks
  // 3) node pauses execution. Continue when
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a new timer is about to complete
  // 4) look at pending timers, looks for setImmediate only
  // 5) handle any 'close' events
  //  - this is literally on the close event for stuff, kinda weird
}

// exit back to terminal
