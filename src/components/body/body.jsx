import "./body.css"
import logo from "../Assets/logo1.png"
const Body = () => {
    return (
        <>
            <div className="head-part-1">
                <div className="logo utils-flex-center">

                    <img src={logo} alt="logoImg" />
                    <h2>HIKERS</h2>
                </div>
                <div className="btns">
                    <div className="btn">
                        <button>Home</button>
                        <button>About</button>
                        <button>Package</button>
                        <button>Gallery</button>
                        <button>Contacts</button></div>
                    <div className="search"><input placeholder="Search" /></div>
                </div>
                <div className="mid-part utils-flex">
                    <div className="tst">
                        <div>* * * * *</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni maxime quis consequatur reprehenderit autem non iure? Ea distinctio totam officia suscipit tempora. Ratione nisi recusandae debitis, quo sint quia!</p>
                        <h2>-QUOTES-</h2>
                    </div>
                    <div className="mid-part-2">
                        <h1>HIKE MORE</h1>
                        <p>---Worry Less---</p>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quo autem perspiciatis suscipit iste, vel alias! Fugit dicta eius officia ipsum! Maxime est dolorem minima cupiditate a perferendis delectus laborum.</div>
                        <button>Learn More</button>
                    </div>


                </div>
            </div>
            <div className="part-2">
                <div className="animatedtext">
                    <div className="waviy">

                        <span style={{ "--i": 2 }}>1</span>
                        <span style={{ "--i": 3 }}>0</span>
                        <span style={{ "--i": 4 }}>0</span>
                        <span style={{ "--i": 5 }}>0</span>
                        <span style={{ "--i": 6 }}>+</span>
                        <span>Route & 1 Million Hikers</span>
                        <br></br>
                        <span>Memorable Memories.</span>
                        <br></br>
                     
                    </div>
                    
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestias quod, eos quia reiciendis aut temporibus ipsam quisquam omnis distinctio quaerat quo consequuntur blanditiis alias aliquid rerum, minima, ipsum laboriosam!</p>


            </div>
            <div className="part-3">
                <div className="utils-flex-center">
                    <h1>Choose Your Level</h1>
                </div>
                <div className="utils-flex package">
                    <div><p>Beginner</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum asperiores sunt, soluta omnis ducimus ea.</p>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi magni, accusamus error provident nulla quidem ducimus, quas nesciunt ratione voluptate blanditiis quis exercitationem deleniti. Consequuntur omnis quis eaque nobis.</p>
                   <button>Learn More</button>
                    </div>
                    <div><p>Experienced</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia ipsum corrupti consequatur qui, ducimus, laborum .</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam, quidem odio facilis saepe autem temporibus rem cupiditate voluptates praesentium, nobis atque reiciendis officia eligendi ipsa vero esse optio velit!</p>
                    <button>Learn More</button>
                    </div>
                    
                    <div>
                        <p>Expert</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi deserunt possimus consectetur odit nobis, amet.</p>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, ea aut hic omnis odit dicta saepe tempora obcaecati eius sint delectus nesciunt similique minus expedita eos sed, explicabo adipisci!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="foot utils-flex-center"><p>CopyRight@2023 Hikers All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Body