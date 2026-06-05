const navbar =document.getElementById('navbar');
navbar.innerHTML = `
<nav class="navbar">
        <div class="logo"> Seven <span>Sisters</span></div>

        <div class="nav-links">
            <a href="#">Explore States</a>
            <a href="#">Tour Packages</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
        </div>

        <div class="nav-right">
            <a href="#" class="login">Log in</a>
            <a href="#" class="signup">Sign Up</a>
        </div>
    </nav>
`;


const footer =document.getElementById('footer');
footer.innerHTML = `
<!-- FOOTER -->
<footer class="footer">

    <div class="footer-grid">

        <div>
            <h3>Seven Sisters Travel</h3>
            <br>
            <p>
                Connecting travelers with the beauty,
                culture and adventure of Northeast India.
            </p>
        </div>

        <div>
            <h4>Explore</h4>
            <a href="#">All States</a>
            <a href="#">Tour Packages</a>
            <a href="#">Our Story</a>
        </div>

        <div>
            <h4>States</h4>
            <a href="#">Assam</a>
            <a href="#">Meghalaya</a>
            <a href="#">Nagaland</a>
            <a href="#">Manipur</a>
        </div>

        <div>
            <h4>Account</h4>
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Dashboard</a>
        </div>

    </div>

</footer>
`;