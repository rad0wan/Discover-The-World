import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <article>
                <h3 className='text-success'>1.Difference between authentication and authorization?</h3>
                <p style={{ color: 'gray' }}> authentication process সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়.
                    authentication process ব্যবহারকারী বা ব্যক্তিদের যাচাই করা হয়।
                    এটি  authentication process আগে করা হয়।
                    এটি সাধারণত ব্যবহারকারীর লগইন বিবরণ প্রয়োজন.
                    Authentication নির্ধারণ করে যে ব্যক্তিটি ব্যবহারকারী কিনা।</p>
                <p style={{ color: 'gray' }}>
                    authorization process চলাকালীন, সংস্থানগুলি  access করার জন্য ব্যক্তি বা user’s authorities পরীক্ষা করা হয়।
                    এই প্রক্রিয়া চলাকালীন, users or persons যাচাই করা হয়।
                    যদিও এই প্রক্রিয়াটি authentication process পরে করা হয়।
                    এটি ব্যবহারকারীর  privilege or security স্তর প্রয়োজন.
                    এটি নির্ধারণ করে user কি permission আছে?
                </p>
            </article>
            <article>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Google Firebase অনেক বৈশিষ্ট্য offer করে যা এটিকে web and mobile app জন্য go-to backend development too টুল হিসাবে পিচ করে। এটি development workload and time হ্রাস করে। এবং এটি একটি perfect prototyping টুল। Firebase simple, lightweight, friendly, and industrially recognized। Other options to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </article>
            <article>
                <h3>3. What other services does firebase provide other than authentication?</h3>
                <p>There are many services Firebase provides them are: Cloud Firestore,
                    Cloud Functions,
                    Hosting,
                    Cloud Storage,
                    Google Analytics,
                    Predictions,
                    Cloud Messaging.</p>
            </article>
        </div>
    );
};

export default Blogs;