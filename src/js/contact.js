const script = document.createElement("script");
script.src = "https://js.hsforms.net/forms/v2.js";
document.body.appendChild(script);

script.onload = () => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: "na1",
      portalId: "20480110",
      formId: "f657f5b3-3157-4099-b600-a7aeb934b35f",
      target: ".contact-us-email-container",
    });
  }
};
