/* ArunachalTourHub.com — site behaviour
   ------------------------------------------------------------------
   ONE PLACE TO EDIT YOUR CONTACT DETAILS.
   Change the three values below and every button on every page updates.
   WHATSAPP: country code + number, digits only, no + and no spaces.
   ------------------------------------------------------------------ */
window.ATH = {
  WHATSAPP: "918638226178",
  PHONE: "+91 86382 26178",
  EMAIL: "hello@arunachaltourhub.com"
};

(function () {
  "use strict";

  /* ---- mobile navigation ---- */
  var head = document.querySelector(".masthead");
  var toggle = document.querySelector(".navtoggle");

  if (toggle && head) {
    toggle.addEventListener("click", function () {
      var open = head.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".navtoggle-label").textContent = open ? "Close" : "Menu";
    });
  }

  /* ---- desktop dropdowns (click + keyboard, no hover trap) ---- */
  var subs = document.querySelectorAll(".has-sub");
  subs.forEach(function (item) {
    var btn = item.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var wasOpen = item.classList.contains("open");
      subs.forEach(function (o) {
        o.classList.remove("open");
        var b = o.querySelector("button");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    subs.forEach(function (o) {
      o.classList.remove("open");
      var b = o.querySelector("button");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    subs.forEach(function (o) { o.classList.remove("open"); });
    if (head) head.classList.remove("open");
  });

  /* ---- wire up every contact link from window.ATH ---- */
  var waBase = "https://wa.me/" + window.ATH.WHATSAPP;

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var msg = el.getAttribute("data-wa") || "Hi, I'd like to know more about your Arunachal tours.";
    el.setAttribute("href", waBase + "?text=" + encodeURIComponent(msg));
    el.setAttribute("rel", "noopener");
    el.setAttribute("target", "_blank");
  });

  document.querySelectorAll("[data-tel]").forEach(function (el) {
    el.setAttribute("href", "tel:" + window.ATH.PHONE.replace(/[^\d+]/g, ""));
    if (el.hasAttribute("data-tel-text")) el.textContent = window.ATH.PHONE;
  });

  document.querySelectorAll("[data-mail]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + window.ATH.EMAIL);
    if (el.hasAttribute("data-mail-text")) el.textContent = window.ATH.EMAIL;
  });

  /* ---- enquiry form -> WhatsApp ----
     GitHub Pages is static and cannot receive form posts, so the form
     composes a WhatsApp message instead. To use email forms later,
     point the <form> at Formspree/Basin and delete this block.        */
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (n) {
        var f = form.elements[n];
        return f && f.value ? f.value.trim() : "";
      };
      var lines = [
        "New Arunachal tour enquiry",
        "",
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Starting from: " + get("city"),
        "Trip: " + get("trip"),
        "Travel month: " + get("month"),
        "Travellers: " + get("pax"),
        "Notes: " + (get("message") || "-"),
        "",
        "Page: " + document.title
      ];
      window.open(waBase + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
      var ok = document.getElementById("form-status");
      if (ok) {
        ok.textContent = "WhatsApp is opening with your details. Press send and we'll reply with a plan and price.";
        ok.style.color = "#3E6B55";
      }
    });
  }

  /* ---- booking form -> WhatsApp ---- */
  var bform = document.getElementById("booking-form");
  if (bform) {
    bform.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (n) {
        var f = bform.elements[n];
        return f && f.value ? f.value.trim() : "";
      };
      var tripSelect = bform.elements["trip"];
      var tripLabel = tripSelect ? tripSelect.options[tripSelect.selectedIndex].text : "";
      var lines = [
        "BOOKING REQUEST",
        "",
        "Trip: " + tripLabel,
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Starting from: " + get("city"),
        "Preferred start date: " + (get("start") || "Not fixed yet"),
        "Adults: " + get("adults"),
        "Children: " + get("children"),
        "Notes: " + (get("notes") || "-"),
        "",
        "I've read the cancellation terms and understand this is a booking request subject to availability."
      ];
      window.open(waBase + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
      var bok = document.getElementById("booking-status");
      if (bok) {
        bok.textContent = "WhatsApp is opening with your booking request. We'll confirm availability and send a payment link for the advance.";
        bok.style.color = "#3E6B55";
      }
    });
  }

  /* ---- mark the current nav item ---- */
  var here = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav a, .sub a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    var path = new URL(href, location.href).pathname.replace(/index\.html$/, "");
    if (path === here && path !== "/") a.setAttribute("aria-current", "page");
  });
})();
