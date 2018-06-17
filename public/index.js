
const app = function(){
 const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
 makeRequest(url, requestComplete);

 var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
}

const makeRequest = function(url, callback){
 const request = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send();

}

const handleButtonClick = function (array) {
  app();
  };

const requestComplete = function(){
 if(this.status !== 200) return;
 const results = JSON.parse(this.response);
 const array = results;
 // console.log(array);
 populateList(array);
 // handleButtonClick(array);
//  populateDropdown(arrests);
//  const select = document.querySelector('select');
//  select.addEventListener('change', function(){
//    var country = countries[select.value];
//    console.log(country);
//    handleSelectChange(country)
// });



}

// const populateList = function(array){
//  const ul = document.querySelector('#country-list');
//  array.forEach(function(result){
//    const li = document.createElement('li');
//    li.textContent = result.setup;
//    ul.appendChild(li);
//  });
//  }

 const populateList = function(array){
   const ul = document.querySelector('#joke');
   const punchlineUl = document.querySelector('#punchline');

     const setupLi = document.querySelector('#setupLi');
     setupLi.textContent = array.setup;
     const punchlineLi = document.querySelector('#punchlineLi');
     punchlineLi.textContent = array.punchline;
     // const nameLi = document.getElementById('nameLi').hidden = true;
     // nameLi.textContent = array[0].correct_answer;
     // ul.appendChild(nameLi)
     ul.appendChild(setupLi);
     ul.appendChild(punchlineLi);

 }
//
//  const populateDropdown = function(countries){
//    const dropdown = document.querySelector('#countries');
//    countries.forEach(function(country){
//      const option = document.createElement('option');
//      option.value = countries.indexOf(country);
//      option.textContent = country.name;
//      dropdown.appendChild(option);
//      });
//
//  }
//
//  const handleSelectChange = function(country){
//    console.log(country);
//    const ul = document.querySelector('#selected-country');
//    const nameLi = document.querySelector('#nameLi');
//    nameLi.textContent = country.name;
//    const populationLi = document.querySelector('#populationLi');
//    populationLi.textContent = country.population;
//    const capitalLi = document.querySelector('#capitalLi');
//    capitalLi.textContent = country.capital;
//
//    ul.appendChild(nameLi)
//    ul.appendChild(populationLi)
//    ul.appendChild(capitalLi);
//
//  }


window.addEventListener('load', app);
