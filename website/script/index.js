// Fetch the view count from Lambda function URL
async function fetchViewCount() {
    try {
        const response = await fetch('https://tsuxgmgnfo4ytvanl4cwdubay40hbhbh.lambda-url.us-east-1.on.aws/');
        const data = await response.json();

        // Update the view count on the HTML page
        var displayCounter = document.getElementById('viewCount');
        displayCounter.innerHTML = data;
    } catch (error) {
        console.error('Error fetching view count:', error);
    }
} 

// Call the function to fetch and display the view count
fetchViewCount();



/*  -- Debugging Code Below --

async function fetchViewCount() {
    try {
        console.log('Fetching view count...');
        const response = await fetch('https://tsuxgmgnfo4ytvanl4cwdubay40hbhbh.lambda-url.us-east-1.on.aws/');
        console.log('Response:', response);

        const data = await response.json();
        console.log('Received data:', data);
        
        // Update the view count on the HTML page
        var test = document.getElementById('viewCount');
        test.innerHTML = data;
    } catch (error) {
        console.error('Error fetching view count:', error);
    }
}

// Call the function to fetch and display the view count
fetchViewCount(); */


