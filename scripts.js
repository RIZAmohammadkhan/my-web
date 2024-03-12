document.addEventListener('DOMContentLoaded', () => {
    // Function to populate and show the GPT detail view with animation
    const showGptDetailView = (gptData) => {
        const detailView = document.getElementById('gpt-detail-view');
        detailView.innerHTML = `
            <div class="gpt-detail-container">
                <h1>${gptData.name}</h1>
                <hr>
                <p>${gptData.detailed}<hr><br>Just pin the GPT and call by using @${gptData.name} in any chat</p>
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
        detailView.style.transform = 'translate(-50%, -60%)';
        // Trigger the animation after a short delay
        setTimeout(() => {
            detailView.style.opacity = '1';
            detailView.style.transform = 'translate(-50%, -50%)';
        }, 10);

        // Event listener for closing the detail view with animation
        document.getElementById('closeDetail').addEventListener('click', () => {
            // Pause the video when the detail view is closed
            const video = detailView.querySelector('video');
            if (video) video.pause();
            
            detailView.style.opacity = '0';
            detailView.style.transform = 'translate(-50%, -60%)'; // Move up on close
            setTimeout(() => {
                detailView.style.display = 'none';
            }, 500); // Ensure this matches the CSS transition duration
        });
    };

    // Function to handle GPT profile clicks
    const handleGptProfileClick = (e) => {
        e.preventDefault(); // Prevent default action

        const gptData = {
            imgSrc: e.currentTarget.querySelector('img').src,
            name: e.currentTarget.querySelector('h3').textContent.trim(),
            description: e.currentTarget.querySelector('p').textContent.trim(),
            detailed: e.currentTarget.getAttribute('data-detailed'),
            tryNowLink: e.currentTarget.getAttribute('data-try-now-link'),
            videoSrc: `videos/${e.currentTarget.querySelector('h3').textContent.trim()}.mp4`
        };
        showGptDetailView(gptData);
    };

    // Attach click event listeners to each GPT profile, excluding 'Upcoming GPTs'
    document.querySelectorAll('.profile-container .gpt-profile').forEach(profile => {
        if (!profile.closest('#upcoming-gpts')) {
            profile.addEventListener('click', handleGptProfileClick);
        }
    });

    // Hide the loading banner after a delay
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
