$(document).ready(function () {
    function slider() {
        const sliderAdd = $('.slider') // Слайдер
        const sliderPrevElem = sliderAdd.find('.slider-panel__prev') // Предыдущий слайд
        const sliderNextElem = sliderAdd.find('.slider-panel__next') // Следующий слайд
        if(sliderAdd.find('.slider-item').length <= 2) {
            sliderAdd.find('.slider-panel').remove();
            sliderAdd.find('.slider-item').removeClass('prev');
            sliderAdd.find('.slider-item').removeClass('next');
            sliderAdd.find('.slider-item').removeClass('current');
            sliderAdd.find('.slider-item').addClass('show')
        } if (sliderAdd.find('.slider-item').length >= 5) {
            sliderAdd.find('.slider-item').first().addClass('current');
            sliderAdd.find('.slider-item').eq(1).addClass('next');
            sliderAdd.find('.slider-item.next').next().addClass('next-next');
            sliderAdd.find('.slider-item').last().addClass('prev');
            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
            sliderNext();
            sliderPrev();
            sliderNextNext();
            sliderPrevPrev();
        } else {
            sliderAdd.find('.slider-item').first().addClass('current');
            sliderAdd.find('.slider-item').eq(1).addClass('next');
            sliderAdd.find('.slider-item').last().addClass('prev');
            sliderNext();
            sliderPrev();
        }

        function sliderNext() {
            sliderNextElem.click(function() {
                if(sliderAdd.find('.slider-item.next').next().length == 0) {
                    //Переносим next на 1 слайд
                    sliderAdd.find('.slider-item').first().addClass('next');
                    sliderAdd.find('.slider-item').last().removeClass('next');
                    // Переносим current на последний слайд
                    sliderAdd.find('.slider-item.current').next().addClass('current');
                    sliderAdd.find('.slider-item.current').prev().removeClass('current');
                    // Переносим prev за current
                    sliderAdd.find('.slider-item.prev').next().addClass('prev');
                    sliderAdd.find('.slider-item.prev').prev().removeClass('prev');

                } else {
                    sliderAdd.find('.slider-item.next').next().addClass('next');
                    sliderAdd.find('.slider-item.next').prev().removeClass('next');
    
                    //Если current последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.current').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('current');
                        sliderAdd.find('.slider-item').last().removeClass('current');
                    } else {
                        sliderAdd.find('.slider-item.current').next().addClass('current');
                        sliderAdd.find('.slider-item.current').prev().removeClass('current');
                    }
                    //Если prev последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.prev').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('prev');
                        sliderAdd.find('.slider-item').last().removeClass('prev');
                    } else {
                        sliderAdd.find('.slider-item.prev').next().addClass('prev');
                        sliderAdd.find('.slider-item.prev').prev().removeClass('prev');
                    }
                }
            })
        }
        
        function sliderPrev() {
            sliderPrevElem.click(function() {
                if(sliderAdd.find('.slider-item.prev').prev().length == 0) {
                    //Переносим prev на последний слайд
                    sliderAdd.find('.slider-item').last().addClass('prev');
                    sliderAdd.find('.slider-item').first().removeClass('prev');
                    // Переносим current на 1 слайд
                    sliderAdd.find('.slider-item.current').prev().addClass('current');
                    sliderAdd.find('.slider-item.current').next().removeClass('current');
                    // Переносим next за current
                    sliderAdd.find('.slider-item.next').prev().addClass('next');
                    sliderAdd.find('.slider-item.next').next().removeClass('next');

                } else {
                    sliderAdd.find('.slider-item.prev').prev().addClass('prev');
                    sliderAdd.find('.slider-item.prev').next().removeClass('prev');
                    //Если current 1 переносим на последний слайд
                    if(sliderAdd.find('.slider-item.current').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('current');
                        sliderAdd.find('.slider-item').first().removeClass('current');
                    } else {
                        sliderAdd.find('.slider-item.current').prev().addClass('current');
                        sliderAdd.find('.slider-item.current').next().removeClass('current');
                    }

                    if(sliderAdd.find('.slider-item.next').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('next');
                        sliderAdd.find('.slider-item').first().removeClass('next');
                    } else {
                        sliderAdd.find('.slider-item.next').prev().addClass('next');
                        sliderAdd.find('.slider-item.next').next().removeClass('next');
                    }
                }
            })
        }
        ///////
        function sliderNextNext() {
            sliderNextElem.click(function() {
                if(sliderAdd.find('.slider-item.next-next').next().length == 0) {
                    //Переносим next на 1 слайд
                    sliderAdd.find('.slider-item').first().addClass('next-next');
                    sliderAdd.find('.slider-item').last().removeClass('next-next');
                    // Переносим prev за current
                    sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                    sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');

                } else {
                    sliderAdd.find('.slider-item.next-next').next().addClass('next-next');
                    sliderAdd.find('.slider-item.next-next').prev().removeClass('next-next');
                    //Если prev последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.prev-prev').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('prev-prev');
                        sliderAdd.find('.slider-item').last().removeClass('prev-prev');
                    } else {
                        sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                        sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');
                    }
                }
            })
        }
        function sliderPrevPrev() {
            sliderPrevElem.click(function() {
                if(sliderAdd.find('.slider-item.prev-prev').prev().length == 0) {
                    //Переносим prev на последний слайд
                    sliderAdd.find('.slider-item').last().addClass('prev-prev');
                    sliderAdd.find('.slider-item').first().removeClass('prev-prev');
                    // Переносим next за current
                    sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                    sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');

                } else {
                    sliderAdd.find('.slider-item.prev-prev').prev().addClass('prev-prev');
                    sliderAdd.find('.slider-item.prev-prev').next().removeClass('prev-prev');

                    if(sliderAdd.find('.slider-item.next-next').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('next-next');
                        sliderAdd.find('.slider-item').first().removeClass('next-next');
                    } else {
                        sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                        sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');
                    }
                }
            })
        }
        
        
    }
    slider()
})