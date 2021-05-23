const app = document.getElementById('app')
const a = document.getElementById('search')
a.style.display = "none"
function searchOnclick() {
    a.style.display = ""
}
function searchOnchange() {
    a.style.display = "none"
}
function search() {
    const input = document.getElementById('searchInput')
    const filter = input.value.toUpperCase()
    const ul = document.getElementById("search")
    const li = ul.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0]
        const txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ""
      } else {
        li[i].style.display = "none"
      }
    }
  }