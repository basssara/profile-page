import Link from "next/link";

export default function cvPage() {
    return (
        <div>
            <table className="info">
                <tr>
                    <td>Name</td>
                    <th>Boburbek Kosimov</th>
                </tr>
                <tr>
                </tr><tr>
                    <td>Date of Birth</td>
                    <td>29/03/1998</td>
                </tr><tr>
                    <td>Location</td>
                    <td>Tashkent, Uzbekistan</td>
                </tr><tr>
                    <td>Mobile</td>
                    <td>+998909041108</td>
                </tr><tr>
                    <td>Email</td>
                    <td>basssara.z77z@gmail.com</td>
                </tr><tr>
                    <th className="link"><Link href={'https://github.com/basssara'}><a>GitHub</a></Link></th>
                </tr>
            </table>
            <h1>Objective</h1>
            <h4>Desire position: Web Developer</h4>
            <h1>Technical Skills</h1>
            <table className="info">
                <tr><th>JavaScript, TypeScript, Node.js, Express.js</th></tr>
                <tr><th>MVC, Web API, RESTful API</th></tr>
                <tr><th>MySQL, MongoDB</th></tr>
                <tr><th>HTML, CSS, Bootstrap, Materialize</th></tr>
                <tr><th>GitHub</th></tr>
                <tr><th>Visual Studio, Visual Studio Code, Command prompt</th></tr>
            </table>
            <h1>Languages</h1>
            <table className="info">
                <tr><th>English</th><th>Itermediate</th></tr>
                <tr><th>Russian</th><th>Native Speaker</th></tr>
                <tr><th>Uzbek</th><th>Native Speaker</th></tr>
            </table>
            <h1>Education</h1>
            <table className="info">
                <tr><th>2017-2021</th><th>Transport and Telecommunication Institute</th><th>Bachelor of Natural Science in Computer Science</th><th>Riga, Latvia</th></tr>
                <tr><th>2014-2017</th><th>Tashkent Professional College of Information Technologies</th><th>Information Resource Center Specialist, Information and Communication Technologies Specialist.</th><th>Tashkent, Uzbekistan</th></tr>
            </table>
            <h1>Several facts about me</h1>
            <table className="info">
                <tr><th>I prefer a healthy lifestyle like traveling, biking and go gym.
                    In my free time I draw characters and doing self-development activities.
                    I am free of the bad habits.
                    I can find the optimal way from difficult situation by myself
                    I have a pet. It is the boy guinea pig named ‘Puhlya’
                </th></tr>
            </table>
            <h1>Courses and Certificates</h1>
            <table className="info">
           <tr>
               <th>Course Name</th>
               <th>Issued</th>
               <th>Year of Study</th>
               <th>Files</th>
           </tr>
           <tr>
               <th>Building Web Applications in PHP</th>
               <th>Coursera</th>
               <th>08/2020 - 10/2020</th>
           </tr>
           <tr>
               <th>React + Redux - Professional development</th>
               <th>Udemy</th>
               <th>09/2019 - 11/2019</th>
           </tr>
           <tr>
               <th>Intensive C# for beginners</th>
               <th>GeekBrains</th>
               <th>25/05/2020 - 07/06/2020</th>
               <th className="link"><Link href={'https://drive.google.com/file/d/1vcKdlBM68eA1uPLn5GaEgIwYpLHNPySp/view?usp=sharing'}>Certificate</Link></th>
           </tr>
           <table className="info">
               <tr>
                   <th>Company name</th>
                   <th>Company Location</th>
                   <th>Duration</th>
                   <th>Description</th>
                   <th>Position</th>
               </tr>
               <tr>
                   <th>UNICON.UZ</th>
                   <th>Tashkent, Uzbekistan</th>
                   <th>09/2021 – present time</th>
                   <th>Carries out a scientifically grounded policy for the development of the industry, the creation of a regulatory framework for the communications sector, the development of areas such as standardization, metrology, certification of equipment used on telecommunication networks, scientific and technical support for the introduction of new equipment and technologies</th>
                   <th>Software testing engineer</th>
               </tr>
           </table>
            </table>
            <style jsx>
                {`
                .info {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }

                .info td, .info th {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                
                .link:hover {
                    background-color: #add;
                }

                h4, h1 {
                    text-align: center;
                }


                `}
            </style>
        </div>
    )
}