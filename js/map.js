document.querySelectorAll('.path').forEach((el)=>{
        el.addEventListener('mouseover',()=>{
            scale = 2
            pathBoundingBox = el.getBBox();
            pathCenterX = pathBoundingBox.x + pathBoundingBox.width / 2;
            pathCenterY = pathBoundingBox.y + pathBoundingBox.height / 2;
            pathCenterXS = (489.5 - pathCenterX)*scale
            pathCenterYS = (384.5 - pathCenterY)*scale
            if(!el.classList.contains('highlight')){
                document.querySelectorAll('.path').forEach(el=>el.classList.add('highlight'))
                el.classList.remove('highlight')
                document.querySelector('#svgContainer svg').animate({
                        transform: 'translate(' + pathCenterXS + 'px,' + pathCenterYS + 'px) scale(' + scale + ')'
                    }, 400, "linear"
                );
                setTimeout(() => {
                    document.querySelector('#svgContainer svg').setAttribute('transform', 'translate(' + pathCenterXS + ',' + pathCenterYS + ') scale(' + scale + ')')
                }, 390)
            }
        })
        el.addEventListener('mouseout',()=>{
            document.querySelectorAll('.path').forEach(el=>el.classList.remove('highlight'))
            document.querySelector('#svgContainer svg').animate({
                    transform: 'translate(0px,0px) scale(1)'
                }, 400, "linear"
            );
            setTimeout(() => {
                document.querySelector('#svgContainer svg').setAttribute('transform', 'translate(0,0) scale(1)')
            }, 390)
        })
        el.addEventListener('click',()=>{
           var elems =  document.getElementById('map-main');
           elems.classList.add('hide');
           var elems2 =  document.getElementById('mapwrap');
           elems2.classList.remove('hide');
        });
})

document.addEventListener('mousemove', (event) => {
    document.querySelectorAll('.svgIco').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const isMouseOver = (
            mouseX >= rect.left &&
            mouseY >= rect.top &&
            mouseX <= rect.right &&
            mouseY <= rect.bottom
        );

        if (isMouseOver && !el.hasAttribute('data-mouseover')) {
            console.log('Mouseover event');
            el.setAttribute('data-mouseover', 'true');
        } else if (!isMouseOver && el.hasAttribute('data-mouseover')) {
            console.log('Mouseout event');
            el.removeAttribute('data-mouseover');
        }
    });
});

  