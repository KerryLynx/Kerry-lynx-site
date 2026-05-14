const form = document.querySelector(".booking-form");

if (form) {
  form.addEventListener("submit", function(e) {
    const name = form.querySelector("input[name='name']").value;
    const email = form.querySelector("input[name='email']").value;
    const message = form.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all required fields.");
      return;
    }

    alert("Booking sent successfully! We will contact you soon.");
  });
}const urlParams = new URLSearchParams(window.location.search);
const selectedPlan = urlParams.get("plan");

if (selectedPlan) {
  const select = document.querySelector("select[name='service']");
  if (select) {
    select.value = selectedPlan;
  }
}

const dateInput = document.querySelector(".calendar-input");

if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}

const timeCards = document.querySelectorAll(".time-card");

timeCards.forEach(card => {
  const input = card.querySelector("input");

  input.addEventListener("change", () => {
    timeCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

const form = document.querySelector(".booking-form");

if (form) {
  form.addEventListener("submit", function () {

    // plan from URL
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get("plan");

    // selected date
    const dateInput = document.querySelector("input[type='date']");
    const date = dateInput ? dateInput.value : "";

    // selected time
    const time = document.querySelector("input[name='time']:checked");

    // put values into hidden inputs
    document.getElementById("plan-field").value = plan || "";
    document.getElementById("date-field").value = date || "";
    document.getElementById("time-field").value = time ? time.value : "";
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active class
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.innerText.toLowerCase();

    projects.forEach(project => {
      const text = project.innerText.toLowerCase();

      if (filter === "all projects") {
        project.style.display = "block";
      } 
      else if (text.includes(filter.replace(" ", ""))) {
        project.style.display = "block";
      } 
      else {
        project.style.display = "none";
      }
    });

  });
});

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {

    const img = card.querySelector("img").src;
    const title = card.querySelector("h3")?.innerText || "Project";
    const desc = card.querySelector("p")?.innerText || "No description";

    modalImg.src = img;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const orderBtn = document.getElementById("orderBtn");

let selectedService = "";

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {

    selectedService = card.getAttribute("data-service");

    const img = card.querySelector("img").src;
    const title = card.querySelector("h3")?.innerText || "Project";
    const desc = card.querySelector("p")?.innerText || "No description";

    modalImg.src = img;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    modal.style.display = "flex";
  });
});

orderBtn.addEventListener("click", () => {
  window.location.href = `booking.html?service=${encodeURIComponent(selectedService)}`;
});

const urlParams = new URLSearchParams(window.location.search);
const service = urlParams.get("service");

if (service) {
  const serviceInput = document.querySelector("input[name='service']");
  if (serviceInput) {
    serviceInput.value = service;
  }
}