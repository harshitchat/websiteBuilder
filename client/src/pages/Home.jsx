// import React, { useEffect, useState } from 'react'
// import { AnimatePresence, motion } from "motion/react"
// import LoginModal from '../components/LoginModal'
// import { useDispatch, useSelector } from 'react-redux'
// import { Coins } from "lucide-react"
// import { serverUrl } from '../App'
// import axios from 'axios'
// import { setUserData } from '../redux/userSlice'
// import { useNavigate } from 'react-router-dom'
// function Home() {

//     const highlights = [
//         "AI Generated Code",
//         "Fully Responsive Layouts",
//         "Production Ready Output",
//     ]

//     const [openLogin, setOpenLogin] = useState(false)
//     const { userData } = useSelector(state => state.user)
//     const [openProfile, setOpenProfile] = useState(false)
//     const [websites, setWebsites] = useState(null)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const handleLogOut = async () => {
//         console.log("logout click")
//         try {
//             await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
//             dispatch(setUserData(null))
//             setOpenProfile(false)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         if (!userData) return;
//         const handleGetAllWebsites = async () => {

//             try {

//                 const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
//                 setWebsites(result.data || [])

//             } catch (error) {
//                 console.log(error)

//             }
//         }
//         handleGetAllWebsites()
//     }, [userData])
//     return (
//         <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
//             <motion.div
//                 initial={{ y: -40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
//             >
//                 <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
//                     <div className='text-lg font-semibold'>
//                         GenWeb.ai
//                     </div>
//                     <div className='flex items-center gap-5'>
//                         <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer' onClick={() => navigate("/pricing")}>
//                             Pricing
//                         </div>
//                         {userData && <div className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition' onClick={() => navigate("/pricing")}>
//                             <Coins size={14} className='text-yellow-400' />
//                             <span className='text-zinc-300'>Credits</span>
//                             <span>{userData.credits}</span>
//                             <span className='font-semibold'>+</span>
//                         </div>}


//                         {!userData ? <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'
//                             onClick={() => setOpenLogin(true)}
//                         >

                            

//                             Get Started
//                         </button>
//                             :
//                             <div className='relative'>
//                                 <button className='flex items-center' onClick={() => setOpenProfile(!openProfile)}>
//                                     <img src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData.name}`} alt="" referrerPolicy='no-referrer' className='w-9 h-9 rounded-full border border-white/20 object-cover' />
//                                 </button>
//                                 <AnimatePresence>
//                                     {openProfile && (
//                                         <>
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                                                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                                                 exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                                                 className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
//                                             >
//                                                 <div className='px-4 py-3 border-b border-white/10'>
//                                                     <p className='text-sm font-medium truncate'>{userData.name}</p>
//                                                     <p className='text-xs text-zinc-500 truncate'>{userData.email}</p>
//                                                 </div>

//                                                 <button className='md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5'>
//                                                     <Coins size={14} className='text-yellow-400' />
//                                                     <span className='text-zinc-300'>Credits</span>
//                                                     <span>{userData.credits}</span>
//                                                     <span className='font-semibold'>+</span>
//                                                 </button>

//                                                 <button className='w-full px-4 py-3 text-left text-sm hover:bg-white/5' onClick={() => navigate("/dashboard")}>Dashboard</button>
//                                                 <button className='w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5' onClick={handleLogOut}>Logout</button>

//                                             </motion.div>
//                                         </>

//                                     )}

//                                 </AnimatePresence>

//                             </div>

//                         }

//                     </div>
//                 </div>
//             </motion.div>

//             <section className='pt-44 pb-32 px-6 text-center'>
//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-5xl md:text-7xl font-bold tracking-tight"
//                 >
//                     Build Stunning Websites <br />
//                     <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>with AI</span>
//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
//                 >
//                     Describe your idea and let AI generate a modern,
//                     responsive, production-ready website.
//                 </motion.p>


