export function copyToClipboard(text: string) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        // Modern browsers
        navigator.clipboard.writeText(text);
    } else {
        // Deprecated method.
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.value = text;
        document.execCommand("copy");
        input.remove();
    }
}