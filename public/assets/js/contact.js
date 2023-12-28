new Scroller();

const msgForm = document.querySelector("#msgForm");

msgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    alert("stopped");

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let subject = document.querySelector("#subject").value;

    if (name !=="" && email !== "" && subject !==""){

        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        fetch('/send-msg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
});