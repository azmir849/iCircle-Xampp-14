//function to set about
var base_url = "https://icircles.app/";
let username = "";
let authorImgUrl ="";
aboutRender = (about) => {
  username = about.username;//for globally access
  authorImgUrl = base_url+about.image;
  //user tab name
  username = about.username;
  document.getElementById("tabName").innerHTML = `iCircles - Profile -  ${about.username}`;


  //Header
  document.getElementById('authorBannerImg').src=base_url+about.image;
  document.getElementById('profilePhoto').src=base_url+about.thumb;
  let fName = about.firstname;
  let lName = about.lastname;
  let fullName = fName.concat(" ", lName);
  document.getElementById("userFullName").innerHTML = `${fullName}`;
  document.getElementById("userDesignation").innerHTML = about.designation;

  //About contact info
  let aboutContactInfo = "";
  if(about.phone){
    aboutContactInfo +=`<li><a href="#"> <i class="fa-solid fa-phone"></i>${about.phone}</a></li>`;
  }
  if(about.email){
    aboutContactInfo +=`<li><a href="#"> <i class="fa-solid fa-envelope"></i>${about.email}</a></li>`;
  }
  if(about.address){
    aboutContactInfo +=`<li><a href="#"><i class="fa-solid fa-location-dot"></i>${about.address}</a></li>`;
  }
  document.getElementById('aboutContactInfo').innerHTML = aboutContactInfo;
 

  //About description
  let htmlText = "";
  const strShort = about.about_me;
  const strlong = about.about_me;
  // 👇️ First 25 words
  const shortDescription = strShort.split(" ").slice(0, 32).join(" ");
  const longDescription = strlong.split(" ").slice(32, 400).join(" ");

  if(strlong.length<160){
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("homeUserAbout").innerHTML = `${about.about_me}`;
  }else{
    htmlText = `
    <div><span id="shortTitle">${shortDescription}</span><span id="dots"> ... </span></div>
    <div id="more">${longDescription}</div>
    `;
    document.getElementById("homeUserAboutDiv").innerHTML = htmlText;
  }

  //Website Or resume Resume url
  let importantLink = "";
  if(about.web_site || about.resume){
    if(about.web_site){
        importantLink +=`<li>My personal website : <a href=${about.web_site}>${about.web_site}</a></li>`
    }
    if(about.resume){
        importantLink +=`<li>My Resume: <a target="_blank" href=${base_url+about.resume}>Download Resume</a></li>`
    }
  }else{
      document.getElementById('importantlinkDiv').style.display='none';
  }
    
  document.getElementById("importantLinks").innerHTML = importantLink;
  document.getElementById("bioTitle").innerHTML = `Hello I’m ${about.firstname} ${about.lastname}`;
  
//Social Icons
  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `  <li><a href=${about.facebook}><i class="fa-brands fa-facebook  fb"></i></a></li>`;
  }
  if (about.twitter) {
    socialIcon += `  <li><a href=${about.twitter}><i class="fa-brands fa-twitter-square tr"></i></a></li>`;
  }
  if (about.instagram) {
    socialIcon += ` <li><a href=${about.instagram}><i class="fa-brands fa-instagram-square ig"></i></a></li>`;
  }
  if (about.linkedin) {
    socialIcon += ` <li><a href=${about.linkedin}><i class="fa-brands fa-linkedin lk"></i></a></li>`;
  }
  if (about.github) {
    socialIcon += `	<li><a href=${about.github}><i class="fa-brands fa-github gh"></i></a></li>`;
  }
  if (about.whatsapp) {
    socialIcon += `	<li><a href=${about.whatsapp}><i class="fa-brands fa-whatsapp wapp"></i></a></li>`;
  }
  if (about.skype) {
    socialIcon += `	<li><a href=${about.skype}><i class="fa-brands fa-skype sk"></i></a></li>`;
  }
  document.getElementById("socialMediaLinks").innerHTML = socialIcon;
  
};

//function to set microsite verified card
verifiedCardRender = (microsites_verified_card) => {
  var length = microsites_verified_card.length;
  if(length===0){
    document.getElementById("verifiedCard").style.display= "none";
    document.getElementById("verifiedCardImg").style.display= "none";
  }

  let htmlText = "";
  microsites_verified_card.map((verifiedCardData)=>{
    if(typeof verifiedCardData !== 'undefined' && verifiedCardData.length === 0){
     document.getElementById("verifiedCard").style.display = "none";
    }else{
      htmlText += `

      <div class="logo"><img src="https://icircles.app/uploads/micrositeslogo/${verifiedCardData.entity_logo}" alt=""></div>
        <div class="logoInfo">
            <h4>${verifiedCardData.name}</h4>
            <p>${verifiedCardData.designation}</p>
      </div>
      `
    }
  });
  document.getElementById("verifiedCard").innerHTML = htmlText;
};

