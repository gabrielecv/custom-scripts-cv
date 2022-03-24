var dltimg = document.getElementsByClassName("confirm-del-img")[0];
dltimg.setAttribute("data-value","all");
document.getElementById("image_upload_div").innerHTML += "<div class='del_img_cstpos' id='del_img'></div>";
document.getElementsByClassName("del_img_cstpos")[0].appendChild(dltimg);
document.getElementById("add_new_images").onclick(document.getElementById("mydropzone").click());
$("#mydropzone").bind("DOMSubtreeModified", function() {document.getElementById("img_dz").click();})
var customfields = document.getElementById("cus_field");
var cusfield_before = document.getElementById("product_desc_div");
var parent_cusfield = document.getElementById("mp-prod-form").getElementsByClassName("row")[1].getElementsByClassName("col-lg-12")[0].getElementsByClassName("add_card")[0];
parent_cusfield.insertBefore(customfields,cusfield_before);
var shipping = customfields.getElementsByTagName("div")[1].getElementsByTagName("select")[0];
if (shipping.options[shipping.selectedIndex].value == '') {shipping.options[1].selected = true;}
var product_name = document.getElementById("product_name").value.split(" ");
var product_type = document.getElementById("product_type");
if (product_type.value == '') {product_type.setAttribute('value',product_name[2]);}
parent_cusfield.getElementsByTagName("h4")[0].style = "display:none;";
parent_cusfield.getElementsByTagName("p")[0].style = "display:none;";
var blocchi_formgroup = parent_cusfield.getElementsByClassName("form-group");
blocchi_formgroup[0].style = "display:none;";
document.getElementById("product_type_div").getElementsByTagName("div")[0].style = "display:none;";
blocchi_formgroup[1].classList.remove('col-lg-9');
blocchi_formgroup[1].classList.add('col-lg-3');
blocchi_formgroup[1].style = "margin-right:10px;";
blocchi_formgroup[3].classList.remove('col-lg-9');
blocchi_formgroup[3].classList.add('col-lg-12');
var blocchi_customfields = customfields.getElementsByClassName("form-group");
blocchi_customfields[0].classList.remove('col-lg-9');
blocchi_customfields[0].classList.add('col-lg-6');
blocchi_customfields[0].style = "margin-right:10px;";
blocchi_customfields[1].classList.remove('col-lg-9');
blocchi_customfields[1].classList.add('col-lg-6');
cusfield_before.classList.remove('col-lg-9');
cusfield_before.classList.add('col-lg-12');
var savebutton = document.getElementById("prod-form-save-btn");
var actions_parent = document.getElementById("page-heading").getElementsByTagName("div")[1];
var action_button = actions_parent.getElementsByTagName("button")[0];
var savebuttonbefore = parent_cusfield.querySelectorAll("#seller_email_div")[0];
parent_cusfield.insertBefore(savebutton,savebuttonbefore);
var approvebtn = actions_parent.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0];
savebutton.style = "background:gold;color:black;padding: 15px 30px; position: absolute;	width: fit-content;right: 20px; top: -70px; z-index: 1;";
savebutton.innerHTML = "SALVA";
approvebtn.classList.add('prime-btn');
approvebtn.classList.add('wk_btn');
approvebtn.innerHTML = "APPROVA";
approvebtn.style = "margin-top:-45px; margin-right:10px";
actions_parent.insertBefore(approvebtn,action_button);
var parent_productname = document.querySelectorAll("#product_name_div")[1];
var parent_productname_label = parent_productname.getElementsByTagName("label")[0];
var nome_da_cercare = parent_productname.getElementsByTagName("input")[0].value;
parent_productname_label.innerHTML += "<a style='color:black;padding:5px;background:orange;margin-right:5px;margin-bottom:5px;' href='https://www.amazon.it/s?k=" + nome_da_cercare.replace(/ /g,"+") + "' target='_blank'>Cerca su Amazon</a>";
parent_productname_label.innerHTML += "<a style='color:white;padding:5px;background:blue;margin-bottom:5px;' href='https://www.google.com/search?q=" + nome_da_cercare.replace(/ /g,"+") + "' target='_blank'>Cerca su Google</a>";
const nome_splittato = nome_da_cercare.split(" ");
if (nome_splittato[0] == nome_splittato[0].toUpperCase()) {
  for (var i = 0; i < nome_splittato.length; i++) {
    nome_splittato[i] = nome_splittato[i].charAt(0).toUpperCase() + nome_splittato[i].slice(1).toLowerCase();
  }const nome_normalizzato = nome_splittato.join(" "); }var bloccoimmagine = document.getElementById("image_div").getElementsByClassName("add_card")[0];
bloccoimmagine.getElementsByTagName("h4")[0].style ="display:none;";
bloccoimmagine.getElementsByTagName("p")[0].style ="display:none;";
parent_productname_label.innerHTML += "<a id=\"timer\" style=\"font-size:30px;position:absolute;font-weight:600;right:150px; top: -70px\"></a>";
function getText(n, isInnerNode) {
  var rv = '';
  if (n.nodeType == 3) {
      rv = n.nodeValue;
  } else {
      var partial = "";
      var d = getComputedStyle(n).getPropertyValue('display');
      if (isInnerNode && d.match(/^block/) || d.match(/list/) || n.tagName == 'BR') {
          partial += "<br>";}
      for (var i = 0; i < n.childNodes.length; i++) {
          partial += getText(n.childNodes[i], true);
      }
      rv = partial;
  }
  return rv;
 };
function FormattaDescrizione(){
  console.log("Eseguo");
  var description = document.getElementById("product_desc_ifr");
  var description_unformatted = getText(description.contentWindow.document.body);
  description.contentWindow.document.body.innerHTML = description_unformatted;
}
cusfield_before.getElementsByTagName("label")[0].innerHTML += "<button style=\"float:right;\" type=\"button\" onclick=\"FormattaDescrizione()\">Formatta descrizione</button>";
function startTimer(){
  var hou = 1;
  var sec = 60;
  setInterval(function(){
    document.getElementById("timer").innerHTML = hou +" : " + sec ;
    sec--;
    if(sec == 00){
      hou--;
      sec = 60;
    }
    },1000);
}
var si_muove = false;
document.onmousemove = function() {
  if (si_muove == false) {
    si_muove = true;
    startTimer()
  }
}
