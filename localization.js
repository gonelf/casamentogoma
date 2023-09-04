let translations = {
  // menu & titulos
  "menu_rsvp": {"pt": "Presença", "en": "RSVP"},
  "menu_location": {"pt": "Localização", "en": "Location"},
  "menu_faqs": {"pt": "Perguntas", "en": "FAQs"},
  "menu_contacts": {"pt": "Contactos", "en": "Contacts"},
  "menu_gifts": {"pt": "Presentes", "en": "Gifts"},
  "menu_logout": {"pt": "Sair", "en": "Exit"},
  // RSVP
  "HI": {"pt": "Olá", "en": "Hi"},
  "RSVP" : {"pt": "A tua presença", "en": "RSVP"},
  "rsvp_message" : {"pt": "Por favor, confirma até dia", "en": "Please RSVP before"},
  "month": {"pt": "Outubro", "en": "October"},
  // location
  "how_to_get": {"pt": "Como chegar?", "en": "How to get there?"},
  "from_lisbon": {"pt": "De Lisboa: A8, saída 17", "en": "From Lisbom: A8, exit 17"},
  "from_oporto": {"pt": "Do Porto: A1, A17 e A8, saída 17", "en": "From Oporto: A1, A17 e A8, exit 17"},
  // FAQs
  "faqs_message_1": {
    "pt": "Gostávamos de usar este espaço para tentar responder às perguntas mais frequentes que nos têm feito. Esperamos que vos seja útil!",
    "en": "We would like to use this space to try to answer the most frequently asked questions. We hope it's useful to you!"
  },
  "faqs_message_2": {"pt": "Se ainda tiveres alguma dúvida ou questão, não hesites e", "en": "If you still have any doubts or questions, don't hesitate and"},
  "contact_us": {"pt": "contacta-nos!", "en": "contact us!"},
  // contacts
  "contacts_message": {"pt": "Ficaste com alguma dúvida ou precisas de ajuda com algo? Fica à vontade para nos contactares, caso necessites.", "en": "Have a question or need help with something? Feel free to contact us if needed."}
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
