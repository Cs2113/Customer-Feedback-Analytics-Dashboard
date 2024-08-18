const feedbackData = [0, 0, 0, 0, 0];

const ctx = document.getElementById('feedbackChart').getContext('2d');
const feedbackChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [{
            label: 'Number of Responses',
            data: feedbackData,
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#cc65fe',
                '#ffce56',
                '#4bc0c0'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 500,
            easing: 'easeOutBounce'
        }
    }
});

document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const feedbackValue = parseInt(document.getElementById('feedback').value);

    if (feedbackValue < 1 || feedbackValue > 5) {
        alert('Please provide a rating between 1 and 5.');
        return;
    }

    feedbackData[feedbackValue - 1]++;
    feedbackChart.update();

    // Clear form
    document.getElementById('feedbackForm').reset();
});
