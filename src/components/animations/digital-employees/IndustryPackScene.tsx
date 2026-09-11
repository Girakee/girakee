import { useId } from 'react'
import { motion } from 'framer-motion'
import { useMotionConfig } from '../../../hooks/useMotionConfig'
import { industrySceneCopy } from '../../../data/digitalEmployeeScenes'
import type { IndustryPack } from '../../../data/digitalEmployees'
import { AMBER, CYAN, CYAN_BRIGHT, DigitalEmployee, GREEN, RED, SceneShell } from './shared'

function Pulse({ loop, delay = 0, ...rest }: { loop: boolean; delay?: number; cx: number; cy: number; r?: number }) {
  return (
    <motion.circle
      r={rest.r ?? 3}
      cx={rest.cx}
      cy={rest.cy}
      fill={CYAN_BRIGHT}
      animate={loop ? { opacity: [0.25, 1, 0.25] } : undefined}
      transition={{ repeat: Infinity, duration: 1.8, delay }}
    />
  )
}

function Motif({ id, loop }: { id: string; loop: boolean }) {
  switch (id) {
    case 'healthcare':
      return (
        <g>
          <rect x="168" y="52" width="150" height="110" rx="6" fill="rgba(8,175,199,0.06)" stroke={CYAN} />
          <rect x="180" y="66" width="48" height="78" rx="4" fill="#07131f" stroke="rgba(255,255,255,0.2)" />
          <rect x="188" y="74" width="32" height="18" fill={CYAN} opacity="0.25" />
          {loop && [0, 1, 2].map((i) => (
            <motion.rect key={i} x="188" y={100 + i * 12} height="6" fill={CYAN} opacity="0.5"
              animate={{ width: [8, 28, 14] }} transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.3 }} />
          ))}
          <text x="204" y="148" textAnchor="middle" fill={CYAN} fontSize="6" fontFamily="monospace">EHR</text>
          {[0, 1, 2].map((i) => (
            <motion.g key={i} animate={loop ? { x: [0, 8, 0], opacity: [0.5, 1, 0.5] } : undefined}
              transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.4 }}>
              <rect x="248" y={68 + i * 28} width="56" height="22" rx="2" fill="#07131f" stroke={CYAN} />
              <text x="276" y={82 + i * 28} textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">
                {['Claim', 'Auth', 'Elig'][i]}
              </text>
            </motion.g>
          ))}
          <g transform="translate(350, 70)">
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.15)" />
            <rect x="36" y="18" width="8" height="44" fill={CYAN} opacity="0.8" />
            <rect x="18" y="36" width="44" height="8" fill={CYAN} opacity="0.8" />
            {loop && (
              <motion.circle cx="40" cy="40" r="28" fill="none" stroke={CYAN_BRIGHT} strokeWidth="1.2"
                animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                style={{ transformOrigin: '40px 40px' }} />
            )}
          </g>
        </g>
      )
    case 'banking-financial-services':
      return (
        <g>
          <rect x="170" y="50" width="120" height="130" rx="4" fill="rgba(8,175,199,0.05)" stroke={CYAN} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="182" y={62 + i * 28} width="96" height="20" rx="2" fill="#07131f" stroke="rgba(255,255,255,0.12)" />
              <motion.rect x="190" y={68 + i * 28} height="8" fill={i === 1 ? GREEN : CYAN}
                animate={loop ? { width: [20, 70, 40] } : undefined} transition={{ repeat: Infinity, duration: 2.8, delay: i * 0.25 }} />
            </g>
          ))}
          <rect x="310" y="58" width="130" height="112" rx="6" fill="#07131f" stroke={AMBER} />
          <text x="375" y="78" textAnchor="middle" fill={AMBER} fontSize="7" fontFamily="monospace">KYC SCAN</text>
          <rect x="332" y="90" width="86" height="52" fill="rgba(245,158,11,0.1)" stroke={AMBER} />
          {loop && (
            <motion.line x1="332" y1="90" x2="418" y2="90" stroke={AMBER} strokeWidth="2"
              animate={{ y1: [90, 142, 90], y2: [90, 142, 90] }} transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }} />
          )}
          <text x="375" y="158" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace">MATCH 98%</text>
        </g>
      )
    case 'insurance':
      return (
        <g>
          <motion.g animate={loop ? { y: [0, -6, 0] } : undefined} transition={{ repeat: Infinity, duration: 3.2 }}>
            <rect x="176" y="58" width="90" height="120" rx="3" fill="#0a1525" stroke={CYAN} />
            <rect x="188" y="72" width="66" height="8" fill={CYAN} opacity="0.35" />
            <rect x="188" y="88" width="50" height="5" fill="rgba(255,255,255,0.2)" />
            <rect x="188" y="100" width="58" height="5" fill="rgba(255,255,255,0.12)" />
            <text x="221" y="150" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">POLICY</text>
          </motion.g>
          {[0, 1, 2].map((i) => (
            <motion.rect key={i} x={286} y={70 + i * 36} width="130" height="28" rx="3"
              fill="rgba(8,175,199,0.07)" stroke={i === 0 ? GREEN : CYAN}
              animate={loop ? { x: [286, 294, 286] } : undefined}
              transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.35 }} />
          ))}
          {['FNOL', 'Validate', 'Payout'].map((t, i) => (
            <text key={t} x="351" y={88 + i * 36} textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">{t}</text>
          ))}
        </g>
      )
    case 'accounting-finance':
      return (
        <g>
          {['PO', 'GRN', 'INV'].map((label, i) => (
            <g key={label}>
              <rect x={170 + i * 70} y="70" width="58" height="70" rx="3" fill="#07131f" stroke={CYAN} />
              <text x={199 + i * 70} y="108" textAnchor="middle" fill={CYAN} fontSize="10" fontFamily="monospace">{label}</text>
            </g>
          ))}
          {loop && [0, 1].map((i) => (
            <motion.circle key={i} r="3" fill={CYAN_BRIGHT}
              animate={{ cx: [228 + i * 70, 240 + i * 70], cy: [105, 105], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.4 }} />
          ))}
          <rect x="170" y="160" width="268" height="36" rx="3" fill="rgba(34,197,94,0.08)" stroke={GREEN} />
          <motion.text x="304" y="182" textAnchor="middle" fill={GREEN} fontSize="9" fontFamily="monospace"
            animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2 }}>
            3-WAY MATCH COMPLETE
          </motion.text>
        </g>
      )
    case 'retail':
      return (
        <g>
          {[0, 1, 2, 3].map((col) => (
            <g key={col}>
              <rect x={176 + col * 42} y="58" width="34" height="120" fill="rgba(8,175,199,0.05)" stroke="rgba(255,255,255,0.15)" />
              {[0, 1, 2, 3].map((row) => (
                <motion.rect key={row} x={182 + col * 42} y={68 + row * 26} width="22" height="16"
                  fill={CYAN} opacity="0.35"
                  animate={loop ? { opacity: [0.15, 0.7, 0.15] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.4, delay: (col + row) * 0.12 }} />
              ))}
            </g>
          ))}
          <rect x="352" y="80" width="90" height="90" rx="6" fill="#07131f" stroke={CYAN} />
          <text x="397" y="112" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">SCAN</text>
          {loop && (
            <motion.rect x="368" y="124" width="58" height="8" fill={CYAN_BRIGHT}
              animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.6 }} />
          )}
          <text x="397" y="156" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace">SKU OK</text>
        </g>
      )
    case 'ecommerce':
      return (
        <g>
          <line x1="168" y1="150" x2="430" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
          {[0, 1, 2, 3].map((i) => (
            <motion.g key={i} animate={loop ? { x: [0, 220] } : undefined}
              transition={{ repeat: Infinity, duration: 4.2, delay: i * 0.7, ease: 'linear' }}>
              <rect x="168" y="118" width="36" height="28" rx="2" fill="#07131f" stroke={CYAN} />
              <rect x="174" y="124" width="24" height="8" fill={CYAN} opacity="0.4" />
            </motion.g>
          ))}
          <rect x="168" y="58" width="110" height="44" rx="3" fill="rgba(8,175,199,0.08)" stroke={CYAN} />
          <text x="223" y="84" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">CART · 12</text>
          <rect x="300" y="58" width="130" height="44" rx="3" fill="rgba(8,175,199,0.08)" stroke={GREEN} />
          <text x="365" y="84" textAnchor="middle" fill={GREEN} fontSize="8" fontFamily="monospace">SHIPPED</text>
        </g>
      )
    case 'manufacturing':
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={170 + i * 68} y="70" width="52" height="70" fill="rgba(8,175,199,0.05)" stroke="rgba(255,255,255,0.15)" />
              <motion.circle cx={196 + i * 68} cy="105" r="12" fill="none" stroke={CYAN} strokeWidth="2"
                animate={loop ? { rotate: 360 } : undefined}
                transition={{ repeat: Infinity, duration: 2.8 - i * 0.3, ease: 'linear' }}
                style={{ transformOrigin: `${196 + i * 68}px 105px` }} />
              <text x={196 + i * 68} y="158" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">
                ST{i + 1}
              </text>
            </g>
          ))}
          {loop && (
            <motion.rect width="20" height="14" fill={CYAN_BRIGHT} opacity="0.8"
              animate={{ x: [178, 390], y: [98, 98] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: 'linear' }} />
          )}
          <text x="304" y="188" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace">QC PASS · LINE A</text>
        </g>
      )
    case 'logistics-transportation':
      return (
        <g>
          <path d="M170 150 C 230 90, 300 180, 430 110" fill="none" stroke="rgba(8,175,199,0.35)" strokeWidth="2" strokeDasharray="6 4" />
          <motion.g animate={loop ? { x: [170, 390], y: [142, 102] } : undefined}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
            <rect width="36" height="16" rx="2" fill="#07131f" stroke={CYAN_BRIGHT} />
            <rect x="28" y="3" width="14" height="10" fill={CYAN} opacity="0.5" />
          </motion.g>
          <Pulse loop={loop} cx={170} cy={150} />
          <Pulse loop={loop} cx={300} cy={140} delay={0.4} />
          <Pulse loop={loop} cx={430} cy={110} delay={0.8} />
          <text x="300" y="188" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">ROUTE OPTIMIZED</text>
        </g>
      )
    case 'automotive':
      return (
        <g>
          <motion.g animate={loop ? { x: [0, 12, 0] } : undefined} transition={{ repeat: Infinity, duration: 3 }}>
            <rect x="190" y="100" width="120" height="36" rx="10" fill="rgba(8,175,199,0.12)" stroke={CYAN} />
            <circle cx="214" cy="144" r="12" fill="#07131f" stroke={CYAN} />
            <circle cx="286" cy="144" r="12" fill="#07131f" stroke={CYAN} />
            <rect x="210" y="88" width="70" height="18" rx="6" fill="#07131f" stroke={CYAN} />
          </motion.g>
          <rect x="340" y="60" width="100" height="120" rx="4" fill="#07131f" stroke={AMBER} />
          {['Warranty', 'Service', 'Parts'].map((t, i) => (
            <motion.text key={t} x="390" y={92 + i * 28} textAnchor="middle" fill={i === 1 ? AMBER : 'rgba(255,255,255,0.5)'}
              fontSize="8" fontFamily="monospace"
              animate={loop ? { opacity: [0.35, 1, 0.35] } : undefined}
              transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.4 }}
            >{t}</motion.text>
          ))}
        </g>
      )
    case 'real-estate':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${176 + i * 88}, 70)`}>
              <polygon points="40,8 72,32 8,32" fill="rgba(8,175,199,0.15)" stroke={CYAN} />
              <rect x="12" y="32" width="56" height="70" fill="#07131f" stroke={CYAN} />
              {[0, 1, 2].map((r) => (
                <g key={r}>
                  <rect x="20" y={42 + r * 18} width="10" height="10" fill={CYAN} opacity="0.3" />
                  <rect x="40" y={42 + r * 18} width="10" height="10" fill={CYAN} opacity="0.3" />
                </g>
              ))}
              {loop && (
                <motion.rect x="12" y="32" width="56" height="70" fill="rgba(8,175,199,0.12)"
                  animate={{ opacity: [0, 0.4, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }} />
              )}
            </g>
          ))}
        </g>
      )
    case 'construction':
      return (
        <g>
          <line x1="200" y1="180" x2="200" y2="70" stroke={CYAN} strokeWidth="3" />
          <line x1="200" y1="70" x2="320" y2="70" stroke={CYAN} strokeWidth="3" />
          <motion.rect x="300" y="70" width="8" height="40" fill={AMBER}
            animate={loop ? { y: [70, 140, 70] } : undefined}
            transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }} />
          <rect x="330" y="90" width="100" height="80" fill="#07131f" stroke="rgba(255,255,255,0.2)" />
          <line x1="330" y1="90" x2="430" y2="170" stroke={CYAN} strokeWidth="0.6" />
          <line x1="430" y1="90" x2="330" y2="170" stroke={CYAN} strokeWidth="0.6" />
          <text x="380" y="134" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">BID SET</text>
        </g>
      )
    case 'human-resources':
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.g key={i} animate={loop ? { y: [0, -10, 0], x: [0, i % 2 === 0 ? 6 : -4, 0] } : undefined}
              transition={{ repeat: Infinity, duration: 2.8, delay: i * 0.25 }}>
              <rect x={176 + i * 64} y={80 + (i % 2) * 12} width="54" height="72" rx="3" fill="#07131f" stroke={CYAN} />
              <circle cx={203 + i * 64} cy={104 + (i % 2) * 12} r="8" fill={CYAN} opacity="0.4" />
              <rect x={188 + i * 64} y={120 + (i % 2) * 12} width="30" height="5" fill="rgba(255,255,255,0.2)" />
              <rect x={188 + i * 64} y={130 + (i % 2) * 12} width="22" height="5" fill="rgba(255,255,255,0.12)" />
            </motion.g>
          ))}
          <text x="304" y="188" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace">SCREENING</text>
        </g>
      )
    case 'legal':
      return (
        <g>
          <rect x="176" y="58" width="140" height="130" fill="#07131f" stroke={CYAN} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="190" y={74 + i * 16} width={90 - i * 8} height="6" fill="rgba(255,255,255,0.18)" />
          ))}
          {loop && (
            <motion.rect x="186" y="70" width="120" height="16" fill="rgba(245,158,11,0.2)" stroke={AMBER}
              animate={{ y: [70, 150, 70] }} transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }} />
          )}
          <rect x="334" y="80" width="106" height="90" rx="3" fill="rgba(245,158,11,0.08)" stroke={AMBER} />
          <text x="387" y="118" textAnchor="middle" fill={AMBER} fontSize="7" fontFamily="monospace">REVIEW</text>
          <text x="387" y="136" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">HUMAN GATE</text>
        </g>
      )
    case 'education':
      return (
        <g>
          <rect x="180" y="70" width="160" height="110" rx="4" fill="#07131f" stroke={CYAN} />
          <text x="260" y="96" textAnchor="middle" fill={CYAN} fontSize="8" fontFamily="monospace">APPLICATION</text>
          {['Transcript', 'Fee', 'ID'].map((t, i) => (
            <motion.rect key={t} x={196} y={110 + i * 20} width="128" height="16" rx="2"
              fill="rgba(8,175,199,0.08)" stroke={i === 2 ? GREEN : CYAN}
              animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} />
          ))}
          {[0, 1, 2].map((i) => (
            <text key={i} x="260" y={122 + i * 20} textAnchor="middle" fill="white" fontSize="7" fontFamily="monospace">
              {['Transcript', 'Fee', 'ID'][i]}
            </text>
          ))}
          <motion.circle cx="390" cy="120" r="28" fill="none" stroke={GREEN} strokeWidth="3"
            strokeDasharray="80 40"
            animate={loop ? { rotate: 360 } : undefined}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            style={{ transformOrigin: '390px 120px' }} />
          <text x="390" y="124" textAnchor="middle" fill={GREEN} fontSize="8" fontFamily="monospace">ENR</text>
        </g>
      )
    case 'government-public-sector':
      return (
        <g>
          <rect x="190" y="58" width="90" height="120" fill="#07131f" stroke={CYAN} />
          <rect x="202" y="70" width="66" height="8" fill={CYAN} opacity="0.4" />
          <rect x="202" y="86" width="50" height="6" fill="rgba(255,255,255,0.2)" />
          <motion.g animate={loop ? { y: [0, 8, 0], rotate: [0, -8, 0] } : undefined}
            transition={{ repeat: Infinity, duration: 2.6 }}
            style={{ transformOrigin: '320px 110px' }}>
            <rect x="292" y="90" width="70" height="50" fill="rgba(239,68,68,0.15)" stroke={RED} />
            <text x="327" y="118" textAnchor="middle" fill={RED} fontSize="8" fontFamily="monospace">STAMP</text>
          </motion.g>
          <text x="300" y="188" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">PERMIT QUEUE</text>
        </g>
      )
    case 'telecom':
      return (
        <g>
          <rect x="210" y="150" width="18" height="40" fill={CYAN} opacity="0.4" />
          <polygon points="219,70 250,150 188,150" fill="rgba(8,175,199,0.12)" stroke={CYAN} />
          {[18, 28, 38].map((r, i) => (
            <motion.path key={r} d={`M ${219 + 20} ${90} A ${r} ${r} 0 0 1 ${219 + 20 + r * 0.7} ${90 + r * 0.7}`}
              fill="none" stroke={CYAN_BRIGHT} strokeWidth="1.5"
              animate={loop ? { opacity: [0.15, 1, 0.15] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.35 }} />
          ))}
          <rect x="300" y="70" width="130" height="110" rx="4" fill="#07131f" stroke={CYAN} />
          {['SIM ACT', 'BILL', 'PLAN'].map((t, i) => (
            <motion.text key={t} x="365" y={102 + i * 26} textAnchor="middle" fill={i === 0 ? GREEN : 'rgba(255,255,255,0.45)'}
              fontSize="8" fontFamily="monospace"
              animate={loop ? { opacity: [0.35, 1, 0.35] } : undefined}
              transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.4 }}
            >{t}</motion.text>
          ))}
        </g>
      )
    case 'it-software':
      return (
        <g>
          {['INC', 'REQ', 'CHG'].map((col, i) => (
            <g key={col}>
              <rect x={176 + i * 90} y="58" width="80" height="130" rx="3" fill="rgba(8,175,199,0.04)" stroke="rgba(255,255,255,0.12)" />
              <text x={216 + i * 90} y="74" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">{col}</text>
              {[0, 1, 2].map((c) => (
                <motion.rect key={c} x={186 + i * 90} y={88 + c * 28} width="60" height="20" rx="2"
                  fill="#07131f" stroke={CYAN}
                  animate={loop ? { y: [88 + c * 28, 84 + c * 28, 88 + c * 28] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.2 + c * 0.15 }} />
              ))}
            </g>
          ))}
        </g>
      )
    case 'cybersecurity':
      return (
        <g>
          <motion.path d="M300,55 L350,75 L350,125 Q350,165 300,185 Q250,165 250,125 L250,75 Z"
            fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.6"
            animate={loop ? { strokeOpacity: [0.4, 1, 0.4] } : undefined}
            transition={{ repeat: Infinity, duration: 2.2 }} />
          {loop && [0, 1, 2, 3].map((i) => (
            <motion.circle key={i} r="4" fill={RED}
              animate={{ cx: [170, 250], cy: [80 + i * 24, 120], opacity: [0.9, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.3, ease: 'easeIn' }} />
          ))}
          <rect x="370" y="70" width="80" height="100" fill="#07131f" stroke={RED} />
          <motion.text x="410" y="118" textAnchor="middle" fill={RED} fontSize="8" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 1.4 }}>
            ALERT
          </motion.text>
          <text x="410" y="138" textAnchor="middle" fill={AMBER} fontSize="6" fontFamily="monospace">AUTH REQ</text>
        </g>
      )
    case 'travel-hospitality':
      return (
        <g>
          <rect x="176" y="70" width="130" height="100" rx="8" fill="#07131f" stroke={CYAN} />
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              {[0, 1, 2, 3, 4].map((c) => (
                <motion.rect key={c} x={188 + c * 22} y={88 + r * 18} width="16" height="12" rx="1"
                  fill={r === 1 && c === 2 ? CYAN : 'rgba(255,255,255,0.08)'}
                  animate={loop && r === 1 && c === 2 ? { opacity: [0.4, 1, 0.4] } : undefined}
                  transition={{ repeat: Infinity, duration: 1.6 }} />
              ))}
            </g>
          ))}
          <motion.g animate={loop ? { x: [320, 400, 320], y: [90, 70, 90] } : undefined}
            transition={{ repeat: Infinity, duration: 4 }}>
            <polygon points="0,18 48,10 48,26 0,22" fill={CYAN} opacity="0.7" />
          </motion.g>
          <text x="304" y="192" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">RESERVATION GRID</text>
        </g>
      )
    case 'restaurants-food-services':
      return (
        <g>
          <rect x="176" y="58" width="24" height="130" fill="rgba(255,255,255,0.08)" />
          {[0, 1, 2, 3].map((i) => (
            <motion.g key={i} animate={loop ? { y: [60, 160] } : undefined}
              transition={{ repeat: Infinity, duration: 3.2, delay: i * 0.55, ease: 'linear' }}>
              <rect x="206" y="60" width="70" height="28" rx="2" fill="#07131f" stroke={AMBER} />
              <text x="241" y="78" textAnchor="middle" fill={AMBER} fontSize="7" fontFamily="monospace">
                TKT {i + 1}
              </text>
            </motion.g>
          ))}
          <rect x="300" y="80" width="130" height="80" rx="4" fill="rgba(8,175,199,0.06)" stroke={CYAN} />
          <text x="365" y="116" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">KITCHEN</text>
          <motion.text x="365" y="136" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace"
            animate={loop ? { opacity: [0.2, 1, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 1.8 }}>
            EXPEDITE
          </motion.text>
        </g>
      )
    case 'pharmaceutical':
      return (
        <g>
          <rect x="188" y="70" width="28" height="90" rx="8" fill="rgba(8,175,199,0.12)" stroke={CYAN} />
          <rect x="192" y="78" width="20" height="40" fill={CYAN} opacity="0.35" />
          <motion.rect x="192" y="110" width="20" height="40" fill={CYAN_BRIGHT} opacity="0.5"
            animate={loop ? { y: [110, 88, 110] } : undefined} transition={{ repeat: Infinity, duration: 2.8 }} />
          <rect x="240" y="70" width="200" height="110" rx="4" fill="#07131f" stroke={GREEN} />
          {['AE logged', 'QA signed', 'Batch hold'].map((t, i) => (
            <motion.text key={t} x="340" y={100 + i * 24} textAnchor="middle"
              fill={i === 1 ? GREEN : 'rgba(255,255,255,0.5)'} fontSize="8" fontFamily="monospace"
              animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined}
              transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.4 }}
            >{t}</motion.text>
          ))}
        </g>
      )
    case 'life-sciences':
      return (
        <g>
          <circle cx="230" cy="120" r="48" fill="none" stroke={CYAN} strokeWidth="3" />
          <circle cx="230" cy="120" r="18" fill="rgba(8,175,199,0.1)" stroke={CYAN} />
          <motion.g animate={loop ? { rotate: 360 } : undefined} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            style={{ transformOrigin: '230px 120px' }}>
            <ellipse cx="230" cy="120" rx="48" ry="16" fill="none" stroke={CYAN_BRIGHT} />
            <ellipse cx="230" cy="120" rx="16" ry="48" fill="none" stroke={CYAN_BRIGHT} />
          </motion.g>
          {[0, 1, 2, 3].map((i) => (
            <motion.circle key={i} cx={330 + (i % 2) * 50} cy={80 + Math.floor(i / 2) * 50} r="14"
              fill="rgba(8,175,199,0.1)" stroke={CYAN}
              animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.25 }} />
          ))}
        </g>
      )
    case 'energy-utilities':
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const h = 30 + (i % 3) * 28
            return (
              <motion.rect key={i} x={176 + i * 28} y={180 - h} width="18" height={h} fill={CYAN} opacity="0.5"
                animate={loop ? { height: [h * 0.4, h, h * 0.6, h], y: [180 - h * 0.4, 180 - h, 180 - h * 0.6, 180 - h] } : undefined}
                transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.15 }} />
            )
          })}
          <rect x="350" y="70" width="90" height="90" rx="45" fill="#07131f" stroke={AMBER} />
          <motion.circle cx="395" cy="115" r="8" fill={AMBER}
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 1.2 }} />
          <text x="395" y="178" textAnchor="middle" fill={AMBER} fontSize="6" fontFamily="monospace">OUTAGE</text>
        </g>
      )
    case 'oil-gas':
      return (
        <g>
          <rect x="210" y="90" width="16" height="90" fill={CYAN} opacity="0.35" />
          <rect x="200" y="70" width="36" height="22" fill="#07131f" stroke={CYAN} />
          <motion.rect x="248" y="70" width="10" height="50" fill={AMBER}
            animate={loop ? { rotate: [20, 40, 20] } : undefined}
            transition={{ repeat: Infinity, duration: 2.8 }}
            style={{ transformOrigin: '210px 80px' }} />
          <path d="M226 180 C 260 160, 300 200, 360 150" fill="none" stroke={CYAN} strokeWidth="3" />
          {loop && (
            <motion.circle r="4" fill={CYAN_BRIGHT}
              animate={{ cx: [226, 360], cy: [180, 150] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }} />
          )}
          <text x="300" y="70" fill={GREEN} fontSize="7" fontFamily="monospace">HSE CLEAR</text>
        </g>
      )
    case 'agriculture':
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <g key={row}>
              {[0, 1, 2, 3, 4].map((col) => (
                <motion.line key={col} x1={176 + col * 36} y1={70 + row * 18} x2={176 + col * 36} y2={82 + row * 18}
                  stroke={GREEN} strokeWidth="2"
                  animate={loop ? { opacity: [0.25, 1, 0.25] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.6, delay: (row + col) * 0.08 }} />
              ))}
            </g>
          ))}
          <motion.rect width="40" height="18" rx="3" fill={CYAN}
            animate={loop ? { x: [170, 340], y: [90, 150] } : undefined}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} />
          <text x="390" y="120" fill={CYAN} fontSize="7" fontFamily="monospace">FIELD OPS</text>
        </g>
      )
    case 'media-entertainment':
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={176 + i * 22} y="70" width="16" height="110" fill={i % 2 ? 'rgba(8,175,199,0.2)' : 'rgba(255,255,255,0.08)'} />
          ))}
          {loop && (
            <motion.rect x="176" y="70" width="4" height="110" fill={CYAN_BRIGHT}
              animate={{ x: [176, 300] }} transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }} />
          )}
          <rect x="320" y="80" width="120" height="90" rx="3" fill="#07131f" stroke={CYAN} />
          <text x="380" y="120" textAnchor="middle" fill={CYAN} fontSize="8" fontFamily="monospace">RIGHTS</text>
          <motion.text x="380" y="140" textAnchor="middle" fill={GREEN} fontSize="7" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }}>
            WINDOW OPEN
          </motion.text>
        </g>
      )
    case 'marketing-advertising':
      return (
        <g>
          <polygon points="180,70 180,180 320,125" fill="rgba(8,175,199,0.1)" stroke={CYAN} />
          {loop && [0, 1, 2].map((i) => (
            <motion.circle key={i} r="4" fill={CYAN_BRIGHT}
              animate={{ cx: [188, 280], cy: [90 + i * 28, 125], opacity: [1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.35 }} />
          ))}
          <rect x="340" y="80" width="100" height="90" fill="#07131f" stroke={CYAN} />
          {['Leads', 'Campaign', 'Report'].map((t, i) => (
            <text key={t} x="390" y={108 + i * 22} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace">{t}</text>
          ))}
        </g>
      )
    case 'sales-crm':
      return (
        <g>
          {['Lead', 'SQL', 'Quote', 'Won'].map((stage, i) => (
            <g key={stage}>
              <rect x={170 + i * 72} y="80" width="64" height="90" rx="3" fill="rgba(8,175,199,0.05)" stroke={i === 3 ? GREEN : CYAN} />
              <text x={202 + i * 72} y="100" textAnchor="middle" fill={i === 3 ? GREEN : CYAN} fontSize="7" fontFamily="monospace">{stage}</text>
              {[0, 1].map((c) => (
                <motion.rect key={c} x={180 + i * 72} y={114 + c * 22} width="44" height="16" rx="2"
                  fill="#07131f" stroke="rgba(255,255,255,0.15)"
                  animate={loop ? { y: [114 + c * 22, 110 + c * 22, 114 + c * 22] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.2 }} />
              ))}
            </g>
          ))}
        </g>
      )
    case 'supply-chain':
      return (
        <g>
          {[0, 1, 2].map((r) => (
            <g key={r}>
              {[0, 1, 2, 3].map((c) => (
                <motion.rect key={c} x={176 + c * 48} y={68 + r * 40} width="40" height="32"
                  fill="rgba(8,175,199,0.08)" stroke={CYAN}
                  animate={loop ? { opacity: [0.35, 1, 0.35] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.4, delay: (r + c) * 0.12 }} />
              ))}
            </g>
          ))}
          <text x="272" y="198" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">WAREHOUSE SLOTS</text>
        </g>
      )
    case 'aviation':
      return (
        <g>
          <line x1="170" y1="150" x2="440" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeDasharray="12 8" />
          <motion.g animate={loop ? { x: [180, 400], y: [120, 100] } : undefined}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}>
            <polygon points="0,20 70,14 70,22 0,24" fill={CYAN} />
            <polygon points="24,16 40,4 44,8 30,18" fill={CYAN_BRIGHT} />
          </motion.g>
          <rect x="176" y="58" width="90" height="40" rx="3" fill="#07131f" stroke={CYAN} />
          <text x="221" y="82" textAnchor="middle" fill={CYAN} fontSize="8" fontFamily="monospace">PNR OPEN</text>
        </g>
      )
    case 'maritime-shipping':
      return (
        <g>
          <motion.path d="M170 160 Q 240 148 310 160 T 450 160" fill="none" stroke={CYAN} strokeWidth="1.5"
            animate={loop ? { d: ['M170 160 Q 240 148 310 160 T 450 160', 'M170 160 Q 240 172 310 160 T 450 160', 'M170 160 Q 240 148 310 160 T 450 160'] } : undefined}
            transition={{ repeat: Infinity, duration: 3 }} />
          <motion.g animate={loop ? { x: [0, 40, 0], y: [0, -6, 0] } : undefined} transition={{ repeat: Infinity, duration: 3.4 }}>
            <polygon points="240,120 360,120 340,150 250,150" fill="rgba(8,175,199,0.15)" stroke={CYAN} />
            <rect x="268" y="88" width="64" height="32" fill="#07131f" stroke={CYAN} />
            {[0, 1, 2].map((i) => (
              <rect key={i} x={272 + i * 20} y="94" width="16" height="20" fill={CYAN} opacity="0.35" />
            ))}
          </motion.g>
          <text x="300" y="188" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">B/L · CUSTOMS</text>
        </g>
      )
    case 'mining':
      return (
        <g>
          <polygon points="176,180 240,80 300,180" fill="rgba(8,175,199,0.1)" stroke={CYAN} />
          <polygon points="260,180 340,100 430,180" fill="rgba(8,175,199,0.07)" stroke="rgba(255,255,255,0.2)" />
          <motion.g animate={loop ? { x: [200, 320, 200] } : undefined} transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}>
            <rect width="34" height="16" fill={AMBER} />
            <rect x="8" y="-10" width="16" height="12" fill="#07131f" stroke={AMBER} />
          </motion.g>
          <text x="300" y="70" fill={RED} fontSize="7" fontFamily="monospace">SAFETY HOLD</text>
        </g>
      )
    case 'telecom-infrastructure':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${180 + i * 90}, 70)`}>
              <line x1="24" y1="110" x2="24" y2="30" stroke={CYAN} strokeWidth="2" />
              <line x1="8" y1="40" x2="40" y2="40" stroke={CYAN} />
              <line x1="4" y1="55" x2="44" y2="55" stroke={CYAN} />
              {[0, 1, 2].map((r) => (
                <motion.circle key={r} cx="24" cy="24" r={8 + r * 8} fill="none" stroke={CYAN_BRIGHT}
                  animate={loop ? { opacity: [0.15, 0.8, 0.15], r: [8 + r * 8, 14 + r * 8] } : undefined}
                  transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.2 + r * 0.15 }} />
              ))}
            </g>
          ))}
          <text x="304" y="200" textAnchor="middle" fill={CYAN} fontSize="7" fontFamily="monospace">NOC LIVE</text>
        </g>
      )
    default:
      return (
        <g>
          <rect x="200" y="80" width="180" height="90" rx="4" fill="rgba(8,175,199,0.08)" stroke={CYAN} />
          <text x="290" y="128" textAnchor="middle" fill={CYAN} fontSize="8" fontFamily="monospace">DIGITAL EMPLOYEE</text>
        </g>
      )
  }
}

