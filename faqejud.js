document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');
            const faqItem = question.parentElement;

            document.querySelectorAll('.faq-item.expanded').forEach(openItem => {
                if (openItem !== faqItem) {
                    openItem.querySelector('.faq-answer').style.maxHeight = null;
                    openItem.querySelector('.arrow').classList.remove('rotate');
                    openItem.classList.add('collapsed');

                    setTimeout(() => {
                        openItem.classList.remove('expanded');
                    }, 500);
                }
            });

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                arrow.classList.remove('rotate');
                faqItem.classList.add('collapsed');

                setTimeout(() => {
                    faqItem.classList.remove('expanded');
                }, 500); 
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                arrow.classList.add('rotate');
                faqItem.classList.remove('collapsed');
                faqItem.classList.add('expanded');
            }
        });
    });


    document.addEventListener('click', function(event) {
        if (!event.target.closest('.faq-item')) {
            document.querySelectorAll('.faq-item.expanded').forEach(faqItem => {
                faqItem.querySelector('.faq-answer').style.maxHeight = null;
                faqItem.querySelector('.arrow').classList.remove('rotate');
                faqItem.classList.add('collapsed');

                setTimeout(() => {
                    faqItem.classList.remove('expanded');
                }, 500);
            });
        }
    });