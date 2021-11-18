const dataForm = document.querySelector(".form-2");
const sub_1 = document.querySelector(".sub-1");
const sub_1__ico = document.querySelector(".sub-1__ico");
const sub_1__text = document.querySelector(".sub-1__text");

// type is either 'password' or 'data'
const updateSettings = async (data) => {
  try {
    const url = "https://applications.com.pl/mail-sender";
    sub_1__ico.classList.remove("fa-paper-plane");
    sub_1__ico.classList.add("sub-1__ico--wait");
    sub_1__ico.classList.add("fa-redo");
    sub_1__text.innerHTML = "Wysyłam";
    const res = await axios({
      method: "POST",
      url,
      data,
    });

    if (res.data.status === "success") {
      //console.log("success");
      sub_1__ico.classList.remove("fa-redo");
      sub_1__ico.classList.remove("sub-1__ico--wait");
      sub_1__ico.classList.add("fa-check");
      sub_1__text.innerHTML = "Wysłano";
      sub_1.disabled = true;
    }
  } catch (err) {
    //console.log(err);
    sub_1__ico.classList.remove("fa-redo");
    sub_1__ico.classList.remove("sub-1__ico--wait");
    sub_1__ico.classList.add("fa-ban");
    sub_1__text.innerHTML = "Wystąpił błąd";
  }
};

if (dataForm)
  dataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("sender", document.getElementById("email").value);
    form.append("message", document.getElementById("message").value);
    form.append("from", "villarowena");
    form.append("subject", "Villa Rowena - wiadomość z formularza");
    form.append("receiver", "andrzej.jan.jaworski@gmail.com");
    updateSettings(form);
  });
