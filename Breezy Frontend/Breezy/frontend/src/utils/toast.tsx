// src/utils/toast.ts

export function showToast(msg: string) {
    const t = document.getElementById('toast');

    if (t) {
        t.textContent = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3200);
    } else {
        console.warn("Toast element not found in the DOM");
    }
}