//function to set portfolio video
profileVideoRender = (portfolioVideo) =>{
  let profileVideoLength = portfolioVideo.length;
  if(profileVideoLength<=0){
    document.getElementById("profileVideoSection").style.display = 'none';
    document.getElementById("profilePhotoSection").style.marginTop = '30px';
  }
  let htmlText = "";
  portfolioVideo.map((videoData)=>{
      htmlText += `
      <div class="vedio_wrap">
        <img src=${authorImgUrl} alt="">
        <div class="Overly">
          <div class="photoAdd">
           <a target="_blank" href="https://icircles.app/uploads/video/${videoData.video}"><i class="fa-solid fa-circle-play"></i></a>
          </div>
        </div>
      </div>
      `;
  });
  document.getElementById("profileVideo").innerHTML = htmlText;
};

//function to set profile photos
myphotosRender = (profile_images) => {
  let profileImagesLength = profile_images.length;
  if(profileImagesLength<=0){
    document.getElementById("profilePhotoSection").style.display = 'none';
    document.getElementById('experienceSection').style.marginTop = '30px';
  }

  let htmlText = "";
  profile_images.map((profilePhoto)=>{
      htmlText += `
      <div class="col-6 col-lg-4">
            <div class="gallery_wrap">
                <img src="https://icircles.app/uploads/user/${username}/${profilePhoto.image}" alt="">
                <div class="Overly">
                    <div class="photoAdd">
                      <a href="#"><i class="fa-solid fa-eye"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `
  });
  document.getElementById("galleryPhotos").innerHTML = htmlText;
};


//function to set work experiences
workExperienceRender = (experiences) => {
  var length = experiences.length;
  if(length<=0){
    document.getElementById("experienceSection").style.display= "none";
    document.getElementById('skillSection').style.marginTop = '30px';
  }

  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    const thatYear = new Date(expData.from_date);
    let year = thatYear.getFullYear();
      htmlText += `
      <div class="col-lg-12">
          <div class="experiance_wrap">
                <div class="experiance_img">
                    <img src="https://icircles.app/uploads/user/${username}/${expData.image}" alt="">
                </div>
                <div class="experiance_text">
                    <h4>${expData.company_name} ${year}</h4>
                    <h5>${expData.job_title}</h5>
                    <p>${expData.details}</p>
                </div>
          </div>
      </div>
      `;
   
  });
  document.getElementById("experienceFullCard").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if(length<=0){
    document.getElementById("skillSection").style.display= "none";
    document.getElementById('educationSection').style.marginTop = '30px';
  }

  let htmlText = "";
  skills.map((skills) => {
    htmlText +=`
    <div class="col-lg-12">
    <div class="skill_wrap">
         <div class="skill_text">
             <h5>${skills.name}</h5>
             <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's alsoLorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also ... ...</p>
         </div>
    </div>
</div>
    `;
  });
  document.getElementById("skills").innerHTML = htmlText;
};

// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  if(length<=0){
    document.getElementById("educationSection").style.display= "none";
    document.getElementById('serviceSection').style.marginTop = '30px';
  }

  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    const thatYear = new Date(eduData.from_date);
    let year = thatYear.getFullYear();
      htmlText += `

        <div class="col-lg-12">
            <div class="education_wrap">
                  <div class="education_img">
                  <img src="https://icircles.app/uploads/user/${username}/${eduData.image}" alt="">
                  </div>
                  <div class="education_text">
                      <h5>${eduData.degree_name} ${year}</h5>
                      <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's alsoLorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also ... ...</p>
                  </div>
            </div>
        </div>
      `;
  });
  document.getElementById("educationsData").innerHTML = htmlText;
};

