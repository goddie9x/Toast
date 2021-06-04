const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function toast({
    elementToast = '',
    type = 'info',
    title = '',
    content = '',
    duration = 3000
}) {
    const main = $(elementToast);
    if (main) {
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        }
        const toast = document.createElement('div');

        toast.classList.add('toast', `toast__${type}`);
        toast.innerHTML += `
            <div class="toast__icon"><i class="${icons[type]}"></i></div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__content">${content}</p>
            </div>
            <div class="toast__close"><i class="fas fa-times"></i></div>
        `;

        const delay = (duration / 1000).toFixed(2);

        toast.style.animation = ` slideInLeft .3s ease, fadeOut 1s ${delay}s linear forwards`;
        main.appendChild(toast);
        //auto remove toast
        const autoRemoveID = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);
        //click remove toast
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);
            }
        }
    }
}

$('.btn-success').onclick = showSuccess;
$('.btn-warning').onclick = showWarning;

function showSuccess() {
    toast({
        elementToast: '#toast',
        type: 'success',
        title: 'sắc sẹt',
        content: 'đây là test success'
    })
}

function showWarning() {
    toast({
        elementToast: '#toast',
        type: 'warning',
        title: 'quơ ning',
        content: 'đoạn này phải dài hơnđoạn này phải dài hơnđoạn này phải dài hơnđoạn này phải dài hơn đoạn này phải dài hơn đoạn này phải dài hơn đoạn này phải dài hơn ❤️'
    })
}