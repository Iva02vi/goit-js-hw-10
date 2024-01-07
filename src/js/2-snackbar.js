import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
const delay = document.querySelector(".delay-input");
const states = document.querySelectorAll("fieldset [name = 'state']");

form.addEventListener("submit", event => {
    event.preventDefault();
    const delayValue = delay.value;
    const state = Array.from(states).find(state => state.checked);
    form.reset();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state.value === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delayValue}ms`);
            } else {
                reject(`❌ Rejected promise in ${delayValue}ms`);
            }
        }, delayValue)
    });
    promise
        .then(value => {
            iziToast.success({
                message: value,
                position: "topRight",
            })
        })
        .catch(error => {
            iziToast.error({
                message: error,
                position: "topRight",
            })
        });
});