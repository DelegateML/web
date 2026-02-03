(function () {
  var config = window.DATA_RECON_CONFIG || {};

  var emailLink = document.getElementById("email-link");
  var bookingLink = document.getElementById("booking-link");

  function appendScript(attrs) {
    var script = document.createElement("script");
    Object.keys(attrs).forEach(function (key) {
      if (key === "text") {
        script.text = attrs[key];
        return;
      }
      script.setAttribute(key, attrs[key]);
    });
    document.head.appendChild(script);
  }

  function maybeLoadAnalytics() {
    if (!config.enableAnalytics) return;

    if (config.plausibleDomain) {
      appendScript({
        defer: "",
        "data-domain": config.plausibleDomain,
        src: config.plausibleScriptUrl || "https://plausible.io/js/script.js",
      });
    }

    if (config.ga4MeasurementId) {
      appendScript({
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.ga4MeasurementId),
      });
      appendScript({
        text:
          "window.dataLayer=window.dataLayer||[];" +
          "function gtag(){dataLayer.push(arguments);}" +
          "gtag('js', new Date());" +
          "gtag('config','" +
          String(config.ga4MeasurementId).replace(/'/g, "\\\\'") +
          "');",
      });
    }
  }

  if (emailLink) {
    if (config.contactEmail) {
      var subject = encodeURIComponent(config.emailSubject || "Reconciliation template");
      emailLink.href = "mailto:" + config.contactEmail + "?subject=" + subject;
    } else {
      emailLink.classList.add("disabled");
      emailLink.title = "Set contactEmail in site/config.js";
    }
  }

  if (bookingLink) {
    if (config.bookingUrl) {
      bookingLink.href = config.bookingUrl;
      bookingLink.target = "_blank";
      bookingLink.rel = "noopener noreferrer";
    } else {
      bookingLink.classList.add("disabled");
      bookingLink.title = "Set bookingUrl in site/config.js";
    }
  }

  maybeLoadAnalytics();
})();
