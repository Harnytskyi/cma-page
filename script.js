
const publicKeyCredentialCreationOptions = {
  challenge: new Uint8Array([ 
    0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
    0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
  ]).buffer,
  rp: {
      name: "Duo Security",
      id: "duosecurity.com",
  },
  user: {
      id: Uint8Array.from(
          "UZSL85T9AFC", c => c.charCodeAt(0)),
      name: "lee@webauthn.guide",
      displayName: "Lee",
  },
  pubKeyCredParams: [{alg: -7, type: "public-key"},{"alg":-257, type: "public-key"}],
  authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
  },
  timeout: 60000,
  attestation: "direct"
};

let cred;

async function saveCredentials(){
  cred = await navigator.credentials.create({
    publicKey: publicKeyCredentialCreationOptions
  }).catch(handleError);

  navigator.credentials.store(cred).then(function () {
    console.log(cred);
  });
}

function handleError(err){
  console.error(err);
}

const saveCredentialsButton = document.getElementById("saveCredentials");
saveCredentialsButton.addEventListener("click", () => {
  saveCredentials()
})

function aaa(){
  console.log("aaa");
}