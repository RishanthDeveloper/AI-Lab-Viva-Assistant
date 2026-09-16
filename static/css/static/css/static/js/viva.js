const ctx = document
    .getElementById("performanceChart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "Aug 20",
            "Aug 24",
            "Aug 28",
            "Sep 2",
            "Sep 6",
            "Sep 10",
            "Sep 15"
        ],

        datasets: [{

            label: "Viva Score",

            data: [
                62,
                68,
                65,
                74,
                78,
                82,
                87
            ],

            borderWidth: 3,

            tension: .4,

            fill: true,

            backgroundColor:
                "rgba(124,92,255,.08)",

            borderColor:
                "#8b78ff",

            pointRadius: 4,

            pointBackgroundColor:
                "#8b78ff"

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            y: {

                min: 40,
                max: 100,

                grid: {
                    color: "#202735"
                },

                ticks: {
                    color: "#6f798d"
                }

            },

            x: {

                grid: {
                    display: false
                },

                ticks: {
                    color: "#6f798d"
                }

            }

        }

    }

});


function startViva() {

    window.location.href =
        "/student/viva";

}
