console.log("Hello, World!");

function borderMsg(msg) {
    const border = "=".repeat(msg.length);

    console.log(border);
    console.log(msg);
    console.log(border);
}

borderMsg("Just Testing This Function");