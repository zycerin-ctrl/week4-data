Papa.parse('CPIH ANNUAL RATE 1989–2025.csv', {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        console.log("CSV loaded successfully");
        console.log(results.data);

        const tbody = document.querySelector('#dataTable tbody');

        const years = [];
        const rates = [];

        results.data.forEach(row => {

            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${row.Year}</td>
                <td>${row.CPIHAnnualRate}</td>
            `;

            tbody.appendChild(tr);

            years.push(row.Year);
            rates.push(Number(row.CPIHAnnualRate));

        });

        new Chart(
            document.getElementById('inflationChart'),
            {
                type: 'line',

                data: {
                    labels: years,

                    datasets: [{
                        label: 'CPIH Annual Rate (%)',
                        data: rates
                    }]
                },

                options: {

                    responsive: true,
                    maintainAspectRatio: false,

                    scales: {

                        x: {
                            title: {
                                display: true,
                                text: 'Year'
                            }
                        },

                        y: {
                            beginAtZero: true,

                            title: {
                                display: true,
                                text: 'CPIH Annual Rate (%)'
                            }
                        }

                    }

                }

            }
        );

    },

    error: function(err) {

        console.error("CSV FAILED TO LOAD");
        console.error(err);

    }

});
