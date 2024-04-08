// $(document).ready(function () {
//   $("#adminP").hide();
//   if (
//     window.location.href === "http://localhost/webPowder.ba/#admin" ||
//     window.location.href === "http://localhost/webPowder.ba/#users" ||
//     window.location.href === "http://localhost/webPowder.ba/#orders"
//   ) {
//     $("#homeNav").hide();
//     $("#adminP").show();
//   }
// });

$(document).ready(function () {
  $("#adminP").hide();
  $("#homeNav").hide();
  $("#exampleModale").hide();
  $("#exampleModal").hide();
});

$(document).ready(function () {
  if (
    window.location.href === "http://127.0.0.1:5500/index.html#admin" ||
    window.location.href === "http://127.0.0.1:5500/index.html#users" ||
    window.location.href === "http://127.0.0.1:5500/index.html#orders"
  ) {
    $("#adminP").show();
  } else if (
    window.location.href === "http://127.0.0.1:5500/index.html#main" ||
    window.location.href === "http://127.0.0.1:5500/index.html#shopitem" ||
    window.location.href === "http://127.0.0.1:5500/index.html#shopingcart"
  ) {
    $("#homeNav").show();
  }
});
$(document).ready(function () {
  new DataTable("#example");
});

// $(document).ready(function () {
//   $.ajax({
//     url: "products.json",
//     method: "GET",
//     dataType: "json",
//     success: function (data) {
//       $('.one') $("#name").html(data[0].productName);

//       // Append HTML to the #two element
//     },
//   });
// });

// $(document).ready(function () {
//   $.ajax({
//     url: "products.json",
//     method: "GET",
//     dataType: "json",
//     success: function (data) {
//       let z = 0;
//       let i = 1;
//       for (let r = 1; r < 9; r++) {
//         $(`#div${r} .slika`).attr("src", data[z].productImg);
//         $(`#div${r} .title`).html(data[z].productName);
//         $(`#div${r} .flavour`).html(data[z].flavour);
//         $(`#div${r} .price`).html(data[z].price);

//         z++;
//       }
//       console.log(data);
//     },
//   });
// });
var cartItemCount = 0;
function addToCart() {
  cartItemCount++;
  $("#cartnumber").text(cartItemCount);
}

$(document).ready(function () {
  $.ajax({
    url: "products.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#maindiv").empty();

      data.forEach((item) => {
        let html = `<div class="col mb-5" id="div1" >
            <div class="card h-100">
 <div
                class="edit"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <button onclick="showEdit()">✏️</button> <button onclick="showModal()">🗑️</button>
              </div>              <a href="#shopitem">
                <img class="card-img-top slika" src="${item.productImg}" alt="..." onClick="getId(${item.id})" />
              </a>
              <div class="card-body p-4">
                <div class="text-center">
                  <a href="#shopitem">
                    <h5 class="fw-bolder title" onClick="getId(${item.id})">${item.productName}</h5>
                    <h5 class="flavour">${item.flavour}</h5>
                  </a>
                  <strong class="price">${item.price}</strong>
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#" onclick="addToCart()">Add to cart</a>
                </div>
              </div>
            </d{iv>
          </div>`;
        $(document).ready(function () {
          $(".edit").hide();
        });

        $("#maindiv").append(html);
      });
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "orders.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#tabeladiv").empty();

      data.forEach((item) => {
        let htmlt = `
        <tr>
          <td>${item.orderId}</td>
          <td>${item.firstName}</td>
          <td>${item.lastName}</td>
          <td>${item.email}</>
          <td>${item.mobileNumber}</td>
          <td>${item.city}</td>
          <td>${item.address}</td>
          <td>${item.zipCode}</td>
        <td>
            <button id="#check" onclick="showModal()">✔️</button>
            <button id="#remove" onclick="showModal()">🗑️</button>
          </td>
          </tr>
        
        `;

        $("#tabeladiv").append(htmlt);
      });
    },
  });
});

function unhideER() {
  $(".edit").toggle();
}

function showModal() {
  $("#exampleModal").toggle();
}
function showEdit() {
  $("#exampleModale").toggle();
}

function green() {
  $(this).closest("tr").css("background-color", "green");
}

$(document).ready(function () {
  $.ajax({
    url: "orders.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#usersdiv").empty();

      data.forEach((item) => {
        let htmlt = `
        <tr>
          <td>${item.orderId}</td>
          <td>${item.firstName}</td>
          <td>${item.lastName}</td>
          <td>${item.email}</>
          <td>${item.mobileNumber}</td>
        <td>
            <button id="#remove1" onclick="showModal()">🗑️</button>
          
          </td>
          </tr>
        
        `;

        $("#usersdiv").append(htmlt);
      });
    },
  });
});

$(document).ready(function () {
  var totalprice = 0;

  $.ajax({
    url: "cart.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#usersdiv").empty();

      data.forEach((item) => {
        var price = parseFloat(item.price);
        let htmlt = `
          <div class="row mb-4 d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img src="${item.productImg}" class="img-fluid rounded-3" alt="Cotton T-shirt" />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <h6 class="text-muted">${item.productType}</h6>
              <h6 class="text-black mb-0">${item.productName}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <select class="form-select form-select-sm sel1" id="select" >
                <option selected>Select an option</option>
                <option value="1" onclick="getvalue()" selected="selected">1</option>
                <option value="2" onclick="getvalue()">2</option>
                <option value="3" onclick="getvalue()">3</option>
                <option value="4" onclick="getvalue()">4</option>
              </select>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 id="${item.productName}"class="total-price mb-0">${price} BAM</h6> <!-- Using the 'price' variable here -->
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a  class="text-muted">
                <button onclick=showModal()>🗑️</button>
                <i class="fas fa-times"></i>
              </a>
            </div>
          </div>
          <hr class="my-4" />
        `;
        $("#cartDiv").append(htmlt);
        totalprice += parseFloat(item.price);
      });

      $("#totalprice").text(totalprice + " BAM");

      var shipping = 7;
      if (totalprice > 100) {
        $("#shipping").text("FREE");
        $("#total").text(totalprice + "BAM");
      } else {
        $("#shipping").html(shipping + " BAM");
        totalprice += 7;
        $("#total").text(totalprice + "BAM");
      }

      $("#code").on("input", function () {
        var codeValue = $(this).val();
        if (codeValue === "FIRST ORDER") {
          $("#total").text(totalprice - totalprice * 0.2 + " BAM");
        } else {
          $("#total").text(totalprice + " BAM");
        }
      });
    },
  });
});

function getId(id) {
  $.ajax({
    url: "products.json",
    method: "GET",
    success: function (response) {
      var item = response.find(function (item) {
        return item.id == id;
      });
      var html = `
         <div class="col-md-6">
            <img
              class="card-img-top mb-5 mb-md-0"
              src="${item.productImg}"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <h1 class="display-5 fw-bolder title" >${item.productName}</h1>
            <div class="fs-5 mb-5">
              <span>${item.price}</span>
            </div>
            <p class="lead">
              ${item.description}

              <p class="flavour">Flavour:${item.flavour}</p>
            </p>
            <div class="d-flex">
              <button
                class="btn btn-outline-dark flex-shrink-0"
                type="button"
                id="addtocart"
                onclick="addToCart()"
              >
                <i class="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
                <a href="#main">Back to Shop</a>  
          `;
      $("#shopitemdiv").empty().append(html);
    },
  });
}

$(document).ready(function () {
  function getId() {}
});
