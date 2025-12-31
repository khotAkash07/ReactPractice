import { useEffect, useState } from "react";

const FallingCollectWords = () => {
    const text = "Hello world, this is Tailwind animation!";
    const words = text.split(" ");

    const [positions, setPositions] = useState(
        words.map(() => ({
            x: Math.random() * 200 - 100, // random start X offset
            y: -200 - Math.random() * 200, // random start Y above screen
            rotate: Math.random() * 720 - 360, // random rotation
            show: false,
        }))
    );

    useEffect(() => {
        words.forEach((_, index) => {
            setTimeout(() => {
                setPositions(prev =>
                    prev.map((p, i) =>
                        i === index
                            ? { ...p, x: 0, y: 0, rotate: 0, show: true } // move to final position
                            : p
                    )
                );
            }, 1000 + index * 150); // start after 1s, staggered
        });
    }, []);

    return (
        <div className="relative w-full h-64 flex flex-wrap justify-center items-center">
            {words.map((word, idx) => (
                <span
                    key={idx}
                    className={`absolute inline-block transition-all duration-[1200ms] ${
                        positions[idx].show ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        transform: `translate(${positions[idx].x}px, ${positions[idx].y}px) rotate(${positions[idx].rotate}deg)`,
                    }}
                >
          {word}
        </span>
            ))}
        </div>
    );
};

export default FallingCollectWords;
