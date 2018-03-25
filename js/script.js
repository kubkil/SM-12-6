$(function() {

  const url = "https://restcountries.eu/rest/v2/name/";
  const countriesList = $('#countries');

  function searchCountries() {
    let countryName = $('#country-name').val(); // The .val() method is primarily used to get the values of form elements such as input, select and textarea.
    if(!countryName.length) {
      countryName = 'Poland';
    }
    // wykonuje asynchronous HTTP (Ajax) request
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList(), // podaje co ma się wykonać gdy serwer odpowie prawidłowo
    })
  }

  function showCountriesList(resp) { // resp - obiekt JSON, który przesyła do niej metoda .ajax() - czyli co?
    countriesList.empty();
    resp.forEach(function(item) {
      $('<li>').text(item.name).appendTo(countriesList);
    });
  }

  $('search').click(searchCountries);

}); // end document ready