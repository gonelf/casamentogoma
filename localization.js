let translations = {
  "HI": {"pt": "Olá", "en": "Hi"},
  "PRESENCE" : {"pt": "A tua presença", "en": "Your presence"},
  "MESSAGE_TEXT" : {"pt": "Por favor, confirma até dia", "en": "ETA"}
}

function localize () {
  let lang = getLanguage();
  $(".localize").each((i, e)=>{
    // console.log($(e).text());
    let text = $(e).text();
    var matches = text.match(/\[(.*?)\]/);
    // console.log(matches);
    let new_text = text.replace(matches[0], translations[matches[1]][lang]);
    // console.log(new_text);
    $(e).text(new_text);
  });

}
