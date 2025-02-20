function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error-message").forEach((error) => {
    error.style.display = "none";
  });

  const name = document.getElementById("name").value;
  if (!name.trim()) {
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  const message = document.getElementById("message").value;
  if (!message.trim()) {
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    event.target.reset();
  }

  return false;
}

const testimonials = [
  {
    content:
      "JoeTech transformed our business operations completely. Their AI integration saved us countless hours of manual work.",
    author: "Sarah Johnson",
    position: "CEO, InnovateCorp",
    image: "SJ",
  },
  {
    content:
      "The cloud migration service was seamless and their support team was exceptional throughout the process.",
    author: "Michael Chen",
    position: "CTO, TechStart",
    image: "MC",
  },
  {
    content:
      "Their digital strategy helped us increase our online presence and customer engagement significantly.",
    author: "Emma Williams",
    position: "Marketing Director, GrowthCo",
    image: "EW",
  },
  {
    content:
      "Outstanding service and remarkable results. Would highly recommend their AI solutions.",
    author: "David Miller",
    position: "Operations Manager, FutureTech",
    image: "DM",
  },
  {
    content:
      "The team's expertise in digital transformation is unmatched. They delivered beyond our expectations.",
    author: "Lisa Anderson",
    position: "CEO, NextGen Solutions",
    image: "LA",
  },
  {
    content:
      "Professional, innovative, and highly skilled team. They made our digital transition smooth and efficient.",
    author: "Robert Taylor",
    position: "IT Director, GlobalTech",
    image: "RT",
  },
];

function initTestimonials() {
  const grid = document.querySelector(".testimonials-grid");
  let currentIndex = 0;

  function createTestimonialCard(testimonial) {
    return `
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <p>${testimonial.content}</p>
                            <div class="testimonial-author">
                                <div class="author-image">
                                    <span>${testimonial.image}</span>
                                </div>
                                <div class="author-info">
                                    <h4>${testimonial.author}</h4>
                                    <p>${testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
  }

  function updateTestimonials() {
    grid.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      const card = createTestimonialCard(testimonials[index]);
      const div = document.createElement("div");
      div.innerHTML = card;
      div.firstElementChild.classList.add("active");
      grid.appendChild(div.firstElementChild);
    }
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  updateTestimonials();
  setInterval(updateTestimonials, 5000);
}

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTestimonials();
  initFAQ();
});
