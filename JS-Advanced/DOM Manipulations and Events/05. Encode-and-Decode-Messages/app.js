function encodeAndDecodeMessages() {

    const textarea = document.querySelectorAll('textarea')
    const buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', encode)
    buttons[1].addEventListener('click', decode)

    function encode(event) {
        let result = '';

        for (i = 0; i < textarea[0].value.length; i++) {
            result += String.fromCharCode(textarea[0].value.charCodeAt(i)+1)
        }
        textarea[0].value = ''
        textarea[1].value = result
    }

    function decode(event) {
        let result = '';

        for (i = 0; i < textarea[1].value.length; i++) {
            result += String.fromCharCode(textarea[1].value.charCodeAt(i)-1)
        }
        textarea[1].value = ''
        textarea[0].value = result
    }
}