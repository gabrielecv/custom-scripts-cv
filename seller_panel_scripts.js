/*-----chat button-----*/
var chatBtn = document.createElement('div');
chatBtn.className = 'chat-button'; 
chatBtn.onclick = function() {
	zE('messenger', 'open');
}
chatBtn.innerText = 'Chat';
	
var counterSpan = document.createElement('span');
counterSpan.className = 'chat-notification-counter';
counterSpan.id = 'chat-notification-counter';
counterSpan.innerText = '0'; 

document.body.appendChild(chatBtn);
document.body.appendChild(counterSpan);
	
let chatScript = document.createElement("script");
	chatScript.setAttribute("src", "https://static.zdassets.com/ekr/snippet.js?key=2ba9657d-dc80-49e8-9280-8caf18301b4e");
	chatScript.setAttribute("id", "ze-snippet");
	chatScript.defer = true;
	chatScript.onload = function() {
		console.log("caricato ze")
		zE("messenger:on", "unreadMessages", function (count) {
			var counter = document.getElementById("chat-notification-counter");
			counter.innerHTML = count;
			if (count > 0) {
				counter.style.display = "block";
			} else {
				counter.style.display = "none";
			}
		})
}
document.body.appendChild(chatScript);

/*-----Font loading-----*/

var PoppinsFont = document.createElement('link');
PoppinsFont.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';
PoppinsFont.rel = 'stylesheet';
document.body.appendChild(PoppinsFont);

/*-----Disabilita campo nome negozio-----*/
if (document.getElementById('store_name') !== null) {
  document.getElementById('store_name').readOnly= true;
  document.getElementById('store_name').style.cursor= "not-allowed";
}

/*-----Membership plan modifica stile-----*/
if (window.location.href.indexOf("/index.php?p=membership_plans") != -1){
	document.querySelectorAll('.border.rounded-lg.h-\\[450px\\]').forEach(card => {
	  card.classList.remove('h-[450px]');
	});
	
	// 2. Rimuove h-36 e overflow-y-auto dal contenuto interno
	document.querySelectorAll('.h-36.overflow-y-auto').forEach(el => {
	  el.classList.remove('h-36', 'overflow-y-auto');
	});
}

/*-----Aggiungere link a menu -----*/
document.getElementById('admin-header-div-5').innerHTML += '<a href="https://sell.commerciovirtuoso.it/category/guide/" title="guide">Guide</a>';
document.getElementById('admin-header-div-5').innerHTML += '<a href="https://sell.commerciovirtuoso.it/domande-frequenti/" title="domande frequenti">Domande frequenti</a>';
document.getElementById('admin-header-div-5').innerHTML += '<a href="tel:+390287176931" title="chiama">+39 02 8717 6931</a>';

/*-----Aggiungi nuovo prodotto Pulsante in pagina prodotto -----*/
if (window.location.href.indexOf("/index.php?p=add_product&pid=") != -1){
 document.getElementById('page-heading').innerHTML += '<a href="index.php?p=add_product"><button type="button" class="pull-right mp-theme-background" style="padding: 15px 10px;border-radius: 10px;color: #333333;font-weight:600;border:none;">✚ Aggiungi nuovo prodotto</button></a>';
}

