import React from "react";
import { Outlet, Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <h1>AboutPage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi ullam ea! Nisi quasi, sed
               deserunt iure aperiam harum atque temporibus odio maiores ipsa fugit quidem, corporis ab, veritatis repellat.</p>
            <ul>
              <li><Link to="contacts">Our Contact</Link></li>
              <li><Link to="team">Our Team</Link></li>
            </ul>

            <Outlet/>
            {/* <Routes>
              <Route path="contacts" element={<p>Our Contact, will call me and i will tell you true</p>}/>
              <Route path="team" element={<p>Our Team. This best team in the Planet!</p>}/>
            </Routes> */}
        </>
    );
};

export default AboutPage
