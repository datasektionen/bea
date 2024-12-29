export function debounce(callback: (...args: any) => any, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => await callback(...args), delay);
    };
}
