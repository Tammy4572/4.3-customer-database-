(function() {
   'use strict';
   let url = 'https://randomuser.me/api/?nat=US,AU&results=12';
   let customers = document.querySelector('.customers');
   let header = document.createElement('header');
   header.innerHTML = '<h1>' + 'Internal Company Directory' + '</h1>';
   customers.appendChild(header);
   let customerContainer = document.createElement('container');
   customerContainer.setAttribute('class', 'app-container');
   customers.appendChild(customerContainer);

fetch(url).then(function(response){
   response.json().then(function(data){
   console.log(data);

   for (var i = 0; i < data.results.length; i++) {
      let customerImg = data.results[i].picture.large;
      let customerName = data.results[i].name.title + ' ' + data.results[i].name.first + ' ' + data.results[i].name.last;
      let customerEmail = data.results[i].email;
      let customerAddressPt1 = data.results[i].location.street;
      let customerAddressPt2 = data.results[i].location.city + ' ' + data.results[i].location.state + ' ' + data.results[i].location.postcode;
      let customerPhone = data.results[i].phone;
      let customerBSN = data.results[i].id.name + ' ' + data.results[i].id.value;

      buildCustomers(customerImg, customerName, customerEmail, customerAddressPt1, customerAddressPt2, customerPhone, customerBSN);
      };
   })
})
function buildCustomers(photo, name, email, addressPt1, addressPt2, phone, id) {

   let customerDiv = document.createElement('div');
   customerDiv.setAttribute('class', 'customerDiv');
   customerContainer.appendChild(customerDiv);

   let customerPhoto = document.createElement('div');
   customerPhoto.setAttribute('class', 'customerPhoto');
   customerPhoto.innerHTML = '<img src="' + photo + '"/>';
   customerDiv.appendChild(customerPhoto);

   let gridItem = document.createElement('div');
   gridItem.setAttribute('class', 'gridItem');
   customerDiv.appendChild(gridItem);

   let customerInfo = document.createElement('div');
   customerInfo.setAttribute('class', 'customerInfo');

   let customerName = document.createElement('h3');
   customerName.setAttribute('class', 'customerName');
   customerName.innerHTML = name;
   gridItem.appendChild(customerName);
   gridItem.appendChild(customerInfo);


   let customerEmail = document.createElement('p');
   customerEmail.setAttribute('class', 'customerEmail');
   customerEmail.innerHTML = email;
   customerInfo.appendChild(customerEmail);

   let customerAddressPt1 = document.createElement('p');
   customerAddressPt1.setAttribute('class', 'customerAddressPt1');
   customerAddressPt1.innerHTML = addressPt1;
   customerInfo.appendChild(customerAddressPt1);

   let customerAddressPt2 = document.createElement('p');
   customerAddressPt2.setAttribute('class', 'customerAddressPt2');
   customerAddressPt2.innerHTML = addressPt2;
   customerInfo.appendChild(customerAddressPt2);

   let customerPhone = document.createElement('p');
   customerPhone.setAttribute('class', 'customerPhone');
   customerPhone.innerHTML = phone;
   customerInfo.appendChild(customerPhone);

   let customerID = document.createElement('div');
   customerID.setAttribute('class', 'id');
   customerID.innerHTML = id;
   customerInfo.appendChild(customerID);
}
})();

// (function () {
//
//   'use strict';
//
//   $.ajax({
//   url: 'https://randomuser.me/api/?results=12',
//   dataType: 'json',
//   success: function(data) {
//    buildCustomers(data.results);
//    // console.log(data.results);
//   }
// });
