document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot functionality
    initChatbot();
});

function initChatbot() {
    // Get all chatbot containers in the page
    const chatbotContainers = document.querySelectorAll('.chatbot-container');
    
    chatbotContainers.forEach(container => {
        const header = container.querySelector('.chatbot-header');
        const closeIcon = container.querySelector('.chatbot-header i.fa-times');
        
        // Add chat icon for collapsed state
        const chatIcon = document.createElement('i');
        chatIcon.className = 'fas fa-comment-alt chatbot-toggle-icon';
        header.appendChild(chatIcon);
        
        // Handle close button click
        if (closeIcon) {
            closeIcon.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent header click from triggering
                toggleChatbot(container, true); // Force collapse
            });
        }
        
        // Handle header click (for expanding collapsed chatbot)
        header.addEventListener('click', function() {
            if (container.classList.contains('collapsed')) {
                toggleChatbot(container, false); // Force expand
            }
        });
    });
}

function toggleChatbot(chatbotContainer, forceCollapse = null) {
    // If forceCollapse is provided, use that value, otherwise toggle
    const shouldCollapse = forceCollapse !== null 
        ? forceCollapse 
        : !chatbotContainer.classList.contains('collapsed');
    
    if (shouldCollapse) {
        chatbotContainer.classList.add('collapsed');
    } else {
        chatbotContainer.classList.remove('collapsed');
    }
} 