//function to set services
serviceRender = (services) => {
  var length = services.length;
  if(length<=0){
    document.getElementById("serviceSection").style.display= "none";
    document.getElementById('languageSection').style.marginTop = '30px';
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 10).join(" ");
    htmlText += ` 
    <div class="col-md-6 col-lg-4">
      <div class="service_wrap">
        <div class="serviceImg">
            <img src="${base_url}/${serviceData.thumb}" alt="">
        </div>
        <div class="servicetext">
            <h4>${serviceData.service_name}</h4>
            <p>${shortDescription}  ...</p>
          </div>
      </div>
    </div>
    `;
  });
  document.getElementById("servicesData").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if(length===0){
    document.getElementById("languageSection").style.display= "none";
    document.getElementById('portfolioSection').style.marginTop = '30px';
  }


  let htmlText = "";
  languages.map((languages) => {
    htmlText += `

    <div class="col-4 col-lg-2">
      <div class="language_wrap">
          <div class="language_text">
              <h4>${languages.title}</h4>
              <h5>${languages.level}</h5>
          </div>
      </div>
    </div>

    `;
  });
  document.getElementById("languages").innerHTML = htmlText;
};

//function to set portfolio
portfolioRender = (portfolios) => {
  // console.log(portfolios);
  let keys = [];
  keys = Object.keys(portfolios);
 
  const length = keys.length;
  // console.log(length);
  // console.log(keys.length);
  

  let cat = ``;
  let contentIndex0 = ``;
  let contentIndex1 = ``;
  let contentIndex2 = ``;
  let contentIndex3 = ``;
  let contentIndex4 = ``;
  let contentIndex5 = ``;
  let elementsImageIndex0= ``;
  let elementsImageIndex1= ``;
  let elementsImageIndex2= ``;
  let elementsImageIndex3= ``;
  let elementsImageIndex4= ``;
  let elementsImageIndex5= ``;
  keys.map((key, index) => {
    const strShort = key;
    const shortKey = strShort.split(" ").slice(0, 1).join(" ");
    // console.log("key"+shortKey);
    // console.log("index"+index);
    if(index===0){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat0()"; class="nav-link active" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex0 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex0" class="row">
   
        </div>
    </div>
    `;
    }
    if(index===1){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat1()"; class="nav-link" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex1 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex1" class="row">
   
        </div>
    </div>
    `;
    }
    if(index===2){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat2()"; class="nav-link" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex2 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex2" class="row">
   
        </div>
    </div>
    `;
    }
    if(index===3){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat2()"; class="nav-link" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex3 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex2" class="row">
   
        </div>
    </div>
    `;
    }
    if(index===4){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat2()"; class="nav-link" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex4 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex2" class="row">
   
        </div>
    </div>
    `;
    }
    if(index===5){
      cat += `<li class="nav-item" role="presentation">
      <button onclick="showCat2()"; class="nav-link" id="${shortKey}-tab" data-bs-toggle="pill" data-bs-target="#${shortKey}" type="button" role="tab" aria-controls="pills-${shortKey}" aria-selected="true">${key}</button>
    </li>`;
    contentIndex5 += `
    <div class="tab-pane fade show active" id="${shortKey}" role="tabpanel" aria-labelledby="${shortKey}-tab">
        <div id="elementsImageIndex2" class="row">
   
        </div>
    </div>
    `;
    }

    if(index===0){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex0 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    if(index===1){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex1 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    if(index===2){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex2 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    if(index===3){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex3 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    if(index===4){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex4 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    if(index===5){
    portfolios[key].map((item, index) => {
        // console.log(item);
        // console.log(index);
        elementsImageIndex5 +=`
          <div class="col-6 col-lg-3">
            <div class="portItem">
              <img src="${base_url +"/"+item.image}" alt="">
             </div>
        </div>
        
        `;
    });
  }
    

});

document.getElementById("pills-tab").innerHTML = cat;
if(length>0){
  document.getElementById("pills-tabContent0").innerHTML = contentIndex0;
  document.getElementById("elementsImageIndex0").innerHTML = elementsImageIndex0;
}

if(length>1){
  document.getElementById("pills-tabContent1").innerHTML = contentIndex1;
  document.getElementById("elementsImageIndex1").innerHTML = elementsImageIndex1;
}
if(length>2){
  document.getElementById("pills-tabContent2").innerHTML = contentIndex2;
  document.getElementById("elementsImageIndex2").innerHTML = elementsImageIndex2;
}
if(length>3){
  document.getElementById("pills-tabContent3").innerHTML = contentIndex3;
  document.getElementById("elementsImageIndex3").innerHTML = elementsImageIndex3;
}
if(length>4){
  document.getElementById("pills-tabContent4").innerHTML = contentIndex4;
  document.getElementById("elementsImageIndex4").innerHTML = elementsImageIndex4;
}
if(length>5){
  document.getElementById("pills-tabContent5").innerHTML = contentIndex5;
  document.getElementById("elementsImageIndex5").innerHTML = elementsImageIndex5;
}

};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if(length<=0){
    document.getElementById("awardSection").style.display= "none";
    document.getElementById('interestSection').style.marginTop = '30px';
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 50).join(" ");
    htmlText += `

    <div class="col-lg-12">
    <div class="award_wrap">
         <div class="award_text">
             <h5>${awardData.title}</h5>
             <h6>${year}</h6>
             <p>${shortDescription} ...</p>
         </div>
    </div>
</div>
    `;
  });
  document.getElementById("awardSectionData").innerHTML = htmlText;
};


//function to set interests
interestRender = (interest) => {
  var length = interest.length;
  if(length===0){
    document.getElementById("interestDiv").style.display= "none";
  }

  let htmlText = "";
  interest.map((interestData) => {
    htmlText += `
    <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <h2 class="mt-3">${interestData.title}</h2>
        </div>
      </div>
    `;
  });
  document.getElementById("interestSectionData").innerHTML = htmlText;
};

//function to set clients
clientRender = (clients) => {
  var length = clients.length;
  if(length<=0){
    document.getElementById("clientSection").style.display= "none";
  }

  let htmlText = "";
  clients.map((clientData)=>{
     if(clientData.image==null){
      htmlText += `
      <div class="col-lg-12">
      <div class="clients_wrap">
            <div class="clients_text">
                <h4>Samsung IT Group 2021</h4>
                <p>${clientData.client_name}</p>
            </div>
      </div>
  </div>
      `
     }else if(clientData.image!=null ){
      htmlText += `

      <div class="col-lg-12">
          <div class="clients_wrap">
                <div class="clients_img">
                    <img src="https://icircles.app/uploads/user/${username}/${clientData.image}" alt="">
                </div>
                <div class="clients_text">
                    <h4>Samsung IT Group 2021</h4>
                    <p>${clientData.client_name}</p>
                </div>
          </div>
      </div>
      `
     }
  });
  document.getElementById("clientsData").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {

  let htmlText = "";

      const thatYear = new Date(blogs.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { "weekday": "long" }); // Monday
      let month = thatYear.toLocaleString('en-us', { month: 'long' }); /* June */
      let date = thatYear.getDate() /* 9 */


      const str = blogs.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 45).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="journalImg">
            <img src=${base_url+"/"+blogs.image} alt="">
        </div>
      </div>
      <div class="col-lg-1"></div>
 
    <div class="jurnalText">
     <div class="textLeft">
        <h4>${blogs.title}</h4>
        <h5>${blogs.cat_name}</h5>
     </div>
     <div class="textRight">
        <h4>${day}, ${month} ${date}, ${year}</h4>
     </div>
  </div>
  <p>${blogs.description}</p>
      `;
  document.getElementById("blogs").innerHTML = htmlText;
  
};

//function to set references
referenceRender = (references) => {
  var length = references.length;
  if(length===0){
    document.getElementById("referenceSection").style.display= "none";
  }

  let htmlText = "";
  references.map((referenceData)=>{
      htmlText += `
      <div class="col-lg-12">
      <div class="reffernce_wrap">
           <div class="reffernce_img">
              <img src="images/profileMAn.png" alt="">
           </div>
           <div class="reffernce_text">
               <h4>${referenceData.name}</h4>
               <h5>${referenceData.email}</h5>
           </div>
      </div>
  </div>
      `;
     });
  document.getElementById("referencesData").innerHTML = htmlText;
};


//function to set the whole ui
render = (data) => {
  aboutRender(data.about);
  verifiedCardRender(data.microsites_verified_card);
  profileVideoRender(data.profile_video);
  myphotosRender(data.profile_images);
  workExperienceRender(data.experiences);
  skillRender(data.subskills);
  educationsRender(data.educations);
  serviceRender(data.services);
  languageRender(data.languages);
  portfolioRender(data.portfolios);
  awardRender(data.awards);
//   interestRender(data.interests);
  clientRender(data.clients);
 blogRender(data.blogs);
 referenceRender(data.references);
};


//Fetch api
var url = document.URL;
let usrnm = url.split('/'); 
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
    console.log(data);
    render(data);
  });


//http://icircles.app/api/profile/usermicrosite/jewel