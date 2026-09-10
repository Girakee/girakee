import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import SEO from '../components/seo/SEO'
import { useMotionConfig } from '../hooks/useMotionConfig'
import { pickVariants } from '../animations/motionConfig'
import { slideUpSubtle } from '../animations/variants'

export default function NotFoundPage() {
  const { reduced, shouldAnimate, transition } = useMotionConfig()
  const reveal = (delay: number) =>
    shouldAnimate
      ? { initial: 'hidden' as const, animate: 'visible' as const, variants: pickVariants(reduced, slideUpSubtle), transition: transition({ delay }) }
      : {}

  return (
    <section className="min-h-[100svh] bg-navy-deep flex items-center justify-center page-px py-16">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center">
        <motion.div {...reveal(0)} className="text-8xl md:text-9xl font-display font-bold text-white/[0.06] mb-4">
          404
        </motion.div>
        <motion.h1 {...reveal(0.1)} className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </motion.h1>
        <motion.p {...reveal(0.2)} className="text-white/45 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>
        <motion.div {...reveal(0.3)}>
          <Button to="/" showArrow>Back to Home</Button>
        </motion.div>
      </div>
    </section>
  )
}
