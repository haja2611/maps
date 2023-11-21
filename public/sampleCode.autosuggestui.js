Microsoft.Maps.loadModule("Microsoft.Maps.AutoSuggest", function () {
  var options = {
    maxResults: 4,
    map: map,
  };
  var manager = new Microsoft.Maps.AutosuggestManager(options);
  manager.attachAutosuggest("search_input", "options", selectedSuggestion);
});
function selectedSuggestion(suggestionResult) {
  map.entities.clear();
  map.setView({ bounds: suggestionResult.bestView });
  var pushpin = new Microsoft.Maps.Pushpin(suggestionResult.location);
  map.entities.push(pushpin);
  document.getElementById("printoutPanel").innerHTML =
    "Suggestion: " +
    suggestionResult.formattedSuggestion +
    "<br> Lat: " +
    suggestionResult.location.latitude +
    "<br> Lon: " +
    suggestionResult.location.longitude;
}
