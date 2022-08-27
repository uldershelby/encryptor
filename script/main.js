//  Encryptor Challenge - ALLURA & ORACLE ONE, 2022
//  Student: MEDONE, NICOLAS ADRIAN
//  Group: 3

//  nmedone@gmail.com
//  uldershelby.github.com

//  Encryptor Portfolio Project summary:
//
//  - Declare two objects.
//  - Ask for input and lowercase string.
//  - Encryptor: replace vocals by <objCrypt> Object.keys(),
//    passing <objCrypt> <i> index to .replace() method.
//  - Declare two regular expressions:
//    - <regExpEncrypt> with following parameters:
//      - Include vocals and exclude special characters and spaces.
//    - <regExpDecrypt> with <objDecrypt> Object.keys().
//    - Search globally and join the resulting regexp
//      by comparing each Object.key with "|" <or> operator,
//      when passed as an argument to <decryptedPass> .replace() method.
//  - Decryptor: Get plain password string passing <regExpr>
//    and <objDecrypt> <j> index to .replace() method.

//    Note: This last behaviour can also be achieved with recursive
//    replace() methods instead of declaring a 2nd object:

//    str.replace(/str1/g, str3).replace(/str2/g, str4)...

const objCrypt = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" },
  objDecrypt = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" },
  regExprCrypt = new RegExp(/[eiaou]/g),
  regExprDecrypt = new RegExp(Object.keys(objDecrypt).join("|"), "g"),
  copy = () => {
    let txtCpy = document.getElementById("txt3").value;
    navigator.clipboard.writeText(txtCpy);
    alert("Copied " + txtCpy);
  },
  encrypt = () => {
    let userInputText = document.querySelector("#main-content").value;
    let encryptedText = userInputText.replace(regExprCrypt, (i) => objCrypt[i]);
    document.querySelector("#main-content").value;
    document.getElementById("txt1").innerHTML =
      '<textarea id="txt3" cols="30" rows="10">encryptedText</textarea>';
    document.getElementById("txt1").className = "txt1";
    document.getElementById("txt2").innerHTML = "";
    document.getElementById("txt3").className = "txt3";
    document.getElementById("txt3").value = encryptedText;
  },
  decrypt = () => {
    userInputText = document.querySelector("#main-content").value;
    let decryptedText = userInputText.replace(
      regExprDecrypt,
      (j) => objDecrypt[j]
    );
    document.querySelector("#main-content").value;
    document.getElementById("txt1").innerHTML =
      '<textarea name="result-text" id="txt3" cols="30" rows="10">encryptedText</textarea>';
    document.getElementById("txt1").className = "txt1";
    document.getElementById("txt2").innerHTML = "";
    document.getElementById("txt3").className = "txt3";
    document.getElementById("txt3").value = decryptedText;
  };

btn2 = document.querySelector("#decrypt-icon");
btn2.onclick = decrypt;
btn3 = document.querySelector("#copy-icon");
btn3.onclick = copy;

document.getElementById("encrypt-icon").addEventListener(
  "click",
  function () {
    encrypt();
  },
  false
);

document.getElementById("encrypt-icon").addEventListener(
  "click",
  function () {
    let element = document.getElementById("copy-icon");
    let hidden = element.getAttribute("hidden");
    document.getElementById("result").style.backgroundImage = "none";

    if (hidden) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
    }
  },
  false
);

document.getElementById("decrypt-icon").addEventListener(
  "click",
  () => {
    decrypt();
  },
  false
);

document.getElementById("decrypt-icon").addEventListener(
  "click",
  () => {
    let element = document.getElementById("copy-icon");
    let hidden = element.getAttribute("hidden");
    document.getElementById("result").style.backgroundImage = "none";

    hidden
      ? element.removeAttribute("hidden")
      : element.setAttribute("hidden", "hidden");
  },
  false
);

let loader = document.getElementById("preloader");
window.addEventListener(
  "load",
  (load) => {
    window.removeEventListener("load", load, false);
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  },
  false
);

var favicon_images = [
    "img/favicon_frame0.gif",
    "img/favicon_frame1.gif",
    "img/favicon_frame2.gif",
    "img/favicon_frame3.gif",
    "img/favicon_frame4.gif",
    "img/favicon_frame5.gif",
    "img/favicon_frame6.gif",
  ],
  image_counter = 0;

setInterval(() => {
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  if (document.querySelector("link[rel='shortcut icon']") !== null)
    document.querySelector("link[rel='shortcut icon']").remove();

  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="' +
        favicon_images[image_counter] +
        '" type="image/gif">'
    );

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 200);
