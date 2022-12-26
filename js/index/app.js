const container = document.querySelector('#container');
const navigation = document.querySelectorAll('.navigation');

navigation.forEach(nav => nav.onclick = e => {
    navigation.forEach(nav => {
        nav.classList.remove('active')
    });
    e.target.classList.add('active')

    let target = e.target.id;
    console.log(target);

    switch (target) {
        case 'home':
            container.innerHTML = `
            <div id="homePage">
            <nav>
                <h3>Smart Farm</h3>
                <a href="#"><i class="fas fa-book"></i> Guide</a>
            </nav>
            <section id="imageArea">
                <picture>
                    <img src="images/index/tech_bg4.webp" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg5.webp" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg1.jpg" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg5.webp" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/sands_design.jpeg" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg5.webp" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg4.webp" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg1.jpg" alt="slide" />
                </picture>
                <picture>
                    <img src="images/index/tech_bg5.webp" alt="slide" />
                </picture>
            </section>

            <section id="congratulations">
                <i class="bi bi-megaphone"></i>
                <span class="congratsP">
                    Congratulations to 0818***5057 earning 5025 NGN
                </span>
            </section>

            <section class="doubleDiv">
                <div id="logoSpan">
                    <div class="flexSpan">
                        <div id="icon"></div>
                        <span id="span">Company Profile</span>
                    </div>
                    <div class="flexSpan">
                        <div id="icon"></div>
                        <span id="span">Financial Security</span>
                    </div>
                    <div class="flexSpan">
                        <div id="icon"></div>
                        <span id="span">Lucky Draw</span>
                    </div>
                    <div class="flexSpan">
                        <div id="icon"></div>
                        <span id="span">Daily Benefits</span>
                    </div>
                </div>
                <div id="cowGift">
                    <img src="images/index/tech_bg5.webp" alt="cow" />
                    <img src="images/index/tech_bg5.webp" alt="gift" />
                </div>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg4.webp" alt="cow img" />
                    <ul>
                        <li>COW<span>(New user)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 day</span></li>
                    </ul>
                </div>
                <p class="highlight">
                    Low investment, high yield, high return!
                </p>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3-3<span>(Buy one get one free)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 days</span></li>
                    </ul>
                </div>
                <ul class="highlight">
                    <li>300 cash back every day.</li>
                    <li>Buy one get one free.</li>
                    <li>Original price 50000. Activity price 35000.</li>
                    <li>
                        Invite friends to participate and send 2450 cash.
                    </li>
                    <li>Invite friends up to 50% off</li>
                </ul>
                <button>ADOPT <span class="countdown"></span></button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3-3<span>(Buy one get one free)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 days</span></li>
                    </ul>
                </div>
                <ul class="highlight">
                    <li>300 cash back every day.</li>
                    <li>Buy one get one free.</li>
                    <li>Original price 50000. Activity price 35000.</li>
                    <li>
                        Invite friends to participate and send 2450 cash.
                    </li>
                    <li>Invite friends up to 50% off</li>
                </ul>
                <button>ADOPT <span class="countdown"></span></button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3-3<span>(Buy one get one free)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 days</span></li>
                    </ul>
                </div>
                <ul class="highlight">
                    <li>300 cash back every day.</li>
                    <li>Buy one get one free.</li>
                    <li>Original price 50000. Activity price 35000.</li>
                    <li>
                        Invite friends to participate and send 2450 cash.
                    </li>
                    <li>Invite friends up to 50% off</li>
                </ul>
                <button>ADOPT <span class="countdown"></span></button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3-3<span>(Buy one get one free)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 days</span></li>
                    </ul>
                </div>
                <ul class="highlight">
                    <li>300 cash back every day.</li>
                    <li>Buy one get one free.</li>
                    <li>Original price 50000. Activity price 35000.</li>
                    <li>
                        Invite friends to participate and send 2450 cash.
                    </li>
                    <li>Invite friends up to 50% off</li>
                </ul>
                <button>ADOPT <span class="countdown"></span></button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3-3<span>(Buy one get one free)</span></li>
                        <li>Total Income: <span>590 NGN</span></li>
                        <li>Deposit: <span>500 NGN</span></li>
                        <li>Daily Income: <span>90 NGN</span></li>
                        <li>Valid Days: <span>1 days</span></li>
                    </ul>
                </div>
                <ul class="highlight">
                    <li>300 cash back every day.</li>
                    <li>Buy one get one free.</li>
                    <li>Original price 50000. Activity price 35000.</li>
                    <li>
                        Invite friends to participate and send 2450 cash.
                    </li>
                    <li>Invite friends up to 50% off</li>
                </ul>
                <button>ADOPT <span class="countdown"></span></button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW2</li>
                        <li>Total Income: <span>5,025 NGN</span></li>
                        <li>Deposit: <span>3,000 NGN</span></li>
                        <li>Daily Income: <span>135 NGN</span></li>
                        <li>Valid Days: <span>15 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW3</li>
                        <li>Total Income: <span>62,000 NGN</span></li>
                        <li>Deposit: <span>20,000 NGN</span></li>
                        <li>Daily Income: <span>1400 NGN</span></li>
                        <li>Valid Days: <span>30 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW4</li>
                        <li>Total Income: <span>205,000 NGN</span></li>
                        <li>Deposit: <span>25,000 NGN</span></li>
                        <li>Daily Income: <span>4,000 NGN</span></li>
                        <li>Valid Days: <span>45 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW9</li>
                        <li>Total Income: <span>11,750,000 NGN</span></li>
                        <li>Deposit: <span>500,000 NGN</span></li>
                        <li>Daily Income: <span>75,000 NGN</span></li>
                        <li>Valid Days: <span>150 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW5</li>
                        <li>Total Income: <span>480,000 NGN</span></li>
                        <li>Deposit: <span>75,000 NGN</span></li>
                        <li>Daily Income: <span>6,750 NGN</span></li>
                        <li>Valid Days: <span>60 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW6</li>
                        <li>Total Income: <span>850,000 NGN</span></li>
                        <li>Deposit: <span>100,000 NGN</span></li>
                        <li>Daily Income: <span>10,000 NGN</span></li>
                        <li>Valid Days: <span>75 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW7</li>
                        <li>Total Income: <span>2,180,000 NGN</span></li>
                        <li>Deposit: <span>200,000 NGN</span></li>
                        <li>Daily Income: <span>22,000 NGN</span></li>
                        <li>Valid Days: <span>90 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser">
                <div class="newUserList">
                    <img src="images/index/tech_bg5.webp" alt="cow img" />
                    <ul>
                        <li>COW7-2</li>
                        <li>Total Income: <span>545,000 NGN</span></li>
                        <li>Deposit: <span>50,000 NGN</span></li>
                        <li>Daily Income: <span>5,500 NGN</span></li>
                        <li>Valid Days: <span>90 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>

            <section class="newUser lastChild">
                <div class="newUserList">
                    <img src="images/index/tech_bg4.webp" alt="cow img" />
                    <ul>
                        <li>COW8-2</li>
                        <li>Total Income: <span>1,660,000 NGN</span></li>
                        <li>Deposit: <span>100,000 NGN</span></li>
                        <li>Daily Income: <span>13,000 NGN</span></li>
                        <li>Valid Days: <span>120 days</span></li>
                    </ul>
                </div>
                <button>ADOPT</button>
            </section>
        </div>
            `
            break;
        case 'order':
            container.innerHTML = `
            <div id="orderPage">
            <section id="overall_order">
                <div id="order_buy">
                    <span id="my_order">My Order</span>
                    <span id="buy">Group Buy</span>
                </div>
                <div id="investment_income">
                    <div>
                        <span id="investment_amount">0 NGN</span>
                        <span>Investment Amount</span>
                    </div>
                    <div id="divider"></div>
                    <div>
                        <span id="income_amount">0 NGN</span>
                        <span>Total Income</span>
                    </div>
                </div>
            </section>
        </div>
            `;
            break;
        case 'activity':
            container.innerHTML = 'activity page';
            break;
        case 'team':
            container.innerHTML = 'team page';
            break;
        case 'me':
            container.innerHTML = `
            <div class="profilePage">
                <header id="header">
                <h5>Profile</h5>
                    <img src="./images/index/sands_design.jpeg" alt="profile image" id="profile-img">
                    <h4>Lorem ipsum</h4>
                    <p>Lorem, ipsum dolor</p>
                    <div id="spanDiv">
                        <small><strong>1000</strong>&nbsp;Lorem.</small>&nbsp;|&nbsp;<small><strong>1000</strong>&nbsp;Lorem.</small>
                    </div>
                </header>
                <div id="profile-content">
				    <h3>your information</h3>
				    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur expedita voluptate corporis? Tempore beatae corporis tempora mollitia sint quae ipsa commodi similique maxime, itaque eos labore repudiandae voluptatum officiis. Officiis saepe unde praesentium, provident dolores veritatis alias placeat voluptatem sunt, iste ipsa itaque et? Incidunt sunt pariatur saepe, adipisci deleniti in amet tempora corporis necessitatibus consequuntur reprehenderit ea eligendi.</p>
			</div>
            </div>
            `;
            break;

        default:
            'no element found'
            break;
    }
});