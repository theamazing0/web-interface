function openretroarch() {
    const url = 'openretroarch';

    fetch(
        url,
        {
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(data),
            method: "POST"
        }
    )
    // .then(data => data.json())
    // .then((json) => {
    //     alert(JSON.stringify(json));
    // });
};