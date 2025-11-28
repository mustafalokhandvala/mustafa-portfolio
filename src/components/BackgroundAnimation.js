import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Blob 1 - Top Left */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/20 dark:bg-primary-900/20 rounded-full blur-[100px]"
            />

            {/* Blob 2 - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-900/20 rounded-full blur-[120px]"
            />

            {/* Blob 3 - Center (Subtle) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[150px]"
            />
        </div>
    );
};

export default BackgroundAnimation;
