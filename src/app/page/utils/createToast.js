
export const CreateToast = (state, message) => {

    const stateToasts = {
        success: {
            icon: '<i class="fa-solid fa-circle-check"></i>',
            title: 'Thành công!',
            msg: 'This is a success message !',
        },
        warning: {
            icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
            title: 'Cảnh báo!',
            msg: 'This is a error message !',
        },
        error: {
            icon: '<i class="fa-solid fa-circle-exclamation"></i>',
            title: 'Thất bại!',
            msg: 'This is a warning message !',
        }
    }

    let toast = document.createElement('div');
    toast.className = `toast-box ${state}`;
    toast.innerHTML = `
    ${stateToasts[state].icon}
    <span class="toast-box__content">  
        <h3 class="toast-box__title">${stateToasts[state].title}</h3>
        <p class="toast-box__msg">${message || stateToasts[state].msg}</p>
    </span>
    <span class="toast-box__close">&times;</span>
    <span class="toast-box__countdown"></span>
    `

    document.querySelector('.toasts').appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
    }, 3000)

    const timeoutId = setTimeout(()=> {
        toast.remove()
    }, 3000 + 1300);

    toast.onclick = e => {
        if(e.target.closest('.toast-box__close')) {
            toast.remove();
            clearTimeout(timeoutId);
        }
    }
}
