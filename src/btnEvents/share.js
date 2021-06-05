import '../styles/shareBtn.css'

export default function share() {
    const shareBtn = document.querySelector('#shareBtn')
    const shareData = {
        title: 'Share this very cool comics',
        text: 'This comics is very cool',
        url: window.location.href,
    }
    shareBtn.addEventListener('click', async() => {
        try {
            await navigator.share(shareData)
        } catch (err) {
            alert('Your browser doesn\'\ t support this feature')
        }
    })
}