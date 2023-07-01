import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';

const Login = () => {
    const emailSubmit = (event) => {
        event.preventDefault();
        event.target.email.value = "";
    }
    return (
        <div className="flex items-center justify-center bg-white py-20  shadow-md rounded-md max-w-2xl mx-auto">
            <div>
                <div className="text-center">
                    <h3 className="uppercase text-xl font-bold">Login / Signup</h3>
                    <hr className="w-60 mx-auto mt-3 border-black" />
                </div>
                <div className="flex gap-10 mt-7">
                    <button className="bg-[#3c5998] text-white px-8 py-2 rounded-md flex items-center gap-3"><span className='text-xl'><RiFacebookFill /></span>Facebook</button>
                    <button className="bg-[#dc4832] text-white px-8 py-2 rounded-md flex items-center gap-3"><span className='text-xl'><AiOutlineGoogle /></span>Google</button>
                </div>
                <div className='text-center my-10 font-bold text-xl'>
                    <p>OR</p>
                </div>
                <div>
                    <form onSubmit={() => emailSubmit(event)}>
                        <div className='relative '>
                            <input type="email" name="email" id="email" className='px-10 outline-none' placeholder='Email' required />
                            <hr className="w-full mx-auto mt-1 border-gray-300" />
                            <p className='absolute top-1 left-2 text-gray-400'><TfiEmail /></p>
                        </div>
                        <div className='text-center'>
                            <input value="Next" type='submit' className='text-white text-xl w-full mt-14 py-3 rounded-md bg-[#32c24d]'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;