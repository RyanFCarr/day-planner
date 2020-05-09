$( document ).ready(function(){
    //Moment in Time
    function render() {   
        var timeNow = moment().format('MMMM Do YYYY, kk:mm:ss a');
        var timeBlock = $(".time-block")
        $("#time-now").text(timeNow);
       timeBlock.removeClass("past present future")
        if(hour < moment().hour()){
            timeBlock.addClass("past");
        }else if(hour === moment().hour()){
            timeBlock.addClass("present");   
        }else{
            timeBlock.addClass("future");
        }
    }
    setInterval(render, 1000);
    //BlockTemplate
    var mainContent = $('#main-content');
    for(var hour=9; hour <=17; hour++){
        var note = localStorage.getItem(hour);
        if(!note){
            note=""
        }
        mainContent.append(`<div id="hour-${hour}" class="row time-block" data-hour='${hour}'>
                                <div class="col-md-1 hour">${moment(hour,'HH').format('HH:mm')}</div>
                                <textarea class="col-md-10 description">${note}</textarea>
                                <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
                            </div>`
        );
    }
    //Key/Value for LocalStorage
    $("button").click(function(){ 
        var key = $(this).parent().data("hour")
        var value = $(this).siblings("textarea").val()
        localStorage.setItem(key, value);
    })
    render()
});//End