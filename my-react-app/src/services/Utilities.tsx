

const formatDate = (dateString:string)=>{
    const date = new Date(dateString);
    const options = {year:'numeric' as const, month:'short' as const}
    return date.toLocaleDateString('en-US', options);
}

const formatInterviewTime=(dateStr:any)=>{
    const date = new Date(dateStr);

    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}

function openBase64PDF(base64String:string) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // Open the PDF in a new tab
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL);
}

function timeAgo(date: string): string {
    const seconds: number = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

    if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    const minutes: number = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    const hours: number = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    const days: number = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days !== 1 ? 's' : ''} ago`;
    const weeks: number = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    const months: number = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
    const years: number = Math.floor(days / 365);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
}

const getBase64=(file:any)=>{
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                    };
                    fileReader.onerror = () => {
                        reject(new Error("Error reading file"));
                    };
            });
}

export {formatDate, timeAgo, getBase64, formatInterviewTime, openBase64PDF};
