import '../styles/shareBtn.css'

const shareData = {
    title: 'Share this very cool comics',
    text: 'This comics is very cool',
    url: window.location.href,
}

export default function shareLogic() {
    document.querySelector('#shareBtn').addEventListener('click', async() => {
        try {
            await navigator.share(shareData)
        } catch (err) {
            alert('Your browser doesn\'\ t support this feature')
        }
    })
}