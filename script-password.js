function saveCredentials() {
    console.log("saving started");
    const credentials = new PasswordCredential({
      id: document.getElementById("username").value,
      password: document.getElementById("password").value,
    });
    navigator.credentials
      .store(credentials)
      .then(() => {
        console.log('Credentials will store when you select "Save" in browser popup.');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
function retrieveCredentials() {
  console.log("retrieving started");
  navigator.credentials
    .get({ password: true })
    .then((credentials) => {
      if (credentials) {
        console.log(credentials);
      } else {
        console.log(
          "No credentials found. Make sure you have saved credentials before trying to get them."
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}