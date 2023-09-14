/* ========== Loading section ========= */

document.onreadystatechange = function() {
          if (document.readyState !== "complete") {
              document.querySelector(
                "body").style.visibility = "hidden";
              document.querySelector(
                "#spinner").style.visibility = "visible";
          } else {
              document.querySelector(
                "#spinner").style.display = "none";
              document.querySelector(
                "body").style.visibility = "visible";
          }
      };

     //====== Side bar Menu Toggle======
     let sideMenu = document.querySelector("aside");
     let menuBtn = document.querySelector("#menu-btn");
     let closeBtn = document.querySelector("#close-btn");

     //Open menu
     menuBtn.addEventListener("click", () => {
           sideMenu.style.display = "block"
     })

     // Close menu
     closeBtn.addEventListener("click", () => {
           sideMenu.style.display = "none"
    })

    // ========Toggling Backgroung Theme and colors ======
    let themeTogglerDark = document.querySelector(".theme-toggler span:nth-child(2)");
    let themeTogglerLight = document.querySelector(".theme-toggler span:nth-child(1)");

    themeTogglerDark.addEventListener ("click", () => {
         document.body.classList.add("dark-theme-variables")
         themeTogglerDark.classList.add("active")
         themeTogglerLight.classList.remove("active")
    })
    themeTogglerLight.addEventListener ("click", () => {
          document.body.classList.remove("dark-theme-variables")
          themeTogglerDark.classList.remove("active")
          themeTogglerLight.classList.add("active")
     })