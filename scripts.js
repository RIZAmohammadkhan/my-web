document.querySelector('.more-gpts').addEventListener('click', function() {
    var hiddenGpts = document.querySelector('.hidden-gpts');
    hiddenGpts.style.display = 'flex'; // Show the hidden GPT profiles
    this.style.display = 'none'; // Hide the button
});
