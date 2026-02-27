/*----- Menu laterale: nasconde testo e allarga logo -----*/
var menuLogoInterval = setInterval(function () {

  var container = document.querySelector('.admin-theme-menu-div-4');
  if (!container) return;

  var text = container.querySelector('p');
  var logo = container.querySelector('.admin-theme-menu-span-1');

  if (!logo) return;

  // Nasconde il testo
  if (text) {
    text.style.display = 'none';
  }

  // Allarga il logo
  logo.style.width = '100%';
  logo.style.height = '56px';
  logo.style.borderRadius = '0';
  logo.style.backgroundSize = 'contain';
  logo.style.backgroundPosition = 'center';
  logo.style.backgroundRepeat = 'no-repeat';

  // Centra contenuto
  container.style.justifyContent = 'center';

  clearInterval(menuLogoInterval);

}, 300);
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

var PoppinsFont = document.createElement('link');
PoppinsFont.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';
PoppinsFont.rel = 'stylesheet';
document.body.appendChild(PoppinsFont);

/*-----Aggiungere link a menu -----*/
var intervalHeader = setInterval(function() {

  var menu = document.querySelector('.admin-header-div-5');
  if (!menu) return;

  var notif = menu.querySelector('a[title="Notifiche"]');
  if (!notif) return;

  // evita doppia iniezione
  if (document.getElementById('cv-header-links')) {
    clearInterval(intervalHeader);
    return;
  }

  var wrap = document.createElement('span');
  wrap.id = 'cv-header-links';
  wrap.style.display = 'inline-flex';
  wrap.style.gap = '12px';
  wrap.style.alignItems = 'center';
  wrap.style.fontSize = '1rem';

  wrap.innerHTML =
    '<a href="https://sell.commerciovirtuoso.it/category/guide/" style="font-size:1rem;">Guide</a>' +
    '<a href="https://sell.commerciovirtuoso.it/domande-frequenti/" style="font-size:1rem;">Domande frequenti</a>' +
    '<a href="tel:+390287176931" style="font-size:1rem;">+39 02 8717 6931</a>';

  menu.insertBefore(wrap, notif);
  var lastSpan = document.querySelector('.admin-header-div-5 .admin-header-span-16');
  if (!lastSpan) return;

  lastSpan.classList.remove('w-full');
  lastSpan.style.width = 'auto';

  clearInterval(intervalHeader);

}, 300);

/*-----Stile Membership -----*/
if (window.location.href.indexOf("/index.php?p=membership_plans") !== -1) {

  var membershipInterval = setInterval(function() {

    var cards = document.querySelectorAll('.border.rounded-lg.h-\\[450px\\]');
    var innerBlocks = document.querySelectorAll('.h-36.overflow-y-auto');

    if (cards.length === 0 && innerBlocks.length === 0) return;

    // rimuove altezza fissa dalle card
    cards.forEach(function(card) {
      card.classList.remove('h-[450px]');
      card.style.height = 'auto';
    });

    // rimuove altezza e overflow dal contenuto interno
    innerBlocks.forEach(function(el) {
      el.classList.remove('h-36', 'overflow-y-auto');
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });

    clearInterval(membershipInterval);

  }, 300);
}

/*-----Aggiungi nuovo prodotto Pulsante in pagina prodotto -----*/
if (window.location.href.indexOf("/index.php?p=add_product&pid=") !== -1) {

  var addProductInterval = setInterval(function() {

    var heading = document.getElementById('page-heading');
    if (!heading) return;

    // evita duplicati
    if (document.getElementById('cv-add-product-btn')) {
      clearInterval(addProductInterval);
      return;
    }

    heading.insertAdjacentHTML(
      'beforeend',
      '<a id="cv-add-product-btn" href="index.php?p=add_product">' +
      '<button type="button" class="pull-right mp-theme-background" ' +
      'style="padding:0.5rem 0.75rem;border-radius:10px;color:#333333;font-weight:600;border:none;">' +
      '✚ Aggiungi nuovo prodotto</button></a>'
    );

    clearInterval(addProductInterval);

  }, 300);
}

