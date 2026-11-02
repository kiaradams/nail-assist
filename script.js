/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


// Nail Assist welcome button
const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", function () {
        welcomeMessage.hidden = false;
        welcomeButton.textContent = "Welcome to Nail Assist!";
    });
}

// Nail Assist service search
const serviceSearch = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");
const searchMessage = document.getElementById("searchMessage");

if (serviceSearch) {
    serviceSearch.addEventListener("input", function () {
        const searchText = serviceSearch.value.toLowerCase().trim();
        let found = 0;

        serviceCards.forEach(function (card) {
            const serviceName = card.textContent.toLowerCase();

            if (serviceName.includes(searchText)) {
                card.style.display = "";
                found++;
            } else {
                card.style.display = "none";
            }
        });

        if (searchText === "") {
            searchMessage.textContent = "Showing all services.";
        } else if (found > 0) {
            searchMessage.textContent = found + " service(s) found.";
        } else {
            searchMessage.textContent = "No services found. Try another search.";
        }
    });
}

// Show and hide service information
const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const details = button.nextElementSibling;

        details.hidden = !details.hidden;

        if (details.hidden) {
            button.textContent = "More Information";
        } else {
            button.textContent = "Show Less";
        }
    });
});

// Nail Assist enquiry form validation
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const selectedService =
            document.getElementById("service").value;

        const prices = {
            "Manicure": "R180",
            "Pedicure": "R250",
            "Nail Art": "R150",
            "Gel Nails": "R300",
            "Acrylic Nails": "R350",
            "Nail Repair": "R80 per nail"
        };

        const response =
            document.getElementById("enquiryResponse");

        response.textContent =
            "Thank you for your enquiry about " +
            selectedService + ". The listed price is " +
            prices[selectedService] +
            ". Nail Assist will follow up with you about availability.";

        enquiryForm.reset();
    });
}

// Nail Assist contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name =
            document.getElementById("contactName").value;

        const email =
            document.getElementById("contactEmail").value;

        const type =
            document.getElementById("messageType").value;

        const message =
            document.getElementById("contactMessage").value;

        const subject = encodeURIComponent(
            "Nail Assist - " + type
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage Type: " + type +
            "\n\nMessage: " + message
        );

        window.location.href =
            "mailto:nailassist@example.com?subject=" +
            subject + "&body=" + body;
    });
}

