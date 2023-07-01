import userLogo from "../../assets/quiz/user.png"
import { LiaAwardSolid } from 'react-icons/lia';
import { HashLink } from 'react-router-hash-link';
// TODO: update login user 
const QuizCategory = () => {

    const user = false;
    return (
        <div className="mx-40 pt-10 flex justify-between gap-10">
            <div className="max-w-3xl">
                <div>
                    <div className="flex gap-3 items-center pb-4">
                        <h4 className="text-3xl">রকমারি কুইজ উৎসব</h4>
                        <HashLink smooth to="#term&condition"><p className="cursor-pointer text-blue-400">(Terms & Conditions)</p></HashLink>
                    </div>
                    <p className="text-xl tracking-wider">প্রিয় গ্রাহক, দীর্ঘদিন ধরে আপনাদের সাথে আমাদের এই পথচলা।
                        এই যাত্রাপথে আপনি রকমারিকে কতটা জানতে পেরেছেন, কতটা
                        বইয়ের সাথে সখ্যতা গড়েছেন এসব কিছু নিয়েই আজকের এই রকমারি
                        কুইজ। কুইজে অংশ নিয়ে জিতে নিন রকমারি ডট কম এর পক্ষ থেকে
                        ভালোবাসাময় উপহার, ৫% অতিরিক্ত ছাড় এর প্রোমোকোড। সবগুলো
                        প্রশ্নের সঠিক উত্তরদাতা পাবেন এই উপহার।
                    </p>
                </div>
                <div className="p-8 bg-white my-5 flex flex-col gap-2">
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">রকমারির প্রতিষ্ঠাবার্ষিকী কত তারিখ?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst1-1" value="১৬ ডিসেম্বর" name="question1" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst1-1">১৬ ডিসেম্বর</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst1-2" value="১৯ জানুয়ারি" name="question1"  type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst1-2">১৯ জানুয়ারি</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst1-3" value="২১ ফেব্রুয়ারি" name="question1" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst1-3">২১ ফেব্রুয়ারি</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst1-4" value="২৬ মার্চ" name="question1" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst1-4">২৬ মার্চ</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">সর্বশেষ রকমারির লাইভ হওয়া স্পেশাল ফিচারটি কী?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst2-1" value="প্রোডাক্ট কম্পেয়ার" name="question2" type="radio" className=""  checked={user || false}/>
                                <label htmlFor="qst2-1">প্রোডাক্ট কম্পেয়ার</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst2-2" value="উইকলি অথর" name="question2" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst2-2">উইকলি অথর</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst2-3" value="লগইন সিস্টেম" name="question2" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst2-3">লগইন সিস্টেম</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst2-4" value="বাই ওয়ান গেট ওয়ান" name="question2" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst2-4">বাই ওয়ান গেট ওয়ান</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">রকমারিতে সর্বনিম্ন শিপিং চার্জ কত?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst3-1" value="৪৫ টাকা" name="question3" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst3-1">৪৫ টাকা</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst3-2" value="৪৮ টাকা" name="question3" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst3-2">৪৮ টাকা</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst3-3" value="৫২ টাকা" name="question3" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst3-3">৫২ টাকা</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst3-4" value="৫৫ টাকা" name="question3" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst3-4">৫৫ টাকা</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">রকমারি সর্বোচ্চ কত পার্সেন্ট ছাড়ের প্রোমোকোড দিয়ে থাকে?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst4-1" value="৩%" name="question4" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst4-1">৩%</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst4-2" value="৫%" name="question4" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst4-2">৫%</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst4-3" value="১০%" name="question4" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst4-3">১০%</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst4-4" value="১৫%" name="question4" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst4-4">১৫%</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">রকমারির কোন ফিচারটি অ্যামাজনেও নেই?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst5-1" value="ক্যাটাগরিওয়াইজ হোমপেজ" name="question5" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst5-1">ক্যাটাগরিওয়াইজ হোমপেজ</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst5-2"  value="স্পন্সর প্রডাক্ট" name="question5" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst5-2">স্পন্সর প্রডাক্ট</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst5-3"  value="অর্ডার পার্শিয়াল রিটার্ন সিস্টেম" name="question5" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst5-3">অর্ডার পার্শিয়াল রিটার্ন সিস্টেম</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst5-4"  value="ই-বুক" name="question5" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst5-4">ই-বুক</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                    <div className="border border-gray-300 p-5 bg-white rounded-md">
                        <p className="text-xl pb-2">কোন ধরনের প্রডাক্ট রকমারি বিক্রি করে না?</p>
                        <div className="text-gray-600">
                            <p>সাবমিট করার শেষ সময়</p>
                            <p>04 Jul 2023 11:59 PM</p>
                        </div>
                        <div className="flex gap-4 py-5">
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst6-1" value="অরিজিনাল প্রডাক্ট" name="question6" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst6-1">অরিজিনাল প্রডাক্ট</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst6-2" value="বিদেশি প্রডাক্ট" name="question6" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst6-2">বিদেশি প্রডাক্ট</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst6-3" value="পাইরেটেড প্রডাক্ট" name="question6" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst6-3">পাইরেটেড প্রডাক্ট</label>
                            </div>
                            <div className="flex gap-3">
                                <input onClick={() => user || alert("প্রেডিকশন করতে লগইন করুন")} id="qst6-4" value="নিউজ প্রিন্ট বই" name="question6" type="radio" className=""  checked={user || false} />
                                <label htmlFor="qst6-4">নিউজ প্রিন্ট বই</label>
                            </div>
                        </div>
                        <p className="text-gray-600">Total Participation:176</p>
                    </div>
                </div>
                <div className="p-8 bg-white my-5 " id="term&condition">
                    <ul className="list-disc">
                        <li>কুইজ যে দিন শেষ হবে তার পরের দিন বিজয়ীদের কাছে মেইলের মাধ্যমে পৌছে যাবে এক্সক্লুসিভ প্রোমোকোড।</li>
                        <li>কুইজ সংক্রান্ত যে কোন পরিবর্তন, পরিমার্জন এবং যে কোন সময় কুইজ বাতিলের সমস্ত অধিকার রকমারি .কম সংরক্ষণ করে।</li>
                    </ul>
                </div>
            </div>
            <div >
                <div className="bg-white my-5 border border-gray-400">
                    <h4 className="text-2xl border-b border-gray-400 p-4">সর্বোচ্চ পয়েন্ট অর্জনকারী</h4>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Tanvir Hassan</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">140</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>হাফিজ</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Ariful Islam Arif</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Anam</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Aditya</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>San Ibn Ashraf</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Nahid Hasan</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Sumon</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Nusrat Jahan</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>BHARAT CHANDRA ROY</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Nurul Alam Siddique</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Shamim Al Amin</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Jaminur Islam</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Sunny Sultan</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 p-4 flex gap-4  text-xl">
                        <img className="rounded-full w-12" src={userLogo} alt="user logo" />
                        <div >
                            <p>Raja Biswas</p>
                            <div className="flex items-center">
                                <p><LiaAwardSolid /></p>
                                <p className="text-yellow-400">110</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCategory;