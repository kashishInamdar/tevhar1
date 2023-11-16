import { useSearchParams } from "react-router-dom";
import "./Home.css"


const GREETINGS = [
    "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत, आई जगदंब देवीच्या क्रुपेने, तुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा",

    "सुखं होवोत ओव्हरफ्लो, मस्ती कधी न होवो स्लो, धन आणि समृद्धीचा होवो वर्षाव, असा होवो तुमचा दीपाळीचा सण छान.",

    "दिवे तेवत राहोत, आम्ही तुमच्या आठवणीत सदैव राहो, जोपर्यंत आहे आयुष्य हीच ईच्छा आहे आमची, दिव्यांप्रमाणे उजळत राहो आयुष्य तुमचे. दिवाळीच्या खूप खूप शुभेच्छा.",

    "दिव्यांच्या रोषणाईने उजळून जावं अंगण, फटाक्यांच्या आवाजाने आसमंत जावा भरून, अशीच यावी दिवाळी सर्वांकडे, सगळीकडे असावा आनंदाचा मौसम."
];

function Home(){
    const [searchParams] = useSearchParams();

    const to =searchParams.get("to");
    const from = searchParams.get("from");

    const greetingNumber= searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0 ;

    const themeNumber = searchParams.get("t")
    return(
        <div>
             <div className={`card-container ${`them-${themeNumber}`}`}>
            <span>Dear {to} 💐</span>
            <p>
                {GREETINGS[greetingNumber]}
            </p>
            <br />
            <br />
            <br />
            <span className="form-text">🙏 एकी अपनी {from}</span>
            </div>
        </div>
    )
}
export default Home;