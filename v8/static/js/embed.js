// Custom variables
if (!botname) {
  var botname = "ChatbotUI";
}

if (!webhook) {
  var webhook = "https://chatbotui.eilifjohansen.com/chat-widget-demo";
}

if (!botcolor) {
  var botcolor = "#1976d2";
}

if (!botbottom) {
  var botbottom = "20px";
}

if (!boticoncolor) {
  var boticoncolor = botcolor;
}

if (!headerColor) {
  var headerColor = botcolor;
}

if (!titleColor) {
  if (!headerColor) {
  var titleColor = botcolor;
} else {
  var titleColor = headerColor;
}
}

if (boticoncolor) {
  var boticoncolor = boticoncolor;
}

if (!botcolor2) {
  var botcolor2 = "#fff";
}

if (!botcss) {
  var botcss = "";
}

if (!backgroundColor) {
  var backgroundColor = "#ffffff";
}

if (!fontawesome) {
  var fontawesome = "";
}

if (!chartjs) {
  var chartjs = "";
}

// Translations
if (!translateInputText) {
  var translateInputText = "Type a message...";
}

if (!translateStartChatText) {
  var translateStartChatText = "Start chat";
}

if (!translateCloseChatText) {
  var translateCloseChatText = "Close chat";
}

if (!translateMinimizeChatText) {
  var translateMinimizeChatText = "Minimize chat";
}

if (!translateRestartChatText) {
  var translateRestartChatText = "Restart chat";
}

if (!translateSendChatText) {
  var translateSendChatText = "Send message";
}

if (!translateChatError) {
  var translateChatError = "I am facing some issues, please try again later!!!";
}


// Photo svg switch
if (!botphoto) {
  var botphoto = "hello";
  botphotoinside = "";
  chaticon2 =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="' +
    botcolor2 +
    '" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml: space="preserve"><g><path d="M512,224c0-106-114.6-192-256-192S0,118,0,224s114.6,192,256,192h32c32,32,96,64,160,64c-16-16-32-64-32-106 C476.7,337.5,512,282.3,512,224" /></g></svg>';
}

if (botphoto != "hello") {
  chaticon2 = '<img class="imgProfile" alt="" src = "' + botphoto + '"/>';
  boticoncolor = "transparent";
  botphotoinside = "";
}

// SVG Icons
chaticon3 =
  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css">.st0{fill:' +
  botcolor +
  ';}.st1{fill:#6695B0;}.st2{fill:#FFFFFF;}.st3{fill:#4F5D73;}</style><g id="XMLID_1_"><path id="XMLID_3_" class="st0" d="M256,0c141,0,256,115,256,256S397,512,256,512S0,397,0,256S115,0,256,0"/><path id="XMLID_4_" class="st1" d="M256,111.9c-88.2,0-159.9,64.6-159.9,144.1c0,76.4,66.2,139.4,150.4,143.4c5.5,29.9,9.5,48.8,9.5,48.8s40.2-23.6,76.4-65.4c49.6-24.4,83.5-71.7,83.5-126C415.9,176.4,344.2,111.9,256,111.9"/><path id="XMLID_5_" class="st2" d="M392.3,230c0,120.5-136.3,201.6-136.3,201.6s-74.8-336.3,0-336.3S392.3,156,392.3,230z"/><ellipse id="XMLID_6_" class="st2" cx="256" cy="240.2" rx="159.9" ry="144.1"/><circle id="XMLID_7_" class="st3" cx="256" cy="240.2" r="15.8"/><circle id="XMLID_8_" class="st3" cx="319.8" cy="240.2" r="15.8"/><circle id="XMLID_9_" class="st3" cx="192.2" cy="240.2" r="15.8"/></g></svg>';
chaticon =
  '<svg class="imgProfile" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="' +
  botcolor +
  '" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox = "0 0 512 512" style = "enable-background:new 0 0 512 512;" xml: space = "preserve" ><g><path d="M256,465.1c141.4,0,256-100.3,256-224s-114.6-224-256-224S0,117.4,0,241.1c0,56.3,23.8,107.8,63,147.2c-3.1,32.5-13.4,68.2-24.7,94.9c-2.5,6,2.4,12.6,8.7,11.6c72.2-11.8,115.1-30,133.8-39.5C205.4,461.8,230.6,465.1,256,465.1z"/></g></svg >';
sendbot =
  '<svg id="sendButtonIcon" style="margin-top: -2px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="undefined ns-fill-0" fill="' +
  botcolor +
  '" width="25" height="25"> <path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>';
closebot =
  '<svg id="closeIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="undefined ns-fill-0" fill="' +
  headerColor +
  '" width="25" height="25"> <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>';
refreshbot =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="undefined ns-fill-0" fill="' +
  headerColor +
  '" width="25" height="25"> <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';
minimizebot =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 11.5 24 17" class="undefined ns-fill-0" fill="' +
  headerColor +
  '" width="40" height="25"> <path d="M6 19h12v2H6v-2z"/></svg>';

  function bgChange(bg) {
  document.getElementById("closeIcon").style.background='#000000';
}