/*-----Guide nelle pagine dei vari connettori -----*/
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=2") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://sell.commerciovirtuoso.it/come-integrare-woocommerce-al-marketplace-commerciovirtuoso-it/' target='_blank'>Leggi la Guida di integrazione --></a> <span> oppure chiamaci al +39 02 8717 6931</span>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=1") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://sell.commerciovirtuoso.it/come-integrare-shopify-al-marketplace-commerciovirtuoso-it/' target='_blank'>Leggi la Guida di integrazione --></a> <span> oppure chiamaci al +39 02 8717 6931</span>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=5") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://sell.commerciovirtuoso.it/come-integrare-prestashop-al-marketplace-commerciovirtuoso-it/' target='_blank'>Leggi la Guida di integrazione --></a> <span> oppure chiamaci al +39 02 8717 6931</span>";
}
if (window.location.href.indexOf("/index.php?p=connector_configs&platform_id=4") != -1){
 document.getElementById('page-heading').innerHTML += "<a style='color: black;background: orange;margin-top: 10px;display: block;padding: 10px;font-size: 16px;width: fit-content;font-weight: 800;' href='https://sell.commerciovirtuoso.it/come-integrare-magento-2-al-marketplace-commerciovirtuoso-it/' target='_blank'>Leggi la Guida di integrazione --></a> <span> oppure chiamaci al +39 02 8717 6931</span>";
}
/*if (window.location.href.indexOf("/index.php?p=product") != -1){
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

}*/
if (window.location.href.indexOf("index.php?p=my_account") != -1){
  var link_to_shop = document.getElementById("profile-btn").href.replace("https://commerciovirtuoso.myshopify.com","https://commerciovirtuoso.it");
  console.log(link_to_shop );
  var sideprofile = document.getElementById("seller-profile");

  var shoplink  = `
  <div class="add_card card" id="profile-image-div">
    <h4>Url del tuo negozio</h4>
    <p>Ecco l'url del tuo negozio: puoi incollarlo sulla tua pagina Facebook e sul tuo sito vetrina.</p>
    <p style="margin:20px 0;"><pre>{{ replaceurl }}</pre></p>
    <p style="margin:20px 0;">Oppure copia questo codice html in qualsiasi parte del tuo sito per mostrare un pulsante al tuo shop</p>
    <p style="margin:20px 0;"><pre>&lt;a href="{{ replaceurl }}" style="padding:10px; background:black;color:white;border-radius:5px;display:block;"&gt;Visita il mio shop online&lt;/a&gt;</pre></p>
  </div>`;
  var shoplink = shoplink .replaceAll("{{ replaceurl }}",link_to_shop );
  sideprofile.insertAdjacentHTML("afterbegin", shoplink);
  
  var custom_script_1 = document.createElement("script");

  custom_script_1.src = "https://apis.google.com/js/platform.js?onload=renderOptIn";
  document.head.appendChild(custom_script_1);

  var block_email_seller =  document.getElementsByClassName("form-group row mp-margin-top-20")[3];
  var block_div_email_seller = block_email_seller.getElementsByTagName("div")[0];
  var block_div_input = block_div_email_seller.getElementsByTagName("input")[0];
  var email_seller = block_div_input.value;
  var id_seller = document.getElementById("seller_id").value;
  var order_number = "SELLER-" + id_seller;
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var tomorrowString = tomorrow.toISOString().substring(0, 10);
  console.log(email_seller , "-", order_number,"-",tomorrowString);

  window.renderOptIn = function() {
    window.gapi.load('surveyoptin', function() {
      window.gapi.surveyoptin.render(
        {
          "merchant_id": 114505364,
          "order_id": id_seller ,
          "email": email_seller ,
          "delivery_country": "IT",
          "estimated_delivery_date": tomorrowString,
        });
    });
  }
  window.___gcfg = {
    lang: 'it_IT'
  };
}
if (window.location.href.indexOf("/index.php?p=add_product") != -1){
//document.getElementById("cus_field").getElementsByClassName("margin-topbtm-10")[4].getElementsByTagName('label')[0].innerHTML = "CAMPI DA RIEMPIRE SE SI VUOLE EVIDENZIARE IL PREZZO UNITARIO<br>Unità di misura della quantità di prodotto Chilo/Litro/ Singole unità... - SELEZIONARE CT SE L'UNITA DI MISURA E' la Singola unità";
//document.getElementById("cus_field").getElementsByClassName("margin-topbtm-10")[6].getElementsByTagName('label')[0].innerHTML = "Quantita' di prodotto inclusa nell'inserzione";
var fieldtitle = document.querySelectorAll("[id='product_name_div']");
var contacaratteri='<div style="margin-top:10px;">Conteggio caratteri: <span id="conteggiocaratterititolo">0<\/span>\/200 - <span id="suggerimentolunghezzatitolo" style="color:red">Titolo Troppo Breve!<\/span>          <a href="https://sell.commerciovirtuoso.it/come-scrivere-il-nome-perfetto-per-il-tuo-prodotto/" target="_blank">Guida: scrivere il titolo perfetto </a><\/div>';
fieldtitle[3].innerHTML+=contacaratteri;

if (document.getElementById('mvm_prod_type_div') !== null) {
document.getElementById('mvm_prod_type_div').style.display= "none";
}

if (document.getElementById('weight') !== null) {
  document.getElementById('weight').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('price').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('comp_price').setAttribute( "onInput", "changecomma(this)" );
  document.getElementById('product_name').setAttribute( "onInput", "tocountchars(this)" );
  document.getElementsByName('cus_brand')[0].setAttribute( "onInput", "capitalizeEachWord(this)" );
}

let variant_count = 0;
$("#add_another_option_td").find("button").click( function() {
  function show_popup() {
    variant_count = variant_count  + 1;
    //replaceOption(variant_count);
  }
window.setTimeout( show_popup, 200 );
});

$(document).on("click", "#remove_option_1", function(){
  variant_count  = variant_count  - 1;
});

//replaceOption(variant_count);

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
function capitalizeEachWord(e) {
  e.value = e.value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
