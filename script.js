const messages = [
    {
        type: "text",
        content: "Chào đằng ấy nha :))"
    },

    {
        type: "text",
        content: "Dạo này Chang sao rồi, có ổn ko?"
    },

    {
        type: "text",
        content: "Thì... tui cũng k biết mẹ Định có gửi đồ sang cho bà chưa"
    },

    {
        type: "text",
        content: "Nhưng mà bên cạnh đống đồ ăn đó thì tui có mua thêm 2 cái này nữa" 
    },

    {
        type: "image",
        content: "tpbs.jpg"
    },

    {
        type: "text",
        content: "Nghĩ bà k biết nó là gì hen"
    },

    {
        type: "text",
        content: "Thì nó k phải là thuốc đâu, nó là thực phẩm chức năng á"
    },

    {
        type: "text",
        content: "Biết bà ghét uống thuốc thì tui cũng tìm hiểu kĩ trước 2-3 tháng r nên 2 cái đó mới đến tay bà được nên đừng lo nhen."
    },

    {
        type: "text",
        content: "Thì cái hộp Esunvy nó hỗ trợ làm sáng da á, đã lắm. Còn cái gói Transino kia nó giúp trị nám, giảm thâm sau mụn gọi là top đầu dòng trị nám bên Nhật lun."
    },

    {
        type: "text",
        content: "Định lượng thì Esunvy 2 hộp 60v, Transino 1 gói 60v thì bà dùng sau bữa ăn 2 lần/ngày nha. Là cỡ tầm 1 tháng hả."
    },

    {
        type:"text",
        content: "Ò, nếu sau 1 tháng bà thấy cải thiện rõ thì nói tui đặt thêm cũng được k sao cả."
    },

    {
        type: "text",
        content: "Nếu bà tự hỏi s tui biết mà đặt, thì tui biết một khi xa nhà là bà phải vừa học vừa đi làm thì sẽ áp lực dữ lắm, nên đâm ra thức khuya cũng nhiều như cơm bữa thoi."
    },

    {
        type: "text",
        content: "Mà cgi nhiều quá cũng có ảnh hưởng mà, you know :))"
    },

    {
        type: "text",
        content: "Có nhiều lúc bà thấy stress kinh khủng, r thay đổi hóc môn các thứ nữa. Mới đây k biết bà gặp chuyện gì mà phải rơi lệ nữa cơ."
    },

    {
        type: "text",
        content: " Nên là đó, Cocoon, esunvy, transino với sensa cool cái nào bà xài hết r thì kiu tui để tui gửi qua chung với đồ ăn cho😉"
    },

    {
        type: "text",
        content: "Tui biết bà cũng nhớ gia đình nhiều dữ lắm, cũng muốn gặp dữ lắm."
    },

    {
        type:"text",
        content:" Nhưng mà cái Quang muốn thấy nhất là..."
    },

    {
        type: "text",
        content: "trước khi về"
    },

    {
        type:"text",
        content: "thì em hãy là phiên bản ổn và xinh đẹp nhất của bản thân mình khi gặp lại gia đình em."
    },

    {
        type:"text",
        content:"em làm được chứ ? Hứa với Q là em sẽ làm được đi."
    },

    {
        type:"text",
        content: "Còn Q thì vẫn như bthuong thôi, vẫn phát triển bản thân và giữ lời đã từng hứa:"
    },

    {
        type:"text",
        content:"Anh luôn ủng hộ việc học, việc làm và cũng như ước muốn học lên thạc sĩ của em."
    },

    {
        type:"text",
        content: "Con gái học nhiều thì hiểu biết càng nhiều t nói nó oách vô cùng gì đâu á:))"
    },

    {
        type:"text",
        content:"Nói thêm nhé, mấy món kia thì cũng k có giúp dc gì cho em nhiều. Nhưng miễn là giúp đc em thì Q ko có tiếc cgi hết cả."
    },

    {
        type:"text",
        content:"1 câu cuối này,dành cho những lúc em sắp đạt được 1 cgi đó mà k thể cố nổi nữa"
    },

    {
        type:"text",
        content: "'Em đã làm rất tốt rồi! Cố thêm một chút nữa nhé.' Nghe quen quen hen😊"
    },

    {
        type:"text",
        content:"Tới đây thôi nhé,cảm ơn Chang vì đã dành 1 chút tgian ra để đọc ạ"
    }

];


let currentIndex = 0;


const startScreen = document.getElementById("start-screen");

const messageScreen = document.getElementById("message-screen");

const content = document.getElementById("content");

const startBtn = document.getElementById("start-btn");

const nextBtn = document.getElementById("next-btn");


/* =========================
   START
========================= */

startBtn.addEventListener("click", function() {
    startScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
    showContent();

    const music = document.getElementById("bg-music");
    music.volume = 0.1;
    music.play();
});

/* =========================
   NEXT
========================= */

nextBtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= messages.length) {

        showEnd();

        return;
    }


    content.classList.add("fade-out");


    setTimeout(function() {

        content.classList.remove("fade-out");

        showContent();

    }, 250);

});


/* =========================
   SHOW CONTENT
========================= */

function showContent() {

    const item = messages[currentIndex];


    if (item.type === "text") {

        content.innerHTML = `
            <div class="message">
                ${item.content}
            </div>
        `;

    }


    if (item.type === "image") {

        content.innerHTML = `
            <img
                src="${item.content}"
                class="message-image"
                alt="Special image"
            >
        `;

    }


    if (currentIndex === messages.length - 1) {

        nextBtn.textContent = "KẾT THÚC";

    } else {

        nextBtn.textContent = "TIẾP TỤC";

    }

}


/* =========================
   END
========================= */

function showEnd() {

    content.innerHTML = `
        <div class="message">
            ✦<br><br>
            Hết rồi đó.
        </div>
    `;

    nextBtn.classList.add("hidden");

}


/* =========================
   CREATE SNOW
========================= */

const snowContainer = document.querySelector(".snow-container");


for (let i = 0; i < 35; i++) {

    const snow = document.createElement("div");

    snow.classList.add("snow");

    snow.innerHTML = "❄";

    snow.style.left =
        Math.random() * 100 + "%";

    snow.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    snow.style.opacity =
        Math.random() * 0.6 + 0.3;

    snow.style.animationDuration =
        (Math.random() * 8 + 7) + "s";

    snow.style.animationDelay =
        Math.random() * 8 + "s";

    snowContainer.appendChild(snow);

}