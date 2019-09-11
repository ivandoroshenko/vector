        var date = new Date();
        var month = {
            0: 'january',
            1: 'february',
            2: 'march',
            3: 'april',
            4: 'may',
            5: 'june',
            6: 'july',
            7: 'august',
            8: 'september',
            9: 'october',
            10: 'november',
            11: 'december'
        }
        var cardDate = month[date.getMonth()] +  ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
        var cards = document.querySelectorAll('.card_date');
        cards.forEach(function(card){
            card.innerHTML = cardDate;
        });
