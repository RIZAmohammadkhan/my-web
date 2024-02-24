document.addEventListener('DOMContentLoaded', () => {
    // Function to populate and show the GPT detail view with animation
    const showGptDetailView = (gptData) => {
        const detailView = document.getElementById('gpt-detail-view');
        detailView.innerHTML = `
            <div class="gpt-detail-container">
                <img src="${gptData.imgSrc}" alt="${gptData.name}" class="gpt-detail-photo">
                <h1>${gptData.name}</h1>
                <p>${gptData.description}</p>
                <hr>
                <h2>How to use?</h2>
                <video src="${gptData.videoSrc}" controls autoplay></video>
                <div class="gpt-detail-buttons">
                    <button id="closeDetail">Close</button>
                    <a href="${gptData.tryNowLink}" id="tryNow" target="_blank">Try Now</a>
                </div>
            </div>
        `;
        // Prepare for animation
        detailView.style.display = 'block';
        detailView.style.opacity = '0';
        detailView.style.transform = 'translate(-50%, -60%)'; // Start slightly above the final position
        // Trigger the animation after a short delay
        setTimeout(() => {
            detailView.style.opacity = '1';
            detailView.style.transform = 'translate(-50%, -50%)';
        }, 10);

        // Close detail view button with animation
        document.getElementById('closeDetail').addEventListener('click', () => {
            detailView.style.opacity = '0';
            detailView.style.transform = 'translate(-50%, -60%)'; // Move up on close
            setTimeout(() => {
                detailView.style.display = 'none';
            }, 500); // Match this with the CSS transition duration
        });
    };

    // Attach click event listeners to each GPT profile
    document.querySelectorAll('.gpt-profile').forEach(profile => {
        profile.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default action

            // Check if the click is from the 'Upcoming GPTs' section
            if (this.closest('#upcoming-gpts')) {
                // Do nothing for 'Upcoming GPTs' to avoid showing detailed view
                console.log('Upcoming GPTs do not show detailed view.');
            } else {
                // Process for other GPT profiles
                const gptData = {
                    imgSrc: this.querySelector('img').src,
                    name: this.querySelector('h3').textContent.trim(),
                    description: this.querySelector('p').textContent.trim(),
                    videoSrc: `videos/${this.querySelector('h3').textContent.replace(/\s+/g, '')}.mp4`,
                    tryNowLink: this.getAttribute('data-try-now-link'),
                };
                showGptDetailView(gptData);
            }
        });
    });

    // 'See More' button functionality
    const moreGptsButton = document.querySelector('.more-gpts');
    if (moreGptsButton) {
        moreGptsButton.addEventListener('click', function() {
            document.querySelector('.hidden-gpts').style.display = 'flex';
            this.style.display = 'none';
        });
    }

    // Hide loading banner after a delay
    setTimeout(() => {
        const loadingBanner = document.getElementById('loadingBanner');
        if (loadingBanner) {
            loadingBanner.style.opacity = '0';
            loadingBanner.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loadingBanner.remove();
            }, 500);
        }
    }, 2000);
});
