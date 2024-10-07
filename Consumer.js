function linkMenuBtn(){
  const linkMenu = document.getElementById('linkMenu');

  linkMenu.classList.toggle("linkMenuToggle")
}
function mobileDashboardBtn(){
  const dashBoard = document.getElementById('ConsumerDashBoard');

  dashBoard.classList.toggle("dashBoardToggle")
  // dashBoard.style.display = "block"
}
function setting(){
  const settingSection = document.getElementById('settingSection');
  const mainGrid = document.getElementById('mainGrid');
  const footer = document.getElementById('footer');

  settingSection.classList.toggle("settingToggle")
  mainGrid.classList.toggle("mainGridToggle")
  footer.classList.toggle("footerToggle")
  // dashBoard.style.display = "block"
}





 const collapsibles = document.querySelectorAll('.collapsible');
        collapsibles.forEach((collapsible) => {
            collapsible.addEventListener('click', () => {
                collapsible.classList.toggle('active');
                const content = collapsible.nextElementSibling;
                content.classList.toggle('preshown');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });


        







// ............................................
function Packages() {
  const Packages_Items = {
    
      Paracetamol: {
        DrugName: "Paracetamol",
        DrugDescription: "Used for pain relief and fever reduction.",
        DrugImage: "./Assets/Images/paracetamol.jpg",
        ActiveIngredient: "Paracetamol",
        Dosage: "1-2 tablets every 4-6 hours",
        DosageForm: "Tablet",
        DosageInstruction: "Do not exceed 8 tablets in 24 hours.",
        Contraindications: "Liver disease, Alcohol consumption",
        Warnings: "Overdose can cause liver damage",
        SideEffects: "Nausea, Allergic reactions",
        Interactions: "Alcohol, Anticoagulants",
        Storage: "Store at room temperature.",
        Handling: "Handle with clean, dry hands.",
        Pregnancy: "Safe for use during pregnancy",
        Lactation: "Safe for use during breastfeeding",
        ExpiryDate: "12/12/2025",
        ManufacturerName: "Emzor Pharmaceuticals",
        ManufacturingDate: "10/12/2022",
        CompanyName: "Emzor",
        CompanyEmail: "info@emzor.com",
        Star: "5M",
        Report: "0",
        Views: "10M"
      },
      Amoxicillin:{
        DrugName: "Amoxicillin",
        DrugDescription: "An antibiotic used to treat bacterial infections.",
        DrugImage: "./Assets/Images/Amoxicillin.jpg",
        ActiveIngredient: "Amoxicillin",
        Dosage: "500 mg every 8 hours",
        DosageForm: "Capsule",
        DosageInstruction: "Complete the full course of antibiotics.",
        Contraindications: "Allergy to penicillin",
        Warnings: "May reduce the efficacy of birth control pills",
        SideEffects: "Diarrhea, Nausea",
        Interactions: "Methotrexate, Warfarin",
        Storage: "Store in a cool, dry place.",
        Handling: "Do not open the capsule.",
        Pregnancy: "Generally considered safe during pregnancy",
        Lactation: "Safe for use during breastfeeding",
        ExpiryDate: "01/11/2024",
        ManufacturerName: "Swiss Pharma",
        ManufacturingDate: "05/12/2022",
        CompanyName: "Swiss Pharma Nigeria",
        CompanyEmail: "info@swipha.com",
        Star: "4M",
        Report: "0",
        Views: "8M"
      },
      Ibuprofen :{
        DrugName: "Ibuprofen",
        DrugDescription: "Anti-inflammatory used for pain, swelling, and fever.",
        DrugImage: "./Assets/Images/Ibuprofen.jpg",
        ActiveIngredient: "Ibuprofen",
        Dosage: "200-400 mg every 4-6 hours",
        DosageForm: "Tablet",
        DosageInstruction: "Do not exceed 1200 mg in 24 hours.",
        Contraindications: "Stomach ulcers, Kidney disease",
        Warnings: "Can cause stomach bleeding if overused",
        SideEffects: "Stomach upset, Dizziness",
        Interactions: "Blood thinners, Lithium",
        Storage: "Store at room temperature.",
        Handling: "Handle with care.",
        Pregnancy: "Not recommended during third trimester",
        Lactation: "Safe for short-term use",
        ExpiryDate: "02/03/2025",
        ManufacturerName: "Orange Drugs",
        ManufacturingDate: "15/07/2023",
        CompanyName: "Orange Drugs Ltd.",
        CompanyEmail: "support@orangedrugs.com",
        Star: "7M",
        Report: "0",
        Views: "12M"
      },
      loratadine : {
        DrugName: "Loratadine",
        DrugDescription: "An antihistamine used for allergy relief.",
        DrugImage: "./Assets/Images/loratadine.jpg",
        ActiveIngredient: "Loratadine",
        Dosage: "10 mg once daily",
        DosageForm: "Tablet",
        DosageInstruction: "Take with or without food.",
        Contraindications: "Severe liver impairment",
        Warnings: "May cause drowsiness",
        SideEffects: "Headache, Fatigue",
        Interactions: "Alcohol, CNS depressants",
        Storage: "Store below 30°C.",
        Handling: "Handle with clean hands.",
        Pregnancy: "Safe for use during pregnancy",
        Lactation: "Consult a doctor before use",
        ExpiryDate: "05/10/2025",
        ManufacturerName: "Pfizer Nigeria",
        ManufacturingDate: "02/08/2023",
        CompanyName: "Pfizer",
        CompanyEmail: "info@pfizer.com",
        Star: "3M",
        Report: "0",
        Views: "9M"
      },
      Amlodipine :{
        DrugName: "Amlodipine",
        DrugDescription: "Used to treat high blood pressure and chest pain.",
        DrugImage: "./Assets/Images/Amlodipine.png",
        ActiveIngredient: "Amlodipine",
        Dosage: "5-10 mg once daily",
        DosageForm: "Tablet",
        DosageInstruction: "Take at the same time each day.",
        Contraindications: "Severe hypotension, Liver disease",
        Warnings: "May cause swelling in the ankles or feet",
        SideEffects: "Dizziness, Fatigue",
        Interactions: "Grapefruit juice, Simvastatin",
        Storage: "Store at room temperature.",
        Handling: "Handle with clean hands.",
        Pregnancy: "Consult your doctor",
        Lactation: "Not recommended unless prescribed",
        ExpiryDate: "18/04/2024",
        ManufacturerName: "GlaxoSmithKline",
        ManufacturingDate: "10/10/2022",
        CompanyName: "GSK Nigeria",
        CompanyEmail: "info@gsk.com",
        Star: "6M",
        Report: "0",
        Views: "11M"
      },
      Metformin: {
        DrugName: "Metformin",
        DrugDescription: "Used to control blood sugar levels in type 2 diabetes.",
        DrugImage: "./Assets/Images/Metformin.jpg",
        ActiveIngredient: "Metformin",
        Dosage: "500 mg twice daily",
        DosageForm: "Tablet",
        DosageInstruction: "Take with meals to reduce stomach upset.",
        Contraindications: "Kidney disease, Heart failure",
        Warnings: "Can cause lactic acidosis in rare cases",
        SideEffects: "Diarrhea, Nausea",
        Interactions: "Alcohol, Cimetidine",
        Storage: "Store at room temperature.",
        Handling: "Handle with dry hands.",
        Pregnancy: "Consult your doctor",
        Lactation: "Consult your doctor",
        ExpiryDate: "30/06/2024",
        ManufacturerName: "Biogaran Nigeria",
        ManufacturingDate: "20/11/2022",
        CompanyName: "Biogaran",
        CompanyEmail: "contact@biogaran.com",
        Star: "5M",
        Report: "0",
        Views: "9M"
      },
      
    
    
    
  };
// .................................................
  Object.keys(Packages_Items).forEach((Drugs) => {
    const Packages_Container = document.getElementById("Packages");

    Packages_Container.innerHTML += `
        <div class="pkg" id="pkg">
            <div class="drugsStart">
            <img src="${Packages_Items[Drugs].DrugImage}" alt="Package Image">
            <div class="DrugName_sub_Cnt">
            <p class="DashBoard_DrugName" id="DrugName">${Packages_Items[Drugs].DrugName}</p>
            <p class="subCompanyName">${Packages_Items[Drugs].CompanyName}</p>
            </div>
          </div>
            <p class="DashBoard_DrugDate">${Packages_Items[Drugs].ManufacturingDate}</p>

          <div class="More_Drugs_Hidden_Details">
            <p class="DrugDescription">${Packages_Items[Drugs].DrugDescription}</p>
            <p class="ActiveIngredient">${Packages_Items[Drugs].ActiveIngredient}</p>
            <p class="Dosage">${Packages_Items[Drugs].Dosage}</p>

            <p class="DosageForm">${Packages_Items[Drugs].DosageForm}</p>
            <p class="DosageInstruction">${Packages_Items[Drugs].DosageInstruction}</p>
            <p class="Contraindications">${Packages_Items[Drugs].Contraindications}</p>
            <p class="Warnings">${Packages_Items[Drugs].Warnings}</p>
            <p class="SideEffects">${Packages_Items[Drugs].SideEffects}</p>
            <p class="interactions">${Packages_Items[Drugs].Interactions}</p>
            <p class="Storage">${Packages_Items[Drugs].Storage}</p>
            <p class="Handling">${Packages_Items[Drugs].Handling}</p>
            <p class="Pregnancy">${Packages_Items[Drugs].Pregnancy}</p>
            <p class="Lactation">${Packages_Items[Drugs].Lactation}</p>
            <p class="ExpiryDate">${Packages_Items[Drugs].ExpiryDate}</p>
            <p class="ManufacturerName">${Packages_Items[Drugs].ManufacturerName}</p>
             <p class="CompanyEmail">${Packages_Items[Drugs].CompanyEmail}</p>
            <p class="Star">${Packages_Items[Drugs].Star}</p>
            <p class="Reports">${Packages_Items[Drugs].Report}</p>
            <p class="Views">${Packages_Items[Drugs].Views}</p>
            
          </div>
          </div>
    `;
 
  });
}

Packages();
// .........................................................
function Side_SearchDrugs() {
  const Side_SearchDrugs = document.getElementById("SideSearchDrugsInput");
  Side_SearchDrugs.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const DrugName = document.querySelectorAll("#DrugName");
    DrugName.forEach((drugs) => {
      if (drugs.innerHTML.toLowerCase().includes(value)) {
        // console.log('Exist')
        drugs.parentElement.parentElement.parentElement.classList.remove(
          "hide"
        );
      } else {
        drugs.parentElement.parentElement.parentElement.classList.add("hide");
      }
    });
  });
}
Side_SearchDrugs();
// .........................................................
function Drug_details() {

  const pkg = document.querySelectorAll("#pkg");

  pkg.forEach((pkgs) => {
    pkgs.addEventListener("click", () => {


      const PackageInfo = document.getElementById('PackageInfo');
      const AuthenticateDrugs = document.getElementById('AuthenticateDrugs');

      PackageInfo.style.display = 'block';
      AuthenticateDrugs.style.display = 'none';
  
      const packageCancel = document.getElementById('packageCancel');

      packageCancel.addEventListener('click', () => {
       PackageInfo.style.display = 'none'
       AuthenticateDrugs.style.display = 'block'
      })


      const DrugImage = pkgs.children[0].children[0].outerHTML;
      console.log(DrugImage)
      const DrugName = pkgs.children[0].children[1].children[0].innerHTML;
      const CompanyName = pkgs.children[0].children[1].children[1].innerHTML;
      const ManufacturingDate = pkgs.children[1].innerHTML;
      // ...............................
      const DrugDescription = pkgs.children[2].children[0].innerHTML;
      const ActiveIngredient = pkgs.children[2].children[1].innerHTML;
     const Dosage = pkgs.children[2].children[2].innerHTML;
      const DosageForm = pkgs.children[2].children[3].innerHTML;
      const DosageInstruction = pkgs.children[2].children[4].innerHTML;
      const Contraindications = pkgs.children[2].children[5].innerHTML;
      const Warnings = pkgs.children[2].children[6].innerHTML;
      const SideEffects = pkgs.children[2].children[7].innerHTML;
      const interactions = pkgs.children[2].children[8].innerHTML;
      const Storage = pkgs.children[2].children[9].innerHTML;
      const Handling = pkgs.children[2].children[10].innerHTML;
      const Pregnancy = pkgs.children[2].children[11].innerHTML;
      const Lactation = pkgs.children[2].children[12].innerHTML;
      const ExpiryDate = pkgs.children[2].children[13].innerHTML;
      const ManufacturerName = pkgs.children[2].children[14].innerHTML;
      const CompanyEmail = pkgs.children[2].children[15].innerHTML;
      const Star = pkgs.children[2].children[16].innerHTML;
      const Report = pkgs.children[2].children[17].innerHTML;
      const Views = pkgs.children[2].children[18].innerHTML;
      // ...............................
      // console.log('Drug Name: '+DrugName);
      // console.log('Company Name: '+CompanyName);
      // console.log('Manufacturing Date: '+ManufacturingDate);

      // console.log('Drug Description: '+DrugDescription);
      // console.log('Active Ingredient: '+ActiveIngredient);
      // console.log('Dosage: '+Dosage);
      // console.log('Dosage Form: '+DosageForm);
      // console.log('Dosage Instruction: '+DosageInstruction);
      // console.log('Contraindictions: '+Contraindications);
      // console.log('Warnings: '+Warnings);
      // console.log('Side Effects: '+SideEffects);
      // console.log('interactions: '+interactions);
      // console.log('Storage: '+Storage);
      // console.log('Handling: '+Handling);
      // console.log('Pregnancy: '+Pregnancy);
      // console.log('Lactation: '+Lactation);
      // console.log('Expiring Date: '+ExpiryDate);
      // console.log('Manufacturer Name: '+ManufacturerName);
      // console.log('Company Email: '+CompanyEmail);
      // console.log('Company Star: '+Star);
      // console.log('Company Report: '+Report);
      // console.log('Company view: '+Views);
      
      

const packageProfile = document.getElementById("packageProfile");

packageProfile.innerHTML = `

 <div class="profileHead">
              <div class="profilePic" id="profilePic">${DrugImage}</div>
              <div class="profileDescription">
                <p class="productName">${DrugName}</p>
                <p class="description">${DrugDescription}</p>
              </div>
            </div>



             
<div class="profileContent">


   <div class="packageCards">
    <div class="Cards">
      <div class="cardNav">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star starSvg" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
        </svg>
        <p>${Star}</p>
      </div>
      <div class="cardText">
        <p>no of star</p>
      </div>
    </div>



    <div class="Cards">
      <div class="cardNav">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle reportSvg" viewBox="0 0 16 16">
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
          <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
        </svg>
        <p>${Report}</p>
      </div>
      <div class="cardText">
        <p>reports</p>
      </div>
    </div>




    <div class="Cards">
      <div class="cardNav">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye viewSvg" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
        </svg>
        <p>${Views}</p>
      </div>
      <div class="cardText">
        <p>views</p>
      </div>
    </div>
 
  </div>

<div class="reportStatus">
<p class="GraphSubText">status</p>
<div class="statusGraph likeGraph"></div>


</div>



  <p class="moreDetailText">more details</p>
  <div class="packageDetails">
    <div class="details"><p class="detailSubText">manufacturer name</p> <p class="detailText">${ManufacturerName}</p></div>
    <div class="details"><p class="detailSubText">company name</p> <p class="detailText">${CompanyName}</p></div>
    <div class="details"><p class="detailSubText">company email</p> <p class="detailText"> ${CompanyEmail}</p></div>
    <div class="details"><p class="detailSubText">active ingredient</p> <p class="detailText"> ${ActiveIngredient}</p></div>
   
    <div class="details"><p class="detailSubText">dosage</p> <p class="detailText"> ${Dosage}</p></div>
    <div class="details"><p class="detailSubText">dosageform</p> <p class="detailText"> ${DosageForm}</p></div>
    <div class="details"><p class="detailSubText">dosage instruction</p> <p class="detailText"> ${DosageInstruction}</p></div>
    <div class="details"><p class="detailSubText">contraindiction</p> <p class="detailText"> ${Contraindications}</p></div>
    <div class="details"><p class="detailSubText">warning</p> <p class="detailText"> ${Warnings}</p></div>
    <div class="details"><p class="detailSubText">side effects</p> <p class="detailText"> ${SideEffects}</p></div>
    <div class="details"><p class="detailSubText">interactions</p> <p class="detailText"> ${interactions}</p></div>
    <div class="details"><p class="detailSubText">storage</p> <p class="detailText"> ${Storage}</p></div>
    <div class="details"><p class="detailSubText">Handling</p> <p class="detailText"> ${Handling}</p></div>
    <div class="details"><p class="detailSubText">Pregnancy</p> <p class="detailText"> ${Pregnancy}</p></div>
    <div class="details"><p class="detailSubText">lactation</p> <p class="detailText"> ${Lactation}</p></div>
    <div class="details"><p class="detailSubText">manufacturing</p> <p class="detailText"> ${ManufacturingDate}</p></div>
    <div class="details"><p class="detailSubText">expiry date</p> <p class="detailText"> ${ExpiryDate}</p></div>
  </div>
   <div class="comment-container">
        <h3>Comment</h3>
        <textarea class="comment-input" rows="4" placeholder="Leave your comment here..."></textarea>
        <button class="comment-submit" id="submitComment" onclick="submitComment()">Submit Comment</button>
        
        <div class="success-message" id="successMessage">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 17.27l6.18-6.18 1.41 1.41L12 20.09l-7.59-7.59 1.41-1.41z"/>
            </svg>
            Comment submitted successfully!
        </div>
        <div class="error-message" id="errorMessage">
            <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2v-2zm0-15h2v13h-2V4z"/>
            </svg>
            Please enter a comment before submitting.
        </div>
    </div>
     
</div>

`


    });
  });
}

