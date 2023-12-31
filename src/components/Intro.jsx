import React from 'react'
import abut from "../assets/img/about.jpg"

const Intro = () => {
    return (
        <section id='intro'>
            <div className="intro_inner">
                <div className="intro_title">
                    prot developer
                </div>
                <div className="intro_lines" aria-hidden='true'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                <div className="intro_text">
                    <div className="text">
                        <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div>
                    </div>
                    <div className="img">
                        <img src={abut} alt="" />
                    </div>
                </div>
                <div className="intro_lines bottom">
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>

            </div>
        </section>
    );
}

export default Intro