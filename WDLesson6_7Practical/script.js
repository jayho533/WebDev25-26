let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.vehicle_type_code1}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <p>${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>${crash.number_of_persons_killed}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.borough == borough){
      build += `<div class="fitted card">
                    <h3>${crash.vehicle_type_code1}</h3>
                    <hr>
                    <p>${crash.borough}</p>
                    <p>${crash.zip_code}</p>
                    <p>${crash.number_of_persons_injured}</p>
                    <hr>
                    <p>${crash.number_of_persons_killed}</p>
                    <hr>
                    <p>${crash.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByzip(){
  let incident_zip = document.getElementById("zip").value
  let build = "";
  let ct = 0;
  for(let i = 0; i <data.length; i ++){
   let crash = data [i];
   if (crash.incident_zip == incident_zip){
    build +=`<div class = "fitted card ">`;
    build +=`    <h3>$ {crash.vehicle_type_code1}</h3>`
    build +=`    <p>$ {crash.zip_code}</p>`;
    build +=`    <p>$ {crash.number_of_persons_injured}</p>`;
    build +=`    <p>$ {crash.number_of_persons_killed}</p>`;
    build += `</div>`;
    ct++;
   }
  }
  result.innerHTML =`${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