// Load JS and CSS
function loadjscssfile(filename, filetype) {
  if (filetype == "js") {
    //if filename is a external JavaScript file
    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
  } else if (filetype == "css") {
    //if filename is an external CSS file
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
  }
  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref);
}
if (chartjs) {
  loadjscssfile("https://cdn.lykkesdigitalt.no/v8/static/js/chart.min.js", "js"); //dynamically load and add this .js file
}
if (!botcss) {
  loadjscssfile("https://cdn.lykkesdigitalt.no/v8/static/css/style.css", "css"); //dynamically load and add this .css file
}
if (fontawesome) {
  loadjscssfile(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    "css"
  ); //dynamically load and add this .css file
}
let currentScrollPosition = null;

setTimeout(() => {
  document.body.insertAdjacentHTML(
    "beforeEnd",
    '<button class="profile_div" title="Start chat" id="profile_div" style="background-color: ' +
      boticoncolor +
      ';bottom:' + botbottom + ';" tabindex="0">' +
      chaticon2 +
      '</button><div class="chatwidget" tabindex="0" aria-label="chat" role="dialog" lang="en" id="chatwidget"><div class="chat_header" style="background:' + backgroundColor +'"><span class="chat_header_title" style="color:' +
      titleColor +
      '">' +
      botname +
      '</span><span class="dropdown-trigger"><button title="' +
      translateMinimizeChatText +
      '" id="minimize" style="padding-right: 0px; color: #fff" >' +
      minimizebot +
      '</button><button title="' +
      translateRestartChatText +
      '" id="restart" style="padding-right: 3px; color: #fff" >' +
      refreshbot +
      '</button><button title="' +
      translateCloseChatText +
      '" id="close" style="color: #fff" >' +
      closebot +
      '</button></span></div><div class="chats" id="chats" role="log"></div><div id="chat-footer"><div class="keypad"> <input type="text" id="userInput" aria-label="' +
      translateInputText +
      '" placeholder="' +
      translateInputText +
      '" class="usrInput" ></textarea> <button id="sendButton" title="' +
      translateSendChatText +
      '" tabindex="0">' +
      sendbot +
      "</button> </div></div></div>"
  );

  document.addEventListener("DOMContentLoaded", function () {
    var elemsTap = document.querySelector(".tap-target");
    var instancesTap = M.TapTarget.init(elemsTap, {});
    instancesTap.open();
    setTimeout(function () {
      instancesTap.close();
    }, 4000);
  });

  var chatwidget = document.getElementById("profile_div");
  chatwidget.onkeyup = function keyPress(e) {
    wkey = e.which ? e.which : window.event.keyCode;
    if (wkey == 13) hello();
    if (wkey == 32) hello();

    function hello() {
      toggleVisibility(".profile_div");
      toggleVisibility(".chatwidget");
      document.querySelector(".chatwidget").focus();
    }
  };

  /* Create unique id */
  function create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  //initialization
  ready(function () {
    //Bot pop-up intro
    document.querySelector("div").classList.remove("tap-target-origin");

    //drop down menu for close, restart conversation & clear the chats.
    // $(".dropdown-trigger").dropdown();

    //initiate the modal for displaying the charts, if you dont have charts, then you comment the below line
    // $(".modal").modal();

    //enable this if u have configured the bot to start the conversation.
    // showBotTyping();
    // $("#userInput").prop('disabled', true);

    //global variables
    flow = "start";
    action_name = "action_greet_user";
    user_id = create_UUID();
    memory1 = "";
    memory2 = "";
    memory3 = "";

    //if you want the bot to start the conversation
    startTriggered = true;
  });

  // ========================== restart conversation ========================
  function restartConversation() {
    document.getElementById("userInput").disabled = true;

    flow = "start";
    memory1 = "";
    memory2 = "";
    memory3 = "";

    //destroy the existing chart
    if (document.querySelector(".collapsible"))
      document.querySelector(".collapsible").remove();

    if (typeof chatChart !== "undefined") {
      chatChart.destroy();
    }

    document.querySelector(".botMsg").remove();

    if (document.querySelector(".chart-container"))
      document.querySelector(".chart-container").remove();

    if (typeof modalChart !== "undefined") {
      modalChart.destroy();
    }
    document.querySelector(".chats").innerHTML = "";
    document.querySelector(".usrInput").value = "";
    /*
    document
      .querySelector(".chats")
      .insertAdjacentHTML("beforeend", '<div class="clearfix"></div>');*/
    send("/restart");
  }

  // ========================== let the bot start the conversation ========================
  function action_trigger() {
    // send an event to the bot, so that bot can start the conversation by greeting the user

    showBotTyping();

    fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: action_name,
        flow: flow,
        policy: "MappingPolicy",
        confidence: "0.98",
        sender: user_id,
      }),
    })
      .then(function (r) {
        console.log("Response from Chatbot");
        console.log("Status: ", r.status);
        return r.json();
      })
      .then(function (botResponse) {
        console.log("Response: ", botResponse);

        setBotResponse(botResponse);

        if (botResponse.hasOwnProperty("messages")) {
          setBotResponse(botResponse.messages);
        }
        document.querySelector("#userInput").disabled = false;
      })
      .catch(function (error) {
        setBotResponse("");
        console.log("Error from bot end: ", error);
        document.querySelector("#userInput").disabled = false;
      });
  }

  //=====================================	user enter or sends the message =====================
  document.querySelector(".usrInput").addEventListener("keyup", onSendMessage);
  document
    .querySelector(".usrInput")
    .addEventListener("keypress", onSendMessage);

  function onSendMessage(e) {
    var keyCode = e.keyCode || e.which;

    var text = document.querySelector(".usrInput").value;
    if (keyCode === 13) {
      if (text == "" || text.trim() == "") {
        e.preventDefault();
        return false;
      } else {
        //destroy the existing chart, if yu are not using charts, then comment the below lines
        if (document.querySelector(".collapsible"))
          document.querySelector(".collapsible").remove();

        if (typeof chatChart !== "undefined") {
          chatChart.destroy();
        }

        if (document.querySelector(".chart-container"))
          document.querySelector(".chart-container").remove();

        if (typeof modalChart !== "undefined") {
          modalChart.destroy();
        }

        if (document.querySelector("#paginated_cards"))
          document.querySelector("#paginated_cards").remove();
        if (document.querySelector(".suggestions"))
          document.querySelector(".suggestions").remove();
        if (document.querySelector(".quickReplies"))
          document.querySelector(".quickReplies").remove();
        if (document.querySelector(".dropDownMsg"))
          document.querySelector(".dropDownMsg").remove();

        // document.querySelector(".usrInput").blur();
        setUserResponse(text);
        send(text);
        document.querySelector(".usrInput").focus();
        e.preventDefault();
        return false;
      }
    }
  }

  //==================================== Set user response =====================================

  function setUserResponse(message) {
    var UserResponse = document.createElement("p");
    UserResponse.classList.add("userMsg");
    UserResponse.setAttribute("tabindex", "0");
    UserResponse.style.background = botcolor;
    UserResponse.innerText = message;

    document.querySelector(".chats").appendChild(UserResponse);
    document
      .querySelector(".chats")
      .insertAdjacentHTML("beforeend", '<div class="clearfix"></div>');
    // fadeElIn("")

    document.querySelector(".usrInput").value = "";
    scrollToBottomOfResults();
    showBotTyping();
    if (document.querySelector(".suggestions"))
      document.querySelector(".suggestions").remove();
  }

  //=========== Scroll to the bottom of the chats after new message has been added to chat ======
  function scrollToBottomOfResults() {
    var terminalResultsDiv = document.getElementById("chats");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  //============== send the user message to Chatbot server =============================================
  function send(message) {
    fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flow: flow,
        message: message.replace(/"/g, "'"),
        sender: user_id,
        memory1: memory1,
        memory2: memory2,
        memory3: memory3,
      }),
    })
      .then(function (r) {
        console.log("Response from Chatbot");
        console.log("Status: ", r.status);
        return r.json();
      })
      .then(function (botResponse) {
        console.log("Response: ", botResponse);
        // if user wants to restart the chat and clear the existing chat contents
        if (message.toLowerCase() == "/restart") {
          document.querySelector("#userInput").disabled = false;

          //if you want the bot to start the conversation after restart
          action_trigger();
          return;
        }
        setBotResponse(botResponse);
      })
      .catch(function (error) {
        if (message.toLowerCase() == "/restart") {
          // $("#userInput").prop('disabled', false);
          //if you want the bot to start the conversation after the restart action.
          // action_trigger();
          // return;
        }

        // if there is no response from Chatbot server
        console.log("Error from bot end: ", error);
        setBotResponse("");
      });
  }

  //=================== set bot response in the chats ===========================================
  function setBotResponse(response) {
    //display bot response after 500 milliseconds
    setTimeout(async function () {
      hideBotTyping();
      if (response.length < 1) {
        //if there is no response from Chatbot, send  fallback message to the user

        var fallbackMsg = translateChatError;

        var avatar = document.createElement("img");
        avatar.classList.add("botAvatar");
        avatar.src = botphotoinside;
        avatar.alt = "";

        var chatMsg = document.createElement("p");
        chatMsg.classList.add("botMsg");
        chatMsg.innerText = fallbackMsg;

        // document.querySelector(".chats").appendChild(avatar);
        document.querySelector(".chats").appendChild(chatMsg);
        document
          .querySelector(".chats")
          .insertAdjacentHTML("beforeend", '<div class="clearfix"></div>');
        document
          .querySelectorAll(".chats .botMsg")
          [document.querySelectorAll(".chats .botMsg").length - 1].fadeIn(300);
        /* document
          .querySelectorAll(".chats .botAvatar")
          [document.querySelectorAll(".chats .botAvatar").length - 1].fadeIn(
            300
          );*/
      } else {
        //if we get response from Chatbot

        for (i = 0; i < response.length; i++) {
          //check if the response contains "text"
          if (response[i].hasOwnProperty("text")) {
            var avatar = document.createElement("img");
            avatar.classList.add("botAvatar");
            avatar.src = botphotoinside;
            avatar.alt = "";
            var chatMsg = document.createElement("p");
            chatMsg.classList.add("botMsg");
            chatMsg.setAttribute("tabindex", "0");
            chatMsg.innerText = response[i].text;

            // document.querySelector(".chats").appendChild(avatar);
            document.querySelector(".chats").appendChild(chatMsg);
            document
              .querySelector(".chats")
              .insertAdjacentHTML(
                "beforeend",
                '<div class="clearfix"></div>'
              );
            document
              .querySelectorAll(".chats .botMsg")
              [document.querySelectorAll(".chats .botMsg").length - 1].fadeIn(
                300
              );
            /*  document
              .querySelectorAll(".chats .botAvatar")
              [
                document.querySelectorAll(".chats .botAvatar").length - 1
              ].fadeIn(300);*/
          }

          //check if the response contains "images"
          if (response[i].hasOwnProperty("image")) {
            document
              .querySelector(".chats")
              .insertAdjacentHTML(
                "beforeend",
                '<div class="singleCard">' +
                  '<img class="imgcard" alt="" tabindex="0" src="' +
                  response[i].image +
                  '">' +
                  '</div><div class="clearfix">'
              );
            document
              .querySelectorAll(".chats .imgcard")
              [document.querySelectorAll(".chats .imgcard").length - 1].fadeIn(
                300
              );
          }

          //check if the response contains "flow"
          if (response[i].hasOwnProperty("flow")) {
            flow = response[i].flow;
          }

          //check if the response contains "memory"
          if (response[i].hasOwnProperty("memory1")) {
            memory1 = response[i].memory1;
          }
          if (response[i].hasOwnProperty("memory2")) {
            memory2 = response[i].memory2;
          }
          if (response[i].hasOwnProperty("memory3")) {
            memory3 = response[i].memory3;
          }

          //check if the response contains "attachment"
          if (response[i].hasOwnProperty("attachment")) {
            //check if the attachment type is "video"
            if (response[i].attachment.type == "video") {
              video_url = response[i].attachment.payload.src;

              document
                .querySelector(".chats")
                .insertAdjacentHTML(
                  "beforeend",
                  '<div class="video-container"> <iframe src="' +
                    video_url +
                    '" frameborder="0" title="Youtube video" allowfullscreen></iframe> </div>'
                );
              document
                .querySelectorAll(".chats iframe")
                [document.querySelectorAll(".chats iframe").length - 1].fadeIn(
                  300
                );
            }
          }

          //check if the response contains "custom" message
          if (response[i].hasOwnProperty("custom")) {
            //check if the custom payload type is "quickReplies"
            if (response[i].custom.payload == "quickReplies") {
              quickRepliesData = response[i].custom.data;
              showQuickReplies(quickRepliesData);
              return;
            }

            //check if the custom payload type is "pdf_attachment"
            if (response[i].custom.payload == "pdf_attachment") {
              renderPdfAttachment(response[i]);
              return;
            }

            //check if the custom payload type is "dropDown"
            if (response[i].custom.payload == "dropDown") {
              dropDownData = response[i].custom.data;
              renderDropDwon(dropDownData);
              return;
            }

            //check if the custom payload type is "location"
            if (response[i].custom.payload == "location") {
              document.querySelector("#userInput").disabled = true;
              getLocation();
              scrollToBottomOfResults();
              return;
            }

            //check if the custom payload type is "cardsCarousel"
            if (response[i].custom.payload == "cardsCarousel") {
              restaurantsData = response[i].custom.data;
              showCardsCarousel(restaurantsData);
              return;
            }

            //check if the custom payload type is "chart"
            if (response[i].custom.payload == "chart") {
              // sample format of the charts data:
              // var chartData = { "title": "Leaves", "labels": ["Sick Leave", "Casual Leave", "Earned Leave", "Flexi Leave"], "backgroundColor": ["#36a2eb", "#ffcd56", "#ff6384", "#009688", "#c45850"], "chartsData": [5, 10, 22, 3], "chartType": "pie", "displayLegend": "true" }

              //store the below parameters as global variable,
              // so that it can be used while displaying the charts in modal.
              chartData = response[i].custom.data;
              title = chartData.title;
              labels = chartData.labels;
              backgroundColor = chartData.backgroundColor;
              chartsData = chartData.chartsData;
              chartType = chartData.chartType;
              displayLegend = chartData.displayLegend;

              // pass the above variable to createChart function
              createChart(
                title,
                labels,
                backgroundColor,
                chartsData,
                chartType,
                displayLegend
              );
              return;
            }

            //check of the custom payload type is "collapsible"
            if (response[i].custom.payload == "collapsible") {
              data = response[i].custom.data;
              //pass the data variable to createCollapsible function
              createCollapsible(data);
            }
          }

          scrollToBottomOfResults();

          // Time to wait before showing the next message.
          // We'll make it a random number between 200 and 600 to make it dynamic.
          /* console.log(ms); */

          if (!response[i].hasOwnProperty("buttons")) {
            const ms = Math.random() * (600 - 200) + 200;
            await sleep(ms);
          }
        }
      }

      for (i = 0; i < response.length; i++) {
        //check if the response contains "buttons"
        if (response[i].hasOwnProperty("buttons")) {
          addSuggestion(response[i].buttons);
        }
      }
    }, 500);
  }

  //====================================== Toggle chatbot =======================================
  // Click on custom open chat button
  var el = document.getElementById('open-chatbotui');
