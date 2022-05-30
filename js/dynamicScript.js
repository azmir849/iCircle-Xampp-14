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
  console.log(strShort.length);
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
  if(length===0){
    document.getElementById("servicesDiv").style.display= "none";
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");

    htmlText += ` 
    <div  class="col-md-4 animate-box">
    <a class="card1" href="#">
      <h3 class="mt-5 font-weight-bold">${serviceData.service_name}</h3>
      <p class="small cardShortDes">${shortDescription}  ...</p>
      <div class="go-corner" href="#">
        <div class="go-arrow">
        <i class="${serviceData.fa_class}"></i>
        </div>
      </div>
      </a>
  </div>
    `;
  });
  document.getElementById("servicesData").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if(length===0){
    document.getElementById("languageDiv").style.display= "none";
  }


  let htmlText = "";
  languages.map((languages) => {
    htmlText += `
    <div class="col p-0 mt-5 languageTriangle animate-box">
		  <h2>${languages.title}</h2>
		  <img src="./images/triangle.png" alt="" style="width:200px;">
		  <div class="centered">${languages.level}</div>
		</div>  
    `;
  });
  document.getElementById("languageSectionData").innerHTML = htmlText;
};

//function to set portfolio
portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if(length===0){
    document.getElementById("portfolioDiv").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(portfolios);
  keys.map((key, index) => {
    portfolios[key].map((item, index) => {
    htmlText +=`
    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
    <div class="portfolio-entry">
      <a href="" class="portfolio-img"><img src="${base_url + "/" + item.image}" height="90%" width="90%"
          class="img-responsive" alt=""></a>
    </div>
  </div>
    `;
  })
});

  document.getElementById("portfolioData").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if(length===0){
    document.getElementById("awardDiv").style.display= "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");
    htmlText += `
    <div class="col-md-5 col-sm-12 m-5 animate-box" data-animate-effect="fadeInLeft">
				<div class="card awardsCard">
					<div class="card-body">
						<img src="images/award.png" height="10%" width="10%"class="img-responsive" alt="">
						<h2 class="card-title ml-5 mt-4">${awardData.title} - ${year}</h2>
						<p class="card-text ml-5">${shortDescription} ...</p>
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
  if(length===0){
    document.getElementById("clientDiv").style.display= "none";
  }

  let htmlText = "";
  clients.map((clientData)=>{
     if(clientData.image==null){
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <h2 class="mt-3">${clientData.client_name}</h2>
        </div>
      </div>
      `
     }else if(clientData.image!=null ){
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <img src="https://icircles.app/uploads/user/${username}/${clientData.image}" height="135px" width="135px" class="" alt="">
          <h2 class="mt-3">${clientData.client_name}</h2>
        </div>
      </div>
      `
     }
  });
  document.getElementById("clientSectionData").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if(length===0){
    document.getElementById("blogDiv").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(blogs);
  keys.map((key) => {
    blogs[key].map((item) => {
      const thatYear = new Date(item.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { "weekday": "long" }); // Monday
      let month = thatYear.toLocaleString('en-us', { month: 'long' }); /* June */
      let date = thatYear.getDate() /* 9 */


      const str = item.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 45).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div  class="row mb-5 list-element">
           <div class="col-md-1"></div>
							<div class="col-md-10 journalCard">
								<div class="row">
									<div class="col-md-4">
										<img class="blogImgInText" src=${base_url + "/" + item.image} style="border-radius: 5px;" height="100%" width="100%" class="" alt="">
									</div>
									<div class="col-md-8 journalRightText">
										<h2>${item.title}</h2>
										<p class="jounalDate">${day},${month} ${date},${year}</p>
										<p class="blogText">${shortDescription}</p>
									</div>
								</div>
								<p class="journalBodyText">${longtDescription}</p>
							</div>
							<div class="col-md-1"></div>
        </div>
      `;
    });
  });
  document.getElementById("journalSectionData").innerHTML = htmlText;
  
};

