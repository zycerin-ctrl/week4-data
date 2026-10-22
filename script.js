Papa.parse('cpih_annual_1989_2025.csv', {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        console.log("CSV loaded successfully");
        console.log(results.data);

        const tbody =
            document.querySelector('#dataTable tbody');

        results.data.forEach(row => {

            const tr =
                document.createElement('tr');

            tr.innerHTML = `
                <td>${row.Year}</td>
                <td>${row.CPIHAnnualRate}</td>
            `;

            tbody.appendChild(tr);

        });

    },

    error: function(err) {

        console.error("FAILED");
        console.error(err);

    }

});
