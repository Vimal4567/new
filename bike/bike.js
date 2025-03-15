/*document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    
    images.forEach(img => {
        img.addEventListener("click", function() {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="Bike1 Image">
                </div>
            `;
            document.body.appendChild(modal);

            document.querySelector(".close").addEventListener("click", function() {
                modal.remove();
            });
        });
    });
}); */

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }
    
    alert(`Thank you, ${name} ${email}! Your message has been sent.`);
    
    document.getElementById("name").value=" ";
    document.getElementById("email").value="";
    document.getElementById("message").value = "";
}
