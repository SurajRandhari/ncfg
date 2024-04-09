import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

function Contact() {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Prevent multiple submissions

        setIsSubmitting(true); // Set submitting state to true

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_mhoywhr';
        const templateId = 'template_a9zbrtn';
        const publicKey = 'AoM48ab1vlSNiJeVY';

        // Create a new object that contains dynamic template params
        const templateParams = {
            user_name: name,
            user_email: email,
            phone: phone,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            })
            .finally(() => {
              setIsSubmitting(false); // Reset submitting state after submission
            });
    };



    return (
        <footer className="bg-[#5371c4] py-12 px-[34px] md:px-[64px] font-[sans-serif]">
            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-8">

                <div>
                    <h4 className="text-white font-taviraj font-semibold text-lg">Social Handle</h4>
                    <p className="text-sm mt-6 text-white">Follow Us On Socials And jouin Us</p>
                    <div className="social-icons-container flex  mt-2">
                        <ul className="mt-10 flex items-center gap-4">
                            <li className="bg-gray-100 hover:bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <Link to="https://www.facebook.com/people/Ananda-Kumar-Tandi/pfbid02xAkGtuffUzx7ywbuG4tJhR6EPjTDBGg8CYHD42UVYwaBne8NHi8QczuYxfeWLfqfl/?mibextid=ZbWKwL">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000' viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </Link>
                            </li>

                            <li className="bg-gray-100 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <Link to="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000' viewBox="0 0 24 24">
                                        <path
                                            d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                        </path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="bg-gray-100 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <Link to="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000'
                                        viewBox="0 0 511.999 511.999">
                                        <path
                                            d="M509.738 109.538a15.263 15.263 0 0 0-14.332-7.215l-25.53 2.224 24.403-49.193a15.268 15.268 0 0 0-20.393-20.498l-64.587 31.631c-39.903-21.066-89.756-14.813-124.06 16.436-28.63 26.08-43.679 66.187-40.873 106.183-74.829-7.5-138.169-50.331-175.623-119.537a15.269 15.269 0 0 0-25.7-1.817c-23.23 31.382-24.86 74.41-6.649 109.809-5.02-1.268-10.362-2.984-16.286-4.963A15.266 15.266 0 0 0 .205 189.564c7.206 43.688 32.682 77.264 72.926 97.138a128.229 128.229 0 0 1-16.024 4.44 15.267 15.267 0 0 0-8.034 25.378c28.981 30.978 70.845 46.225 100.581 53.539-33.81 26.477-70.307 30.908-123.341 29.087-6.139-.186-11.795 3.272-14.376 8.837a15.27 15.27 0 0 0 2.544 16.681c22.108 24.369 102.654 51.847 187.326 53.907 3.349.081 6.765.125 10.253.125 59.451-.001 138.022-12.745 194.419-69.142 42.687-42.686 69.387-91.827 79.356-146.053 8.052-43.797 2.963-78.869.518-95.725-.18-1.239-.372-2.554-.528-3.704l23.881-38.49a15.267 15.267 0 0 0 .032-16.044zm-53.606 62.622c4.531 31.224 18.316 126.24-71.245 215.801-52.06 52.059-127.888 61.407-182.338 60.084-46.461-1.13-88.019-10.016-118.139-20.15 12.229-1.5 23.127-3.814 33.414-7.011 28.359-8.815 52.317-24.676 75.395-49.915a15.268 15.268 0 0 0-9.327-25.447c-14.559-1.866-58.305-9.23-92.753-32.992 9.927-4.06 19.501-9.141 28.643-15.205a15.27 15.27 0 0 0-4.569-27.494c-28.195-7.392-62.223-23.932-77.914-60.855 10.02 1.756 20.915 2.181 32.535-.424a15.268 15.268 0 0 0 7.645-25.504c-19.524-20.222-26.825-49.364-20.561-74.301 20.514 29.981 46.503 55.213 76.279 73.868 38.091 23.865 82.549 37.054 128.57 38.137a15.32 15.32 0 0 0 12.157-5.573 15.27 15.27 0 0 0 3.107-13.007c-7.918-35.595 3.375-73.541 28.771-96.674 26.34-23.995 65.269-27.635 94.666-8.846a15.27 15.27 0 0 0 14.938.846l31.541-15.448-16.509 33.281a15.265 15.265 0 0 0 1.065 15.388 15.252 15.252 0 0 0 13.938 6.607l22.242-1.937-10.246 16.515c-3.439 5.543-2.726 10.461-1.305 20.256z"
                                            data-original="#000000" />
                                    </svg>


                                </Link>
                            </li>
                            <li className="bg-gray-100 hover:bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <Link to="https://www.youtube.com/@NCFGMINISTRY1995">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000' viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000" />
                                            </clipPath>
                                        </defs>
                                        <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                            strokeWidth="40" clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path
                                                d="M492 255.75c0-39.49-3.501-75.479-7.497-103.698-5.191-36.655-34.801-64.96-71.646-68.567C373.764 79.658 318.529 75.75 256 75.75c-62.529 0-117.764 3.908-156.857 7.735-36.845 3.607-66.455 31.912-71.646 68.567C23.501 180.271 20 216.26 20 255.75c0 39.49 3.501 75.479 7.497 103.698 5.191 36.655 34.801 64.96 71.646 68.567 39.093 3.827 94.328 7.735 156.857 7.735 62.529 0 117.764-3.908 156.857-7.735 36.845-3.607 66.455-31.912 71.646-68.567C488.499 331.229 492 295.24 492 255.75Z"
                                                data-original="#000000" />
                                            <path
                                                d="m245.5 185.291 75.914 45.165c19.448 11.57 19.448 39.518 0 51.088L245.5 326.709c-20.024 11.913-45.5-2.39-45.5-25.544v-90.33c0-23.154 25.476-37.457 45.5-25.544Z"
                                                data-original="#000000" />
                                        </g>
                                    </svg>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold font-taviraj text-lg">Address </h4>
                    <ul className="mt-6 space-y-6">
                        <li className="flex items-center">
                            <div className="bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000' viewBox="0 0 368.16 368.16">
                                    <path
                                        d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                                        data-original="#000000" />
                                    <path
                                        d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <span className="text-white ml-4">At-Litiguda, P.O-Bharuamunda, Via-Sinapali, Pin-766108 ,       -Dist-Nuapada (Orissa) INDIA</span>
                        </li>

                        <li className="flex items-center">
                            <div className="bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000' viewBox="0 0 482.6 482.6">
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <span className="text-white ml-4">+91 9938447929</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <span className="text-white font-taviraj underline ml-4">anandkumartandi64@gmail.com</span>
                        </li>

                    </ul>
                </div>

                {/* Form */}
                <div className="text-center pr-18 ">
                    <h4 className="text-white font-semibold font-taviraj text-3xl">Contact Us</h4>
                    <form className="flex flex-col items-center mt-6 emailForm" ref={form} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} name="user_name" className="bg-gray-100 w-full p-2 mb-4 rounded-md" required />
                        <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" className="bg-gray-100 w-full p-2 mb-4 rounded-md" />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" className="bg-gray-100 w-full p-2 mb-4 rounded-md" required />
                        <textarea placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-100 w-full p-2 mb-4 rounded-md" rows="4" required></textarea>
                        {/* <button type="submit" value="send" disabled={isSubmitting} className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">Submit</button> */}
                        <button type="submit" value="send" disabled={isSubmitting} className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                    </form>
                </div>

            </div>



        </footer>

    )
}

export default Contact