//function to set references
referenceRender = (references) => {
  var length = references.length;
  if(length===0){
    document.getElementById("referenceDiv").style.display= "none";
  }

  let htmlText = "";
  references.map((referenceData)=>{
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
				<div class="clientCardElements text-center">
					<img src="images/client1.png" height="135px" width="135px" class="" alt="">
					<h2 class="mt-3">${referenceData.name}</h2>
					<p class="">${referenceData.email}</p>
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
//   serviceRender(data.services);
//   languageRender(data.languages);
//   portfolioRender(data.portfolios);
//   awardRender(data.awards);
//   interestRender(data.interests);
//   clientRender(data.clients);
//   blogRender(data.blogs);
//   referenceRender(data.references);
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

//Get dynamic aside ul list
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
  
    //Get all the field length
    const experienceLength = data.experiences.length;
    const subskillsLength = data.subskills.length;
    console.log(subskillsLength);
    const servicesLength = data.services.length;
    const educationsLength = data.educations.length;
    const languagesLength = data.languages.length;
    const referencesLength = data.references.length;
    const clientsLength = data.clients.length;
    const interestsLength = data.interests.length;
    const awardsLength = data.awards.length;
    const portfoliosLength = Object.keys(data.portfolios).length;
    const blogsLength = Object.keys(data.blogs).length;
    const testimonialsLength = data.testimonials.length;

    let asideUl = ``;
    if (data.user_id) {
      asideUl += `
      <li><a href="#johnDoe-hero" data-nav-section="home">Home</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#aboutDiv" data-nav-section="about">About</a></li>
        `;
    }
    if (experienceLength>=1) {
      asideUl += `
      <li><a href="#experienceDiv" data-nav-section="experience">Experience</a></li>
        `;
    }
    if (subskillsLength>=1) {
      asideUl += `
      <li><a href="#skillsDiv" data-nav-section="skills">Skills</a></li>
        `;
    }
    if (educationsLength>=1) {
      asideUl += `
      <li><a href="#educationDiv" data-nav-section="education">Education</a></li>
        `;
    }
    if (servicesLength>=1) {
      asideUl += `
    	<li><a href="#servicesDiv" data-nav-section="service">Services</a></li>
        `;
    }
    if (languagesLength>=1) {
      asideUl += `
      <li><a href="#languageDiv" data-nav-section="language">Languages</a></li>
        `;
    }
    if (portfoliosLength>=1) {
      asideUl += `
      <li><a href="#portfolioDiv" data-nav-section="portfolio">Portfolio</a></li>
        `;
    }
    if (awardsLength>=1) {
      asideUl += `
      <li><a href="#awardDiv" data-nav-section="awards">Awards</a></li>
        `;
    }
    if (interestsLength>=1) {
      asideUl += `
      <li><a href="#interestDiv" data-nav-section="interests">Interests</a></li>
        `;
    }
    if (clientsLength>=1) {
      asideUl += `
      <li><a href="#clientDiv" data-nav-section="clients">Clients</a></li>
        `;
    }
    if (blogsLength>=1) {
      asideUl += `
      <li><a href="#blogDiv" data-nav-section="journal">Journal</a></li>
        `;
    }
    if (referencesLength>=1) {
      asideUl += `
      <li><a href="#referenceDiv" data-nav-section="reference">References</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#appointmentDiv" data-nav-section="appoinment">Appointment</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li id="lastlI"><a href="#contactDiv" data-nav-section="contact">Contact</a></li>
        `;
    }


    document.getElementById("").innerHTML = asideUl;

//For testing
  //   const keys = Object.keys(data);
  //   console.log(keys);
  //   console.log("field name" +keys[1]);
  //   var length = data.microsites.length;
  //   var length2 = data.experiences.length;
  //   console.log("fileld length "+length);
  //   console.log("experiences fileld length "+length2);

  // if(data.user_id){
  //   alert("User ID is "+ data.user_id);
  // }

  //   if(keys[1]==="username"){
  //     alert("Username is "+ data.username);
  //   }else{
  //     alert("Username not found");
  //   }
  });


