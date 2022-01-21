import { extend } from "vee-validate";
import { required, alpha, numeric } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Ce champ est requis"
});

extend("alpha", {
  ...alpha,
  message: "Ce champ doit contenir au moin une lettre majuscule"
});
extend("numeric", {
  ...numeric,
  message: "Ce champ doit être un numero valide"
});