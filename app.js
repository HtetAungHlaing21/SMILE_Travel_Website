document.addEventListener("DOMContentLoaded", function() {

    // Codes to control the chat box at the right bottom of every page
    let chatbtn = document.getElementById("chatbtn");
    let chatbox = document.getElementById("chatbox");
    let closebtn = document.getElementById("closebtn");
    let sendbtn = document.getElementById("sendbtn");
    let sent = document.getElementById("sent");

    // Opening and closing the chat box
    chatbtn.addEventListener("click", function() { //When "Chat with us" button is clicked, it will open.
        chatbox.style.display = "block";
    });

    closebtn.addEventListener("click", function() { //When "Close" button is clicked, it will close.
        chatbox.style.display = "none";
    });

    // Opening and closing the "Sent Successfully" line
    sendbtn.addEventListener("click", function() { //When "Send" button is clicked, it will open.
        sent.style.display = "block";
    });

    let closeSentMsg = document.getElementById("closeSentMsg");
    closeSentMsg.addEventListener("click", function() { //When a cross sign is clicked, it will open.
        sent.style.display = "none";
    });

    // Codes to calculate the total amount of the bookings
    let calculate = document.getElementById("calculate");
    let total = document.getElementById("total");
    let destination = document.getElementById("destination");
    let adults = document.getElementById("adults");
    let children = document.getElementById("children");
    let tax = document.getElementById("tax");
    let totalAfterTax = document.getElementById("totalAfterTax");
    let totalamount = document.getElementById("totalamount");
    let TotalBeforeTax, Tax, TotalAfterTax;
    calculate.addEventListener("click", function() { //When "calculate" button is clicked, the total value is calculated.
        TotalBeforeTax = (destination.value * adults.value) + ((destination.value * children.value) / 2);
        total.value = "$ " + TotalBeforeTax;
        Tax = TotalBeforeTax * 10 / 100;
        tax.value = "$ " + Tax;
        TotalAfterTax = TotalBeforeTax + Tax;
        totalAfterTax.value = "$ " + TotalAfterTax;
    });

    // Codes to show the payment success box and the total amount
    let paynowbtn = document.getElementById("payNow");
    let paymentDetails = document.getElementById("paymentDetails");
    let cancelpay = document.getElementById("cancelpay")
    paynowbtn.addEventListener("click", function() { //When "Pay Now" is clicked, the payment details is shown.
        paymentDetails.style.display = "block";
        totalamount.value = "$ " + TotalAfterTax;
    });
    cancelpay.addEventListener("click", function() { //When "Cancel payment" is clicked, the payment details is hidden.
        paymentDetails.style.display = "none";
    })
})