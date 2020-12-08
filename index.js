$darkMode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 toggleDarkMode()
}

function toggleDarkMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(85, 87, 86)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}

$Pinkmode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 togglePinkMode()
}

function togglePinkMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(248, 24, 148)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}

$Bluemode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 toggleBlueMode()
}

function toggleBlueMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(0, 0,138)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}

$Purplemode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 togglePurpleMode()
}

function togglePurpleMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(128, 0,128)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}

$Whitemode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 toggleWhiteMode()
}

function toggleWhiteMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(255,255,255)"
  document.body.style.color = "Black"
  document.body.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}


