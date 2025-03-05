/**
 * File name: about.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import MyPhoto from "./customProfile";
import Resume from "./assets/George_Resume.pdf"

export default function About(){
    return (
    <>
        <h1>About</h1>
        <MyPhoto />
        <p>Name: George Jose Cayabyab</p>
        <p>Say ngaran koy George Cayabyab, pangasinense!</p>
        <p>I like taking walks, and I have been adjusting to the cold weather here in Canada!</p>
        <p>So far, life is good.</p>

        <a href={Resume} download="resume.pdf">
            download resume
        </a>
    </>
    );
}