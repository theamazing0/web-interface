function sendmsg() {
    const url = 'sendmsg';
    const data = {please : "do action"};

    fetch(
        url,
        {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            method: "POST"
        }
    )
    // .then(data => data.json())
    // .then((json) => {
    //     alert(JSON.stringify(json));
    // });
};