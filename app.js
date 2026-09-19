
function applyLanguageFontState(language) {
  const isDhivehi = language === "dv";
  document.documentElement.lang = isDhivehi ? "dv" : "en";
  document.documentElement.dir = isDhivehi ? "rtl" : "ltr";
  document.body.classList.toggle("lang-dv", isDhivehi);
}

const translations = {
  en: {
    agency:"National Centre for Cultural Heritage", title:"Initial Heritage Inspection Form", subtitle:"Baseline condition, visual inspection and photographic survey", languageLabel:"Language", save:"Save locally", clear:"Clear form", print:"Print / PDF", siteDetails:"1. Site and inspection details", siteName:"Site name", siteId:"Site / register ID", islandAtoll:"Island and atoll", address:"Address / location", coordinates:"GPS coordinates", heritageType:"Heritage type", select:"Select", mosque:"Mosque", building:"Historic building", archaeological:"Archaeological site", other:"Other", inspectionDate:"Inspection date", startTime:"Start time", endTime:"End time", weather:"Weather", inspector:"Lead inspector", organisation:"Organisation", team:"Inspection team / local custodian", preparation:"2. Preparation and records", previousReports:"Previous reports reviewed", drawings:"Plans or drawings available", previousPhotos:"Previous photographs reviewed", maintenance:"Maintenance history reviewed", riskRecords:"Disaster or incident records reviewed", permission:"Access permission confirmed", camera:"Camera and scale prepared", ppe:"PPE and safe-access equipment prepared", recordNotes:"Record references and preparation notes", visualInspection:"3. Initial visual inspection", visualHelp:"Select the observed status and add brief notes. Do not disturb historic material during the initial survey.", component:"Component / hazard", notObserved:"Not observed", monitor:"Monitor", actionRequired:"Action required", notesLocation:"Notes and location", defectRegister:"4. Defect and damage register", addDefect:"Add defect", defectNo:"No.", location:"Location / element", defectType:"Defect or hazard", extent:"Extent / measurement", grade:"Grade", photoRefs:"Photo ref.", recommendedAction:"Recommended action", gradingGuide:"Condition grading guide", gradeA:"Good: no significant defect; routine care.", gradeB:"Minor: small defect; observe during regular inspection.", gradeC:"Moderate: maintenance or further assessment is required.", gradeD:"Serious: specialist assessment and planned intervention are required.", gradeE:"Severe: urgent stabilization or protection is required.", gradeF:"Critical: immediate danger; restrict access and notify authorities.", photoLog:"5. Photographic survey log", addPhoto:"Add photograph", photoNo:"Photo no.", fileName:"File name", subjectLocation:"Subject and location", direction:"Direction / viewpoint", scaleUsed:"Scale used", relatedDefect:"Related defect", riskAction:"6. Risk summary and required action", overallCondition:"Overall condition grade", priority:"Response priority", routine:"Routine monitoring", planned:"Planned maintenance / assessment", urgent:"Urgent action", immediate:"Immediate emergency action", immediateActions:"Immediate safety or protective actions taken", followUp:"Recommended follow-up investigation, monitoring or conservation work", detailedMeasurement:"Detailed measurement", structuralAssessment:"Structural assessment", movementMonitoring:"Crack / movement monitoring", environmentalMonitoring:"Environmental monitoring", fireReview:"Fire-safety review", floodReview:"Flood / drainage review", coastalReview:"Coastal erosion assessment", specialist:"Material / conservation specialist", declaration:"7. Inspection declaration", declarationText:"This record reflects conditions visible and safely accessible on the inspection date. It is an initial assessment and does not replace specialist structural, material or engineering investigation.", inspectorName:"Inspector name", signature:"Signature", declarationDate:"Date", footer:"Initial survey form based on the safety and disaster-prevention approach in the ICPC report draft.", remove:"Remove", notes:"Notes", saved:"The form was saved in this browser.", cleared:"The form was cleared.", confirmClear:"Clear all entered information?", draftRestored:"A locally saved draft was restored.", checklistItems:["Site surroundings and shoreline erosion","Drainage, flooding and standing water","Foundations and ground movement","Walls, coral-stone masonry and surface loss","Cracks, displacement, leaning or deformation","Roof covering, structure and leakage","Timber decay, insects or biological growth","Doors, windows and other openings","Moisture, dampness, mould and salt deposits","Fire hazards and electrical installations","Storm, wind and impact damage","Unsafe access, vandalism or human-induced risk"]
  },
  dv: {
    agency:"މަރުކަޒު", title:"ހާލާތު ބަލާ ފޯމު", subtitle:"ބޭސްލައިން ހާލަތު، އަދި ފޮޓޯ ސަރވޭ", languageLabel:"ބަސް", save:"ލޯކަލްކޮށް ސޭވްކުރޭ", clear:"ފޯމު ފުހެލާ", print:"ޕްރިންޓް / PDF", siteDetails:"1. ސައިޓާއި އިންސްޕެކްޝަނާ ގުޅޭ ތަފުސީލު", siteName:"ސައިޓުގެ ނަން", siteId:"ސައިޓް / ރަޖިސްޓްރީ ނަންބަރު", islandAtoll:"ރަށާއި އަތޮޅު", address:"އެޑްރެސް / ހުރި ތަން", coordinates:"ޖީ.ޕީ.އެސް ކޯޑިނޭޓްސް", heritageType:"ތަރިކައިގެ ބާވަތް", select:"ޚިޔާރުކުރައްވާ", mosque:"މިސްކިތް", building:"ތާރީޚީ ޢިމާރާތް", archaeological:"ޤަދީމީ ތަން", other:"އެހެނިހެން", inspectionDate:"އިންސްޕެކްޓްކުރި ތާރީޚު", startTime:"ފެށި ގަޑި", endTime:"ނިމުނު ގަޑި", weather:"މޫސުން", inspector:"އިސް އިންސްޕެކްޓަރު", organisation:"މުއައްސަސާ", team:"އިންސްޕެކްޝަން ޓީމު / ރަށު ފެންވަރުގައި ބަލަހައްޓާ ފަރާތް", preparation:"2. ތައްޔާރުވުމާއި ލިޔެކިޔުންތައް", previousReports:"ކުރީގެ ރިޕޯޓްތައް ބަލައި މުރާޖަޢާކުރުން", drawings:"ޕްލޭންތައް ނުވަތަ ކުރެހުންގްތައް ލިބެންހުރުން", previousPhotos:"ކުރީގެ ފޮޓޯތައް ބަލައި މުރާޖަޢާކުރުން", maintenance:"މަރާމާތުކުރެވިފައިވާ ތާރީޚު ބަލައި މުރާޖަޢާކުރުން", riskRecords:"ކާރިސާތަކާއި ހާދިސާތަކުގެ ރެކޯޑުތައް ބަލައި މުރާޖަޢާކުރުން", permission:"ވަނުމުގެ ހުއްދަ ކަށަވަރުކުރުން", camera:"ކެމެރާއާއި މިންއަޅާ ތަކެތި ތައްޔާރުކުރުން", ppe:"ޕީ.ޕީ.އީ އާއި ރައްކާތެރިކަމާއެކު ވަދެނިކުމެ އުޅުމަށް ބޭނުންވާ ސާމާނު ތައްޔާރުކުރުން", recordNotes:"ރެކޯޑްތަކުގެ ރެފަރެންސް އަދި ތައްޔާރުވުމުގެ ނޯޓްތައް", visualInspection:"3. ފުރަތަމަ ފެންނަ ފެނުމަށް ބަލައި ފާސްކުރުން", visualHelp:"ފާހަގަކުރެވުނު ހާލަތު ޚިޔާރުކޮށް ކުރު ނޯޓެއް ލިޔާށެވެ. ފުރަތަމަ ސާވޭގެ ތެރޭގައި ތާރީޚީ އެއްވެސް މާއްދާއަކަށް/ތަކެއްޗަށް އުނިކަމެއް ނުގެންނާށެވެ.", component:"ބައި / ނުރައްކާ", notObserved:"ފާހަގައެއް ނުކުރެވޭ", monitor:"މޮނިޓަރކުރަންޖެހޭ", actionRequired:"ފިޔަވަޅު އަޅަންޖެހޭ", notesLocation:"ނޯޓު އަދި ތަން", defectRegister:"4. އުނިކަންތައްތަކާއި ލިބިފައިވާ ގެއްލުންތަކުގެ ރަޖިސްޓްރީ", addDefect:"ރޯ އިތުރުކުރުމަށް", defectNo:"ނަންބަރު", location:"ތަން / ބައި", defectType:"އުނިކަން ނުވަތަ ނުރައްކާ", extent:"މިންވަރު / މިން", grade:"ގްރޭޑު", photoRefs:"ފޮޓޯ ރެފަރެންސް", recommendedAction:"ލަފާދޭ ފިޔަވަޅު", gradingGuide:"ހާލަތު ގްރޭޑުކުރުމުގެ އިރުޝާދު", gradeA:"A ރަނގަޅު: ފާހަގަކުރެވޭފަދަ އުނިކަމެއް ނެތް؛ އާދައިގެ ބެލެހެއްޓުން.", gradeB:"B ކުޑަކޮށް: ކުޑަ އުނިކަމެއް؛ އާންމުކޮށް ބަލާ ބެލުމުގައި މޮނިޓަރކުރުން.", gradeC:"C މެދުމިން: މަރާމާތުކުރުން ނުވަތަ އިތުރަށް ދިރާސާކުރުން ބޭނުންވޭ.", gradeD:"D ސީރިއަސް: މާހިރުންގެ ދިރާސާއާއި ޕްލޭންކޮށްގެން މަސައްކަތްކުރުން ބޭނުންވޭ.", gradeE:"E ނާޒުކު: އަވަސް ހައްލެއް ހޯދުން ނުވަތަ ރައްކާތެރިކުރުން ކޮންމެހެން ބޭނުންވޭ.", gradeF:"F ނުރައްކާތެރި: ވަގުތުން ފިޔަވަޅު އަޅަންޖެހޭ ނުރައްކަލެއް؛ ވަނުން މަނާކޮށް ކަމާބެހޭ ފަރާތްތަކަށް އެންގުން.", photoLog:"5. ފޮޓޯ ސަރވޭ ލޮގު", addPhoto:"ފޮޓޯއެއް އިތުރުކުރުމަށް", photoNo:"ފޮޓޯ ނަންބަރު", fileName:"ފައިލުގެ ނަން", subjectLocation:"ސަބްޖެކްޓާއި ތަން", direction:"މިސްރާބު / ބެލި ދިމާ", scaleUsed:"ބޭނުންކުރި ސްކޭލް", relatedDefect:"ގުޅުންހުރި ގެއްލުން", riskAction:"6. ނުރައްކަލުގެ ޚުލާޞާ އަދި އަޅަންޖެހޭ ފިޔަވަޅުތައް", overallCondition:"ޖުމްލަ ހާލަތުގެ ގްރޭޑު", priority:"ފިޔަވަޅު އެޅުމުގެ އިސްކަންދޭ ތަރުތީބު", routine:"އާދައިގެ މަތިން މޮނިޓަރކުރުން", planned:"ޕްލޭންކޮށްގެން މަރާމާތުކުރުން / ދިރާސާކުރުން", urgent:"އަވަސް ފިޔަވަޅު އެޅުން", immediate:"ކުއްލި ހާލަތުގައި ވަގުތުން ފިޔަވަޅު އެޅުން", immediateActions:"ވަގުތުން އެޅުނު ރައްކާތެރިކަމުގެ ފިޔަވަޅުތައް", followUp:"އިތުރަށް ބަލައި ދިރާސާކުރުމަށް، މޮނިޓަރކުރުމަށް ނުވަތަ ކޮންޒަވޭޝަން މަސައްކަތަށް ލަފާދޭ ކަންކަން", detailedMeasurement:"ތަފުސީލީ މިންއެޅުން", structuralAssessment:"ސްޓްރަކްޗަރަލް އެސެސްމަންޓް ހެދުން", movementMonitoring:"ރެނދު / ހަރަކާތްތައް މޮނިޓަރކުރުން", environmentalMonitoring:"ތިމާވެށީގެ ހާލަތު މޮނިޓަރކުރުން", fireReview:"އަލިފާނުގެ ރައްކާތެރިކަން މުރާޖަޢާކުރުން", floodReview:"ފެންބޮޑުވުމާއި ފެންހިންދުމުގެ ނިޒާމު މުރާޖަޢާކުރުން", coastalReview:"ގިރާ ސަރަޙައްދު ދިރާސާކުރުން", specialist:"މެޓީރިއަލް / ކޮންޒަވޭޝަން މާހިރެއްގެ އެހީތެރިކަން ހޯދުން", declaration:"7.އިންސްޕެކްޝަން އިޤްރާރު", declarationText:"މި ރެކޯޑަކީ އިންސްޕެކްޓްކުރި ތާރީޚުގައި ފެންނަން ހުރި އަދި ރައްކާތެރިކަމާއެކު ވާސިލުވެވުނު ހާލަތްތަކުގެ މައްޗަށް ބިނާކޮށް ތައްޔާރުކޮށްފައިވާ ރެކޯޑެކެވެ. މިއީ ފުރަތަމަ މަރުހަލާގެ ދިރާސާއެކެވެ. އަދި މިއީ ސްޓްރަކްޗަރަލް، މެޓީރިއަލް ނުވަތަ އިންޖިނިއަރިންގ ދާއިރާގެ މާހިރުން ހަދާ ތަހުލީލުތަކުގެ ބަދަލުގައި ބޭނުންކުރެވޭނެ އެއްޗެއް ނޫނެވެ.", inspectorName:"އިންސްޕެކްޓަރުގެ ނަން:", signature:"ސޮއި", declarationDate:"ތާރީޚް", footer:"ICPC ރިޕޯޓު ޑްރާފްޓުގެ ސަލާމަތީ އަދި ކާރިސާ ހުއްޓުވުމުގެ އުސޫލަށް ބިނާކުރި ފުރަތަމަ ސަރވޭ ފޯމު.", remove:"ފުހެލާ", notes:"ނޯޓު", saved:"ފޯމު މި ބްރައުޒަރުގައި ސޭވްކޮށްފި.", cleared:"ފޯމު ފުހެލައިފި.", confirmClear:"ލިޔެފައިވާ ހުރިހާ މަޢުލޫމާތެއް ފުހެލަންތޯ؟", draftRestored:"ލޯކަލްކޮށް ސޭވްކުރި ޑްރާފްޓު އަލުން ލޯޑުކޮށްފި.", checklistItems:["ސައިޓުގެ ވަށައިގެންވާ ސަރަޙައްދާއި ގިރާ ސަރަޙައްދު","ފެންހިންދާ ނިޒާމާއި، ފެންބޮޑުވުމާއި، ފެންބޮޑުވެ ހަރުލާފައި ހުރުން","ބިންގަލާއި ބިމަށް އަންނަ ލޮޅުންތައް","ފާރުތައް، ހިރިގަލުގެ ރާނާގަނޑު އަދި ބޭރު ފަށަލަ ގެއްލުން","ރެނދުލުން، ޖާގަ ބަދަލުވުން، އަރިއެޅުން ނުވަތަ ބައްޓަން ގެއްލުން","ފުރާޅުގެ ފަށަލަ، އޮނިގަނޑު އަދި ލީކުވުން","ލަކުޑި ފީވުން، ސޫފާސޫފި އެޅުން ނުވަތަ ގަސް/ފަންގަސް ފެޅުން","ދޮރުތަކާއި، ކުޑަދޮރުތައް އަދި އެހެނިހެން ހުޅުވުންތައް","ތެތްކަން، ފެންދަމައިގަތުން، ކުލަޖެހުން/ފަންގަސް އަދި ލޮނުފައިބާފައި ހުރުން","އަލިފާނުގެ ނުރައްކާތަކާއި ކަރަންޓުގެ ނިޒާމުތައް","ތޫފާން، ވައި އަދި އެއްޗެހި ޖެހިގެން ލިބޭ ގެއްލުން","ވަދެއުޅުމަށް ރައްކާތެރި ނުވުން، ގަސްދުގައި ގެއްލުންދިނުން ނުވަތަ އިންސާނުންގެ ސަބަބުން ދިމާވާ ނުރައްކާ"]
  }
};

