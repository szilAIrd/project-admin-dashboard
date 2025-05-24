// const vladHark = document.getElementById('gonosz-kopasz')
// vladHark.addEventListener('hover',giediPrimePopUp)

// function giediPrimePopUp(){
  const target = document.getElementById("gonosz-kopasz");
  const image = document.getElementById("hoverImage");

target.addEventListener("mouseenter", () => {
    image.style.display = "block";
  });

  target.addEventListener("mouseleave", () => {
    image.style.display = "none";
  });
// }