if(el){
 document.querySelector("#open-chatbotui").addEventListener(
    "click",
    function () {
      currentScrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      setTimeout(() => document.body.classList.add("chatwidget-no-scroll"), 500);
      setTimeout(
        () => document.querySelector(".chatwidget").classList.toggle("active"),
        40
      );
      toggleVisibility(".chatwidget");
      toggleVisibility(".profile_div");

      if (startTriggered == true) {
        action_trigger();
        startTriggered = false;
      }

      document.body.classList.add("chatbotui-modal-open");

      document.querySelector(".chatwidget").focus();
    },
    false
 )
};

// Click on open chat icon
  document.querySelector("#profile_div").addEventListener(
    "click",
    function () {
      currentScrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      setTimeout(() => document.body.classList.add("chatwidget-no-scroll"), 500);
      setTimeout(
        () => document.querySelector(".chatwidget").classList.toggle("active"),
        40
      );
      toggleVisibility(".chatwidget");
      toggleVisibility(".profile_div");

      if (startTriggered == true) {
        action_trigger();
        startTriggered = false;
      }

      document.body.classList.add("chatbotui-modal-open");

      document.querySelector(".chatwidget").focus();
    },
    false
  );

  //====================================== Render Pdf attachment =======================================
  function renderPdfAttachment(data) {
    pdf_url = data.custom.url;
    pdf_title = data.custom.title;
    document
      .querySelector(".chats")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="pdf_attachment">' +
          '<div class="row">' +
          '<div class="col s3 pdf_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="undefined ns-fill-0" fill="#ffffff" width="25" height="25"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h2c.83 0 1.5.67 1.5 1.5v3zm4-3.75c0 .41-.34.75-.75.75H19v1h.75c.41 0 .75.34.75.75s-.34.75-.75.75H19v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1h1.25c.41 0 .75.34.75.75zM9 9.5h1v-1H9v1zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm11 5.5h1v-3h-1v3z"/></svg></div>' +
          '<div class="col s9 pdf_link">' +
          '<a href="' +
          pdf_url +
          '" target="_blank">' +
          pdf_title +
          " </a>" +
          "</div>" +
          "</div>" +
          "</div><div class='clearfix'></div>"
      );
    document
      .querySelectorAll(".chats .pdf_attachment")
      [document.querySelectorAll(".chats .pdf_attachment").length - 1].fadeIn(
        300
      );
    scrollToBottomOfResults();
  }

  //====================================== DropDown ==================================================
  //render the dropdown messageand handle user selection
  function renderDropDwon(data) {
    var options = "";
    for (i = 0; i < data.length; i++) {
      options +=
        '<option value="' + data[i].value + '">' + data[i].label + "</option>";
    }

    document
      .querySelector(".chats")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="dropDownMsg"><select class="browser-default dropDownSelect" aria-label="Choose a option in the list"> <option value="" disabled selected>Choose your option</option>' +
          options +
          "</select></div><div class='clearfix'></div>"
      );
    document
      .querySelectorAll(".chats .dropDownMsg")
      [document.querySelectorAll(".chats .dropDownMsg").length - 1].fadeIn(300);
    scrollToBottomOfResults();

    //add event handler if user selects a option.
    document.querySelector("select").addEventListener("change", function (e) {
      var value = "";
      var label = "";
      document
        .querySelectorAll("select option:checked")
        .forEach(function (element) {
          console.log("V: ", value);
          console.log("L: ", label);
          label += element.innerText;
          value += element.value;
        });

      setUserResponse(label);
      send(value);
      if (document.querySelector(".dropDownMsg"))
        document.querySelector(".dropDownMsg").remove();
    });
  }

  //====================================== Suggestions ===========================================

  function addSuggestion(textToAdd) {
    setTimeout(function () {
      var suggestions = textToAdd;
      var suggLength = textToAdd.length;

      document
        .querySelector(".chats")
        .insertAdjacentHTML(
          "beforeend",
          ' <div class="singleCard"> <div class="suggestions"><div class="chatwidgetMenu"></div></div></diV>'
        );
      // Loop through suggestions
      for (i = 0; i < suggLength; i++) {
        document
          .querySelector(".chatwidgetMenu")
          .insertAdjacentHTML(
            "beforeend",
            '<div tabindex="0" style="background: ' +
              botcolor +
              '" class="menuChips" data-payload=\'' +
              suggestions[i].payload +
              "'>" +
              suggestions[i].title +
              "</div>"
          );
      }
      scrollToBottomOfResults();
    }, 0);
  }

  // on click of suggestions, get the value and send to Chatbot
  addEventListenerByClass("click", "menuChips", function (e) {
    var text = e.target.innerText;
    var payload = e.target.getAttribute("data-payload");
    console.log("payload: ", e.target.getAttribute("data-payload"));
    setUserResponse(text);
    send(payload);

    //delete the suggestions once user click on it
    if (document.querySelector(".suggestions"))
      document.querySelector(".suggestions").remove();
  });

  // on keypress of suggestions, get the value and send to Chatbot
  addEventListenerByClass("keypress", "menuChips", function (e) {
    var text = e.target.innerText;
    var payload = e.target.getAttribute("data-payload");
    console.log("payload: ", e.target.getAttribute("data-payload"));
    setUserResponse(text);
    send(payload);

    //delete the suggestions once user click on it
    if (document.querySelector(".suggestions"))
      document.querySelector(".suggestions").remove();
  });

  //====================================== functions for drop-down menu of the bot  =========================================

  //restart function to restart the conversation.
  document.querySelector("#restart").addEventListener("click", function () {
    restartConversation();
  });

  var restartchataction = document.getElementById("restart");
  restartchataction.onkeyup = function keyPress(e) {
    wkey = e.which ? e.which : window.event.keyCode;
    if (wkey == 13) restartchataction();
    if (wkey == 32) restartchataction();

    function restartchataction() {
      restartConversation();
      document.querySelector(".chatwidget").focus();
    }
  };

  //clear function to clear the chat contents of the chatwidget.
  if (document.querySelector("#clear")) {
    document.querySelector("#clear").addEventListener("click", function () {
      document.querySelector(".chats").innerHTML = "";
    });
  }

  //close function to close the chatwidget.
  document.querySelector("#close").addEventListener("click", function () {
    document.body.classList.remove("chatwidget-no-scroll");
    if (window.innerWidth < 768) {
      document.documentElement.scrollTop = document.body.scrollTop = currentScrollPosition;
    }
    setTimeout(() => {
      toggleVisibility(".chatwidget");
    }, 500);
    document.querySelector(".chatwidget").classList.toggle("active");

    toggleVisibility(".profile_div");
    scrollToBottomOfResults();

    document.body.classList.remove("chatbotui-modal-open");
  });

  /*var closechataction = document.getElementById("close");
  closechataction.onkeyup = function keyPress(e) {
    wkey = e.which ? e.which : window.event.keyCode;
    if (wkey == 13) closechataction();
    if (wkey == 32) closechataction();

    function closechataction() {
      toggleVisibility(".chatwidget");
      toggleVisibility(".profile_div");
      scrollToBottomOfResults();
    }
  };*/

  //minimize function to minimize the chatwidget.
  document.querySelector("#minimize").addEventListener("click", function () {
    document.body.classList.remove("chatwidget-no-scroll");
    if (window.innerWidth < 768) {
      document.documentElement.scrollTop = document.body.scrollTop = currentScrollPosition;
    }
    setTimeout(() => toggleVisibility(".chatwidget"), 500);
    document.querySelector(".chatwidget").classList.toggle("active");

    toggleVisibility(".profile_div");
    scrollToBottomOfResults();
    document.body.classList.remove("chatbotui-modal-open");
  });

  /* var minimizechataction = document.getElementById("minimize");
  minimizechataction.onkeyup = function keyPress(e) {
    wkey = e.which ? e.which : window.event.keyCode;
    if (wkey == 13) minimizechataction();
    if (wkey == 32) minimizechataction();

    function minimizechataction() {
      toggleVisibility(".chatwidget");
      toggleVisibility(".profile_div");
      scrollToBottomOfResults();
    }
  };*/

  /* Scroll to bottom on click input */

  if (window.innerWidth < 768) {
    document.querySelector(".usrInput").addEventListener("click", function () {
      setTimeout(() => {
        scrollToBottomOfResults();
      }, 20);
      setTimeout(() => {
        scrollToBottomOfResults();
      }, 300);
    });
  }

  //Send message function to send message the conversation.
  document.querySelector("#sendButton").addEventListener("click", function () {
    var text = document.querySelector(".usrInput").value;
    if (text == "" || text.trim() == "") {
      return false;
    } else {
      //destroy the existing chart

      /* chatChart.destroy();
      $(".chart-container").remove();
      if (typeof modalChart !== "undefined") {
        modalChart.destroy();
      }*/

      if (document.querySelector(".chart-container"))
        document.querySelector(".chart-container").remove();

      if (document.querySelector("#paginated_cards"))
        document.querySelector("#paginated_cards").remove();
      if (document.querySelector(".suggestions"))
        document.querySelector(".suggestions").remove();
      if (document.querySelector(".quickReplies"))
        document.querySelector(".quickReplies").remove();
      if (document.querySelector(".dropDownMsg"))
        document.querySelector(".dropDownMsg").remove();

      // document.querySelector(".usrInput").blur();
      setUserResponse(text);
      send(text);
      document.querySelector(".usrInput").focus();
      return false;
    }
  });

  //====================================== Cards Carousel =========================================

  function showCardsCarousel(cardsToAdd) {
    var cards = createCardsCarousel(cardsToAdd);

    document.querySelector(".chats").insertAdjacentHTML("beforeend", cards);
    toggleVisibility("#paginated_cards");

    if (cardsToAdd.length >= 2) {
      document.querySelector(".cards .arrow.prev").fadeIn(3000);
      document.querySelector(".cards .arrow.next").fadeIn(3000);
    }
    document
      .querySelectorAll(".chats .cards")
      [document.querySelectorAll(".chats .cards").length - 1].fadeIn(300);
    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".cards_scroller");
    var card_item_size = 225;

    card
      .querySelector(".arrow.next")
      .addEventListener("click", scrollToNextPage);
    card
      .querySelector(".arrow.prev")
      .addEventListener("click", scrollToPrevPage);

    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
      card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
      card_scroller.scrollBy(-card_item_size, 0);
    }
  }

  function createCardsCarousel(cardsData) {
    var cards = "";

    for (i = 0; i < cardsData.length; i++) {
      title = cardsData[i].name;
      ratings = Math.round((cardsData[i].ratings / 5) * 100) + "%";
      data = cardsData[i];
      item =
        '<div tabindex="0" class="carousel_cards in-left">' +
        '<img class="cardBackgroundImage" alt="" src="' +
        cardsData[i].image +
        '"><div class="cardFooter">' +
        '<span class="cardTitle" title="' +
        title +
        '">' +
        title +
        "</span> " +
        '<div class="cardDescription">' +
        '<div class="stars-outer">' +
        '<div class="stars-inner" style="width:' +
        ratings +
        '" ></div>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

      cards += item;
    }

    var cardContents =
      '<div id="paginated_cards" class="cards"> <div class="cards_scroller">' +
      cards +
      '  <span class="arrow prev fa fa-chevron-circle-left "></span> <span class="arrow next fa fa-chevron-circle-right" ></span> </div> </div>';

    return cardContents;
  }

  //====================================== Quick Replies ==================================================

  function showQuickReplies(quickRepliesData) {
    var chips = "";
    for (i = 0; i < quickRepliesData.length; i++) {
      var chip =
        '<div style="color:#fff;background:' +
        botcolor +
        '" class="chip" tabindex="0" data-payload=\'' +
        quickRepliesData[i].payload +
        "'>" +
        quickRepliesData[i].title +
        "</div>";
      chips += chip;
    }

    document
      .querySelector(".chats")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="quickReplies">' +
          chips +
          '</div><div class="clearfix"></div>'
      );
    document
      .querySelectorAll(".chats .quickReplies")
      [document.querySelectorAll(".chats .quickReplies").length - 1].fadeIn(
        300
      );
    scrollToBottomOfResults();
    const slider = document.querySelector(".quickReplies");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  // on click of quickreplies, get the value and send to Chatbot
  addEventListenerByClass("click", "chip", function (e) {
    var text = e.target.innerText;
    var payload = e.target.getAttribute("data-payload");
    console.log("chip payload: ", e.target.getAttribute("data-payload"));
    setUserResponse(text);
    send(payload);

    //delete the quickreplies
    if (document.querySelector(".quickReplies"))
      document.querySelector(".quickReplies").remove();
  });

  // on click of quickreplies, get the value and send to Chatbot
  addEventListenerByClass("keypress", "chip", function (e) {
    var text = e.target.innerText;
    var payload = e.target.getAttribute("data-payload");
    console.log("chip payload: ", e.target.getAttribute("data-payload"));
    setUserResponse(text);
    send(payload);

    //delete the quickreplies
    if (document.querySelector(".quickReplies"))
      document.querySelector(".quickReplies").remove();
  });

  //====================================== Get User Location ==================================================
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getUserPosition,
        handleLocationAccessError
      );
    } else {
      response = "Geolocation is not supported by this browser.";
    }
  }

  function getUserPosition(position) {
    response =
      "Latitude: " +
      position.coords.latitude +
      " Longitude: " +
      position.coords.longitude;
    console.log("location: ", response);

    //here you add the intent which you want to trigger
    response =
      '/inform{"latitude":' +
      position.coords.latitude +
      ',"longitude":' +
      position.coords.longitude +
      "}";
    document.querySelector("#userInput").disabled = false;
    send(response);
    showBotTyping();
  }

  function handleLocationAccessError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }

    response = '/inform{"user_location":"deny"}';
    send(response);
    showBotTyping();
    document.querySelector(".usrInput").value = "";
    document.querySelector("#userInput").disabled = false;
  }

  //======================================bot typing animation ======================================
  function showBotTyping() {
    document
      .querySelector(".chats")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="botTyping">' +
          '<div class="bounce1"></div>' +
          '<div class="bounce2"></div>' +
          '<div class="bounce3"></div>' +
          "</div>"
      );
    document.querySelector(".botTyping").style.display = "";
    scrollToBottomOfResults();
  }

  function hideBotTyping() {
    if (document.querySelector("#botAvatar"))
      document.querySelector("#botAvatar").remove();
    if (document.querySelector(".botTyping"))
      document.querySelector(".botTyping").remove();
  }

  //====================================== Collapsible =========================================

  // function to create collapsible,
  // for more info refer:https://materializecss.com/collapsible.html
  function createCollapsible(data) {
    //sample data format:
    //var data=[{"title":"abc","description":"xyz"},{"title":"pqr","description":"jkl"}]
    list = "";
    for (i = 0; i < data.length; i++) {
      item =
        "<li>" +
        '<div tabindex="0" class="collapsible-header">' +
        data[i].title +
        "</div>" +
        '<div class="collapsible-body" style="padding:0 14px;overflow:hidden;max-height:0;transition:all 0.2s"><span>' +
        data[i].description +
        "</span></div>" +
        "</li>";
      list += item;
    }
    var contents = '<ul class="collapsible">' + list + "</uL>";
    document.querySelector(".chats").innerHTML += contents;
    document
      .querySelectorAll(".chats .botMsg")
      [document.querySelectorAll(".chats .botMsg").length - 1].fadeIn(100);
    /*document
      .querySelectorAll(".chats .botAvatar")
      [document.querySelectorAll(".chats .botAvatar").length - 1].fadeIn(100);*/

    // initialize the collapsible
    let collapsibles = document.querySelectorAll(".collapsible-header");

    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener("click", function () {
        var $this = this;
        document.querySelectorAll(".collapsible-header").forEach(function (el) {
          if ($this === el) return;
          el.classList.remove("active");
          el.nextElementSibling.style.maxHeight = "0px";
          setTimeout(() => {
            el.nextElementSibling.style.display = "none";
          }, 200);
        });

        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (this.classList.contains("active")) {
          content.style.display = "block";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
          setTimeout(() => {
            content.style.display = "none";
          }, 200);
        }
      });

      collapsibles[i].addEventListener("keypress", function () {
        var $this = this;
        document.querySelectorAll(".collapsible-header").forEach(function (el) {
          if ($this === el) return;
          el.classList.remove("active");
          el.nextElementSibling.style.maxHeight = "0px";
          setTimeout(() => {
            el.nextElementSibling.style.display = "none";
          }, 200);
        });

        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (this.classList.contains("active")) {
          content.style.display = "block";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
          setTimeout(() => {
            content.style.display = "none";
          }, 200);
        }
      });
    }
    scrollToBottomOfResults();
  }

  //====================================== creating Charts ======================================

  //function to create the charts & render it to the canvas
  function createChart(
    title,
    labels,
    backgroundColor,
    chartsData,
    chartType,
    displayLegend
  ) {
    //create the ".chart-container" div that will render the charts in canvas as required by charts.js,
    // for more info. refer: https://www.chartjs.org/docs/latest/getting-started/usage.html
    var html =
      '<div class="chart-container"> <!--<span class="modal-trigger" id="expand" title="expand" href="#modal1"><i class="fa fa-external-link" aria-hidden="true"></i></span>--> <canvas id="chat-chart" ></canvas> </div> <div class="clearfix"></div>';
    document.querySelector(".chats").innerHTML += html;
    document
      .querySelectorAll(".chats .botMsg")
      [document.querySelectorAll(".chats .botMsg").length - 1].fadeIn(100);
    /* document
      .querySelectorAll(".chats .botAvatar")
      [document.querySelectorAll(".chats .botAvatar").length - 1].fadeIn(100); */

    //create the context that will draw the charts over the canvas in the ".chart-container" div
    var ctx = document.getElementById("chat-chart");

    // Once you have the element or context, instantiate the chart-type by passing the configuration,
    //for more info. refer: https://www.chartjs.org/docs/latest/configuration/
    var data = {
      labels: labels,
      datasets: [
        {
          label: title,
          backgroundColor: backgroundColor,
          data: chartsData,
          fill: false,
        },
      ],
    };
    var options = {
      title: {
        display: true,
        text: title,
      },
      layout: {
        padding: {
          left: 5,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: displayLegend,
        position: "right",
        labels: {
          boxWidth: 5,
          fontSize: 10,
        },
      },
    };

    //draw the chart by passing the configuration
    chatChart = new Chart(ctx, {
      type: chartType,
      data: data,
      options: options,
    });

    scrollToBottomOfResults();
  }

  // on click of expand button, get the chart data from gloabl variable & render it to modal
  addEventListenerById("click", "expand", function () {
    //the parameters are declared gloabally while we get the charts data from Chatbot.
    createChartinModal(
      title,
      labels,
      backgroundColor,
      chartsData,
      chartType,
      displayLegend
    );
  });

  //function to render the charts in the modal
  function createChartinModal(
    title,
    labels,
    backgroundColor,
    chartsData,
    chartType,
    displayLegend
  ) {
    //if you want to display the charts in modal, make sure you have configured the modal in index.html
    //create the context that will draw the charts over the canvas in the "#modal-chart" div of the modal
    var ctx = document.getElementById("modal-chart");

    // Once you have the element or context, instantiate the chart-type by passing the configuration,
    //for more info. refer: https://www.chartjs.org/docs/latest/configuration/
    var data = {
      labels: labels,
      datasets: [
        {
          label: title,
          backgroundColor: backgroundColor,
          data: chartsData,
          fill: false,
        },
      ],
    };
    var options = {
      title: {
        display: true,
        text: title,
      },
      layout: {
        padding: {
          left: 5,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: displayLegend,
        position: "right",
      },
    };

    modalChart = new Chart(ctx, {
      type: chartType,
      data: data,
      options: options,
    });
  }
}, 200);

