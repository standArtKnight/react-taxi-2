export const fetchLogin = data => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(responce => responce.json());
};
