//Today's grocery bill event listener
document.getElementById("grocerytoday").addEventListener("click", todayBill);

//function and calculation for todaybill
function todayBill() {
  let bill1 = document.getElementById("today").value;
  let discount1 = document.getElementById("discount").value;
  let todaytax = document.getElementById("tax").value;
  let grocery = bill1 - bill1 * 0.01 * discount1 + bill1 * 0.01 * todaytax;

  //output
  document.getElementById("today").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("tax").value = "";
  document.getElementById("grocerybill").innerHTML = grocery.toFixed(2);
}

//Weekly 7 day grocery bill event listener
document.getElementById("week").addEventListener("click", weeklyBill);

//function
function weeklyBill() {
  let billweek = document.getElementById("most").value;
  let billweek2 = document.getElementById("least").value;
  let weekdis = document.getElementById("discount2").value;
  let weektax = document.getElementById("tax2").value;

  //calculations for weekly bill
  let billaverage =
    billweek - billweek * 0.01 * weekdis + billweek * 0.01 * weektax;
  let billaverage2 =
    billweek2 - billweek2 * 0.01 * weekdis + billweek2 * 0.01 * weektax;

  let groceryweek = ((billaverage + billaverage2) / 2) * 7;
  //output2
  document.getElementById("most").value = "";
  document.getElementById("least").value = "";
  document.getElementById("discount2").value = "";
  document.getElementById("tax2").value = "";
  document.getElementById("grocerybill2").innerHTML = groceryweek.toFixed(2);
}

//monthly grocery bill calculator
document.getElementById("month").addEventListener("click", monthlyBill);

//function
function monthlyBill() {
  let billmonth = document.getElementById("most2").value;
  let billmonth2 = document.getElementById("least2").value;
  let monthdis = document.getElementById("discount3").value;
  let monthtax = document.getElementById("tax3").value;

  //calculations for monthly bill
  let billaverage3 =
    billmonth - billmonth * 0.01 * monthdis + billmonth * 0.01 * monthtax;
  let billaverage4 =
    billmonth2 - billmonth2 * 0.01 * monthdis + billmonth2 * 0.01 * monthtax;

  let grocerymonth = ((billaverage3 + billaverage4) / 2) * 30;
  //output3
  document.getElementById("most2").value = "";
  document.getElementById("least2").value = "";
  document.getElementById("discount3").value = "";
  document.getElementById("tax3").value = "";
  document.getElementById("grocerybill3").innerHTML = grocerymonth.toFixed(2);
}