Drug_details()

function submitComment() {
  const commentInput = document.querySelector('.comment-input');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  // Reset messages
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  // Simulate comment submission (you can replace this with actual logic)
  if (commentInput.value.trim() !== '') {
      // Reset the textarea
      commentInput.value = '';
      // Show success message
      successMessage.style.display = 'block';

      // Hide the success message after 3 seconds
      setTimeout(() => {
          successMessage.style.display = 'none';
      }, 3000);
  } else {
      // Show error message
      errorMessage.style.display = 'block';
  }
  
};
// .........................................................

function carousel() {

  document.addEventListener('DOMContentLoaded', function () {
      const carouselElems = document.querySelectorAll('.carousel');
      const carouselInstances = M.Carousel.init(carouselElems, {
          dist: -50,  // Reduces the distance between items
          shift: -50,  // Shifts items sideways
          padding: 200, // Creates space around the active item
          numVisible: 3,  // Number of visible items
          fullWidth: false,  // Not full width, allowing 3D effect
          indicators: false  // No indicators for a cleaner look
      });
  
      const instance = carouselInstances[0];
  
      // Previous button functionality
      document.getElementById('prevBtn').addEventListener('click', function () {
          instance.prev();
      });
  
      // Next button functionality
      document.getElementById('nextBtn').addEventListener('click', function () {
          instance.next();
      });
  });
  
  }
  carousel()




  function scanBarcode() {

    document.addEventListener('DOMContentLoaded', () => {
      const openCameraBtn = document.getElementById('openCameraBtn');
      const video = document.getElementById('cameraStream');
  
      // Check if the browser supports the mediaDevices API
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          openCameraBtn.addEventListener('click', () => {
              navigator.mediaDevices.getUserMedia({ video: true })
                  .then(stream => {
                      // Display the video stream in the video element
                      video.srcObject = stream;
                      video.style.display = 'block'; // Show the video element
                      console.log('Camera stream opened successfully');
                  })
                  .catch(error => {
                      console.error('Error accessing the camera: ', error);
                      alert('Unable to access the camera: ' + error.message);
                  });
          });
      } else {
          alert('getUserMedia API is not supported in this browser.');
          console.error('getUserMedia API is not supported in this browser.');
      }
  });
  }  
  scanBarcode()

  function checkDrugName(){
  // Drug data
const drugs = {
  Paracetamol: {
      DrugName: "Paracetamol",
      Status: "Real"
  },
  Amoxicillin: {
      DrugName: "Amoxicillin",
      Status: "Real"
  },
  Ibuprofen: {
      DrugName: "Ibuprofen",
      Status: "Fake"
  },
  Loratadine: {
      DrugName: "Loratadine",
      Status: "Not Registered"
  },
  Amlodipine: {
      DrugName: "Amlodipine",
      Status: "Real"
  },
  Metformin: {
      DrugName: "Metformin",
      Status: "Real"
  },
  // Add more drugs as needed...
};

// Get elements from the DOM
const showDrugFormBtn = document.getElementById('showDrugFormBtn');
const drugFormContainer = document.getElementById('drugFormContainer');
const enterDrugBtn = document.getElementById('enterDrugBtn');
const drugInput = document.getElementById('drugInput');
const drugResultDiv = document.getElementById('drugResultDiv');
const loadingMessage = document.getElementById('loadingMessage');

// Show form when the button is clicked
showDrugFormBtn.addEventListener('click', () => {
  drugFormContainer.classList.remove('drugCheckerHidden'); // Show the form
});

// Event listener for enter button click
enterDrugBtn.addEventListener('click', () => {
  const drugName = drugInput.value.trim().toLowerCase(); // Convert input to lowercase for case-insensitive match
  loadingMessage.classList.remove('drugCheckerHidden'); // Show loading message
  drugResultDiv.classList.add('drugCheckerHidden'); // Hide result initially

  // Simulate a loading delay (for demonstration purposes)
  setTimeout(() => {
      const foundDrug = Object.values(drugs).find(drug => drug.DrugName.toLowerCase() === drugName);

      // Hide loading message
      loadingMessage.classList.add('drugCheckerHidden');

      // Display result based on whether the drug was found or not
      if (foundDrug) {
          drugResultDiv.innerHTML = `
              <div class="drugCheckerResultBox">
                  <h4>Drug Information</h4>
                  <p><strong>Drug Name:</strong> ${foundDrug.DrugName}</p>
                  <p><strong>Status:</strong> ${foundDrug.Status}</p>
              </div>`;
      } else {
          drugResultDiv.innerHTML = `<p class="drugCheckerError">Drug not found. Please check the name and try again.</p>`;
      }
      
      drugResultDiv.classList.remove('drugCheckerHidden'); // Show the result
  }, 1000); // Adjust the delay (in milliseconds) for the loading effect
});

// Ensure the drugResultDiv and loading message are hidden initially
drugResultDiv.classList.add('drugCheckerHidden');
loadingMessage.classList.add('drugCheckerHidden');

  
}

  checkDrugName()

  function checkDrugBatch(){
    // Batch data
const batches = {
  "BATCH123": {
      DrugName: "Paracetamol",
      Status: "Real"
  },
  "BATCH456": {
      DrugName: "Amoxicillin",
      Status: "Real"
  },
  "BATCH789": {
      DrugName: "Ibuprofen",
      Status: "Fake"
  },
  "BATCH000": {
      DrugName: "Loratadine",
      Status: "Not Registered"
  },
  "BATCH111": {
      DrugName: "Amlodipine",
      Status: "Real"
  },
  "BATCH222": {
      DrugName: "Metformin",
      Status: "Real"
  },
  // Add more batches as needed...
};

// Get elements from the DOM
const showBatchFormBtn = document.getElementById('showBatchFormBtn');
const batchFormContainer = document.getElementById('batchFormContainer');
const enterBatchBtn = document.getElementById('enterBatchBtn');
const batchInput = document.getElementById('batchInput');
const batchResultDiv = document.getElementById('batchResultDiv');
const loadingMessage = document.getElementById('loadingMessage');

// Show form when the button is clicked
showBatchFormBtn.addEventListener('click', () => {
  batchFormContainer.classList.remove('drugCheckerHidden'); // Show the form
});

// Event listener for enter button click
enterBatchBtn.addEventListener('click', () => {
  const batchNumber = batchInput.value.trim().toUpperCase(); // Convert input to uppercase for consistency
  loadingMessage.classList.remove('drugCheckerHidden'); // Show loading message
  batchResultDiv.classList.add('drugCheckerHidden'); // Hide result initially

  // Simulate a loading delay (for demonstration purposes)
  setTimeout(() => {
      const foundBatch = batches[batchNumber]; // Find the batch using the batch number

      // Hide loading message
      loadingMessage.classList.add('drugCheckerHidden');

      // Display result based on whether the batch was found or not
      if (foundBatch) {
          batchResultDiv.innerHTML = `
              <div class="drugCheckerResultBox">
                  <h4>Batch Information</h4>
                  <p><strong>Drug Name:</strong> ${foundBatch.DrugName}</p>
                  <p><strong>Status:</strong> ${foundBatch.Status}</p>
              </div>`;
      } else {
          batchResultDiv.innerHTML = `<p class="drugCheckerError">Batch not found. Please check the number and try again.</p>`;
      }
      
      batchResultDiv.classList.remove('drugCheckerHidden'); // Show the result
  }, 1000); // Adjust the delay (in milliseconds) for the loading effect
});

// Ensure the batchResultDiv and loading message are hidden initially
batchResultDiv.classList.add('drugCheckerHidden');
loadingMessage.classList.add('drugCheckerHidden');

  }

  checkDrugBatch()