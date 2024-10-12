import Image from 'next/image';

export function Gif({ src, width, height }: { src: string; width: number; height: number }) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            unoptimized
            priority
            alt="Fippel"
        />
    );
}
