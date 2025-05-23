import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink,Link} from 'react-router-dom'

function Home(){
    return <h3>Welcome to home page</h3>
}

function About(){
    return (
        <>
    <h3>This is about page</h3>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias cumque non, maiores odio earum doloribus tempora. Aliquam ullam saepe velit repellendus exercitationem cumque ratione rerum atque dolorem molestiae, nemo perferendis adipisci fuga dolor, at quas eos voluptatibus quod voluptate minima nesciunt omnis aperiam praesentium! Asperiores, ut dolore! Similique nobis ex, reprehenderit quia consequatur dolore eius sit non, maxime quisquam necessitatibus sunt porro, ratione tempora. Quam exercitationem nulla vero nobis labore eligendi, nisi consequatur. Enim, neque minima labore, explicabo harum velit, illum asperiores eveniet quod quae vero. Autem reiciendis adipisci officiis maxime animi obcaecati nostrum porro assumenda beatae quia sed eum, laboriosam ullam similique fuga. Labore ratione earum voluptate, quasi, quam eos aut error iste tempore ut maxime. Numquam sequi quidem id neque, provident, porro saepe esse laboriosam blanditiis quo, nobis autem doloribus sed? Laborum ullam reiciendis animi amet iusto labore, quam nobis sunt est accusantium voluptas et, illo, necessitatibus ut quasi accusamus exercitationem eligendi corporis! Voluptas incidunt sapiente nihil alias quae dolor! Alias esse vel nobis asperiores, ea repudiandae quas ratione accusamus tempora! A earum provident, ex ducimus error dolor labore! Tempora iusto aspernatur porro consectetur mollitia repellendus minima ea, sapiente labore illo vitae dignissimos, accusamus, id cupiditate debitis magni quia reiciendis blanditiis recusandae quibusdam non temporibus velit maxime delectus. Consequatur, aspernatur voluptates numquam veniam error in sequi harum voluptatem at ut culpa quis, saepe iste, nostrum omnis magnam! Hic, cupiditate inventore? Adipisci est ipsum suscipit atque blanditiis pariatur eum odio quidem inventore ipsam facilis, laudantium ab harum iusto laboriosam repellat assumenda a rem corporis nemo neque eos illum nihil maxime? Alias nostrum explicabo, veritatis voluptatibus quod sint ab odit, repellat, nobis tempora quia. Iste quidem nostrum totam excepturi vitae ipsum, architecto, esse dignissimos molestias facere aliquid iusto. Labore, iste et. Eum suscipit velit nulla temporibus consectetur molestiae totam porro.
    </p>
    </>
)}

function Contact(){
    return <h3>This is contact</h3>
}

function Header(){
    const linkStyle=({isActive})=>isActive?"text-blue-600":"text-gray-700";

    return(
        <nav>
           <NavLink to="/" className={linkStyle}>Home</NavLink>
           <Link to="/" className={linkStyle}>Home</Link>
           <NavLink to="/about" className={linkStyle}>About</NavLink>
           <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </nav>
    )
}
function Path(){
    return(
        <Router>
            <Header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Header>
        </Router>
    )
}
export default Path;  //exporting the component