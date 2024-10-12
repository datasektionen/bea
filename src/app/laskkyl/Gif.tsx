import Image from 'next/image';

export function Gif({ src }: { src: string }) {
    return (
        <Image
            src={src}
            width={350}
            height={175}
            unoptimized
            priority
            alt="Fippel"
        />
    );
}
