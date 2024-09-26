import {AnimatePresence, HTMLMotionProps, motion, Variants as _Variants,} from "framer-motion"
import {forwardRef, useEffect, useState} from "react"
import {TRANSITION_EASINGS, Variants, withDelay, WithTransitionConfig,} from "@/app/utils/transition-utils"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cx = (...classNames: any[]) =>
    classNames
        .filter(Boolean)
        .map((r) => r.trim())
        .join(" ")

const isNumeric = (value?: string | number) =>
    value != null && parseInt(value.toString(), 10) > 0

export interface CollapseOptions {
    /**
     * If `true`, the opacity of the content will be animated
     * @default true
     */
    animateOpacity?: boolean
    /**
     * The height you want the content in its collapsed state.
     * @default 0
     */
    startingHeight?: number | string
    /**
     * The height you want the content in its expanded state.
     * @default "auto"
     */
    endingHeight?: number | string
}

const defaultTransitions = {
    exit: {
        height: {duration: 0.2, ease: TRANSITION_EASINGS.ease},
        opacity: {duration: 0.3, ease: TRANSITION_EASINGS.ease},
    },
    enter: {
        height: {duration: 0.3, ease: TRANSITION_EASINGS.ease},
        opacity: {duration: 0.4, ease: TRANSITION_EASINGS.ease},
    },
}

const variants: Variants<CollapseOptions> = {
    exit: ({
               animateOpacity,
               startingHeight,
               transition,
               transitionEnd,
               delay,
           }) => ({
        ...(animateOpacity && {opacity: isNumeric(startingHeight) ? 1 : 0}),
        height: startingHeight,
        transitionEnd: transitionEnd?.exit,
        transition:
            transition?.exit ?? withDelay.exit(defaultTransitions.exit, delay),
    }),
    enter: ({
                animateOpacity,
                endingHeight,
                transition,
                transitionEnd,
                delay,
            }) => ({
        ...(animateOpacity && {opacity: 1}),
        height: endingHeight,
        transitionEnd: transitionEnd?.enter,
        transition:
            transition?.enter ?? withDelay.enter(defaultTransitions.enter, delay),
    }),
}

export type ICollapse = CollapseProps

export interface CollapseProps
    extends WithTransitionConfig<HTMLMotionProps<"div">>,
        CollapseOptions {
}

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
    (props, ref) => {
        const {
            in: isOpen,
            unmountOnExit,
            animateOpacity = true,
            startingHeight = 0,
            endingHeight = "auto",
            style,
            className,
            transition,
            transitionEnd,
            ...rest
        } = props

        const [mounted, setMounted] = useState(false)
        useEffect(() => {
            const timeout = setTimeout(() => {
                setMounted(true)
            })
            return () => clearTimeout(timeout)
        }, [])

        const hasStartingHeight = parseFloat(startingHeight.toString()) > 0

        const custom = {
            startingHeight,
            endingHeight,
            animateOpacity,
            transition: !mounted ? {enter: {duration: 0}} : transition,
            transitionEnd: {
                enter: transitionEnd?.enter,
                exit: unmountOnExit
                    ? transitionEnd?.exit
                    : {
                        ...transitionEnd?.exit,
                        display: hasStartingHeight ? "block" : "none",
                    },
            },
        }

        const show = unmountOnExit ? isOpen : true
        const animate = isOpen || unmountOnExit ? "enter" : "exit"
        const overflow = isOpen ? "visible" : "hidden"

        return (
            <AnimatePresence initial={false} custom={custom}>
                {show && (
                    <motion.div
                        ref={ref}
                        {...rest}
                        className={cx("chakra-collapse", className)}
                        style={{
                            display: "block",
                            overflow: overflow,
                            ...style,
                        }}
                        custom={custom}
                        variants={variants as _Variants}
                        initial={unmountOnExit ? "exit" : false}
                        animate={animate}
                        exit="exit"
                    />
                )}
            </AnimatePresence>
        )
    },
)

Collapse.displayName = "Collapse"