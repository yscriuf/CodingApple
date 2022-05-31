var final_price = 0;
var itemList = [];
var originItemHtml;
$(document).ready(function () {
  $.get("./assets/json/store.json")
    .done(function (data) {
      var i = 0;
      for (key in data) {
        data[key].forEach((element) => {
          itemList.push(element);
          $(".item-wrap").append(makeCard(element, i++));
        });
      }
      originItemHtml = $(".item-wrap").html();
    })
    .fail(function () {
      console.log("fail");
    });
});

var oldVal;
$("#searchTextBox").on("change keyup paste", function () {
  var currentVal = $(this).val();
  if (currentVal == oldVal) {
    return;
  } else if (currentVal == "") {
    console.log("hi");
    $(".item-wrap").html(originItemHtml);
    return;
  }

  oldVal = currentVal;
  $(".item-wrap").html("");
  var i = 0;
  itemList.forEach(function (element) {
    var eT = element.title;
    if (eT.includes(currentVal) == true) {
      console.log(currentVal);
      $(".item-wrap").append(makeCard(element, i++));
    }
  });
  var tempHtml = $(".item-wrap").html();
  console.log(tempHtml);
  console.log(tempHtml.length);

  for (var i = 0; i < tempHtml.length; i++) {
    i = tempHtml.indexOf(currentVal, i);
    console.log(i);
    if (i == -1) {
      break;
    } else {
      var focusStart = `<span style="background:yellow">`;
      var focusEnd = `</span>`;
      var position = i;
      tempHtml = [
        tempHtml.slice(0, position),
        focusStart,
        tempHtml.slice(position),
      ].join("");
      console.log(tempHtml);
      position = position + currentVal.length + focusStart.length;
      tempHtml = [
        tempHtml.slice(0, position),
        focusEnd,
        tempHtml.slice(position),
      ].join("");
      console.log(tempHtml);
      i = position + focusEnd.length;
      console.log(i);
    }
  }
  $(".item-wrap").html("");
  $(".item-wrap").html(tempHtml);
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id);
}

$("#final_price").html(final_price);

function drop(ev) {
  console.log(ev);
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");
  makeDragItem(data);
}

$(document).on("click", ".btn-get", function (e) {
  console.log("button Clicked");
  console.log(e.target.parentNode.parentNode.id);
  makeDragItem(e.target.parentNode.parentNode.id);
});

$(document).on('focusin', ".card-input", function(){
  console.log("Saving value " + $(this).val());
  $(this).data('val', $(this).val());
});

$(document).on('change', ".card-input", function(e){
  var prev = $(this).data('val');
  var current = $(this).val();
  var idx = String(e.target.parentNode.parentNode.id).slice(-1);
  final_price += itemList[idx].price * (current - prev);
  $("#final_price").html(final_price);

  console.log("Prev value " + prev);
  console.log("New value " + current);
});

function makeCard(element, i) {
  return `
    <div id="card${i}" class="card m-3" style="width: 18rem" draggable="true" ondragstart="drag(event)">
      <img draggable="false" src="./assets/img/${element.photo}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.brand}</p>
          <p class="card-text">${element.price}</p>
          <button class="card-btn btn btn-primary btn-get">담기</button>
      </div>
    </div>`;
}

function makeDragItem(data) {
  $(".cart-drag-zone .drag-text").remove();
  console.log(data);
  var idx = String(data).slice(-1);
  final_price += itemList[idx].price;
  $("#final_price").html(final_price);
  if ($(`#cart_${data}`).length != 0) {
    console.log("여기에 input text 내용이 바뀌도록 코딩");
    var num = $(`#cart_${data} input`).val();
    var num = $(`#cart_${data} input`).val(String(Number(num) + 1));
    return;
  }

  var makeNode = document.createElement("div");
  makeNode.innerHTML = `
    <div id="cart_${data}" class="card m-3" style="width: 18rem" draggable="false" ondragstart="drag(event)">
      <img draggable="false" src="./assets/img/${itemList[idx].photo}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${itemList[idx].title}</h5>
        <p class="card-text">${itemList[idx].brand}</p>
        <p class="card-text">${itemList[idx].price}</p>
        <input type="text" class="card-input" value="1"}></input>
      </div>
    </div>`;
  console.log(makeNode);
  document.querySelector(".cart-drag-zone").appendChild(makeNode);
}