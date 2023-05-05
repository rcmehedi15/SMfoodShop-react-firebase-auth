import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
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

                    <div className='  p-2 text-center text'>
                        <p>Copyright © <a href="https://www.facebook.com/rcmehedi15" target='_blank' className='text-decoration-none'>MD Mehedi Hasan</a> | HmdMehedi2016@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;