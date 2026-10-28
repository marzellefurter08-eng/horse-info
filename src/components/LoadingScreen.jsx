import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000) // Stays open for exactly 3 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gray-100 dark:bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-1000 opacity-100">
      <style>{`
        :root {
          --master-speed: 0.55s; 
          --red-primary: #7b400070;
          --red-shadow: #7c480e7e;
          --sync-curve: cubic-bezier(0.4, 0.05, 0.5, 0.95);
        }

        /* 1. MASTER SPINE TIMING */
        @keyframes master-torso {
          0%, 100% { transform: translateY(3px) rotate(-1.5deg); }   
          25% { transform: translateY(-6px) rotate(0.8deg); }       
          50% { transform: translateY(4px) rotate(-0.5deg); }       
          75% { transform: translateY(-2px) rotate(-1deg); }        
        }
        .anim-torso { animation: master-torso var(--master-speed) var(--sync-curve) infinite; }

        /* 2. MASTER HEAD & NECK TIMING */
        @keyframes master-neck {
          0%, 100% { transform: rotate(-26deg) translateY(0px); }    
          25% { transform: rotate(-33deg) translateY(-2px); }       
          50% { transform: rotate(-23deg) translateY(4px); }        
          75% { transform: rotate(-28deg) translateY(1.5px); }      
        }
        @keyframes master-head {
          0%, 100% { transform: rotate(56deg); }
          25% { transform: rotate(44deg); }                          
          50% { transform: rotate(64deg); }                          
          75% { transform: rotate(52deg); }
        }
        .anim-neck { animation: master-neck var(--master-speed) var(--sync-curve) infinite; transform-origin: 125px 75px; }
        .anim-head { animation: master-head var(--master-speed) var(--sync-curve) infinite; transform-origin: 154px 20px; }

        /* 3. MASTER TAIL TIMING */
        @keyframes master-tail {
          0%, 100% { transform: rotate(-35deg) skewY(-3deg); }       
          25% { transform: rotate(-48deg) skewY(5deg); }             
          50% { transform: rotate(-32deg) skewY(-2deg); }
          75% { transform: rotate(-42deg) skewY(3deg); }
        }
        .anim-tail { animation: master-tail var(--master-speed) var(--sync-curve) infinite; transform-origin: 42px 65px; }

        /* 4. MASTER FRONT LIMBS TIMING */
        @keyframes front-shoulder-left {
          0%, 100% { transform: rotate(35deg); }
          25% { transform: rotate(-30deg); }
          50% { transform: rotate(-60deg); }
          75% { transform: rotate(15deg); }
        }
        @keyframes front-knee-left {
          0%, 100% { transform: rotate(15deg); }
          25% { transform: rotate(75deg); }                          
          50% { transform: rotate(0deg); }                           
          75% { transform: rotate(40deg); }
        }
        @keyframes front-shoulder-right {
          0%, 100% { transform: rotate(-55deg); }
          25% { transform: rotate(25deg); }
          50% { transform: rotate(40deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes front-knee-right {
          0%, 100% { transform: rotate(5deg); }
          25% { transform: rotate(35deg); }
          50% { transform: rotate(15deg); }
          75% { transform: rotate(80deg); }                          
        }

        /* 5. MASTER HIND LIMBS TIMING */
        @keyframes hind-thigh-left {
          0%, 100% { transform: rotate(-45deg); }
          25% { transform: rotate(25deg); }
          50% { transform: rotate(55deg); }                          
          75% { transform: rotate(-15deg); }
        }
        @keyframes hind-hock-left {
          0%, 100% { transform: rotate(-75deg); }                    
          25% { transform: rotate(15deg); }
          50% { transform: rotate(45deg); }                          
          75% { transform: rotate(-45deg); }
        }
        @keyframes hind-thigh-right {
          0%, 100% { transform: rotate(40deg); }
          25% { transform: rotate(-15deg); }
          50% { transform: rotate(-40deg); }
          75% { transform: rotate(15deg); }
        }
        @keyframes hind-hock-right {
          0%, 100% { transform: rotate(30deg); }
          25% { transform: rotate(-55deg); }
          50% { transform: rotate(-70deg); }                         
          75% { transform: rotate(10deg); }
        }

        @keyframes dust-drift {
          0% { transform: translate(15px, 20px) scale(0.3); opacity: 0.8; }
          100% { transform: translate(-150px, -5px) scale(2.0); opacity: 0; }
        }
        .anim-dust { animation: dust-drift 0.42s infinite linear; }

        .f-sh-l { animation: front-shoulder-left var(--master-speed) var(--sync-curve) infinite; transform-origin: 135px 75px; }
        .f-kn-l { animation: front-knee-left var(--master-speed) var(--sync-curve) infinite; transform-origin: 138px 94px; }
        .f-an-l { animation: front-ankle-left var(--master-speed) var(--sync-curve) infinite; transform-origin: 146px 112px; }
        .f-sh-r { animation: front-shoulder-right var(--master-speed) var(--sync-curve) infinite; transform-origin: 135px 75px; }
        .f-kn-r { animation: front-knee-right var(--master-speed) var(--sync-curve) infinite; transform-origin: 138px 94px; }

        .h-th-l { animation: hind-thigh-left var(--master-speed) var(--sync-curve) infinite; transform-origin: 55px 72px; }
        .h-hk-l { animation: hind-hock-left var(--master-speed) var(--sync-curve) infinite; transform-origin: 46px 92px; }
        .h-th-r { animation: hind-thigh-right var(--master-speed) var(--sync-curve) infinite; transform-origin: 55px 72px; }
        .h-hk-r { animation: hind-hock-right var(--master-speed) var(--sync-curve) infinite; transform-origin: 46px 92px; }
      `}</style>
      <div className="relative w-full max-w-sm h-64 flex flex-col items-center justify-center">
        <svg viewBox="0 0 200 150" className="w-68 h-52 anim-torso drop-shadow-[0_0_20px_rgba(255,30,30,0.25)]">
          
          {/* Shadow Layer Background Limbs */}
          <g filter="brightness(0.35)" opacity="0.55">
            <g className="h-th-r">
              <path d="M55 72 C42 85, 42 95, 46 92" stroke="var(--red-primary)" strokeWidth="12" strokeLinecap="round" />
              <g className="h-hk-r">
                <path d="M46 92 L42 114 L36 126" stroke="var(--red-primary)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 125 L42 125 L39 129 L31 129 Z" fill="#200000" />
              </g>
            </g>
            <g className="f-sh-r">
              <path d="M135 75 L138 94" stroke="var(--red-primary)" strokeWidth="10" strokeLinecap="round" />
              <g className="f-kn-r">
                <path d="M138 94 L146 112" stroke="var(--red-primary)" strokeWidth="6" strokeLinecap="round" />
                <g className="f-an-r">
                  <path d="M146 112 L152 124" stroke="var(--red-primary)" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M149 123 L158 123 L156 127 L147 127 Z" fill="#200000" />
                </g>
              </g>
            </g>
          </g>

          {/* Core Body Frame Parts */}
          <path className="anim-tail" d="M42 65 C18 55, 4 44, -4 60 C8 56, 20 66, 38 68 Z" fill="var(--red-primary)" />
          <path d="M40 66 C44 51, 68 53, 92 55 C116 53, 132 48, 144 68 C146 76, 132 87, 116 85 C86 87, 56 86, 42 76 C36 71, 38 68, 40 66 Z" fill="url(#horseCoreGlow)" />

          {/* High Contrast Foreground Limbs */}
          <g className="h-th-l">
            <path d="M55 72 C40 85, 42 96, 46 92" stroke="var(--red-primary)" strokeWidth="15" strokeLinecap="round" />
            <g className="h-hk-l">
              <path d="M46 92 L42 114 L36 126" stroke="var(--red-primary)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M33 125 L43 125 L40 129 L32 129 Z" fill="#420000" />
            </g>
          </g>

          <g className="f-sh-l">
            <path d="M135 75 L138 94" stroke="var(--red-primary)" strokeWidth="12" strokeLinecap="round" />
            <g className="f-kn-l">
              <path d="M138 94 L146 112" stroke="var(--red-primary)" strokeWidth="7" strokeLinecap="round" />
              <g className="f-an-l">
                <path d="M146 112 L152 124" stroke="var(--red-primary)" strokeWidth="5" strokeLinecap="round" />
                <path d="M149 123 L159 123 L157 127 L148 127 Z" fill="#420000" />
              </g>
            </g>
          </g>

          {/* Integrated Neck and Head Layout */}
          <g className="anim-neck">
            <path d="M124 72 C128 48, 142 26, 156 18 C164 23, 152 50, 144 68 Z" fill="var(--red-primary)" />
            {/* Fixed Mane path - safely shifted forward to clear the back entirely */}
            <path d="M125 65 C128 50, 138 35, 152 20 C146 32, 140 46, 134 58 Z" fill="var(--red-shadow)" />
            <g className="anim-head">
              <path d="M154 20 C151 13, 149 3, 155 0 C157 0, 159 6, 159 12 C165 10, 180 20, 187 24 C190 26, 188 32, 182 32 C170 32, 160 26, 154 20 Z" fill="var(--red-primary)" />
              <path d="M152 2 C150 -6, 154 -7, 156 0 Z" fill="var(--red-shadow)" />
              <circle cx="161" cy="16" r="1.5" fill="black" />
            </g>
          </g>

          <defs>
            <linearGradient id="horseCoreGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--red-shadow)" />
              <stop offset="55%" stopColor="var(--red-primary)" />
              <stop offset="100%" stopColor="var(--red-shadow)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Dynamic Ground Dust Effects */}
        <div className="absolute bottom-16 left-6 w-48 h-4 overflow-visible pointer-events-none">
          <div className="anim-dust absolute left-[30px] w-3 h-3 bg-[#ff1e1e]/20 rounded-full" style={{ animationDelay: '0s' }}></div>
          <div className="anim-dust absolute left-[60px] w-4 h-4 bg-[#7f0000]/15 rounded-full" style={{ animationDelay: '0.16s' }}></div>
          <div className="anim-dust absolute left-[90px] w-2.5 h-2.5 bg-[#ff1e1e]/25 rounded-full" style={{ animationDelay: '0.32s' }}></div>
        </div>
      </div>

      {/* Typography Overlay */}
      <div className="text-center z-10 mt-2">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1 tracking-wider uppercase animate-pulse">Loading</h2>
      </div>

      {/* Modern Minimal Progress Indicator */}
      <div className="mt-6 w-52 h-1 bg-[#1a0000] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#b30000] to-[#ff1e1e] rounded-full w-full transform origin-left animate-[pulse_1.5s_infinite]"></div>
      </div>
    </div>
  )
}
