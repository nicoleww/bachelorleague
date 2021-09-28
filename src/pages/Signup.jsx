
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <>
            <h1>Let's get you signed up...</h1>
            <div className="log-content">
            <form>
                <label>
                    <p>first name:</p>
                <input type="text" />
                </label>
                <label>
                    <p>last name:</p>
                <input type="text" />
                </label>
                <label>
                    <p>email:</p>
                <input type="email" />
                </label>
                <label>
                    <p>password:</p>
                <input type="password" />
                </label>
                <label>
                    <p>confirm password:</p>
                <input type="password" />
                </label>
                <button type="submit" className="log-btn">All Set!</button>
            </form>
            <div className="log-svg">
                <svg width="495" height="447" viewBox="0 0 495 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Ring">
                    <path id="Vector" d="M307.929 86.1269C306.694 84.7952 305.194 83.7365 303.526 83.0189C301.858 82.3014 300.058 81.9407 298.242 81.9602H197.2C195.384 81.9407 193.584 82.3014 191.915 83.0189C190.247 83.7365 188.747 84.7952 187.512 86.1269C185.235 88.5748 183.969 91.794 183.969 95.1373C183.969 98.4806 185.235 101.7 187.512 104.148L222.408 143.939H273.033L308.242 104.148C310.477 101.661 311.687 98.4192 311.629 95.0759C311.571 91.7325 310.249 88.5351 307.929 86.1269V86.1269Z" fill="#FFE500" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="&#60;Ellipse&#62;" opacity="0.15" d="M247.721 446.022C313.88 446.022 367.512 439.027 367.512 430.397C367.512 421.768 313.88 414.772 247.721 414.772C181.562 414.772 127.929 421.768 127.929 430.397C127.929 439.027 181.562 446.022 247.721 446.022Z" fill="#45413C"/>
                    <path id="&#60;Compound Path&#62;" d="M247.721 128.314C217.847 128.314 188.645 137.173 163.806 153.77C138.968 170.366 119.608 193.956 108.176 221.555C96.7444 249.154 93.7533 279.524 99.5812 308.823C105.409 338.122 119.795 365.035 140.918 386.159C162.042 407.282 188.955 421.668 218.254 427.496C247.553 433.324 277.923 430.332 305.522 418.9C333.121 407.468 356.711 388.109 373.307 363.27C389.904 338.432 398.762 309.229 398.762 279.356C398.762 239.297 382.849 200.879 354.523 172.554C326.197 144.228 287.779 128.314 247.721 128.314V128.314ZM247.721 388.731C226.088 388.731 204.942 382.316 186.955 370.298C168.969 358.28 154.95 341.198 146.671 321.212C138.393 301.226 136.227 279.235 140.447 258.018C144.668 236.801 155.085 217.313 170.381 202.016C185.677 186.72 205.166 176.303 226.383 172.083C247.599 167.862 269.591 170.028 289.577 178.307C309.562 186.585 326.644 200.604 338.663 218.591C350.681 236.577 357.096 257.724 357.096 279.356C357.096 308.364 345.572 336.184 325.06 356.696C304.549 377.208 276.729 388.731 247.721 388.731Z" fill="#FFE500"/>
                    <path id="&#60;Path&#62;" d="M247.721 154.356C285.515 154.372 321.929 168.556 349.776 194.108C377.624 219.66 394.879 254.724 398.137 292.377C398.137 288.106 398.762 283.731 398.762 279.356C398.762 239.297 382.849 200.879 354.523 172.554C326.197 144.228 287.779 128.314 247.721 128.314C207.662 128.314 169.244 144.228 140.918 172.554C112.592 200.879 96.6791 239.297 96.6791 279.356C96.6791 283.731 96.6791 288.106 97.3041 292.377C100.562 254.724 117.818 219.66 145.665 194.108C173.512 168.556 209.927 154.372 247.721 154.356Z" fill="#FFF48C"/>
                    <path id="&#60;Path&#62;_2" d="M247.721 414.773C276.729 414.773 304.549 403.249 325.061 382.738C345.572 362.226 357.096 334.406 357.096 305.398C357.081 301.045 356.802 296.696 356.262 292.377C353.172 318.996 340.407 343.552 320.395 361.375C300.383 379.198 274.519 389.045 247.721 389.045C220.923 389.045 195.059 379.198 175.047 361.375C155.035 343.552 142.27 318.996 139.179 292.377C138.639 296.696 138.361 301.045 138.346 305.398C138.346 334.406 149.869 362.226 170.381 382.738C190.893 403.249 218.713 414.773 247.721 414.773V414.773Z" fill="#FFF48C"/>
                    <path id="&#60;Compound Path&#62;_2" d="M247.721 128.314C217.847 128.314 188.645 137.173 163.806 153.77C138.968 170.366 119.608 193.956 108.176 221.555C96.7444 249.154 93.7533 279.524 99.5812 308.823C105.409 338.122 119.795 365.035 140.918 386.159C162.042 407.282 188.955 421.668 218.254 427.496C247.553 433.324 277.923 430.332 305.522 418.9C333.121 407.468 356.711 388.109 373.307 363.27C389.904 338.432 398.762 309.229 398.762 279.356C398.762 239.297 382.849 200.879 354.523 172.554C326.197 144.228 287.779 128.314 247.721 128.314V128.314ZM247.721 388.731C226.088 388.731 204.942 382.316 186.955 370.298C168.969 358.28 154.95 341.198 146.671 321.212C138.393 301.226 136.227 279.235 140.447 258.018C144.668 236.801 155.085 217.313 170.381 202.016C185.677 186.72 205.166 176.303 226.383 172.083C247.599 167.862 269.591 170.028 289.577 178.307C309.562 186.585 326.644 200.604 338.663 218.591C350.681 236.577 357.096 257.724 357.096 279.356C357.096 308.364 345.572 336.184 325.06 356.696C304.549 377.208 276.729 388.731 247.721 388.731Z" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Diamond" d="M305.221 43.9395L292.408 23.7311C291.467 22.2642 290.173 21.0568 288.644 20.2197C287.115 19.3825 285.401 18.9424 283.658 18.9395H211.783C210.04 18.9424 208.326 19.3825 206.797 20.2197C205.269 21.0568 203.974 22.2642 203.033 23.7311L190.221 43.9395C189.054 45.7679 188.487 47.915 188.599 50.0812C188.711 52.2473 189.496 54.3245 190.846 56.0228L240.012 118.523C240.89 119.749 242.047 120.747 243.387 121.436C244.728 122.126 246.213 122.485 247.721 122.485C249.228 122.485 250.714 122.126 252.054 121.436C253.395 120.747 254.552 119.749 255.429 118.523L304.596 56.5436C306.065 54.8005 306.921 52.6237 307.034 50.347C307.147 48.0702 306.51 45.8193 305.221 43.9395Z" fill="#40BDFF" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="&#60;Path&#62;_3" d="M239.283 82.8977L224.179 103.731C223.383 104.852 222.817 106.119 222.513 107.46C222.209 108.801 222.173 110.189 222.408 111.544L230.637 161.023C231.037 163.488 232.308 165.727 234.22 167.333C236.132 168.939 238.557 169.805 241.054 169.773H254.596C257.092 169.805 259.518 168.939 261.43 167.333C263.342 165.727 264.613 163.488 265.012 161.023L273.242 111.544C273.477 110.189 273.441 108.801 273.137 107.46C272.833 106.119 272.267 104.852 271.471 103.731L256.367 82.8977C255.407 81.5224 254.129 80.3992 252.642 79.6237C251.154 78.8481 249.502 78.4431 247.825 78.4431C246.148 78.4431 244.495 78.8481 243.008 79.6237C241.521 80.3992 240.243 81.5224 239.283 82.8977V82.8977Z" fill="#FFE500" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Tri1" d="M247.721 50.1888H188.554C188.432 47.9814 189.016 45.7925 190.221 43.9388L203.033 23.7305C204.072 22.0613 205.6 20.7521 207.408 19.9805L247.721 50.1888Z" fill="#B8ECFF" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Tri2" d="M247.721 50.1888H306.887C307.009 47.9814 306.425 45.7925 305.221 43.9388L292.408 23.7305C291.369 22.0613 289.842 20.7521 288.033 19.9805L247.721 50.1888Z" fill="#B8ECFF" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="&#60;Path&#62;_4" d="M247.721 50.1895V78.5228" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Twinkle1" d="M85.1165 103.939C86.1462 99.3589 88.4549 95.1655 91.7741 91.8462C95.0934 88.527 99.2867 86.2183 103.867 85.1887L141.471 76.4387C142.137 76.2622 142.727 75.8702 143.147 75.3238C143.568 74.7774 143.796 74.1073 143.796 73.4178C143.796 72.7284 143.568 72.0583 143.147 71.5119C142.727 70.9655 142.137 70.5735 141.471 70.397L103.867 61.7512C99.3027 60.6874 95.1277 58.3674 91.814 55.0537C88.5003 51.7401 86.1803 47.5651 85.1165 43.0012L76.4707 5.39702C76.3037 4.69979 75.902 4.0812 75.333 3.64498C74.7641 3.20877 74.0624 2.98146 73.3457 3.00118C72.6962 3.05496 72.0816 3.31733 71.5935 3.74912C71.1054 4.18091 70.77 4.75897 70.6374 5.39702L61.679 43.0012C60.6152 47.5651 58.2952 51.7401 54.9816 55.0537C51.6679 58.3674 47.4929 60.6874 42.929 61.7512L5.32488 70.397C4.6584 70.5735 4.06901 70.9655 3.64851 71.5119C3.22801 72.0583 3 72.7284 3 73.4178C3 74.1073 3.22801 74.7774 3.64851 75.3238C4.06901 75.8702 4.6584 76.2622 5.32488 76.4387L42.929 85.1887C47.5089 86.2183 51.7022 88.527 55.0215 91.8462C58.3407 95.1655 60.6494 99.3589 61.679 103.939L70.6374 141.543C70.8004 142.222 71.1867 142.828 71.7343 143.262C72.2819 143.696 72.9593 143.935 73.6582 143.939C74.3704 143.94 75.063 143.706 75.6281 143.272C76.1933 142.839 76.5994 142.231 76.7832 141.543L85.1165 103.939Z" fill="white" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Twinkle2" d="M448.971 410.814C449.761 407.433 451.475 404.338 453.921 401.873C456.367 399.409 459.45 397.672 462.825 396.856L490.742 390.502C491.233 390.352 491.663 390.049 491.968 389.636C492.274 389.224 492.439 388.724 492.439 388.21C492.439 387.697 492.274 387.197 491.968 386.784C491.663 386.372 491.233 386.068 490.742 385.919L462.825 379.564C459.439 378.771 456.344 377.042 453.895 374.573C451.445 372.105 449.739 368.998 448.971 365.606L442.512 337.794C442.393 337.28 442.099 336.823 441.682 336.5C441.264 336.178 440.748 336.009 440.221 336.023C439.706 336.013 439.204 336.186 438.804 336.51C438.404 336.834 438.131 337.288 438.033 337.794L431.575 365.606C430.807 368.998 429.101 372.105 426.651 374.573C424.201 377.042 421.107 378.771 417.721 379.564L389.804 385.919C389.313 386.068 388.883 386.372 388.577 386.784C388.272 387.197 388.107 387.697 388.107 388.21C388.107 388.724 388.272 389.224 388.577 389.636C388.883 390.049 389.313 390.352 389.804 390.502L417.721 396.856C421.096 397.672 424.179 399.409 426.625 401.873C429.071 404.338 430.785 407.433 431.575 410.814L438.033 438.627C438.109 439.151 438.372 439.631 438.775 439.975C439.177 440.32 439.691 440.507 440.221 440.502C440.763 440.511 441.29 440.328 441.71 439.984C442.13 439.641 442.414 439.16 442.512 438.627L448.971 410.814Z" fill="white" stroke="#263238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
            </div>

        </>
    )
}

export default Signup;