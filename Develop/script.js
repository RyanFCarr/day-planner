$( document ).ready(function(){

    //Moment in Time
    function render() {   
        var timeNow = moment().format('MMMM Do YYYY, HH:mm:ss');
        var timeBlock = $(".time-block")
        $("#currentDay").text(timeNow);
        timeBlock.each(function(){
            var hour = $(this).data('hour')
            $(this).removeClass("past present future")
            if(hour < moment().hour()){
                $(this).addClass("past");
            }else if(hour === moment().hour()){
                $(this).addClass("present");   
            }else{
                $(this).addClass("future");
            }
        })
        
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