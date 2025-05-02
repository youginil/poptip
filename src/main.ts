import poptip from './poptip';

document.getElementById('info')?.addEventListener('click', () => {
    poptip.info('hello', { live: 0 });
});

document.getElementById('success')?.addEventListener('click', () => {
    poptip.success('success', { live: 0 });
});

document.getElementById('warn')?.addEventListener('click', () => {
    poptip.warn('This is warning message', { title: 'warning!!!' });
});

document.getElementById('error')?.addEventListener('click', () => {
    poptip.error({ html: '<a href="">error</a>' });
});
