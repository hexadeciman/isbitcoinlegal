$(function () {
  const not_allowed_color = '#e25b62';
  const allowed_color = '#3ab772';

  function formatCountriesData(list_of_countries) {
    let formatted_countries = {}
    list_of_countries.forEach(country => {
      formatted_countries[countries_codes[country]] = 1;
    })
    return formatted_countries;
  }

  $('#world-map').vectorMap({
    map: 'world_mill_en',
    series: {
      regions: [
        {
          values: formatCountriesData(not_allowed_countries),
          attribute: 'fill',
          scale: [not_allowed_color],
        },
        {
          values: formatCountriesData(allowed_countries),
          attribute: 'fill',
          scale: [allowed_color],
        }
      ]
    },
  });

});