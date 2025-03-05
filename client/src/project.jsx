/**
 * File name: project.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import summary from './images/summary.png';
import blindDogClassDiagram from './images/blindDogClassDiagram.png';
import blindDogOutput from './images/blindDogOutput.png';

export default function Project(){
    return (
        <>
            <h1>My Projects</h1>
            <h2>Blind Dog</h2>
            <img src={blindDogOutput} width={500} height={500}/>
            <p>Agent in park environment. Stops running if there are no more food in the park environment. Continuously moving while there is food.</p>
            <p>I modified some of the code.</p>
            <h2>Blind Dog Class diagram</h2>
            <img src={blindDogClassDiagram} width={500} height={500}/>
            <p>Class diagram describing Blind Dog.</p>
            <p>I created this diagram from scratch.</p>
            <h2>Don't quit social media</h2>
            <img src={summary} width={500} height={500}/>
            <p>Summary and reverse outline of an article about social media.</p>
            <p>I wrote this for comm171.</p>
        </>
    );
}