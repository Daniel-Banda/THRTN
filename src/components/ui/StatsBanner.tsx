"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
    prefix?: string;
    value: number;
    suffix?: string;
    label: string;
}

function useCountUp(target: number, active: boolean, duration = 1800) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 0;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setCount(current);
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [target, active, duration]);

    return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
    const count = useCountUp(stat.value, active);
    return (
        <div className="text-center">
            <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                {stat.prefix}{count}{stat.suffix}
            </div>
            <p className="text-sm text-foreground/50 uppercase tracking-widest font-mono">{stat.label}</p>
        </div>
    );
}

interface StatsBannerProps {
    stats?: Stat[];
}

const defaultStats: Stat[] = [
    { prefix: "+", value: 200, label: "Sesiones realizadas" },
    { prefix: "+", value: 50, label: "Inmobiliarias atendidas" },
    { value: 15, suffix: "+", label: "Hoteles en cartera" },
    { value: 100, suffix: "%", label: "Entrega puntual" },
];

export const StatsBanner = ({ stats = defaultStats }: StatsBannerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="bg-surface border-t border-b border-white/5 py-20">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                {stats.map((stat, idx) => (
                    <StatItem key={idx} stat={stat} active={isInView} />
                ))}
            </div>
        </div>
    );
};
