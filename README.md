# HTML
- In the .container, hard-code one time-block for each hour, 9-5
  - Ensure each block has a textarea and a save button

```javascript
<div id="hour-9" class="row time-block">
  <div class="col-md-1 hour">
    9AM
  </div>
  <textarea class="col-md-10 description">
  </textarea>
  <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
</div>```

# JavaScript
- Wait for DOM to be "ready", then...
  - Create a function to update the hours
    - Get the current hour in military time (i.e. 14 for 2pm)
    - Loop over all of the .time-blocks
      - Figure out which hour this block represents
      - If this block's hour is less than the current hour:
        - Add the class "past" to this block
      - Else if this block's hour is the current hour:
        - Remove "past" class from this time block
        - Add "present" class to this time block
      - Else
        - Remote the "past" class from this time block
        - Remove the "present" class from this time block
        - Add the "future" class to this time block

  - Call the function we just created to update the hours the first time

  - Re-run the function on an interval (every 60s?) to update as time changes
  - Load data for 9AM block from localStorage
  - Load data for 10AM block from localStorage
  - Load data for 11AM block from localStorage
  - Load data for 12PM block from localStorage
  - Load data for 1PM block from localStorage
  - Load data for 2PM block from localStorage
  - Load data for 3PM block from localStorage
  - Load data for 4PM block from localStorage
  - Load data for 5PM block from localStorage

  - Update the current date/time at the top of the page
  
  - Set up a click handler for the save button:
    - Get the value from the textarea in the block that is being saved
    - Get the time (i.e. 9) of the time block that's being saved
    - Store the value from the textarea in localStorage, using the hour as the key