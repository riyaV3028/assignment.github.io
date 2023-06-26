function showContent(contentId) {
    var links = document.querySelectorAll("#sidebar .nav a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    var clickedLink = document.querySelector("#sidebar .nav a[href='#']");
    clickedLink.classList.add("active");

    var content = getContent(contentId);
 
    var dynamicContentDiv = document.getElementById("dynamic-content");
    dynamicContentDiv.innerHTML = content;
  }
  
  function getContent(contentId) {
    var content = "";
  
    switch (contentId) {
      case "home":
        content =
          "<h1>Home</h1><p>This is the Home page.</p>";
        break;
      case "contact":
        content = 
          "<h1>Contact</h1><p>This is the contact content.</p>";
        break;
      case "information":
        content =
          "<h1>Information</h1><p>This is the information content.</p>";
        break;
      case "guide":
        content =
          "<h1>Guide</h1><p>This is the guide content.</p>";
        break;
    }
  
    return content;
  }
  