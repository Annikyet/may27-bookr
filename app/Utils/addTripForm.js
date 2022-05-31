export const addTripForm = `
<form id="new-trip-form" onsubmit="app.tripsController.add()">
  <input type="text" name="tripname" id="tripname" placeholder="Trip Name" minlength="3" maxlength="15">
  <button>Add Trip</button>
</form>`