/*----- My Account - Blocco URL negozio + Google Survey -----*/
if (window.location.href.indexOf("index.php?p=my_account") !== -1) {

  var myAccountInterval = setInterval(function () {
/*-----Disabilita campo nome negozio-----*/
    if (document.getElementById('store_name') !== null) {
      document.getElementById('store_name').readOnly= true;
      document.getElementById('store_name').style.cursor= "not-allowed";
    }
    var profileBtn = document.getElementById("profile-btn");
    var sideprofile = document.getElementById("seller-profile");
    var sellerIdInput = document.getElementById("seller_id");

    if (!profileBtn || !sideprofile || !sellerIdInput) return;

    // evita doppia iniezione
    if (document.getElementById("cv-shoplink-card")) {
      clearInterval(myAccountInterval);
      return;
    }

    var link_to_shop = profileBtn.href.replace(
      "https://commerciovirtuoso.myshopify.com",
      "https://commerciovirtuoso.it"
    );

    var shoplink =
      '<div class="add_card card" id="cv-shoplink-card" style="padding:20px;border-radius:12px;">' +

        '<h4 style="margin-bottom:10px;">🔗 Url del tuo negozio</h4>' +
        '<p style="margin-bottom:15px;color:#555;">Puoi condividerlo su Facebook o sul tuo sito vetrina.</p>' +

        '<div style="display:flex;gap:10px;align-items:center;margin-bottom:20px;">' +
          '<input type="text" id="cv-shop-url" value="' + link_to_shop + '" readonly ' +
            'style="flex:1;padding:10px;border:1px solid #ddd;border-radius:8px;font-size:14px;">' +
          '<button type="button" onclick="navigator.clipboard.writeText(document.getElementById(\'cv-shop-url\').value)" ' +
            'style="padding:10px 15px;background:#02542D;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">' +
            'Copia</button>' +
        '</div>' +

        '<h4 style="margin-bottom:10px;">💻 Codice HTML pulsante</h4>' +
        '<p style="margin-bottom:15px;color:#555;">Incollalo nel tuo sito per mostrare un pulsante verso il tuo shop.</p>' +

        '<div style="display:flex;gap:10px;align-items:center;">' +
          '<textarea id="cv-shop-code" readonly ' +
            'style="flex:1;padding:10px;border:1px solid #ddd;border-radius:8px;font-size:13px;height:70px;">' +
            '<a href=&quot;' + link_to_shop + '&quot; style=&quot;padding:10px;background:black;color:white;border-radius:5px;display:inline-block;&quot;>Visita il mio shop online</a>' +
          '</textarea>' +
          '<button type="button" onclick="navigator.clipboard.writeText(document.getElementById(\'cv-shop-code\').value)" ' +
            'style="padding:10px 15px;background:black;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">' +
            'Copia</button>' +
        '</div>' +

      '</div>';

    sideprofile.insertAdjacentHTML("afterbegin", shoplink);

    // carica script Google una sola volta
    if (!document.getElementById("cv-google-platform")) {
      var custom_script_1 = document.createElement("script");
      custom_script_1.id = "cv-google-platform";
      custom_script_1.src = "https://apis.google.com/js/platform.js?onload=renderOptIn";
      document.head.appendChild(custom_script_1);
    }

    // recupera email venditore (con protezioni)
    var blocks = document.getElementsByClassName("form-group row mp-margin-top-20");
    if (blocks.length > 3) {
      var input = blocks[3].querySelector("input");
      var email_seller = input ? input.value : "";
    } else {
      var email_seller = "";
    }

    var id_seller = sellerIdInput.value;

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomorrowString = tomorrow.toISOString().substring(0, 10);

    window.renderOptIn = function () {
      if (!window.gapi) return;

      window.gapi.load('surveyoptin', function () {
        window.gapi.surveyoptin.render({
          merchant_id: 114505364,
          order_id: id_seller,
          email: email_seller,
          delivery_country: "IT",
          estimated_delivery_date: tomorrowString
        });
      });
    };

    window.___gcfg = { lang: 'it_IT' };

    clearInterval(myAccountInterval);

  }, 300);
}