let lang = localStorage.getItem("heritageInspectionLanguage") || "en";
const form = document.getElementById("inspectionForm");
const statusBox = document.getElementById("status");

function t(key){ return (translations[lang] && translations[lang][key]) || translations.en[key] || key; }
function setStatus(message){ statusBox.textContent=message; statusBox.classList.add("show"); window.setTimeout(()=>statusBox.classList.remove("show"),3000); }
function renderChecklist(){
  const body=document.getElementById("visualChecklist");
  const values=Array.from(body.querySelectorAll("tr")).map(row=>({state:row.querySelector("input[type=radio]:checked")?.value||"",notes:row.querySelector("textarea")?.value||""}));
  body.innerHTML="";
  (translations[lang].checklistItems || translations.en.checklistItems).forEach((item,i)=>{
    const row=document.createElement("tr");
    row.innerHTML=`<td>${item}</td>${["none","monitor","action"].map(value=>`<td><input type="radio" name="visual_${i}" value="${value}" ${values[i]?.state===value?"checked":""}></td>`).join("")}<td><textarea name="visualNotes_${i}" rows="2" aria-label="${t("notes")}">${values[i]?.notes||""}</textarea></td>`;
    body.appendChild(row);
  });
}
function renderGrades(){
  const selected=document.querySelector('input[name="overallGrade"]:checked')?.value;
  document.getElementById("overallGrade").innerHTML="ABCDEF".split("").map(g=>`<label><input type="radio" name="overallGrade" value="${g}" ${selected===g?"checked":""}>${g}</label>`).join("");
}
function applyLanguage(newLang){
  lang=newLang; localStorage.setItem("heritageInspectionLanguage",lang); applyLanguageFontState(lang); document.getElementById("language").value=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key];});
  renderChecklist(); renderGrades(); updateRemoveLabels();
}
function addDefectRow(data={}){
  const body=document.getElementById("defectRows"), row=document.createElement("tr");
  row.innerHTML=`<td class="row-number"></td><td><input data-field="location" value="${escapeHtml(data.location||"")}"></td><td><textarea data-field="type" rows="2">${escapeHtml(data.type||"")}</textarea></td><td><input data-field="extent" value="${escapeHtml(data.extent||"")}"></td><td><select data-field="grade"><option></option>${"ABCDEF".split("").map(g=>`<option ${data.grade===g?"selected":""}>${g}</option>`).join("")}</select></td><td><input data-field="photo" value="${escapeHtml(data.photo||"")}"></td><td><textarea data-field="action" rows="2">${escapeHtml(data.action||"")}</textarea></td><td class="no-print"><button type="button" class="remove-row">×</button></td>`;
  body.appendChild(row); row.querySelector(".remove-row").addEventListener("click",()=>{row.remove();renumberRows();}); renumberRows(); updateRemoveLabels();
}
function addPhotoRow(data={}){
  const body=document.getElementById("photoRows"), row=document.createElement("tr");
  row.innerHTML=`<td><input data-field="number" value="${escapeHtml(data.number||String(body.children.length+1))}"></td><td><input data-field="file" value="${escapeHtml(data.file||"")}"></td><td><textarea data-field="subject" rows="2">${escapeHtml(data.subject||"")}</textarea></td><td><input data-field="direction" value="${escapeHtml(data.direction||"")}"></td><td><input data-field="scale" value="${escapeHtml(data.scale||"")}"></td><td><input data-field="defect" value="${escapeHtml(data.defect||"")}"></td><td class="no-print"><button type="button" class="remove-row">×</button></td>`;
  body.appendChild(row); row.querySelector(".remove-row").addEventListener("click",()=>row.remove()); updateRemoveLabels();
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renumberRows(){document.querySelectorAll("#defectRows .row-number").forEach((cell,i)=>cell.textContent=i+1);}
function updateRemoveLabels(){document.querySelectorAll(".remove-row").forEach(b=>b.setAttribute("aria-label",t("remove")));}
function tableData(id){return Array.from(document.querySelectorAll(`#${id} tr`)).map(row=>Object.fromEntries(Array.from(row.querySelectorAll("[data-field]")).map(el=>[el.dataset.field,el.value])));}
function serializeForm(){
  const data={fields:{},checks:{},radios:{},defects:tableData("defectRows"),photos:tableData("photoRows"),lang};
  form.querySelectorAll("input:not([type=checkbox]):not([type=radio]), textarea, select").forEach(el=>{if(el.name)data.fields[el.name]=el.value;});
  form.querySelectorAll('input[type="checkbox"]').forEach(el=>data.checks[`${el.name}:${el.value}`]=el.checked);
  form.querySelectorAll('input[type="radio"]:checked').forEach(el=>data.radios[el.name]=el.value);
  return data;
}
function restore(data){
  if(!data)return; applyLanguage(data.lang||lang);
  Object.entries(data.fields||{}).forEach(([name,value])=>{const el=form.elements[name];if(el&&!el.length)el.value=value;});
  Object.entries(data.checks||{}).forEach(([key,value])=>{const [name,val]=key.split(":");const el=form.querySelector(`input[type="checkbox"][name="${name}"][value="${val}"]`);if(el)el.checked=value;});
  Object.entries(data.radios||{}).forEach(([name,value])=>{const el=form.querySelector(`input[type="radio"][name="${name}"][value="${value}"]`);if(el)el.checked=true;});
  document.getElementById("defectRows").innerHTML="";(data.defects||[{}, {}, {}]).forEach(addDefectRow);
  document.getElementById("photoRows").innerHTML="";(data.photos||[{}, {}, {}]).forEach(addPhotoRow);
}
document.getElementById("language").addEventListener("change",e=>applyLanguage(e.target.value));
document.getElementById("addDefect").addEventListener("click",()=>addDefectRow());
document.getElementById("addPhoto").addEventListener("click",()=>addPhotoRow());
document.getElementById("saveButton").addEventListener("click",()=>{localStorage.setItem("heritageInspectionDraft",JSON.stringify(serializeForm()));setStatus(t("saved"));});
document.getElementById("clearButton").addEventListener("click",()=>{if(confirm(t("confirmClear"))){localStorage.removeItem("heritageInspectionDraft");form.reset();document.getElementById("defectRows").innerHTML="";document.getElementById("photoRows").innerHTML="";[{}, {}, {}].forEach(addDefectRow);[{}, {}, {}].forEach(addPhotoRow);renderChecklist();renderGrades();setStatus(t("cleared"));}});
document.getElementById("printButton").addEventListener("click",()=>window.print());
applyLanguage(lang);
const saved=localStorage.getItem("heritageInspectionDraft");
if(saved){try{restore(JSON.parse(saved));setStatus(t("draftRestored"));}catch(e){console.warn("Could not restore draft",e);}}
else{[{}, {}, {}].forEach(addDefectRow);[{}, {}, {}].forEach(addPhotoRow);}


// Font-state fallback: initializes Faruma and follows later changes to <html lang>.
document.addEventListener("DOMContentLoaded", function () {
  applyLanguageFontState(document.documentElement.lang === "dv" ? "dv" : "en");
  const languageObserver = new MutationObserver(function () {
    document.body.classList.toggle("lang-dv", document.documentElement.lang === "dv");
  });
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "dir"] });
});