export function IndustryPackScene({ pack, className = '' }: { pack: IndustryPack; className?: string }) {
  const uid = useId().replace(/:/g, '')
  const { shouldLoop } = useMotionConfig()
  const copy = industrySceneCopy[pack.id]
  const loop = shouldLoop

  return (
    <div className={className}>
      <SceneShell label={`${pack.title} Digital Employee`} uid={uid}>
        <DigitalEmployee
          x={78}
          y={108}
          loop={loop}
          glowId={`${uid}-glow`}
          name="Agent"
          status="LIVE"
        />
        <text x="78" y="168" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">
          {copy?.system ?? pack.title}
        </text>

        <Motif id={pack.id} loop={loop} />

        {(copy?.queue ?? []).map((item, i) => (
          <motion.g
            key={item.id}
            animate={loop ? { opacity: [0.35, 1, 0.45] } : undefined}
            transition={{ repeat: Infinity, duration: 2.8, delay: i * 0.45 }}
          >
            <rect x={168} y={214 + i * 22} width="276" height="18" rx="2" fill="rgba(8,175,199,0.06)" stroke="rgba(255,255,255,0.1)" />
            <text x="178" y={226 + i * 22} fill={CYAN} fontSize="6" fontFamily="monospace">{item.id}</text>
            <text x="236" y={226 + i * 22} fill="rgba(255,255,255,0.55)" fontSize="6" fontFamily="monospace">
              {item.task}
            </text>
          </motion.g>
        ))}
      </SceneShell>
    </div>
  )
}