/*----- ADD PRODUCT: contatore caratteri + hide tipo prodotto + input helpers (senza varianti) -----*/
if (window.location.href.indexOf("/index.php?p=add_product") !== -1) {

  var addProductHelpInterval = setInterval(function () {

    // 1) Aggiunge contatore solo una volta
    var fieldtitle = document.querySelectorAll("[id='product_name_div']");
    if (fieldtitle && fieldtitle[3] && !document.getElementById("cv-title-counter")) {

      var contacaratteri =
        '<div id="cv-title-counter" style="margin-top:10px;">' +
          'Conteggio caratteri: <span id="conteggiocaratterititolo">0</span>/200 - ' +
          '<span id="suggerimentolunghezzatitolo" style="color:red">Titolo troppo breve!</span> ' +
          '<a href="https://sell.commerciovirtuoso.it/come-scrivere-il-nome-perfetto-per-il-tuo-prodotto/" target="_blank" rel="noopener noreferrer">' +
            'Guida: scrivere il titolo perfetto' +
          '</a>' +
        '</div>';

      fieldtitle[3].insertAdjacentHTML("beforeend", contacaratteri);
    }

    // 2) Nasconde campi
    var prodType = document.getElementById('mvm_prod_type_div');
    if (prodType) prodType.style.display = "none";
    
    var collectionDiv = document.getElementById('category_div');
    if (collectionDiv) collectionDiv.style.display = "none";
    
    // 3) Se gli input esistono, setta gli handler
    var weight = document.getElementById('weight');
    var price = document.getElementById('price');
    var compPrice = document.getElementById('comp_price');
    var productName = document.getElementById('product_name');
    var brand = document.getElementsByName('cus_brand')[0];

    // definisce le funzioni globali (perché le richiami tramite onInput="...")
    window.changecomma = function (e) {
      if (!e) return;
      e.value = (e.value || "")
        .replace(/,/g, '.')
        .replace(/ /g, '')
        .replace(/[a-zA-Z]/g, '');
    };

    window.tocountchars = function (e) {
      var out = document.getElementById("conteggiocaratterititolo");
      var sug = document.getElementById("suggerimentolunghezzatitolo");
      if (!out || !sug || !e) return;

      var n = (e.value || "").length;
      out.innerHTML = n;

      // messaggi
      var text = "Titolo troppo breve!";
      var color = "red";

      if (n > 150) { text = "Stai scrivendo un po' troppo..."; color = "orange"; }
      else if (n > 100) { text = "Perfetto!"; color = "green"; }
      else if (n > 70) { text = "Ci sei quasi..."; color = "orange"; }
      else if (n > 50) { text = "Puoi fare di meglio!"; color = "orange"; }

      sug.innerHTML = text;
      sug.style.color = color;
    };

    window.capitalizeEachWord = function (e) {
      if (!e) return;
      e.value = (e.value || "")
        .toLowerCase()
        .split(' ')
        .map(function (word) { return word ? word.charAt(0).toUpperCase() + word.slice(1) : ""; })
        .join(' ');
    };

    if (weight && !weight.getAttribute("data-cv-hook")) {
      weight.setAttribute("data-cv-hook", "1");
      weight.setAttribute("onInput", "changecomma(this)");
    }
    if (price && !price.getAttribute("data-cv-hook")) {
      price.setAttribute("data-cv-hook", "1");
      price.setAttribute("onInput", "changecomma(this)");
    }
    if (compPrice && !compPrice.getAttribute("data-cv-hook")) {
      compPrice.setAttribute("data-cv-hook", "1");
      compPrice.setAttribute("onInput", "changecomma(this)");
    }
    if (productName && !productName.getAttribute("data-cv-hook")) {
      productName.setAttribute("data-cv-hook", "1");
      productName.setAttribute("onInput", "tocountchars(this)");
      // inizializza conteggio se già c'è testo
      window.tocountchars(productName);
    }
    if (brand && !brand.getAttribute("data-cv-hook")) {
      brand.setAttribute("data-cv-hook", "1");
      brand.setAttribute("onInput", "capitalizeEachWord(this)");
    }

    // Se abbiamo trovato almeno il product_name_div[3] oppure product_name, possiamo chiudere l'interval
    if ((fieldtitle && fieldtitle[3]) || productName) {
      clearInterval(addProductHelpInterval);
    }

  }, 300);
}
