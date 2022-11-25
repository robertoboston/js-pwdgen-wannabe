//1
let name_user=prompt('digita qui il tuo nome');
console.log(name_user)
//2
let surname_user=prompt('digita qui il tuo cognome')
console.log(surname_user)
//3
let color_user=prompt('digita qui il tuo colore preferito')
console.log(color_user)
//4
  4.1
  let content_tag = document.getElementById('password').innerHTML;
  4.2
  let string=name_user+surname_user+color_user+content_tag;
  4.3
  document.getElementById('password').innerHTML=string
  console.log(string)


