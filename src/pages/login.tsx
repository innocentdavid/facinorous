import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import { BsLock } from 'react-icons/bs'
import { login, register } from '../context/AuthContext';
import { signIn, useSession } from 'next-auth/react';

export default function Login() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' })
    const [userDetails, setUserDetails] = useState({ username: '', password: '', cPassword: '' })
    const tabsData = [
        { label: "Log in", content: "" },
        { label: "Sign up", content: "" },
    ];
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleLogIn = async (e: any) => {
        e.preventDefault();
        document.querySelector('#generalLoading').classList.remove('hidden')
        document.querySelector('#generalLoading').classList.add('grid')
        const res = await signIn("credentials", {
            username: loginDetails.username,
            password: loginDetails.password,
            redirect: false,
        });
        // const res = await login(loginDetails.username, loginDetails.password);
        // console.log(res);
        if (res.status === 200) {            
            if(session?.user?.admin){
                router.push('/admindashboard')
                return;
            }
            router.push('/')
            document.querySelector('#generalLoading').classList.remove('grid')
            document.querySelector('#generalLoading').classList.add('hidden')
            return;
        }
        // console.log(res)
        // res.error && alert(res.error)
        document.querySelector('#generalLoading').classList.remove('grid')
        document.querySelector('#generalLoading').classList.add('hidden')
    }

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        if (userDetails.password !== userDetails.cPassword) {
            alert('Your Password and Confirm Password did not match!')
            return;
        }
        document.querySelector('#generalLoading').classList.remove('hidden')
        document.querySelector('#generalLoading').classList.add('grid')

        const data = { username: userDetails.username, password: userDetails.password }
        try {
            const user = await register(data.username, data.password);
            if (user) {
                alert("You have been registered successfully!, login to continue")
                setActiveTabIndex(0)
                document.querySelector('#generalLoading').classList.remove('grid')
                document.querySelector('#generalLoading').classList.add('hidden')
            }else {
                alert("An error occured, please check your connection")
                // console.log(await response.json())
                document.querySelector('#generalLoading').classList.remove('grid')
                document.querySelector('#generalLoading').classList.add('hidden')
                return;
            }
        } catch (err) {
            console.log(err)
            console.log(await err.json())
            document.querySelector('#generalLoading').classList.remove('grid')
            document.querySelector('#generalLoading').classList.add('hidden')
        }
        document.querySelector('#generalLoading').classList.remove('grid')
        document.querySelector('#generalLoading').classList.add('hidden')
    }

    return (
        <div className="h-screen overflow-x-hidden overflow-y-auto">
            <header className="h-[28%] flex flex-col justify-end px-5 bg-emerald-500 ">
                <div className="grid place-items-center">
                    <div className="bg-[#fff] text-emerald-500 font-['Poppins'] font-bold px-3 h-[35px] flex items-center uppercase ">FACINOROUS</div>
                </div>

                <div className="mt-5 flex items-center justify-around text-white text-lg font-bold">
                    {/* Loop through tab data and render button for each. */}
                    {tabsData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`py-2 border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                                    ? "border-white"
                                    : "border-transparent hover:border-gray-200"
                                    }`}
                                // Change the active tab on click.
                                onClick={() => setActiveTabIndex(idx)}>
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </header>

            <section className="pt-8 px-4 w-full flex justify-center h-[70%] overflow-x-hidden overflow-y-auto">
                {/* Show active tab content. */}
                <form className="block">
                    {activeTabIndex == 0 ? <>
                        <div className="">
                            <input required type="hidden" name="username" id="lUsername" className="w-full bg-transparent outline-none border-none"
                                value={loginDetails.username} />
                            <div className="">
                                <p className="font-[fona] font-bold text-[16px] text-[#6b6b6b] mb-1 ">User Name</p>
                                <div className="flex items-center gap-4 py-3 px-4 rounded-[10px] bg-emerald-300/20 text-black">
                                    <FaUser size="20px" />
                                    <input required type="text" name="username" id="lusername" className="w-full bg-transparent outline-none border-none"
                                        onChange={(e) => { setLoginDetails({ ...loginDetails, username: e.target.value }) }}
                                        value={loginDetails.username} />
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="font-[fona] font-bold text-[16px] text-[#9e9292] mb-1 ">Password</p>
                                <div className="flex items-center gap-4 py-3 px-4 rounded-[10px] bg-emerald-300/20 text-black">
                                    <BsLock size="20px" />
                                    <input required type="password" name="password" id="lPassword" className="w-full bg-transparent outline-none border-none"
                                        onChange={(e) => { setLoginDetails({ ...loginDetails, password: e.target.value }) }}
                                        value={loginDetails.password} />
                                </div>
                            </div>

                            <div className="mt-10 py-2 px-4 rounded-[10px] bg-emerald-500 text-white font-bold text-lg ">
                                <input required type="submit" value="Log in" className="w-full bg-transparent outline-none border-none cursor-pointer"
                                    onClick={handleLogIn}
                                />
                            </div>

                            <div className="flex justify-end mt-2">
                                {/* <Link href=""><a className="underline">Forgot password?</a></Link> */}
                            </div>
                        </div>
                    </> : <>
                        <div className="">
                            <input required type="hidden" name="username" id="lUsername" className="w-full bg-transparent outline-none border-none"
                                value={userDetails.username} />
                            <div className="">
                                <p className="font-[fona] font-bold text-[16px] text-[#6b6b6b] mb-1 ">User Name</p>
                                <div className="flex items-center gap-4 py-3 px-4 rounded-[10px] bg-emerald-300/20 text-black">
                                    <FaUser size="20px" />
                                    <input required type="text" name="username" id="redusername" className="w-full bg-transparent outline-none border-none"
                                        onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                                        value={userDetails.username} />
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="font-[fona] font-bold text-[16px] text-[#6b6b6b] mb-1 ">Password</p>
                                <div className="flex items-center gap-4 py-3 px-4 rounded-[10px] bg-emerald-300/20 text-black">
                                    <BsLock size="20px" />
                                    <input required type="password" name="password" id="RegPassword" className="w-full bg-transparent outline-none border-none"
                                        onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                                        value={userDetails.password} />
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="font-[fona] font-bold text-[16px] text-[#6b6b6b] mb-1 ">Confirm Password</p>
                                <div className="flex items-center gap-4 py-3 px-4 rounded-[10px] bg-emerald-300/20 text-black">
                                    <BsLock size="20px" />
                                    <input required type="password" name="cpassword" id="cRegPassword" className="w-full bg-transparent outline-none border-none"
                                        onChange={(e) => { setUserDetails({ ...userDetails, cPassword: e.target.value }) }}
                                        value={userDetails.cPassword} />
                                </div>
                            </div>

                            <div className="mt-10 py-2 px-4 rounded-[10px] bg-emerald-500 text-white font-bold text-lg ">
                                <input required type="submit" value="Sign up" className="w-full bg-transparent outline-none border-none"
                                    onClick={handleSignUp}
                                />
                            </div>

                            <div className="flex justify-end mt-2">
                                {/* <Link href=""><a className="underline">Forgot password?</a></Link> */}
                            </div>
                        </div>
                    </>}
                </form>
            </section>
        </div>
    )
}


// signIn.getInitialProps = async (context) => {
//     const { req, res } = context;
//     const session = await (getSession({ req }))

//     if (session && res && session.accessToken) {
//         res.writeHead(302, {
//             Location: '/profile',
//         });
//         res.end()
//         return;
//     }
//     return {
//         session: undefined,
//         providers: await providers(context),
//         csrfToken: await csrfToken(context)
//     }
// }
