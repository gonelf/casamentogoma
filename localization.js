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
  "rsvp_group_message": {
    "pt": "Aqui tens uma área dedicada à confirmação da tua presença, e também à da tua família, a quem estendemos o convite com todo o gosto!",
    "en": "This area dedicated to RSVP your presence, and also your family, to whom we gladly extend the invitation!"
  },
  "rsvp_solo_message": {
    "pt": "Aqui tens uma área dedicada à confirmação da tua presença.",
    "en": "This area dedicated to RSVP your presence."
  },
  "rsvp_message" : {"pt": "Por favor, confirma até dia", "en": "Please RSVP before"},
  "month": {"pt": "1 de Outubro", "en": "October 1st"},
  "child": {"pt": "Filho/a", "en": "Son/Daughter"},
  "rsvp_going": {"pt": "Confirmado", "en": "Confirmed"},
  "rsvp_not_going": {"pt": "Não posso ir", "en": "I can't go"},
  "rsvp_confirm_btn": {"pt": "Confirmar presença", "en": "Confirm RSVP"},
  "rsvp_change_btn": {"pt": "Alterar confirmação", "en": "Change RSVP"},
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
  "contacts_message": {"pt": "Ficaste com alguma dúvida ou precisas de ajuda com algo? Fica à vontade para nos contactares, caso necessites.", "en": "Have a question or need help with something? Feel free to contact us if needed."},
  // loading
  "loading": {"pt": "A verificar a lista de convidados...", "en": "Loading..."},
  // forms
  "rsvp_yes": {"pt": "Sim, confirmo!", "en": "Yes, count me in!"},
  "rsvp_no": {"pt": "Não posso ir :(", "en": "No, I can't go :("},
  "email_placeholder": {"pt": "O teu email", "en": "Your email"},
  "phone_label": {"pt": "Telemóvel", "en": "Phone"},
  "phone_placeholder": {"pt": "O teu número", "en": "Phone number"},
  "alergies_label": {"pt": "Existe alguma restrição alimentar?", "en": "Food alergies."},
  "alergies_placeholder": {
    "pt": "Exemplos: vegetariano, vegan, glúten, lactose, leite, ovo, marisco, peixe, amendoim e frutos secos, soja... ",
    "en": "E.g. vegetarian, vegan, gluten free, lactose, milk, eggs, sea food, fish, peanuts or nuts, soya..."
  },
  "confirm_btn": {"pt": "Confirmar", "en": "Confirm"},
  "plusone_yes": {"pt": "Sim, levo uma pessoa!", "en": "Yes, I'll bring a plus one!"},
  "plusone_no": {"pt": "Não levo ninguém.", "en": "No, I'll go alone."},
  "name_label": {"pt": "Nome", "en": "Name"},
  "name_placeholder": {"pt": "O nome do teu plus one", "en": "Name of your plus one"},
  "phone_plusone_placeholder": {"pt": "O número do teu plus one", "en": "Plus one phone number"},
  "rsvp_kid_yes": {"pt": "Sim, confirmo!", "en": "Yes, I confirm!"},
  "rsvp_kid_no": {"pt": "Não pode vir :(", "en": "No, it won't go"},
  "age_label": {"pt": "Idade", "en": "Age"},
  "age_kid_option_1": {"pt": "3 anos ou menor", "en": "3 yo or younger"},
  "age_kid_option_2": {"pt": "Entre 4 e 8 anos", "en": "between 4 and 8 yo"},
  "age_kid_option_3": {"pt": "Maior de 8 anos", "en": "Older than 8 yo"},
  "kid_name": {"pt": "O nome da criança", "en": "Kid's name"},

}

function localize () {
  let lang = getLanguage();
  $(".localize").each((i, e)=>{
    // console.log($(e).attr('placeholder'));
    // console.log($(e)[0].placeholder);
    // console.log($(e).text());
    // if ($(e).text() !== "") {

      let text = ($(e).text() !== "") ? $(e).text() : $(e).attr('placeholder');
      // console.log(text);
      var matches = text.match(/\[(.*?)\]/);
      // console.log(matches);
      let new_text = text.replace(matches[0], translations[matches[1]][lang]);
      // console.log(new_text);
      ($(e).text() !== "") ? $(e).text(new_text) : $(e).attr('placeholder', new_text);
    // }
  });

}
