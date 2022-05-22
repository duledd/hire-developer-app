import React from "react";
import "./Home.scss";
import { toast } from 'react-toastify';


const initialDeveloperList = [
    {"name":"Ben","email":"","number":"54545","image": "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1","experience":"Beginner", "price":"9", "technology":".NET", "language":"English","linkedin":"fgfdfgfg","id":"38f6f0b9-8168-4699-96b9-d67ab501b30a"},
    {"name":"Jackson","email":"","number":"5645645","image":"https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467__340.png","technology":"Java","location":"Novi Sad","price":"3","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ","experience":"Intermediate","language":"Italian","linkedin":"hgfjhjghj","id":"a9fe03c8-5eec-42b0-beea-a6f6f99ccee3"},
    {"name":"Olivia","email":"","number":"56456546","image":"https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803__340.png","technology":"Flutter","location":"Sofia","price":"5","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ","experience":"Senior","language":"Serbian","linkedin":"fggdfgdfgfgfdg","id":"240a6fe5-373b-4ad5-95af-fa0f60e24c0f"},
    {"name":"Mila","email":"","number":"455766","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50XUNVmCwLBsiboW_ezv-O6FK2KRmh38SQ&usqp=CAU","technology":"Javascript","location":"Budapest","price":"5","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ","experience":"Expert","language":"English","linkedin":"ghgfhgfhgfhgfh","id":"79b5e127-2247-4e88-a5a0-d0689961a1df"},
    {"name":"Shon","email":"","number":"4545","image":"https://toppng.com/uploads/preview/avatar-image-for-princearagorn1-obito-uchiha-tobi-11562881031ezxhbi2ucp.png","experience":"Senior", "technology":".NET", "price":"6", "language":"English","linkedin":"ghgfhgfhgf","id":"1759fd84-7a08-47a4-9087-23a770e16990"},
    {"name":"Joe","email":"joe@dfsdf.net","number":"4555645646","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP50pXiubgStZ2CNuJPkQXFpdP-U7PU3VDROqeWYPOgff6Vk_JvomaUJNHczs4wV--HI&usqp=CAU","technology":".NET","location":"London","price":"8","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ","experience":"Intermediate","language":"English","linkedin":"","id":"581662d9-804f-4e33-967f-dda98bc2de97"},
    {"name":"Peter","email":"Peter@dsfsdf.net","number":"5454","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRoV1bSQ2SSUPk-vbZzjf6EK7aVOSp50NsrELhUFcF-c7b2lKnfA7xHNCS2M7HsNWfe8&usqp=CAU","technology":"Pyton","location":"Belgrade","price":"5","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ","experience":"Intermediate","language":"Italian","linkedin":"","id":"df3a8c56-0a0d-42ed-be8c-f63fc70268c5"},
    {"name":"Julie","email":"","number":"54545","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lgk-MNYtE_9q5l8eLmlMCEewZEDatcORNw&usqp=CAU","technology":"PHP","location":"","price":"7","description":"","experience":"Senior","language":"Italian","linkedin":"hjkjhkhjkhjkhjkhjkhjkhjkhjk","id":"3837cb65-346b-4709-b06a-6be2e755dd1c"},
    {"name":"Naomi","email":"naomi@gmail.com","number":"453454353","image":"https://t4.ftcdn.net/jpg/02/78/70/99/360_F_278709964_PhS3MsOE9udVYb5VCin1xCQJlm3HFb9V.jpg","technology":"Javascript","location":"Belgrade","price":"9","description":"","experience":"Intermediate","language":"English","linkedin":"hgfhgfhgfhgfh","id":"1ae30c77-3693-4b7b-841e-b33e99bf6c94"},
    {"name":"Ana","email":"","number":"4534","image":"https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg","price":"7","technology":"Javascript","experience":"Intermediate","language":"Serbian","linkedin":"fgdgdfgdfgdfgfdgfdgdfgdfgfdggfdg","id":"2a970aa3-f98f-4f46-8477-c59c7cca2689"},
    {"name":"John","email":"john@fdsf.net","number":"7878787878","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGWBrHJGm0-dd7S5vGiqKDenXlI27cL8t5U1-Iij20t8X3mhK3phsLZ6qO3JbdBrzEA8&usqp=CAU","technology":".NET","location":"Berlin","price":"9","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ","experience":"Senior","language":"Italian","linkedin":"","id":"897afea3-cb6a-4392-ac97-36a08c7f0e7d"},
    {"name":"Michaela","email":"michaela@gmail.com","number":"453578","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPXTRT46HgYRm6xQVYwwS7H-amyWChChEfjRJop9MKqDRD6MpAbZ0x5YlcLEI6E4u498&usqp=CAU","technology":"Javascript","location":"","price":"6","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ","experience":"","language":"","linkedin":"","id":"16098b1d-9555-4c43-956e-98fbeed90cca"},
    {"name":"Bob","email":"boban@gmail.com","number":"56546","image":"https://www.cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png","technology":".NET","location":"Nis","price":"7","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ","experience":"Beginner","language":"","linkedin":"fgdfgfdgdfgdfgdfg","id":"fb5adbc9-bdbd-4187-a89d-fdb3cc57d47c"},
    {"name":"Jenny","email":"jenny@gmail.com","number":"4543534","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmgChx_ivTx_k0bEn1KzswbpPRavt4Zs0HoAggad0an9PyoNpRB9RLSjWLTtR_ZpTwAI&usqp=CAU","technology":"Java","location":"Nis","price":"11","description":"","experience":"Intermediate","language":"English","linkedin":"ghgfhgfhgfhgfh","id":"937559ec-4f4b-4226-a7c4-52aab7102a70"},
];
export const Home = ({setDevelopers, setProjects}) => {
    const setInitialLocalStorage = (e) => {
        e.preventDefault();
        JSON.parse(localStorage.getItem('developers') || "[]");
        
        setDevelopers(initialDeveloperList);
        
        localStorage.setItem('developers', JSON.stringify(initialDeveloperList));
        toast.success("Developers added to list!!");
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setDevelopers([]);
        setProjects([]);
        toast.success("Your local storage is clear!");
    };

    return (
        <div className="main-home">
            <div className="container">
                <h2>Welcome to Hire Developer App</h2>
                <p>This is a simple Application for enrolling developers, changing their data and engaging in a specific project.</p>
                <p>To experience the functionality of the application set the initial developers.</p>
                <p>You can set the initial list of developers by click on the button below. Also when you are done using this App you can clear your local storage by click on the button below.</p>
                <button className="set" onClick={setInitialLocalStorage}>Set developers</button>
                <button className="clear" onClick={clearLocalStorage}>Clear Local storage</button>
            </div>
        </div>
    )
}