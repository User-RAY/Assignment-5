

//DOM Elements 
const donateBtn = idElement('donate-btn');
const historyBtn = idElement('history-btn');

const donatePage = idElement('donation-page');
const historyPage = idElement('history-page');


const noakhaliFund = idElement('donate-balance-one');
const feniFund = idElement('donate-balance-two');
const aidFund = idElement('donate-balance-three');

const noakhaliBtn = idElement('noakhali-btn');
const feniBtn = idElement('feni-btn');
const aidBtn = idElement('aid-btn');


const noakhaliAmount = idElement('noakhali-input');
const feniAmount= idElement('feni-input');
const aidAmount = idElement('aid-input');


const currentBalance = idElement('available-balance');


//Reusable Functions-One: Adds notification cards of Donation Date and time with place and reason or causes for the donation____used and called inside check function 

function newHistory (amount, time, place, type) {
    historyPage.innerHTML += `

                <div class="border-2 rounded-2xl border-[#111111]/[.1] p-5 lg:p-8 mb-4">

                <h1 class="font-bold text-xl">${amount} Taka is Donated for ${type} at ${place}, Bangladesh</h1>

                <p class="mt-4 font-light text-[#111111]/[.7]">Date : ${time}</p>     
            </div>
    `
}


//Reusable Functions-two: Validates input and performs balance adjustmet or operations

function checks(donation,donationFund,place,type) {

    const donateAmount = parseFloat(donation.value);

    if (isNaN(donateAmount) || donateAmount <= 0) {
        donation.value = '';
        alert("Invalid Donation amount. Please Input valid donation amount. Minimum Donate amount 1BDT");
        return;
    } 

    const availableBalance = parseFloat(currentBalance.innerText);
    const fund = parseFloat(donationFund.innerText);
    if (donateAmount > availableBalance) {
        alert("Insufficient Balance");
        return;
    } else {
        donationFund.innerText = fund + donateAmount;
        currentBalance.innerText = availableBalance - donateAmount;
        donation.value = '';
        const time = new Date();
        newHistory(donateAmount,time,place,type);//calling Reusable Function-One
        alert("Donate Successful");
       
    }

}


// Reusable Functions: two-and-half (three): gets elementID 
function idElement(id) {
    return document.getElementById(id)
}