//                 <button className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-12" onClick={() =>userData? navigate("/dashboard"):setOpenLogin(true)}>{userData ? "Go to dashboard" : "Get Started"}</button>

//             </section>
//             {!userData && <section className='max-w-7xl mx-auto px-6 pb-32'>
//                 <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//                     {highlights.map((h, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             className="rounded-2xl bg-white/5 border border-white/10 p-8"
//                         >
//                             <h1 className='text-xl font-semibold mb-3'>{h}</h1>
//                             <p className='text-sm text-zinc-400'>
//                                 GenWeb.ai builds real websites — clean code,
//                                 animations, responsiveness and scalable structure.
//                             </p>

//                         </motion.div>
//                     ))}
//                 </div>
//             </section>}


//             {userData && websites?.length > 0 && (
//                 <section className='max-w-7xl mx-auto px-6 pb-32'>
//                     <h3 className='text-2xl font-semibold mb-6'>Your Websites</h3>

//                     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//                         {websites.slice(0, 3).map((w, i) => (
//                             <motion.div
//                                 key={w._id}
//                                 whileHover={{ y: -6 }}
//                                 onClick={() => navigate(`/editor/${w._id}`)}
//                                 className="cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
//                             >
//                                 <div className='h-40 bg-black'>
//                                     <iframe
//                                         srcDoc={w.latestCode}
//                                         className='w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white'
//                                     />
//                                 </div>
//                                 <div className='p-4'>
//                                     <h3 className='text-base font-semibold line-clamp-2'>{w.title}</h3>
//                                     <p className='text-xs text-zinc-400'>Last Updated {""}
//                                         {new Date(w.updatedAt).toLocaleDateString()}
//                                     </p>
//                                 </div>


//                             </motion.div>
//                         ))}

//                     </div>
//                 </section>

//             )}



//             <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500'>
//                 &copy; {new Date().getFullYear()} GenWeb.ai
//             </footer>

//             {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}

//         </div>
//     )
// }

// export default Home




