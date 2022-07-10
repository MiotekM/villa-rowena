const dataForm = document.querySelector(".form-2");
const sub_1 = document.querySelector(".sub-1");
const sub_1__ico = document.querySelector(".sub-1__ico");
const sub_1__text = document.querySelector(".sub-1__text");

const updateSettings = async (data) => {
  try {
    const url = "https://applications.com.pl/api/v1/mail-sender";
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
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messageTemplate = `<h1 style="background-color:#e4b668; max-width:1000px; margin:0 auto; padding:30px 0px; font-size:26px; font-family: Athiti, sans-serif; color: white; text-align:center"><span style="display:block">Świetnie !</span>Nowa wiadomość nadesłana przez osobę przedstawiającą się jako ${name}.</h1>
<h2 style="font-size: 20px; padding:40px 0px; font-family: Athiti, sans-serif; text-align:center">Na otrzymaną wiadomość należy odpisać pod adres <a href="mailto:${email}" target="_blank">${email}</a></h2>
<p style="font-family: Athiti, sans-serif; color:white;font-size:18px; background-color: #82a1b5; max-width:1000px; margin:0 auto; padding: 20px 40px; box-sizing:border-box">${message}</p>`;
    form.append("message", messageTemplate);
    form.append("from", "Villa Rowena");
    form.append("subject", "Wiadomość z formularza");
    form.append("receiver", "villa.rowena@onet.pl");
    // form.append("receiver", "andrzej.jan.jaworski@gmail.com");
    updateSettings(form);
  });
