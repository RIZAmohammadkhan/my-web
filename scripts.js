// Function to populate and show the GPT detail view
function showGptDetailView(gptData) {
    var detailView = document.getElementById('gpt-detail-view');
    // Construct the video file name by removing spaces and adding .mp4
    var videoFileName = 'videos/'+ gptData.name.replace(/\s+/g, '') + '.mp4';
    detailView.innerHTML = `
        <div class="gpt-detail-container">
            <img src="${gptData.imgSrc}" alt="${gptData.name}" class="gpt-detail-photo">
            <h1>${gptData.name}</h1>
            <p>${gptData.description}</p>
            <video src="${videoFileName}" controls></video>
            <button id="closeDetail">Close</button>
        </div>
    `;// Function to populate and show the GPT detail view
    function showGptDetailView(gptData) {
        var detailView = document.getElementById('gpt-detail-view');
        detailView.innerHTML = `
            <div class="gpt-detail-container">
                <img src="${gptData.imgSrc}" alt="${gptData.name}" class="gpt-detail-photo">
                <h1>${gptData.name}</h1>
                <p>${gptData.description}</p>
                <h2>Usage</h2> <!-- Usage heading -->
                <video src="${gptData.videoSrc}" controls></video>
                <button id="closeDetail">Close</button>
            </div>
        `;
        detailView.style.display = 'block';
        detailView.scrollTop = 0; // Scroll to the top of the detailed view
    
        // Close detail view button
        document.getElementById('closeDetail').addEventListener('click', function() {
            detailView.style.display = 'none';
        });
    }
    
    // Attach click event listeners to each GPT profile
    document.querySelectorAll('.gpt-profile').forEach(function(profile) {
        profile.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            
            var gptName = profile.querySelector('h3').textContent;
            var formattedGptName = gptName.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and convert to lower case
    
            // Extract the relevant data attributes
            var gptData = {
                imgSrc: profile.querySelector('img').src,
                name: gptName,
                description: profile.querySelector('p').textContent,
                videoSrc: formattedGptName + '.mp4' // Construct the video path based on the GPT name
            };
    
            showGptDetailView(gptData);
        });
    });
    
    // Existing 'See More' button functionality
    document.querySelector('.more-gpts').addEventListener('click', function() {
        var hiddenGpts = document.querySelector('.hidden-gpts');
        hiddenGpts.style.display = 'flex'; // Show the hidden GPT profiles
        this.style.display = 'none'; // Hide the button
    });
    
    detailView.style.display = 'block';
    detailView.scrollTop = 0; // Scroll to the top of the detailed view

    // Close detail view button
    document.getElementById('closeDetail').addEventListener('click', function() {
        detailView.style.display = 'none';
    });
}

// Attach click event listeners to each GPT profile
document.querySelectorAll('.gpt-profile').forEach(function(profile) {
    profile.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Extract the relevant data attributes
        var gptData = {
            imgSrc: profile.querySelector('img').src,
            name: profile.querySelector('h3').textContent.trim(),
            description: profile.querySelector('p').textContent.trim(),
            // The videoSrc does not need to be set here anymore
        };

        showGptDetailView(gptData);
    });
});

// Existing 'See More' button functionality
document.querySelector('.more-gpts').addEventListener('click', function() {
    var hiddenGpts = document.querySelector('.hidden-gpts');
    hiddenGpts.style.display = 'flex'; // Show the hidden GPT profiles
    this.style.display = 'none'; // Hide the button
});
