$(function(){

    $("#reportweather").click(function(){
        $("#showweather").empty();
        $("#showtemp").empty();
        $("#showhum").empty();
        $("#showwind").empty();
        $("#cityname").empty();

        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
            url += "&APPID=028dfc1148b02fa431488523bbe0839c";
        
        $.get(url, function(cityname){
            console.log(cityname);
            var row = "<h3>" + cityname.name + "</h3>";
            $("#cityname").append(row);
        });
            
        $.get(url, function(datawt){
            console.log(datawt);
            var row = "<h3>" + '<img src="http://openweathermap.org/img/w/' + datawt.weather[0].icon + '.png">'; 
                row += "<h3>" + datawt.weather[0].description + "</h3>";
            $("#showweather").append(row);
        });
        
        $.get(url, function(datatemp){
            console.log(datatemp);
            var row = '<img src="images/temp.png" style="width:40px;height:40px;">';
                row += "<h3>" + parseInt(datatemp.main.temp/10) + " °C</h3>";
                
            $("#showtemp").append(row);
        });

        $.get(url, function(datahum){
             console.log(datahum);
             var row = '<img src="images/humity.png" style="width:40px;height:40px;">'; 
                 row += "<h3>" + datahum.main.humidity + " %</h3>";
             $("#showhum").append(row);
         });

        $.get(url, function(datawind){
            console.log(datawind);
            var row = '<img src="images/wind.png" style="width:40px;height:40px;">'; 
                row += "<h3>" + datawind.wind.speed + " m/s</h3>";
            $("#showwind").append(row);
        });
           
    });

});