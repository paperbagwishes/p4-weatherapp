// cheney
$.simpleWeather({
    location: '99004',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.cheney .temp').text(weather.temp);
      $('.cheney .city').text(weather.city);
      $('.cheney img').attr('src', weather.image);
      $('.cheney .title').text(weather.title);
      
      // If this condition, show this icon
        if ( 26 >= weather.code && 30 <= weather.code  ) {
            
         $('.cheney .wi').addClass('wi-day-cloudy');   
            
        }
        
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });

//bremerton
$.simpleWeather({
    location: '98312',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.bremerton .temp').text(weather.temp);
      $('.bremerton .city').text(weather.city);
      $('.bremerton img').attr('src', weather.image);
       $('.bremerton .title').text(weather.title);
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });


// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);    
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};