function toggleVisibility(selector) {
  let node = document.querySelector(selector);
  if (selector === ".chatwidget") {
    window.getComputedStyle(node).display == "none"
      ? (node.style.display = "flex")
      : (node.style.display = "none");
  } else {
    window.getComputedStyle(node).display == "none"
      ? (node.style.display = "block")
      : (node.style.display = "none");
  }
}

function ready(callback) {
  document.readyState != "loading"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
}

Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// Animations
Element.prototype.fadeIn = function (ms) {
  let el = this;
  el.style.opacity = 0;
  el.style.filter = "alpha(opacity=0)";
  el.style.display = "inline-block";
  el.style.visibility = "visible";

  if (ms) {
    var opacity = 0;
    var timer = setInterval(function () {
      opacity += 50 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      el.style.opacity = opacity;
      el.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    el.style.opacity = 1;
    el.style.filter = "alpha(opacity=1)";
  }
};

Element.prototype.fadeOut = function (ms) {
  let el = this;
  if (ms) {
    var opacity = 1;
    var timer = setInterval(function () {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        el.style.display = "none";
        el.style.visibility = "hidden";
      }
      el.style.opacity = opacity;
      el.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    el.style.opacity = 0;
    el.style.filter = "alpha(opacity=0)";
    el.style.display = "none";
    el.style.visibility = "hidden";
  }
};

function addEventListenerById(event, id, callback) {
  document.addEventListener(event, function (e) {
    if (e.target && e.target.id == id) {
      callback(e);
    }
  });
}

function addEventListenerByClass(event, className, callback) {
  document.addEventListener(event, function (e) {
    if (e.target && e.target.classList.contains(className)) {
      callback(e);
    }
  });
}

async function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
