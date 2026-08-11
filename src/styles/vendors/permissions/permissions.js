// Global permission handling with MutationObserver for dynamic content
(function () {
    
    $(document).on('click', '.permission-group-header', function () {
        const icon = $(this).find('.toggle-icon');
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        // Update icon based on current state
        icon.toggleClass('fa-chevron-down', !isExpanded)
            .toggleClass('fa-chevron-right', isExpanded);

        // Update hover effects
        $(this).toggleClass('hover-effect', !isExpanded);
    });

    // Initialize permission groups with proper states
    function initPermissionGroups() {
        $('.permissions-container').each(function () {
            const container = $(this);

            // Initialize each permission group header
            container.find('.permission-group-header').each(function () {
                const header = $(this);
                const isExpanded = header.attr('aria-expanded') === 'true';
                const icon = header.find('.toggle-icon');

                // Set initial icon state
                icon.toggleClass('fa-chevron-down', isExpanded)
                    .toggleClass('fa-chevron-right', !isExpanded);
            });

            // Expand first group by default if none are expanded
            if (container.find('.permission-group-header[aria-expanded="true"]').length === 0) {
                container.find('.permission-group-header').first()
                    .attr('aria-expanded', 'true')
                    .find('.toggle-icon')
                    .addClass('fa-chevron-down')
                    .removeClass('fa-chevron-right');
            }
        });
    }

    // Initialize on page load
    $(document).ready(function () {
        initPermissionGroups();

        // Set up MutationObserver to watch for dynamically added content
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if ($(mutation.addedNodes).find('.permissions-container').length ||
                    $(mutation.target).hasClass('permissions-container')) {
                    initPermissionGroups();
                }
            });
        });

        // Start observing the document body for added nodes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

    // Make init function available globally
    window.initPermissionGroups = initPermissionGroups;
})();