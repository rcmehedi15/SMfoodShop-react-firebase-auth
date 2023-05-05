import React from "react";
import Pdf from "react-to-pdf";
import { useNavigation } from "react-router-dom";
import './Blog.css'

const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: "landscape",
        unit: "px",
        format: [window.innerWidth * 0.55, window.innerHeight],
    };

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <h1>Loading</h1>;
    }
    return (
        <div className="my-5 container mx-auto">
            <div className="m-3 mx-auto">

                <div ref={ref} id="react-to-pdf">
                    <div className='container mx-auto'>
                        <div className=' faq-container'>
                            <div class="faq">
                                <h1 className='faq-title text-center text-primary'> Questions:</h1>
                                <div className='single-question'>
                                    <h1> 01: Tell us the differences between uncontrolled and controlled components.</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p><span>In React, </span>
                                            a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                                        </p>
                                    </div>
                                </div>

                                <div className='single-question'>
                                    <h1> 02: How to validate React props using PropTypes</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p> <span>propTypes</span>
                                            is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.

                                        </p>
                                    </div>
                                </div>
                                <div className='single-question'>
                                    <h1> 03: Tell us the difference between nodejs and express js.</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p>
                                            <span >nodejs and express js </span>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
                                        </p>
                                    </div>
                                </div>
                                <div className='single-question'>
                                    <h1> 04: What is a custom hook, and why will you create a custom hook?</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p>
                                            <span >custom Hook</span>
                                            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                                        </p>
                                    </div>
                                </div>

                                <div className="md:text-center  p-5">
                    <Pdf
                        targetRef={ref}
                        filename="blog.pdf"
                        options={options}
                        x={0}
                        y={0}
                        scale={1}
                    >
                        {({ toPdf }) => (
                            <div>
                                <div className=" col-md-12 text-center mt-4 ">
                                    <button
                                        className="btn flex items-center justify-center  mx-auto gap-4 "
                                        onClick={toPdf}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>

                                        Text To PDF Download
                                    </button>
                                </div>
                            </div>
                        )}
                    </Pdf>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

