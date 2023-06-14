import "./../styles/main.css";

const Contacts = () => {
    return (  
        <main className="section1">
        <div className="container">
            <h1 className="title_1">Contacts</h1>
    
            <ul className="content-list">
    
                <li className="ColorTG">    
                    <h2 className="title_2">Location</h2>
                    <p>BSUIR, Minsk, Belarus</p>
                </li>
                <li className="ColorTG">    
                    <h2 className="title_2">Email</h2>
                    <p> mish_semenov@mail.ru</p>
                </li>
                <li className="ColorTG">    
                    <h2 className="title_2">Telegramm</h2>
                        <p>@Mik536</p>
                </li>
            </ul>
        </div>
     </main>
    );
}
 
export default Contacts;