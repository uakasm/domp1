let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
const para=`i posses a very good command 
    over the full stack developement technology like MERN which can be seen in my work
    over the github
`;
  const p=document.querySelector(".accordian1")
  p.innerHTML=para;
  p.style.marginLeft="50px";