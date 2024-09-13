document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = document.querySelectorAll('.page').length;

    function showPage(pageNumber) {
        document.querySelectorAll('.page').forEach((page, index) => {
            page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
        });

        // Update button visibility
        document.getElementById('prev-btn').style.display = (pageNumber > 1) ? 'block' : 'none';
        document.getElementById('next-btn').style.display = (pageNumber < totalPages) ? 'block' : 'none';
        document.getElementById('yes-btn').style.display = (pageNumber === totalPages) ? 'block' : 'none';
        document.getElementById('no-btn').style.display = (pageNumber === totalPages) ? 'block' : 'none';
        currentPage = pageNumber;
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('yes-btn').addEventListener('click', () => {
        window.location.href = 'yes.html'; // Adjust this path as necessary
    });

    document.getElementById('no-btn').addEventListener('click', () => {
        window.location.href = 'no.html'; // Adjust this path as necessary
    });

    // Initialize the first page
    showPage(currentPage);
});

