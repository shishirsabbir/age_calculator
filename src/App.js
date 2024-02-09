import { useState } from "react";

// main app component
function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

// header component
function Header() {
    return (
        <div className="header">
            <Logo />
            <Nav />
        </div>
    );
}

// logo component
function Logo() {
    return (
        <div className="header__logo logo">
            <img src="img/age_calc.png" alt="logo" className="logo__img" />
            <h1 className="logo__text">
                <span className="logo__text--main">Age</span>
                <span className="logo__text--sub">Calculator</span>
            </h1>
        </div>
    );
}

// nav component
function Nav() {
    return (
        <div className="header__nav nav">
            <ul className="nav__menu">
                <li className="nav__item">About</li>
                <li className="nav__item">Guide</li>
            </ul>
        </div>
    );
}

// main component
function Main() {
    return (
        <div className="content">
            <div className="main">
                <h2 className="main__header">
                    Check if you are eligible for{" "}
                    <span className="main__header--key">
                        climbing the two mountains?
                    </span>
                </h2>
                <Form />
            </div>
        </div>
    );
}

function Form() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");

    const ageFinder = (age) => {
        const birthdate = new Date(age);
        const cur_date = new Date(Date.now());

        // return {
        //     dob: birthdate.getTime(),
        //     today: cur_date.getTime(),
        // };

        return (
            (cur_date.getTime() - birthdate.getTime()) /
            1000 /
            60 /
            60 /
            24 /
            365
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, dob);
        console.log(ageFinder(dob));
    };

    return (
        <div className="in_out">
            <form className="main__form" onSubmit={handleSubmit}>
                <div className="main__form--name">
                    <input
                        type="text"
                        id="name"
                        placeholder="Type your name..."
                        value={name}
                        onChange={(e) => {
                            // console.log(e.target.value);
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="main__form--birth">
                    <label name="birthday">Birthday:</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={dob}
                        onChange={(e) => {
                            // console.log(e.target.value);
                            setDob(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="output switch">
                <p className="output__text--main">
                    Hurray! <span className="sub-text">Nayan</span>
                </p>
                <p className="output__text-tri">
                    You age is{" "}
                    <span className="sub-text">23 years 5 months 6 days.</span>
                </p>
                <div className="img_container">
                    <img
                        className="anim_pop"
                        // className="output-img"
                        src="img/breast.png"
                        alt="Two Mountains"
                    />
                </div>
                <p className="output__text--sub">
                    You can climb up those mountains.
                </p>
            </div>
        </div>
    );
}

// footer component
function Footer() {
    return (
        <div className="footer">
            <p className="footer__text">
                Created By <span className="author">Shishir Sabbir</span>
            </p>
        </div>
    );
}

export default App;
