import "./style.scss";
import {useEffect} from "react";
import gsap from "gsap";

const Launch = () => {

    useEffect(() => {
        let tl = gsap.timeline({repeat: -1, repeatDelay: 1}),
            labels = document.getElementsByClassName("labels"),
            rocket = document.querySelectorAll(".rocket__body, .rocket__wing, .rocket__fire"),
            smokeL = document.querySelectorAll(".rocket__smoke--left"),
            smokeR = document.querySelectorAll(".rocket__smoke--right"),
            fire = document.getElementsByClassName("rocket__fire");


        // Durations!
        let cdStart = 1.25, cdLeave = cdStart / 2,
            esDuration = 0.10, esRepeat = 15,
            smDuration = 1.5;

        // Animations!
        tl.addLabel("countdown")
            .from(labels, {
                duration: cdStart,
                scale: 0,
                x: "50px", y: "50px",
                stagger: cdStart / labels.length,
            }, "countdown")
            .to(labels, {
                duration: cdLeave,
                scale: 0,
                x: "20px", y: "20px",
                opacity: 0,
                stagger: cdStart / labels.length,
            }, "countdown+=" + cdStart / labels.length)
            .addLabel("engine-start")
            .from(rocket, {
                duration: esDuration,
                x: "+=3px",
                repeat: esRepeat,
            }, "engine-start-=.5")
            .from(rocket, {
                duration: esDuration * 20,
                y: "+=5px",
            }, "engine-start-=1")
            .from(smokeL, {
                duration: smDuration,
                scale: 0,
                opacity: 2,
                stagger: smDuration / smokeL.length,
                x: "+=45px", y: "+=30px",
            }, "engine-start-=.5")
            .from(smokeR, {
                duration: smDuration,
                scale: 0,
                opacity: 2,
                stagger: smDuration / smokeR.length,
                x: "-=45px", y: "+=30px",
            }, "engine-start-=.5")
            .from(fire, {
                duration: smDuration,
                scale: 0,
            }, "engine-start-=.5")
            .addLabel("lift-off")
            .to(rocket, {
                duration: 2,
                y: "-=100px",
            }, "lift-off-=1")
            .to(fire, {
                duration: .25,
                scale: 2,
            }, "lift-off-=1")
            .addLabel("launch")
            .to(rocket, {
                duration: 3,
                y: () => "-=" + (document.body.offsetHeight) + "px",
                ease: "power4",
            }, "launch-=1.5")
            .to(fire, {
                duration: .25,
                scale: 1.75,
                repeat: 10,
            }, "launch-=1.8");

    }, []);


    return (
        <div className="launch-wrapper">
            <div id="frame">
                <div className="rocket" onClick={() => console.log("rocket click")}>
                    <div className="rocket__body">
                        <div className="rocket__body__window">
                            <div className="shadow"></div>
                        </div>
                        <div className="rocket__body__inner">
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className="rocket__wing rocket__wing--left"></div>
                    <div className="rocket__wing rocket__wing--right">
                        <div className="shadow shadow--full"></div>
                    </div>
                    <div className="rocket__label">
                        <p className="labels">3</p>
                        <p className="labels">2</p>
                        <p className="labels">1</p>
                    </div>
                    <div className="rocket__smoke rocket__smoke--left">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--left">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--left">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--left">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--left">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--right">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--right">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--right">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--right">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__smoke rocket__smoke--right">
                        <div className="rocket__smoke__inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="rocket__fire"></div>
                </div>
            </div>
        </div>
    );
}

export default Launch;