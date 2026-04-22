function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById('page-' + pageId);
    selectedPage.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Log initial message
console.log("Kanishka Beauty Boutique - Storefront Initialized.");
