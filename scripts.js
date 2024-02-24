document.addEventListener('DOMContentLoaded', () => {
    // Function to populate and show the GPT detail view
    const showGptDetailView = (gptData) => {
        const detailView = document.getElementById('gpt-detail-view');
        detailView.innerHTML = `
            <div class="gpt-detail-container">
                <img src="${gptData.imgSrc}" alt="${gptData.name}" class="gpt-detail-photo">
                <h1>${gptData.name}</h1>
                <p>${gptData.description}</p>
                <hr>
                <h2>Usage</h2>
                <video src="${gptData.videoSrc}" controls autoplay></video>
                <div class="gpt-detail-buttons">
                    <button id="closeDetail">Close</button>
                    <a href="${gptData.tryNowLink}" id="tryNow" target="_blank">Try Now</a>
                </div>
            </div>
        `;
        detailView.style.display = 'block';

        // Automatically play the video when the detail view is opened
        const video = detailView.querySelector('video');
        if (video) {
            video.autoplay = true; // Set the video to autoplay
            video.load(); // Load the video
        }

        // Close detail view button
        document.getElementById('closeDetail').addEventListener('click', () => {
            detailView.style.display = 'none';
            video.pause(); // Pause the video when the detail view is closed
        });
    };

    // Attach click event listeners to each GPT profile
    document.querySelectorAll('.gpt-profile').forEach(profile => {
        profile.addEventListener('click', function(e) {
            // Check if the profile is part of the 'Upcoming GPTs' section
            if (this.closest('#upcoming-gpts')) {
                // Prevent default action and stop the event from propagating
                e.preventDefault();
                e.stopPropagation();
                // No further action is taken, effectively disabling the detailed view for this section
            } else {
                // Existing code to show detailed view for other sections
                e.preventDefault();
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
});
document.addEventListener('DOMContentLoaded', () => {
    // Set the timeout duration to match the CSS animation duration
    setTimeout(() => {
        const loadingBanner = document.getElementById('loadingBanner');
        if (loadingBanner) {
            // Start the fade-out transition
            loadingBanner.style.opacity = '0';
            loadingBanner.style.transition = 'opacity 0.5s ease';

            // Wait for the fade-out transition to complete before removing the banner
            setTimeout(() => {
                loadingBanner.remove(); // Removes the banner from the document
            }, 500); // This matches the duration of the opacity transition
        }
    }, 2000); // Adjust this to match the duration of your CSS animation (e.g., 2000ms for 2s)
});


