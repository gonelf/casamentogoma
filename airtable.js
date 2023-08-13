// FAQs
function getActiveFAQs(callback) {

  let formula = "NOT({status} = 'inactive')";
  var url = "https://api.airtable.com/v0/appPQZZSswJvzwm5a/FAQs?filterByFormula="+formula;

  $.ajax({
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}

// Users
function getRecordByEmail(email, callback) {

  let formula = "SEARCH('"+email+"',email)";
  var url = "https://api.airtable.com/v0/appPQZZSswJvzwm5a/ids?filterByFormula="+formula;

  $.ajax({
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}

function getUsersByGID(GID, callback, error) {

  let formula = "(GID="+GID+")";
  // console.log("https://api.airtable.com/v0/appPQZZSswJvzwm5a/users?filterByFormula="+formula+"&"+
  // "sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc");
  $.ajax({
    url: 'https://api.airtable.com/v0/appPQZZSswJvzwm5a/users?filterByFormula='+formula+
    "&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      // console.log(data);
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}

function updateUserRecord(record, callback, error) {
  // console.log("https://api.airtable.com/v0/appPQZZSswJvzwm5a/users");
  let data = {'records': [record]};
  // console.log(data);
  $.ajax({
    url: "https://api.airtable.com/v0/appPQZZSswJvzwm5a/users",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'PATCH',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    processData: false,
    success: function (data) {
      // console.log(data);
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}

// Gifts
function getGifts(callback, error) {

  // let formula = "(GID="+GID+")";
  // console.log("https://api.airtable.com/v0/appPQZZSswJvzwm5a/users?filterByFormula="+formula+"&"+
  // "sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc");
  $.ajax({
    url: 'https://api.airtable.com/v0/appPQZZSswJvzwm5a/gifts',
    //?filterByFormula='+formula+
    //"&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      // console.log(data);
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}

function addContributionRecord(record, callback, error) {
  // console.log("https://api.airtable.com/v0/appPQZZSswJvzwm5a/users");
  console.log(record.fields['user_id']);
  users = record.fields["user_id"];
  record.fields['user_id'] = users.split(",");

  gifts = record.fields['gifts'];
  record.fields['gifts'] = [record.fields['gifts']];

  record.fields['amount'] = parseFloat(record.fields['amount']);
  record.fields['confirmed'] = (record.fields['confirmed'] === true);
  record.fields['gift_id'] = parseFloat(record.fields['gift_id']);

  let data = {'records': [record]};
  console.log(data);
  $.ajax({
    url: "https://api.airtable.com/v0/appPQZZSswJvzwm5a/contributions",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer keybSe3wdoIEJsvGv");
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    processData: false,
    success: function (data) {
      // console.log(data);
      callback(data);
    },
    error: function(){
      // console.log("Cannot get data");
      error();
    }
  });
}