import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import LoginModal from '../components/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { Coins, Zap, Code2, Layers, ArrowRight, Sparkles, LayoutDashboard, LogOut } from "lucide-react"
import { serverUrl } from '../App'
import axios from 'axios'
import { setUserData } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
    const highlights = [
        {
            icon: <Code2 size={18} />,
            title: "AI Generated Code",
            desc: "Clean, semantic HTML with modern CSS — no bloat, no boilerplate.",
        },
        {
            icon: <Layers size={18} />,
            title: "Fully Responsive",
            desc: "Every layout adapts perfectly from mobile to widescreen without extra effort.",
        },
        {
            icon: <Zap size={18} />,
            title: "Production Ready",
            desc: "Ship directly. Animations, accessibility, and performance baked in.",
        },
    ]

    const [openLogin, setOpenLogin] = useState(false)
    const { userData } = useSelector(state => state.user)
    const [openProfile, setOpenProfile] = useState(false)
    const [websites, setWebsites] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
            dispatch(setUserData(null))
            setOpenProfile(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!userData) return;
        const handleGetAllWebsites = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
                setWebsites(result.data || [])
            } catch (error) {
                console.log(error)
            }
        }
        handleGetAllWebsites()
    }, [userData])

    return (
        <div className='relative min-h-screen bg-[#050507] text-white overflow-hidden selection:bg-violet-500/30 selection:text-violet-200' style={{ fontFamily: "'DM Sans', sans-serif" }}>

            {/* Google Font & Advanced Custom Styling */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

                .hero-title { 
                    font-family: 'Syne', sans-serif; 
                }

                .grid-bg {
                    background-image:
                        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
                    background-size: 56px 56px;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(140px);
                    pointer-events: none;
                    opacity: 0.85;
                }

                .card-glow {
                    position: relative;
                    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, background-color 0.3s;
                }
                .card-glow:hover {
                    border-color: rgba(139, 92, 246, 0.25);
                    box-shadow: 0 10px 40px rgba(139, 92, 246, 0.05);
                    background: rgba(255, 255, 255, 0.035) !important;
                }

                .website-card:hover .website-overlay {
                    opacity: 1;
                }

                .website-overlay {
                    opacity: 0;
                    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .badge-pill {
                    background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.12));
                    border: 1px solid rgba(139,92,246,0.22);
                    box-shadow: 0 4px 15px rgba(139,92,246,0.05);
                }

                .cta-btn {
                    background: linear-gradient(135deg, #7c3aed, #4f46e5);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.25);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .cta-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #6d28d9, #3b82f6);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .cta-btn:hover {
                    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.45);
                    transform: translateY(-2px);
                }
                .cta-btn:hover::before { opacity: 1; }
                .cta-btn span { position: relative; z-index: 1; }

                .nav-link-btn {
                    position: relative;
                }
                .nav-link-btn::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1.5px;
                    background: #c084fc;
                    transition: width 0.25s ease;
                }
                .nav-link-btn:hover::after { width: 100%; }

                .icon-box {
                    background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.05));
                    border: 1px solid rgba(139,92,246,0.2);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
                }

                ::-webkit-scrollbar { width: 6px; }
                ::-webkit-scrollbar-track { background: #050507; }
                ::-webkit-scrollbar-thumb { background: #1f1f2e; border-radius: 3px; }
                ::-webkit-scrollbar-thumb:hover { background: #2e2e42; }
            `}</style>

            {/* Background Assets */}
            <div className='grid-bg fixed inset-0 z-0' />
            
            {/* Ambient Animated Orbs */}
            <motion.div 
                className='glow-orb' 
                animate={{
                    x: [0, 20, -15, 0],
                    y: [0, -30, 25, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)', top: -120, left: '15%' }} 
            />
            <motion.div 
                className='glow-orb' 
                animate={{
                    x: [0, -25, 15, 0],
                    y: [0, 35, -20, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', top: 180, right: '8%' }} 
            />
            <motion.div 
                className='glow-orb' 
                animate={{
                    x: [0, 15, -25, 0],
                    y: [0, 20, -30, 0],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: 550, height: 550, background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)', bottom: '8%', left: '8%' }} 
            />
            
            {/* Grid overlay to fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/20 to-[#050507] z-0 pointer-events-none" />

            {/* Navbar */}
            <motion.nav
                initial={{ y: -45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className='fixed top-0 left-0 right-0 z-50'
            >
                <div style={{ background: 'rgba(5,5,7,0.65)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.04)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
                    <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

                        {/* Logo */}
                        <div className='flex items-center gap-2.5 cursor-pointer group' onClick={() => navigate('/')}>
                            <div className='w-8 h-8 rounded-lg icon-box flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]'>
                                <Sparkles size={14} className='text-violet-400 group-hover:rotate-12 transition-transform duration-300' />
                            </div>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                                GenWeb<span className='bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>.ai</span>
                            </span>
                        </div>

                        {/* Navigation Right */}
                        <div className='flex items-center gap-5'>
                            <button
                                className='nav-link-btn hidden md:inline text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium'
                                onClick={() => navigate("/pricing")}
                            >
                                Pricing
                            </button>

                            {userData && (
                                <button
                                    className='hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition hover:scale-[1.02] duration-200'
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                                    onClick={() => navigate("/pricing")}
                                >
                                    <Coins size={13} className='text-amber-400 animate-pulse' />
                                    <span className='text-zinc-400'>Credits</span>
                                    <span className='font-semibold text-zinc-200'>{userData.credits}</span>
                                    <span className='text-violet-400 font-bold'>+</span>
                                </button>
                            )}

                            {!userData ? (
                                <button
                                    className='cta-btn px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer'
                                    onClick={() => setOpenLogin(true)}
                                >
                                    <span>Get Started</span>
                                </button>
                            ) : (
                                <div className='relative'>
                                    <button onClick={() => setOpenProfile(!openProfile)} className='flex items-center focus:outline-none group'>
                                        <img
                                            src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData.name}&background=6d28d9&color=fff`}
                                            alt=""
                                            referrerPolicy='no-referrer'
                                            className='w-9 h-9 rounded-full object-cover transition-all duration-300 group-hover:border-violet-400/50'
                                            style={{ border: '2px solid rgba(139,92,246,0.3)' }}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {openProfile && (
                                            <>
                                                {/* Backdrop overlay for closing the dropdown menu */}
                                                <div className="fixed inset-0 z-40 cursor-default" onClick={() => setOpenProfile(false)} />
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute right-0 mt-3 w-56 z-50 rounded-2xl overflow-hidden"
                                                    style={{ background: 'rgba(14,14,18,0.92)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}
                                                >
                                                    <div className='px-4 py-3 bg-white/[0.01]' style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                                        <p className='text-sm font-semibold truncate text-zinc-100'>{userData.name}</p>
                                                        <p className='text-xs text-zinc-500 truncate mt-0.5'>{userData.email}</p>
                                                    </div>

                                                    <button 
                                                        className='md:hidden w-full px-4 py-3 flex items-center justify-between text-sm hover:bg-white/5 transition text-zinc-300' 
                                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                                                        onClick={() => {
                                                            navigate("/pricing")
                                                            setOpenProfile(false)
                                                        }}
                                                    >
                                                        <span className='flex items-center gap-2'>
                                                            <Coins size={13} className='text-amber-400' />
                                                            <span>Credits</span>
                                                        </span>
                                                        <span className='font-semibold text-zinc-200'>{userData.credits}</span>
                                                    </button>

                                                    <button 
                                                        className='w-full px-4 py-3 flex items-center gap-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-all' 
                                                        onClick={() => {
                                                            navigate("/dashboard")
                                                            setOpenProfile(false)
                                                        }}
                                                    >
                                                        <LayoutDashboard size={13} className='text-zinc-500' />
                                                        Dashboard
                                                    </button>
                                                    <button 
                                                        className='w-full px-4 py-3 flex items-center gap-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-950/20 border-t border-white/[0.05] transition-all' 
                                                        onClick={handleLogOut}
                                                    >
                                                        <LogOut size={13} />
                                                        Logout
                                                    </button>
                                                </motion.div>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className='relative z-10 pt-48 pb-32 px-6 text-center max-w-7xl mx-auto flex flex-col items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='inline-flex items-center gap-2 badge-pill px-4 py-1.5 rounded-full text-xs font-semibold text-violet-300 mb-8 cursor-default'
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                    </span>
                    AI-Powered Website Generation
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    className='hero-title text-5xl md:text-7xl font-extrabold tracking-tight leading-none max-w-4xl'
                    style={{ lineHeight: '1.08' }}
                >
                    Build Stunning Websites
                    <br />
                    <span className='bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.22)]'>
                        with AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className='mt-7 max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed'
                >
                    Describe your idea and let AI generate a modern,
                    responsive, production-ready website — in seconds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='cta-btn group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm cursor-pointer'
                        onClick={() => userData ? navigate("/dashboard") : setOpenLogin(true)}
                    >
                        <span>{userData ? "Go to Dashboard" : "Start Building"}</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>

                    {!userData && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='nav-link-btn px-6 py-4 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white transition-all bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer'
                            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                            onClick={() => navigate("/pricing")}
                        >
                            View Pricing
                        </motion.button>
                    )}
                </motion.div>

                {/* Decorative divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                    className='mt-24 w-48 h-px'
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
                />
            </section>

            {/* Feature Highlights Grid */}
            {!userData && (
                <section className='relative z-10 max-w-6xl mx-auto px-6 pb-36'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className='card-glow rounded-2xl p-7 cursor-default group overflow-hidden'
                                style={{ background: 'rgba(255,255,255,0.012)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                
                                <div className='icon-box w-11 h-11 rounded-xl flex items-center justify-center text-violet-400 mb-6 group-hover:scale-105 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300'>
                                    {h.icon}
                                </div>
                                <h3 className='font-semibold text-base mb-2.5 text-zinc-100 group-hover:text-white transition-colors duration-200' style={{ fontFamily: 'Syne, sans-serif' }}>{h.title}</h3>
                                <p className='text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200'>{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Recent Websites (Dashboard Preview) */}
            {userData && websites?.length > 0 && (
                <section className='relative z-10 max-w-6xl mx-auto px-6 pb-36'>
                    <div className='flex items-center justify-between mb-8'>
                        <h2 className='text-xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent' style={{ fontFamily: 'Syne, sans-serif' }}>Recent Websites</h2>
                        <button
                            className='text-xs text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1.5 transition-colors nav-link-btn cursor-pointer pb-0.5'
                            onClick={() => navigate('/dashboard')}
                        >
                            View Dashboard <ArrowRight size={12} />
                        </button>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {websites.slice(0, 3).map((w, i) => (
                            <motion.div
                                key={w._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.45 }}
                                className='website-card cursor-pointer rounded-2xl overflow-hidden flex flex-col group'
                                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
                                whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 45px rgba(0,0,0,0.5)' }}
                            >
                                {/* macOS Style Browser Mockup Frame */}
                                <div className="px-4 py-2.5 bg-zinc-950/80 border-b border-white/[0.04] flex items-center gap-2 select-none">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="mx-auto w-[65%] h-4 rounded bg-white/5 border border-white/[0.04] flex items-center justify-center text-[9px] text-zinc-500 font-mono truncate px-2">
                                        genweb.ai/editor/{w._id.slice(-6)}
                                    </div>
                                </div>

                                {/* Preview Iframe Container */}
                                <div className='relative h-44 overflow-hidden bg-[#0a0a0f]'>
                                    <iframe
                                        srcDoc={w.latestCode}
                                        className='w-[140%] h-[140%] pointer-events-none bg-white'
                                        style={{ transform: 'scale(0.72)', transformOrigin: 'top left' }}
                                        title={w.title}
                                    />
                                    {/* Sleek blur overlay on hover */}
                                    <div className='website-overlay absolute inset-0 flex items-center justify-center bg-violet-950/40 backdrop-blur-[6px] border border-violet-500/20'>
                                        <motion.span 
                                            className='text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-black flex items-center gap-2 shadow-2xl'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                navigate(`/editor/${w._id}`)
                                            }}
                                        >
                                            Open Editor <ArrowRight size={12} className="text-black" />
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Metadata card footer */}
                                <div className='p-4.5 border-t border-white/[0.05] bg-white/[0.005] group-hover:bg-white/[0.015] transition-colors duration-300 flex-grow flex flex-col justify-between'>
                                    <h3 className='text-sm font-semibold line-clamp-1 mb-1 text-zinc-200 group-hover:text-white transition-colors duration-200'>{w.title || "Untitled Project"}</h3>
                                    <div className="flex items-center justify-between mt-2.5">
                                        <p className='text-[11px] text-zinc-500'>
                                            Updated {new Date(w.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                        <span className="text-[10px] text-violet-400 font-semibold group-hover:translate-x-0.5 transition-transform duration-200 flex items-center gap-0.5">
                                            Edit Site <ArrowRight size={10} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className='relative z-10 py-12 text-center' style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div className='flex items-center justify-center gap-2 mb-3.5'>
                    <div className='w-7 h-7 rounded-lg icon-box flex items-center justify-center'>
                        <Sparkles size={12} className='text-violet-400' />
                    </div>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                        GenWeb<span className='text-violet-400'>.ai</span>
                    </span>
                </div>
                <p className='text-xs text-zinc-500 tracking-wide'>&copy; {new Date().getFullYear()} GenWeb.ai — All rights reserved</p>
            </footer>

            {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}
        </div>
    )
}

export default Home
