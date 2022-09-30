if (document.getElementById('profile-btn')) {
  var storelink = document.getElementById('profile-btn');
  var venditore = storelink.href.split("/").pop();
  var venditore = "VENDITORE-" + venditore;
} else { 
  var venditore = "VENDITORE-Non-loggato";
}
document.tidioIdentify = {
  name: venditore 
};
var tidioScript = document.createElement('script');
tidioScript.src = '//code.tidio.co/cy97akcfmtocrapn5plbm9d2bdvizjd7.js';
document.body.appendChild(tidioScript);

if (document.getElementById('store_name') !== null) {
  document.getElementById('store_name').readOnly= true;
  document.getElementById('store_name').style.cursor= "not-allowed";
}

if (window.location.href.indexOf("/index.php?p=membership_plans") != -1){
  document.getElementsByClassName("mp-margin-top-50")[0].classList.add("membership-plans-container");
}

if (window.location.href.indexOf("/index.php?p=login") != -1){
  document.getElementById('header').classList.add("margin-top-85");
  document.getElementById('customized_icon').classList = ("hidden");
  var content_wrapp = document.getElementById('login-template');
  content_wrapp.getElementsByTagName("div")[0].classList = ("hidden");
  content_wrapp.getElementsByTagName("div")[1].classList = ("hidden");
  var twosiderow = content_wrapp.getElementsByTagName("div")[2];
  twosiderow.getElementsByTagName("div")[0].classList = ("hidden");
  twosiderow.getElementsByTagName("div")[1].classList = ("col-lg-5 col-md-5 left-block-login");
  twosiderow.getElementsByClassName("col-lg-5")[1].classList = ("col-lg-7 col-md-7 right-block-login");
  console.log(document.getElementById('login_form_div'));
  document.getElementById('login_form_div').classList.remove("card");
  document.getElementsByClassName("footer")[0].classList = ("footer text-left hidden");
  document.getElementById('login_form_div').getElementsByTagName("h4")[0].classList.remove("mp-margin-top-50")
}
if (window.location.href.indexOf("/index.php?p=signup") != -1){
  document.getElementById('header').classList.add("margin-top-85");
  document.getElementById('customized_icon').classList = ("hidden");
  document.getElementsByClassName("mp-margin-top-50")[0].classList.remove("mp-margin-top-50");
  document.getElementsByClassName("mp-margin-top-50")[0].classList.remove("mp-margin-top-50");
  document.getElementsByClassName("mp-margin-top-50")[0].classList.remove("mp-margin-top-50");
}
 document.getElementById('button-navbar').getElementsByTagName("ul")[0].innerHTML += '<li class="text-right"><a href="https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it" title="guide"><i class="fa fa-eye" aria-hidden="true"></i>GUIDE</a></li>';

if (window.location.href.indexOf("/index.php?p=add_product&pid=") != -1){
 document.getElementById('page-heading').innerHTML += '<a href="index.php?p=add_product"><button type="button" class="pull-right mp-theme-background" style="padding: 15px 10px;border-radius: 50px;color: #2D2D2D;font-weight:600;border:none;">✚ AGGIUNGI NUOVO PRODOTTO</button></a>';
}

if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=2") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it/come-integrare-woocommerce-al-marketplace-commerciovirtuoso-it' target='_blank'>Leggi la Guida di integrazione --></a>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=1") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it/come-integrare-shopify-al-marketplace-commerciovirtuoso-it' target='_blank'>Leggi la Guida di integrazione --></a>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=5") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it/come-integrare-prestashop-al-marketplace-commerciovirtuoso-it' target='_blank'>Leggi la Guida di integrazione --></a>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=4") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it/come-integrare-magento-2-al-marketplace-commerciovirtuoso-it' target='_blank'>Leggi la Guida di integrazione --></a>";
}
if (window.location.href.indexOf("/index.php?p=product") != -1){
  var aggiunto = false;
  $("#seller_side_product_table").bind("DOMSubtreeModified", function() {
    if (document.getElementById('seller_side_product_table_length') !== null) {
      var selectwrapp = document.getElementById("seller_side_product_table_length");
      var select = selectwrapp.getElementsByTagName("label")[0].getElementsByTagName("select")[0];
      var opt = document.createElement('option');
      opt.value = "500";
      opt.innerHTML = "500";
      var opt2 = document.createElement('option');
      opt2.value = "5000";
      opt2.innerHTML = "5000";
      if ( aggiunto  == false ) {
        select.appendChild(opt);
        select.appendChild(opt2);
        aggiunto=true;
      }
    }
  });

}

if (window.location.href.indexOf("/index.php?p=add_product") != -1){
document.getElementById("cus_field").getElementsByClassName("margin-topbtm-10")[2].getElementsByTagName('label')[0].innerHTML = "CAMPI DA RIEMPIRE SE SI VUOLE EVIDENZIARE IL PREZZO UNITARIO<br>Unità di misura della quantità di prodotto Chilo/Litro/ Singole unità... - SELEZIONARE CT SE L'UNITA DI MISURA E' la Singola unità";
document.getElementById("cus_field").getElementsByClassName("margin-topbtm-10")[3].getElementsByTagName('label')[0].innerHTML = "Quantita' di prodotto inclusa nell'inserzione";
var fieldtitle = document.querySelectorAll("[id='product_name_div']");
var contacaratteri='<div style="margin-top:10px;">Conteggio caratteri: <span id="conteggiocaratterititolo">0<\/span>\/200 - <span id="suggerimentolunghezzatitolo" style="color:red">Titolo Troppo Breve!<\/span>          <a href="https://commerciovirtuoso.it/blogs/guide-per-vendere-su-commerciovirtuoso-it/come-scrivere-il-nome-perfetto-per-il-tuo-prodotto" target="_blank">Guida: scrivere il titolo perfetto </a><\/div>';
fieldtitle[3].innerHTML+=contacaratteri;

if (document.getElementById('mvm_prod_type_div') !== null) {
document.getElementById('mvm_prod_type_div').style.display= "none";
}

if (document.getElementById('weight') !== null) {
  document.getElementById('weight').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('price').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('comp_price').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('product_name').setAttribute( "onInput", "tolowecase(this);tocountchars(this)" );
  document.getElementsByName('cus_brand')[0].setAttribute( "onInput", "tolowecase(this)" );
}

let variant_count = 0;
$("#add_another_option_td").find("button").click( function() {
  function show_popup() {
    variant_count = variant_count  + 1;
    replaceOption(variant_count);
  }
window.setTimeout( show_popup, 200 );
});

$(document).on("click", "#remove_option_1", function(){
  variant_count  = variant_count  - 1;
});

replaceOption(variant_count);

function replaceOption(variant_count ) {
  if (document.getElementById("option_name_" + variant_count ) !== null) {
    $("#option_name_" +variant_count).replaceWith('<select id="option_name_'+ variant_count + '" name="txtQuantity" class="form-control new_option_name ui-autocomplete-input">' +
             '<option value=""></option>' +
              '<option value="Taglia">Taglia</option>' +
              '<option value="Colore">Colore</option>' +
              '<option value="Formato">Formato</option>' +
            '</select>');
  }
}
function changecomma(e) {
    e.value=e.value.replace(/,/g, '.')
    e.value=e.value.replace(/ /g,"");
    e.value=e.value.replace(/[a-zA-Z]/g, "")
}
function tocountchars(e){
  console.log(e.value.length);
//suggerimentolunghezzatitolo
 var contatore_lunghezzacaratteri = e.value.length;
  document.getElementById("conteggiocaratterititolo").innerHTML=contatore_lunghezzacaratteri ;
suggerimentolunghezzatitolo.innerHTML="Titolo troppo breve!"
suggerimentolunghezzatitolo.style.color = "red"
if (contatore_lunghezzacaratteri > 50){
   suggerimentolunghezzatitolo.innerHTML="Puoi fare di meglio!"
   suggerimentolunghezzatitolo.style.color = "orange"
}
if (contatore_lunghezzacaratteri > 70){
   suggerimentolunghezzatitolo.innerHTML="Ci sei quasi..."
   suggerimentolunghezzatitolo.style.color = "orange"
}
if (contatore_lunghezzacaratteri > 100){
   suggerimentolunghezzatitolo.innerHTML="Perfetto!"
   suggerimentolunghezzatitolo.style.color = "green"
}
if (contatore_lunghezzacaratteri > 150){
   suggerimentolunghezzatitolo.innerHTML="Stai scrivendo un po' troppo..."
   suggerimentolunghezzatitolo.style.color = "orange"
}
}
function tolowecase(e){
  e.value = e.value.charAt(0).toUpperCase() + e.value.slice(1).toLowerCase();
}}
